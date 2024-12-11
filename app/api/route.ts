import pool from '../../db'

// $ curl -X POST http://localhost:3000/api 
// -H "Content-Type: application/json" 
// -d '{"test": "This is a test string"}'
export async function POST(req: Request) {
    const message = await req.json()
    return new Response(JSON.stringify({ message }), {
        headers: {
            'Content-Type': 'application/json',
        },
        status: 201,
    });
}

// $ curl -X GET http://localhost:3000/api 
// -H "Content-Type: application/json" 
export async function GET() {
    try {
        const result = await pool.query('SELECT * FROM messages')
        return new Response(JSON.stringify(result.rows), {
            headers: {
                'Content-Type': 'application/json',
            },
            status: 200, 
        });
    } catch (error) {
        console.error("Error during query: ", error)
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            headers: {
                'Content-Type': 'application/json',
            },
            status: 500,
        });
    }
}
