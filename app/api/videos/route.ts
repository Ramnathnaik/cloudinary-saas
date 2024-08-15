import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    // Now you can use the prisma client instance here
    const videos = await prisma.video.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(videos);
  } catch (error) {
    //Handle errors
    console.log(error);
    return NextResponse.json(
      { error: "An error occurred while getting videos" },
      {
        status: 500,
      }
    );
  } finally {
    await prisma.$disconnect();
  }
}
