"use client"
import { useEffect, useState } from "react"
import { Messages } from "./ChatContainer"
import Image from "next/image"
import { auth } from "@/firebase"
import { User, onAuthStateChanged } from "firebase/auth"


const MessageS = ({ message }: { message: Messages }) => {

  const [user, setUser] = useState<User | null>(null)


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser)
    })
    return () => unsubscribe();
  }, [])

  const isUserOwnerOfMessage = user?.email === message.userEmail
  return (
    <div className={`flex gap-1 items-center ${isUserOwnerOfMessage && `flex-row-reverse`}`} >
      <Image
        src={message.userPicture}
        width={30}
        height={30}
        alt={message.userName}
      />
      <div className="flex flex-col ">
        <span>
          {message.message}
        </span>
        <span className="text-gray-500 text-sm">
          {message?.date?.toDate().toLocaleString()}
        </span>
      </div>
    </div >
  )
}

export default MessageS
