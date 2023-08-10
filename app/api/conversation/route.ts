import axios from "axios";
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
    const token = process.env.RESUME_VIDEO_BEARER_TOKEN!;
    const { userId } = auth();
    const body = await req.json();

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    if (!userId) {
      return new NextResponse("Não autorizado", { status: 401 });
    }

    if (!configuration.apiKey) {
      return new NextResponse("Chave OPENAI não configurada", { status: 500 });
    }

    if (!body) {
      return new NextResponse("Mensagem vazia", { status: 400 });
    }

    const freeTrial = await checkApiLimit();
    const isPro = await checkSubscription();

    if (!freeTrial && !isPro) {
      return new NextResponse("Limite de uso da Lucy atingido", {
        status: 403,
      });
    }

    const response = await axios.post(
      "http://204.48.19.221:3000/api/text/gpt35_16k",
      body,
      config,
    );

    // const response = await openai.createChatCompletion({
    //   model: "gpt-3.5-turbo",
    //   messages,
    // });

    // if (!isPro) {
    //   await incrementApiLimit();
    // }

    return NextResponse.json(response.data.data.message);
  } catch (error) {
    console.log("[CONVERSATION_ERROR]", error);
    return new NextResponse("Erro interno", { status: 500 });
  }
}
