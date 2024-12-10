"use client"
import React, { useEffect, useState } from "react";
import { Message } from "../app/types/message";


const MessageList = () => {
    const [messages, setMessages] = useState<Message[]>([])

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                let data = await fetch('http://localhost:3000/api')
                let messageData = await data.json()
                setMessages(messageData)
            } catch (error) {
                console.error('Error fetching messages', error)
            }
        }

        fetchMessages()
    }, [])

    return (
        <ul>
            {messages.map((m, index) => (
                <li key={index}>{m.username}, {m.message}</li>
            ))}
        </ul>
    )
}

export default MessageList