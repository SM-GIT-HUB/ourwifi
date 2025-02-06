'use client'

import { myAuth } from "@/backend/auth"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

function page() {
    const [password, setPassword] = useState("");
    const router = useRouter();

    useEffect(() => {
      router.push('/');
    }, [])

    async function handleAuth()
    {
      if (!password) {
        return;
      }

      const res = await myAuth(password);

      if (!res.success) {
        return toast.error("DON'T YOU DARE", { id: "some" });
      }
      else
        toast.success("YOU'RE IN");

      router.push('/');
    }

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center gap-4">
      <div className="border border-blue-600 rounded-[4px] p-[10px]">
        <input type="password" placeholder={`"THE" Password`} className="text-center outline-none text-[25px] tracking-[2px]" value={password} onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <button className="bg-green-500 text-white font-extrabold text-[30px] rounded px-[10px]" onClick={handleAuth}>
      <span className="tracking-[10px]">SUBMI</span>
        <span>T</span>
      </button>
    </div>
  )
}

export default page