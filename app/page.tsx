import Biography from "@/components/biography";
import Dock from "@/components/dock";

export default function Home() {

  return (
    <div className='min-h-screen w-full flex flex-col'>
      <div className='mx-auto max-w-[47rem] w-full font-local flex flex-col flex-grow justify-center'>
        <main className='px-8' data-animated>
          <span className='text-xl text-zinc-700 dark:text-white'>
            João Tessarolo
          </span>
          <Biography />
        </main>
      </div>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <Dock />
      </footer>
    </div>
  );
}
