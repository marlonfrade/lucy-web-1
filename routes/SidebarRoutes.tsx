import { ImageIcon, LayoutDashboard, MessageSquare } from "lucide-react";

export interface ISidebarRoute {
  label: string;
  icon: any;
  href: string;
  color: string;
}

export const SidebarRoutes: ISidebarRoute[] = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-blue-500",
  },
  {
    label: "Conversar com Lucy",
    icon: MessageSquare,
    href: "/conversartion",
    color: "text-indigo-500",
  },
  {
    label: "Gerar Imagens",
    icon: ImageIcon,
    href: "/images",
    color: "text-red-500",
  },
];
