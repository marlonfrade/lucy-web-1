import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider as AuthProvider } from "@clerk/nextjs";
import { ptBR } from "@clerk/localizations";
import { ModalProvider } from "@/components/modal-provider";
import { ToasterProvider } from "@/components/toast-provider";
import { CrispProvider } from "@/components/crisp-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lucy",
  description:
    "Lucy, comunicação inteligente. Uma inteligência artificial personalizada para a sua comunidade.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider localization={ptBR}>
      <html lang="pt-BR">
        <CrispProvider />
        <body className={inter.className}>
          <ModalProvider />
          <ToasterProvider />
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
