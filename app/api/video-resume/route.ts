import axios from "axios";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

export async function POST(req: Request) {
  try {
    const token = process.env.RESUME_VIDEO_BEARER_TOKEN!;

    const { userId } = auth();

    const body = await req.json();
    const { link, instruction } = body;

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    if (!userId) {
      return new NextResponse("Não autorizado", { status: 401 });
    }

    if (!instruction || !link) {
      return new NextResponse("A instrução e link deve ser preenchido", {
        status: 401,
      });
    }

    const freeTrial = await checkApiLimit();
    const isPro = await checkSubscription();

    if (!freeTrial && !isPro) {
      return new NextResponse("Limite de uso da Lucy atingido", {
        status: 403,
      });
    }

    const response = await axios.post(
      "http://204.48.19.221:3000/api/youtube/video/gpt/analysis",
      body,
      config,
    );

    if (!isPro) {
      await incrementApiLimit();
    }

    return NextResponse.json(response.data);
  } catch (error) {
    console.log("[VIDEO_ERROR]", error);
    return new NextResponse("Erro interno", { status: 500 });
  }
}
