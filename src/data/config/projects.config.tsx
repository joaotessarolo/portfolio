import { Icons } from "@/components/icons";

export const PROJECTS = [
  {
    title: "Portfolio",
    href: "https://joaotessarolo.com",
    dates: "",
    featured: true,
    active: false,
    archived: false,
    description:
      "My personal portfolio website.",
    technologies: [
      "Next.js",
      "Typescript",
      "TailwindCSS",
      "Shadcn UI",
      "Magic UI",
    ],
    links: [
      {
        type: "Source",
        href: "https://github.com/joaotessarolo/portfolio",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "https://i.imgur.com/ffeIgzW.png",
    video: "",
  },
];
