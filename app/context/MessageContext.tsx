"use client"
import { createContext, useContext, useState } from "react";
import { MessageContextType } from "../types/message";

const MessageContext = createContext<MessageContextType|null>(null);

export default function MessageProvider({ children }) {
    const [text, setText] = useState("");

    return (
        <MessageContext.Provider value={{ text, setText }}>
            {children}
        </MessageContext.Provider>
    );
}

