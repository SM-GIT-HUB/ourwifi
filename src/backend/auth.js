"use server"

import { cookies } from "next/headers"
import jwt from "jsonwebtoken"

async function myAuth(password)
{
    try {
        const cookieStore = await cookies();

        if (process.env.PASS != password) {
            return { success: false, message: "Wrong password" };
        }

        const token = jwt.sign({ password }, process.env.JWT_SECRET, { expiresIn: "24h" });

        cookieStore.set("token", token, {
            httpOnly: true,
            secure: true,
            maxAge: 60 * 60 * 24,
            path: '/'
        })

        return { success: true, message: "Verified" };
    }
    catch(err) {
        return { success: false, message: "Something went wrong" };
    }
}


export { myAuth }