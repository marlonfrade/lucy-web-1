import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from "lucide-react";

export const MAX_FREE_COUNTS = 5;

export const sidebarRoutes = [
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
    label: "Gerar Vídeos",
    icon: VideoIcon,
    color: "text-orange-700",
    href: "/video",
  },
  {
    label: "Resumir Vídeos",
    icon: VideoIcon,
    color: "text-red-500",
    href: "/video-resume",
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

export const tools = [
  {
    label: "Conversar com Lucy",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Gerar Música",
    icon: Music,
    href: "/music",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    label: "Gerar Imagem",
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: "/image",
  },
  {
    label: "Gerar Vídeo",
    icon: VideoIcon,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: "/video",
  },
  {
    label: "Gerar Código",
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: "/code",
  },
];
