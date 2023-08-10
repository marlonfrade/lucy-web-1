import {
  BrainCircuit,
  Clapperboard,
  Code,
  FileVideo2,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
} from "lucide-react";

import LucyBrazuca from "./public/logo-lucy-brazuca.png";

export const MAX_FREE_COUNTS = 5;

interface sidebarRoutesProps {
  label: string;
  icon: any;
  image: any;
  href: string;
  color: string;
}

export const sidebarRoutes: sidebarRoutesProps[] = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
    image: null,
  },
  {
    label: "Conversar com Lucy",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
    image: null,
  },
  {
    label: "LucyGPT",
    icon: BrainCircuit,
    href: "/lucygpt",
    color: "text-teal-500",
    image: null,
  },
  {
    label: "Gerar Imagens",
    icon: ImageIcon,
    color: "text-pink-700",
    href: "/image",
    image: null,
  },
  {
    label: "Gerar Código",
    icon: Code,
    color: "text-green-700",
    href: "/code",
    image: null,
  },
  {
    label: "Resumir Vídeos",
    icon: FileVideo2,
    color: "text-red-500",
    href: "/video-resume",
    image: null,
  },
  {
    label: "Gerar Música",
    icon: Music,
    color: "text-emerald-500",
    href: "/music",
    image: null,
  },
  {
    label: "Gerar Vídeos",
    icon: Clapperboard,
    color: "text-orange-700",
    href: "/video",
    image: null,
  },
  {
    label: "Lucy Brazuca",
    icon: null,
    color: "text-orange-700",
    href: "/lucy-brazuca",
    image: LucyBrazuca,
  },
  {
    label: "Configurações",
    icon: Settings,
    href: "/settings",
    color: "",
    image: null,
  },
];

export const tools = [
  {
    label: "Conversar com Lucy",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "LucyGPT",
    icon: BrainCircuit,
    href: "/conversation",
    color: "text-teal-500",
    bgColor: "bg-teal-500/10",
  },
  {
    label: "Gerar Imagem",
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: "/image",
  },
  {
    label: "Gerar Código",
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: "/code",
  },
  {
    label: "Resumir Vídeos",
    icon: FileVideo2,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    href: "/video-resume",
  },
  {
    label: "Gerar Música",
    icon: Music,
    href: "/music",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    label: "Gerar Vídeo",
    icon: Clapperboard,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: "/video",
  },
];
