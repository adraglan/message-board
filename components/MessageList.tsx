import { Message } from "../app/types/message";

const MessageList = async () => {
    try {
        const res = await fetch('http://localhost:3000/api')
        const messageData: Message[] = await res.json()
        return (
            <ul>
                {messageData.map((m, index) => (
                    <li key={index}>{m.username}, {m.message}</li>
                ))}
            </ul>
        )
    } catch (error) {
        console.error('Error fetching messages:', error)
        return <p>Failed to load messages.</p>
    }
}


export default MessageList;
