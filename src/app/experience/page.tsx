import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { PROJECTS } from "@/data/config/projects.config";
import { ResumeCard } from "@/components/resume-card";
import { TimeLineCard } from "@/components/timeline-card";
import { DATA } from "@/data/config/site.config";
import { WORK } from "@/data/config/work.config";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ClientWorksCard } from "@/components/client-works-card";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Experience() {
    return (
        <div className="flex flex-col space-y-10">
            <section id="work">
                <div className="flex min-h-0 flex-col gap-y-3">
                    <BlurFade delay={BLUR_FADE_DELAY * 4}>
                        <h2 className="text-xl font-bold">Work Experience</h2>
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY * 5}>
                        <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
                            {WORK.map((work, id) => (
                                <BlurFade
                                    key={work.title + work.dates}
                                    delay={BLUR_FADE_DELAY * 6 + id * 0.05}
                                >
                                    <TimeLineCard
                                        title={work.title}
                                        role={work.role}
                                        description={work.description}
                                        location={work.location}
                                        dates={work.dates}
                                        image={work.image}
                                    />
                                </BlurFade>
                            ))}
                        </ul>
                    </BlurFade>
                </div>
            </section>
            {/* <section id="connect">
                <BlurFade delay={BLUR_FADE_DELAY * 3}>
                    <h2 className="text-xl font-bold">Hook with me</h2>
                </BlurFade>
                <BlurFade delay={BLUR_FADE_DELAY * 4}>
                    <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                        {DATA.connect}
                    </Markdown>
                </BlurFade>
            </section> */}
            <section id="education">
                <div className="flex min-h-0 flex-col gap-y-3">
                    <BlurFade delay={BLUR_FADE_DELAY * 8}>
                        <h2 className="text-xl font-bold">Education</h2>
                    </BlurFade>
                    {DATA.education.map((education, id) => (
                        <BlurFade
                            key={education.school}
                            delay={BLUR_FADE_DELAY * 8 + id * 0.05}
                        >
                            <ResumeCard
                                key={education.school}
                                href={education.href}
                                logoUrl={education.logoUrl}
                                altText={education.school}
                                title={education.school}
                                location={education.location}
                                subtitle={education.degree}
                                period={`${education.start} - ${education.end}`}
                            />
                        </BlurFade>
                    ))}
                </div>
            </section>
        </div>
    );
}
