import { Guest } from "@/app/(models)/Guest";
import { NextResponse } from "next/server";


export async function POST (req: Request) {
  try {
    const body = await req.json();
    console.log('api/guest/route',{body});
    Guest.create(body)
    return NextResponse.json({message: 'Guest Saved'}, {status : 201} )
    
  } catch (error) {
    return NextResponse.json({message: 'Error', error}, {status : 500} )
  }
}