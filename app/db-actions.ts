'use server'

import { sql } from './lib/db'
import { revalidatePath } from 'next/cache'

// Tasks & Collections
export async function updateTaskProgress(taskId: number, current: number, target: number) {
    const nextCurrent = current >= target ? 0 : current + 1
    await sql`UPDATE tasks SET current = ${nextCurrent} WHERE id = ${taskId}`
    revalidatePath('/')
}

export async function deleteTask(taskId: number) {
    await sql`DELETE FROM tasks WHERE id = ${taskId}`
    revalidatePath('/')
}

export async function toggleCollectionStatus(collectionId: number, currentStatus: boolean) {
    const nextStatus = !currentStatus
    await sql`UPDATE collections SET collected = ${nextStatus} WHERE id = ${collectionId}`
    revalidatePath('/')
}

export async function addCollectionItem(islandId: number, category: string, name: string) {
    await sql`
        INSERT INTO collections (island_id, category, name, collected) 
        VALUES (${islandId}, ${category}, ${name}, false)
    `
    revalidatePath('/')
}

export async function deleteCollectionItem(collectionId: number) {
    await sql`DELETE FROM collections WHERE id = ${collectionId}`
    revalidatePath('/')
}

// Residents
export async function addResident(islandId: number, name: string, species: string, personality: string) {
    await sql`
        INSERT INTO residents (island_id, name, species, personality) 
        VALUES (${islandId}, ${name}, ${species}, ${personality})
    `
    revalidatePath('/')
}

export async function deleteResident(residentId: number) {
    await sql`DELETE FROM residents WHERE id = ${residentId}`
    revalidatePath('/')
}

// Notes
export async function addIslandNote(islandId: number, title: string, content: string) {
    await sql`
        INSERT INTO notes (island_id, title, content) 
        VALUES (${islandId}, ${title}, ${content})
    `
    revalidatePath('/')
}

export async function deleteNote(noteId: number) {
    await sql`DELETE FROM notes WHERE id = ${noteId}`
    revalidatePath('/')
}
export async function addGalleryPhoto(islandId: number, title: string, tag: string, url: string) {
    const dateStr = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
    await sql`
        INSERT INTO gallery (island_id, title, date, tag, url) 
        VALUES (${islandId}, ${title}, ${dateStr}, ${tag}, ${url})
    `
    revalidatePath('/')
}

export async function deleteGalleryPhoto(photoId: number) {
    await sql`DELETE FROM gallery WHERE id = ${photoId}`
    revalidatePath('/')
}
export async function addNote(islandId: number, formData: FormData) {
    const title = formData.get('title') as string
    const content = formData.get('content') as string

    await sql`
        INSERT INTO notes (island_id, title, content) 
        VALUES (${islandId}, ${title}, ${content})
    `
    revalidatePath('/')
}