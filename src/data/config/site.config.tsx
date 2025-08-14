import { Icons } from "@/components/icons";

export const DATA = {
  name: "João Tessarolo",
  initials: "JT",
  url: "https://joaotessarolo.com",
  resume: "https://joaotessarolo.com",
  sponsore: "https://joaotessarolo.com",
  myImage: "/me2.png",
  location: "Goiás, Brazil",
  locationLink: "https://g.co/kgs/XhuCMDB",
  timeZone: "America/Sao_Paulo",
  localCode: "en-US",
  description:
    "Full Stack Software Engineer",
  about:
    "I'm a super introvert nurtured in a small state [Goiás, Brazil](https://maps.app.goo.gl/SFCDCshEyR96jmNUA), passionate about building impactful products that leverage technology to make a difference. I often share my work to [contribute](https://git.new/skidgod) to the community. In addition to my development work, I'm always exploring new ideas, particularly in areas like machine learning and robotics.\n\n In my free time i play games, listen music also i love to read books of *self-help* genre. I'm a huge fan of Iron Man. He inspires me a lot.\n\nIt's a pleasure to meet you!",
  bio: "I'm a software engineer based in [Goiás, Brazil](https://www.google.com/maps/place/Goi%C3%A1s/@-14.6978102,-87.135681,3.13z/data=!4m6!3m5!1s0x935db96386b920f5:0x8c6d8f8cd8cf0d3!8m2!3d-15.7050424!4d-49.3653149!16zL20vMDEyeXpf?entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D), passionate about building impactful products that leverage technology to make a difference.",
  career:
    "With almost 7 years of experience, I specialize in crafting fast, scalable, and maintainable applications using **React**, **Next.js**, **Spring Boot**, **NestJS** and **Django**.",
  career2:
    " My expertise lies in designing **clean architectures**, **optimizing performance**, and **solving complex technical challenges** with precision.",
  careerFull:
    "My journey in software development began at 16, fueled by curiosity and a relentless drive to learn. What started as freelance projects soon turned into a passion, an obsession with understanding how technology could solve real-world problems.\n\nIt wasn’t long before that passion opened the door to my first professional opportunity, a challenge that pushed me beyond my comfort zone and into the fast-paced reality of the tech industry. From there, every project became a stepping stone: debugging late into the night, architecting scalable solutions, and turning complex requirements into clean, efficient code.\n\nOver the years, I’ve had the privilege of working across diverse stacks, collaborating with talented teams, and delivering solutions that impact both businesses and users.Whether tackling small, precise fixes or leading large-scale refactors, my approach has always been the same: blend technical expertise with strategic thinking to create software that works and lasts.\n\nToday, I bring not just experience, but the mindset of someone who is never done learning. Because for me, technology is more than a career, it is a lifelong pursuit of building things that matter.",
  avatarUrl: "/me.png",
  connect:
    "Let's connect and build something cool together. Feel free to reach out to me. I'm always open to new opportunities and collaborations. Reach out to me via **email: (victortessarollo@gmail.com)** or dm me on [LinkedIn](https://www.linkedin.com/in/joaotessarolo/).",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "Javascript",
  ],
  contact: {
    email: "victortessarollo@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://git.new/joaotessarolo",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/joaotessarolo/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/joaotessarolo/",
        icon: Icons.x,

        navbar: true,
      },
    },
  },

  education: [
    {
      school: "Universidade Católica de Brasília",
      location: "Brasília, Brazil",
      href: "https://www.ucb.edu.br",
      degree: "Bachelor of Software Engineering",
      logoUrl: "/ucb.png",
      start: "2023",
      end: "2027",
    },
  ],
} as const;
