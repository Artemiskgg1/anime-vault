import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  const { userId } = auth(); // Extract the user ID from Clerk's `auth()` function

  if (!userId) {
    return NextResponse.json(
      { error: "User not authenticated" },
      { status: 401 }
    );
  }

  try {
    // Query the database for the user's anime list
    const userAnimeList = await db.list.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(userAnimeList);
  } catch (error) {
    console.error("Error fetching anime list:", error);
    return NextResponse.json(
      { error: "Failed to fetch anime list" },
      { status: 500 }
    );
  }
}
