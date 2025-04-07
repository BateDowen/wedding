import { Guest } from "@/app/(models)/Guest";
import { connectToMongo } from "@/lib/mongoDb";
import { NextResponse } from "next/server";


export async function POST (req: Request) {
  try {
    await connectToMongo()
    const body = await req.json();
    console.log('api/guest/route',{body});
    await Guest.create(body)
    return NextResponse.json({message: 'Guest Saved'}, {status : 201} )
    
  } catch (error) {
    return NextResponse.json({message: 'Error', error}, {status : 500} )
  }
}