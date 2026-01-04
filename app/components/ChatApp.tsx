"use client"

import { auth, db } from "@/firebase"
import { signOut, User } from "firebase/auth"
import ChatContainer from "./ChatContainer"
import { useState } from "react"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"


const ChatApp = ({user} : {user: User}) => {

    const [inputText, setInputText] = useState("")
    const [Loading, setLoading] = useState(false)


    const HandleSingOut = async () => {
        await signOut(auth)
    }
    const handleSendMassage = async () => {


        try {
            setLoading(true)
            await addDoc(collection(db, "messages"), {
                message: inputText,
                userEmail: user.email,
                userPicture: user.photoURL,
                userName: user.displayName,
                date : serverTimestamp()
            })
            setInputText("")
        } catch (e) {
            console.error(e)
        }
        finally {
            setLoading(false)
        }
    }
    return (
        <div className="flex flex-col gap-2  mx-auto max-w-7xl  items-center" >
            <ChatContainer />
            <div className="w-100 border flex " >
                <input type="text" placeholder="Type Here" className="w-full px-4 py-2" value={inputText} onChange={(e) => setInputText(e.target.value)} />
                <button className="px-4 py-2 bg-indigo-700 text-white cursor-pointer disabled:bg-gray-500  disabled:cursor-not-allowed"  onClick={handleSendMassage}  disabled={Loading}>Send</button>
            </div>
            <button className="rounded-full border px-4 py-2 cursor-pointer w-fit" onClick={HandleSingOut} >
                Sing Out
            </button>
        </div>
    )
}

export default ChatApp
