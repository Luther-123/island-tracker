import React from 'react'
import { sql } from './lib/db'
import DashboardContent from './components/DashboardContent'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function IslandDashboard() {
    const cookieStore = await cookies()
    const userId = cookieStore.get('user_id')?.value

    if (!userId) {
        redirect('/login')
    }

    const users = await sql`SELECT * FROM users WHERE id = ${userId}`
    const user = users[0]

    if (!user) {
        redirect('/login')
    }

    let islands = await sql`SELECT * FROM islands WHERE user_id = ${userId} LIMIT 1`
    let island = islands[0]

    if (!island) {
        const insertedIslands = await sql`
      INSERT INTO islands (user_id, name, hemisphere, player_name) 
      VALUES (${userId}, 'Melody Isle', 'Northern', ${user.display_name}) 
      RETURNING *
    `
        island = insertedIslands[0]

        await sql`
      INSERT INTO tasks (island_id, title, category, target, current) VALUES 
      (${island.id}, 'Check for fossil spots', 'Daily', 1, 0),
      (${island.id}, 'Craft hot item of the day', 'Daily', 1, 0),
      (${island.id}, 'Hit all daily rocks', 'Daily', 6, 6)
    `
        await sql`
      INSERT INTO collections (island_id, category, name, collected) VALUES 
      (${island.id}, 'Insects', 'Atlas Moth', true),
      (${island.id}, 'Fish', 'Coelacanth', false)
    `
        await sql`
      INSERT INTO residents (island_id, name, species, personality) VALUES 
      (${island.id}, 'Marshal', 'Squirrel', 'Smug'),
      (${island.id}, 'Sherb', 'Goat', 'Lazy')
    `
        await sql`
      INSERT INTO notes (island_id, title, content) VALUES 
      (${island.id}, 'Flower Breeding', 'Red + Yellow roses make orange roses on the perimeter path.')
    `
    }

    const tasks = await sql`SELECT * FROM tasks WHERE island_id = ${island.id}`
    const collections = await sql`SELECT * FROM collections WHERE island_id = ${island.id}`
    const residents = await sql`SELECT * FROM residents WHERE island_id = ${island.id}`
    const notes = await sql`SELECT * FROM notes WHERE island_id = ${island.id}`
    const gallery = await sql`SELECT * FROM gallery WHERE island_id = ${island.id} ORDER BY id DESC`

    return (
        <DashboardContent
            user={user}
            island={island}
            tasks={tasks}
            collections={collections}
            residents={residents}
            notes={notes}
        />
    )
}