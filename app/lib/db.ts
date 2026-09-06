import postgres from 'postgres'

const connectionString = process.env.DATABASE_URL

if (!connectionString) {
    throw new Error('DATABASE_URL is missing from environment variables.')
}

export const sql = postgres(connectionString, {
    ssl: { rejectUnauthorized: false },
})