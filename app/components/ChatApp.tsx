import { auth } from "@/firebase"
import { signOut } from "firebase/auth"


const ChatApp = () => {
    const HandleSingOut = async () => {
        await signOut(auth)
    }
    return (
        <div className="flex flex-col items-center" >
            <button className="rounded-full border px-4 py-2 cursor-pointer" onClick={HandleSingOut} >
                Sing Out
            </button>
        </div>
    )
}

export default ChatApp
