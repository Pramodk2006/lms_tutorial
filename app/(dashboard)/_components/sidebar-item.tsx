"use client";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface SidebarItemProps {
    icon: LucideIcon;
    label: string;
    href: string;
}

export const SidebarItem = ({ icon: Icon, label, href }: SidebarItemProps) => {
    return (
        <Link href={href} className="flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20">
            <Icon className="w-5 h-5" />
            {label}
        </Link>
    );
};