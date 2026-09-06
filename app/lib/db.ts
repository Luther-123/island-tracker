import postgres from 'postgres'

const connectionString = process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/postgres'

export const sql = postgres(connectionString, {
    ssl: { rejectUnauthorized: false },
})