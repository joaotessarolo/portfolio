"use client";
import { useState, useEffect } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/config/site.config";
import { AlarmClock, LocateFixed } from "lucide-react";
import Markdown from "react-markdown";
const BLUR_FADE_DELAY = 0.04;


export default function Page() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <main className="flex flex-col space-y-10">
      {/* <Spotlight
        className="fixed -top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      /> */}
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`João Tessarolo`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-lg mt-2"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
              <BlurFade delay={BLUR_FADE_DELAY}>
                <div className="flex flex-wrap gap-1 h-full w-full">
                  <Badge variant="outline" className="cursor-pointer group">
                    <LocateFixed className="size-4 mr-1 group-hover:text-green-500" />
                    {DATA.location}
                  </Badge>
                  <Badge variant="outline" className="hidden md:flex cursor-pointer group">
                    <AlarmClock className="size-4 mr-1 group-hover:text-blue-500" />
                    {mounted ? currentTime.toLocaleTimeString(DATA.localCode, {
                      timeZone: DATA.timeZone,
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                      hour12: true,
                    }) : "--:--:-- --"}
                  </Badge>
                  {/* <Link href={DATA.sponsore}>
                    <Badge
                      variant="outline"
                      className="flex cursor-pointer group"
                    >
                      <HeartPulse className="size-4 mr-1 group-hover:text-red-500" />
                      Sponsor
                    </Badge>
                  </Link> */}
                </div>
              </BlurFade>
            </div>
            {/* <BlurFade delay={BLUR_FADE_DELAY}>
              <Lens hovering={hovering} setHovering={setHovering}>
                <Avatar className="size-28 border cursor-pointer">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </Lens>
            </BlurFade> */}
          </div>
        </div>
      </section>
      <section id="bio" className="flex flex-col gap-4">
        {/* <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade> */}
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.bio}
          </Markdown>
        </BlurFade>
        {/* </section>
      <section id="career"> */}
        {/* <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">Career</h2>
        </BlurFade> */}
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.career}
          </Markdown>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.career2}
          </Markdown>
        </BlurFade>
      </section>

      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <div className="w-full border-t border-border/50" />

        <div className="flex justify-end space-x-4 mt-4">
          <a
            href="https://linkedin.com/in/joaotessarolo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="https://github.com/joaotessarolo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 4.624-5.479 4.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </BlurFade>
      {/* <section id="blogs">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Latest Articles
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  My thoughts on ... everything
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I love writing about tech, programming, and life in general. I
                  hope you will click on them by mistake. Here are a few of my
                  latest articles. You can find more on my{" "}
                  <Link href="/blog" className="text-blue-500 hover:underline">
                    blog page
                  </Link>
                  .
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="flex flex-col gap-3 w-full">
            <BlurFade delay={BLUR_FADE_DELAY * 14}>
              <ul className="divide-y divide-dashed">
                {blogPosts
                  .filter((post) => post.metadata.featured)
                  .sort(
                    (a, b) =>
                      new Date(b.metadata.publishedAt).getTime() -
                      new Date(a.metadata.publishedAt).getTime(),
                  )
                  .map((post, id) => (
                    <BlurFade
                      key={post.slug}
                      delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                    >
                      <BlogCard
                        href={post.metadata.custom ? `${post.slug}` : `/blog/${post.slug}`}
                        title={post.metadata.title}
                        description={post.metadata.summary}
                        publishedAt={post.metadata.publishedAt}
                        iconUrl={post.metadata.icon}
                        readTime={post.metadata.readTime}
                      />
                    </BlurFade>
                  ))}
              </ul>
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="flex flex-col items-center">
          <Badge className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm mb-5">
            Featured Projects
          </Badge>
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <Tabs
              defaultValue="myworks"
              className="flex flex-col items-center justify-center w-full"
            >
              <TabsList className="grid w-[400px] grid-cols-2 mb-4">
                <TabsTrigger value="myworks">My Works</TabsTrigger>
                <TabsTrigger value="clientworks">Client Works</TabsTrigger>
              </TabsList>
              <TabsContent value="myworks">
                <BlurFade delay={BLUR_FADE_DELAY}>
                  <div className="space-y-12 w-full">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                      <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mt-2">
                          Some of my cool shits
                        </h2>
                        <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                          I&apos;ve worked on a variety of cool shits, from
                          simple websites to mobile apps to complex IoT
                          projects. Here are a few of my favorites. You can find
                          more on my{" "}
                          <Link
                            href="/projects"
                            className="text-blue-500 hover:underline"
                          >
                            projects page
                          </Link>
                          .
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto mt-8">
                      {PROJECTS.filter((project) => project.featured).map(
                        (project, id) => (
                          <BlurFade
                            key={project.title}
                            delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                          >
                            <ProjectCard
                              href={project.href}
                              active={project.active}
                              archived={project.archived}
                              key={project.title}
                              title={project.title}
                              description={project.description}
                              dates={project.dates}
                              tags={project.technologies}
                              image={project.image}
                              video={project.video}
                              links={project.links}
                            />
                          </BlurFade>
                        ),
                      )}
                    </div>
                  </div>
                </BlurFade>
              </TabsContent>
              <TabsContent value="clientworks">
                <BlurFade delay={BLUR_FADE_DELAY}>
                  <div className="space-y-12 w-full">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                      <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mt-2">
                          I do get hired, believe me
                        </h2>
                        <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                          I&apos;ve experience working on a range of client
                          projects, from freelance assignments to corporate
                          work. Feel free to explore more of my professional
                          portfolio on my{" "}
                          <Link
                            href="/projects"
                            className="text-blue-500 hover:underline"
                          >
                            projects page
                          </Link>
                          .
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto mt-8">
                      {CLIENTWORKS.filter((project) => project.featured).map(
                        (project, id) => (
                          <BlurFade
                            key={project.title}
                            delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                          >
                            <ClientWorksCard
                              key={project.title}
                              title={project.title}
                              worktype={project.worktype}
                              description={project.description}
                              dates={project.dates}
                              tags={project.technologies}
                              image={project.image}
                              video={project.video}
                              fatures={project.features}
                              testimonial={project.testimonial}
                            />
                          </BlurFade>
                        ),
                      )}
                    </div>
                  </div>
                </BlurFade>
              </TabsContent>
            </Tabs>
          </BlurFade>
        </div>
      </section>

      <section id="newsletter">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <Badge className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Newsletter
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                No Bull shit talks
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to follow my journey? Just subscribe to my newsletter
                bellow and get the latest updates. I don&apos;t spam!
              </p>
              <div className="pt-10">
                {!isNsl ? (
                  <PlaceholdersAndVanishInput
                    type="email"
                    placeholders={placeholders}
                    onChange={handleChange}
                    onSubmit={onSubmit}
                    disabled={isInputLoading}
                  />
                ) : (
                  <Alert className="rounded-full bg-background/80 backdrop-blur-sm">
                    <AlertTitle>
                      <Badge>Heads up!</Badge>
                    </AlertTitle>
                    <AlertDescription className="text-sm underline">
                      You have already signed up for the newsletter.
                    </AlertDescription>
                  </Alert>
                )}
              </div>
            </div>
          </BlurFade>
        </div>
      </section> */}
    </main>
  );
}
