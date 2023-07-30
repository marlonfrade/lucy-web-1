"use client";
import Image from "next/image";
import Link from "next/link";

// import { SidebarRoutes } from "@/routes/SidebarRoutes";

import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from "lucide-react";

// create a variant font Montserrat for Brand
const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

const SidebarRoutes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Conversar com Lucy",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Gerar Imagens",
    icon: ImageIcon,
    color: "text-pink-700",
    href: "/image",
  },
  {
    label: "Resumo de Vídeos",
    icon: VideoIcon,
    color: "text-orange-700",
    href: "/video",
  },
  {
    label: "Gerar Música",
    icon: Music,
    color: "text-emerald-500",
    href: "/music",
  },
  {
    label: "Gerar Código",
    icon: Code,
    color: "text-green-700",
    href: "/code",
  },
  {
    label: "Configurações",
    icon: Settings,
    href: "/settings",
  },
];

const Sidebar = () => {
  return (
    <div className="flex h-full flex-col space-y-4 bg-[#111827] py-4 text-white">
      <div className="flex-1 px-3 py-2">
        <Link href="/dashboard" className="mb-14 flex items-center pl-3">
          <div className="relative mr-4 h-20 w-20">
            <Image fill alt="Lucy Logo" src="/logo.png" />
          </div>
          <h1 className={cn("text-2xl font-bold", montserrat.className)}>
            Lucy
          </h1>
        </Link>
        <div className="space-y-1">
          {SidebarRoutes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className="group flex w-full cursor-pointer justify-start rounded-lg p-3 text-sm font-medium transition hover:bg-white/10 hover:text-white"
            >
              <div className="flex flex-1 items-center">
                <route.icon className={cn("mr-3 h-5 w-5", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
