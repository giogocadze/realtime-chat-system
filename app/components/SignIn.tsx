import { auth } from "@/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"


const SignIn = () => {

    const HandleSignIn = async () => {
        try {
            const provider = new GoogleAuthProvider;
            await signInWithPopup(auth, provider)
        } catch (e) {
            console.error(e)
        }
    }
    return (
        <div className="flex flex-col items-center">
            <button className="rounded-full border px-4 py-2 cursor-pointer" onClick={HandleSignIn} >
                Sing in with Google
            </button>
        </div>
    )
}

export default SignIn
