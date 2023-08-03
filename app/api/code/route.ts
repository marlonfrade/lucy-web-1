import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const instructionMessage: ChatCompletionRequestMessage = {
  role: "system",
  content:
    "Always answers in the same language as the content message.You are a code generator. You must answer only in markdown code snippets. Use code comments for explanations.",
};

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("Não autorizado", { status: 401 });
    }

    if (!configuration.apiKey) {
      return new NextResponse("Chave OPENAI não configurada", { status: 500 });
    }

    if (!messages) {
      return new NextResponse("Mensagem vazia", { status: 400 });
    }

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [instructionMessage, ...messages],
    });

    return NextResponse.json(response.data.choices[0].message);
  } catch (error) {
    console.log("[CODE_ERROR]", error);
    return new NextResponse("Erro interno", { status: 500 });
  }
}
