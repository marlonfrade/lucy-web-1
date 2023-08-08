"use client";

import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import TypewriterComponent from "typewriter-effect";
import { Button } from "@/components/ui/button";

const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="space-y-5 py-36 text-center font-bold text-white">
      <div className="space-y-5 text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl">
        <h1>Bem vindo a Lucy Web!</h1>
        <div className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          <TypewriterComponent
            options={{
              strings: [
                "Comunicação Inteligente",
                "Personalidade Única",
                "Converse",
                "Gere Imagens",
                "E muito mais!",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm font-light text-zinc-400 md:text-xl">
        Tenha todo o poder de Lucy na palma da sua mão, uma IA criada para
        resolver tudo!
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button
            variant="premium"
            className="rounded-full p-4 font-semibold md:p-6 md:text-lg"
          >
            {isSignedIn ? "Entrar" : "Crie sua conta, é GRÁTIS!"}
          </Button>
        </Link>
      </div>
      <div className="text-xs font-normal text-zinc-400 md:text-sm">
        A Lucy é grátis. Crie sua conta agora!
      </div>
    </div>
  );
};

export default LandingHero;
