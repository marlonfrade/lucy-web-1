import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt, amount = 1, resolution = "256x256" } = body;

    if (!userId) {
      return new NextResponse("Não autorizado", { status: 401 });
    }

    if (!configuration.apiKey) {
      return new NextResponse("Chave OPENAI não configurada", { status: 500 });
    }

    if (!prompt) {
      return new NextResponse("Prompt da imagem vazio", { status: 400 });
    }

    if (!amount) {
      return new NextResponse("Quantidade de imagens vazio", { status: 400 });
    }

    if (!resolution) {
      return new NextResponse("Resolução da imagem vazio", { status: 400 });
    }

    const freeTrial = await checkApiLimit();
    const isPro = await checkSubscription();

    if (!freeTrial && !isPro) {
      return new NextResponse("Limite de uso da Lucy atingido", {
        status: 403,
      });
    }

    const response = await openai.createImage({
      prompt: prompt,
      n: parseInt(amount, 10),
      size: resolution,
    });

    // if (!isPro) {
    //   await incrementApiLimit();
    // }

    return NextResponse.json(response.data.data);
  } catch (error) {
    console.log("[IMAGE_ERROR]", error);
    return new NextResponse("Erro interno", { status: 500 });
  }
}
