'use server'

import { sql } from './lib/db'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function signUp(formData: FormData) {
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    try {
        // Check if user already exists
        const existing = await sql`SELECT id FROM users WHERE email = ${email}`
        if (existing.length > 0) {
            throw new Error('An account with this email already exists.')
        }

        // Insert new user into Neon database
        const users = await sql`
            INSERT INTO users (display_name, email, password_hash) 
            VALUES (${name}, ${email}, ${password}) 
            RETURNING id, display_name
        `
        const user = users[0]

        // Set session cookie
        const cookieStore = await cookies()
        cookieStore.set('user_id', user.id.toString(), {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            path: '/',
            maxAge: 60 * 60 * 24 * 7 // 1 week
        })
    } catch (error: any) {
        console.error('Signup error:', error)
        throw new Error(error.message || 'Database registration failed.')
    }

    redirect('/')
}

export async function login(formData: FormData) {
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    try {
        const users = await sql`SELECT * FROM users WHERE email = ${email}`
        const user = users[0]

        if (!user || user.password_hash !== password) {
            throw new Error('Invalid email or password.')
        }

        const cookieStore = await cookies()
        cookieStore.set('user_id', user.id.toString(), {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            path: '/',
            maxAge: 60 * 60 * 24 * 7 // 1 week
        })
    } catch (error: any) {
        console.error('Login error:', error)
        throw new Error(error.message || 'Login failed.')
    }

    redirect('/')
}

export async function logout() {
    const cookieStore = await cookies()
    cookieStore.delete('user_id')
    redirect('/login')
}