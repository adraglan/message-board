import {messages} from '../data/messages'


// $ curl -X POST http://localhost:3000/api 
// -H "Content-Type: application/json" 
// -d '{"test": "This is a test string"}'
export async function POST(request: Request) {
    const message = await request.json()
    return new Response(JSON.stringify({ message }), {
        headers: {
            'Content-Type': 'application/json',
        },
        status: 201,
    });
}

// $ curl -X GET http://localhost:3000/api 
// -H "Content-Type: application/json" 
export async function GET(request: Request) {
    return Response.json(messages)
}