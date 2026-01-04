"use client"

import { db } from "@/firebase"
import { collection, onSnapshot, orderBy, query, Timestamp } from "firebase/firestore"
import { useEffect, useRef, useState } from "react"
import MessageS from "./Message"

export type Message = {
  id: string
  message: string
  userEmail: string
  userPicture: string
  userName: string
  date: Timestamp
}

const ChatContainer = () => {
  const bottomRef = useRef<HTMLDivElement | null>(null)
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("date", "asc")
    )

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs: Message[] = snapshot.docs.map((doc) => {
        const data = doc.data() as Omit<Message, "id">

        return {
          id: doc.id,
          ...data,
        }
      })

      setMessages(msgs)
    })

    return () => unsubscribe()
  }, [])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div className="border w-full h-125 p-4 rounded-3xl flex flex-col gap-2 overflow-y-scroll">
      {messages.map((msg) => (
        <MessageS key={msg.id} message={msg} />
      ))}
      <div ref={bottomRef} />
    </div>
  )
}

export default ChatContainer
