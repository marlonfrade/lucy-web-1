"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="flex items-center justify-between bg-transparent p-4">
      <Link href="/" className="flex items-center ">
        <div className="relative mr-4 h-12 w-12">
          <Image fill alt="Logo" src="/logo.png" />
        </div>
        <h1
          className={cn("text-2xl font-bold text-white", montserrat.className)}
        >
          Lucy Web
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="outline" className="rounded-md">
            {isSignedIn ? "Entrar" : "Crie sua conta"}
          </Button>
          {!isSignedIn && (
            <Link href="/sign-in">
              <Button variant="outline" className="ml-2 rounded-md">
                Fazer Login
              </Button>
            </Link>
          )}
        </Link>
      </div>
    </nav>
  );
};
