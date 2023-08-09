"use client";
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { sidebarRoutes } from "@/constants";

import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";

import UserCounter from "@/components/user-counter";

// create a variant font Montserrat for Brand
const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

interface SidebarProps {
  apiLimitCount: number;
  isPro: boolean;
}

const Sidebar = ({ apiLimitCount = 0, isPro = false }: SidebarProps) => {
  const pathname = usePathname();
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
          {sidebarRoutes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "group flex w-full cursor-pointer justify-start rounded-lg p-3 text-sm font-medium transition hover:bg-white/10 hover:text-white",
                pathname === route.href
                  ? "bg-white/10 text-white"
                  : "text-zinc-500",
              )}
            >
              <div className="flex flex-1 items-center">
                <route.icon className={cn("mr-3 h-5 w-5", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <UserCounter apiLimitCount={apiLimitCount} isPro={isPro} />
    </div>
  );
};

export default Sidebar;
