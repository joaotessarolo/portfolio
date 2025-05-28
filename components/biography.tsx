import Link from "next/link";

export default function Biography() {
    return (
        <div className='flex flex-col py-8 text-muted-foreground text-lg gap-5 max-w-[30rem]'>
            <div className='leading-6 [--stagger:1]' data-animated>
                Software engineer from Goiás, Brazil.
            </div>
            <div className='leading-6 [--stagger:3]' data-animated>
                With almost <span className='text-foreground'>6 years of experience</span>, I specialize in crafting fast, scalable, and maintainable applications using React/React Native, Next.js, NestJS, and Django.
            </div>
            <div className='leading-6 [--stagger:4]' data-animated>
                My expertise lies in designing <span className='text-foreground'>clean architectures</span>, <span className='text-foreground'>optimizing performance</span>, and <span className='text-foreground'>solving complex</span> technical challenges with precision.
            </div>
            <div className='leading-6 [--stagger:5]' data-animated>
                Check out some of my <Link href="/projects" className='text-foreground underline underline-offset-4 decoration-muted-foreground decoration-1 hover:text-muted-foreground'>projects</Link> and past <Link href="/work" className='text-foreground underline underline-offset-4 decoration-muted-foreground decoration-1 hover:text-muted-foreground'>work</Link>.
            </div>
        </div>
    )
}