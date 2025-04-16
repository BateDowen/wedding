import { Guest } from "@/app/(models)/Guest";
import { connectToMongo } from "@/lib/mongoDb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connectToMongo();
    const body = await req.json();
    console.log("api/guest/route", { body });
    await Guest.create(body);
    return NextResponse.json({ message: "Guest Saved" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
export async function GET(req: Request) {
  try {
    await connectToMongo();

    // Get query parameters
    const { searchParams } = new URL(req.url);
    const secret = searchParams.get("secret");
    if (secret === "dowen") {
      const guests = await Guest.find();
      console.log("api/guest/route", { guests });

      return NextResponse.json({ guests });
    }
    return NextResponse.json({ message: "Need secret key" });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
