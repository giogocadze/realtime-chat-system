"use client"
import { auth } from "@/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";
import SignIn from "./components/SignIn";
import ChatApp from "./components/ChatApp";

export default function Home() {

  const [user, setUser] = useState<User | null>(null)


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser)
    })
    return () => unsubscribe();
  }, [])

  return (
    <div>
      {
        user ? <ChatApp /> : <SignIn />
      }
    </div>
  );
}
