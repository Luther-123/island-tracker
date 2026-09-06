'use server'

import { sql } from './lib/db'
import { revalidatePath } from 'next/cache'

export async function toggleTaskCompletion(taskId: number, currentStatus: boolean) {
    await sql`
    UPDATE tasks 
    SET completed = ${!currentStatus} 
    WHERE id = ${taskId}
  `
    revalidatePath('/')
}

export async function toggleCollectionStatus(collectionId: number, currentStatus: boolean) {
    await sql`
    UPDATE collections 
    SET collected = ${!currentStatus} 
    WHERE id = ${collectionId}
  `
    revalidatePath('/')
}

export async function addTask(islandId: number, formData: FormData) {
    const title = formData.get('title') as string
    const category = (formData.get('category') as string) || 'Daily'
    const target = parseInt((formData.get('target') as string) || '1', 10)

    if (!title) return

    await sql`
      INSERT INTO tasks (island_id, title, category, target, current) 
      VALUES (${islandId}, ${title}, ${category}, ${target}, 0)
    `
    revalidatePath('/')
}

export async function addResident(islandId: number, formData: FormData) {
    const name = formData.get('name') as string
    const species = formData.get('species') as string
    const personality = formData.get('personality') as string

    if (!name) return

    await sql`
    INSERT INTO residents (island_id, name, species, personality) 
    VALUES (${islandId}, ${name}, ${species}, ${personality})
  `
    revalidatePath('/')
}
export async function deleteResident(residentId: number) {
    await sql`
      DELETE FROM residents 
      WHERE id = ${residentId}
    `
    revalidatePath('/')
}
export async function addNote(islandId: number, formData: FormData) {
    const title = formData.get('title') as string
    const content = formData.get('content') as string

    if (!title) return

    await sql`
      INSERT INTO notes (island_id, title, content) 
      VALUES (${islandId}, ${title}, ${content})
    `
    revalidatePath('/')
}

export async function deleteNote(noteId: number) {
    await sql`
      DELETE FROM notes 
      WHERE id = ${noteId}
    `
    revalidatePath('/')
}
export async function deleteTask(taskId: number) {
    await sql`
      DELETE FROM tasks 
      WHERE id = ${taskId}
    `
    revalidatePath('/')
}
export async function toggleCollection(collectionId: number, collected: boolean) {
    await sql`
      UPDATE collections 
      SET collected = ${collected} 
      WHERE id = ${collectionId}
    `
    revalidatePath('/')
}

export async function deleteCollection(collectionId: number) {
    await sql`
      DELETE FROM collections 
      WHERE id = ${collectionId}
    `
    revalidatePath('/')
}
export async function toggleTask(taskId: number, current: number, target: number) {
    const newCurrent = current >= target ? 0 : target
    await sql`
      UPDATE tasks 
      SET current = ${newCurrent} 
      WHERE id = ${taskId}
    `
    revalidatePath('/')
}
