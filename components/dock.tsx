"use client"
import { IconMail, IconBrandGithub, IconBrandLinkedin, IconBrandLeetcode } from "@tabler/icons-react";
import { FloatingDock } from "./ui/floating-dock";

export default function Dock() {
    const dockItems = [
        {
            title: "Email",
            icon: (
                <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Github",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "LinkedIn",
            icon: (
                <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "LeetCode",
            icon: (
                <IconBrandLeetcode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
    ];
    return (
        <FloatingDock
            items={dockItems}
        />
    )
}