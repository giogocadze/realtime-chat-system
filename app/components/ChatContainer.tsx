"use client"

import { db } from "@/firebase"
import { collection, onSnapshot, orderBy, query, Timestamp } from "firebase/firestore"
import { useEffect, useState } from "react"
import MessageS from "./Message"
export type Messages = {
    id: string
    message: string,
    userEmail: string,
    userPicture: string,
    userName: string,
    date: Timestamp;
}
const ChatContainer = () => {

    const [messages, setMessages] = useState<Messages[]>([])
    useEffect(() => {
        const que = query(collection(db, "messages"), orderBy("date", "asc"));
        const unsubcribe = onSnapshot(que, (snapshot) => {
            const msg = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            })) as Messages[]
            setMessages(msg)
        })
        return () => unsubcribe()
    }, [])
    return (
        <div className="border w-full h-125 p-4 rounded-3xl flex flex-col gap-2 " >
            {messages.map((messages) => <MessageS  key={messages.id} message={messages} />)}
        </div>
    )
}

export default ChatContainer
