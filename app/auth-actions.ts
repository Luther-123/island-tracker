'use server'

import { sql } from './lib/db'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function signUp(formData: FormData) {
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const name = formData.get('name') as string

    if (!email || !password || !name) return

    const users = await sql`
      INSERT INTO users (email, password_hash, display_name) 
      VALUES (${email}, ${password}, ${name}) 
      RETURNING id
    `
    const userId = users[0].id

    await sql`
      INSERT INTO islands (user_id, name, hemisphere, player_name) 
      VALUES (${userId}, 'Melody Isle', 'Northern', ${name})
    `

    const cookieStore = await cookies()
    cookieStore.set('user_id', userId.toString(), { httpOnly: true, secure: true })
    redirect('/')
}

export async function login(formData: FormData) {
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const users = await sql`
      SELECT * FROM users WHERE email = ${email} AND password_hash = ${password}
    `

    if (users.length === 0) {
        throw new Error('Invalid email or password')
    }

    const cookieStore = await cookies()
    cookieStore.set('user_id', users[0].id.toString(), { httpOnly: true, secure: true })
    redirect('/')
}

export async function logout() {
    const cookieStore = await cookies()
    cookieStore.delete('user_id')
    redirect('/login')
}