import { NextResponse } from 'next/server'
import { jwtVerify } from "jose"

const SECRET_KEY = process.env.JWT_SECRET || 'your-secret-key';

export default async function middleware(req) {
  const token = req.cookies.get('token')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
  
  const encoder = new TextEncoder();
  const key = encoder.encode(SECRET_KEY);
  
  try {
    await jwtVerify(token, key);
    return NextResponse.next();
  }
  catch (err) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
}

export const config = {
  matcher: ['/'],
}