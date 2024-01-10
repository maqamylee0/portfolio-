import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-pink-900">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-pink-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl light:border-neutral-800 light:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-pink-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Emmilly Immaculate Namuganga&nbsp;
        </p>
       
        <div className="flex space-x-12">
        <a href="https://www.github.com/maqamylee0" target="_blank" rel="noopener noreferrer">
    <FaGithub className="w-6 h-6" />
  </a>

  <a href="https://www.linkedin.com/in/namuganga-emmilly-immaculate" target="_blank" rel="noopener noreferrer">
    <FaLinkedin className="w-6 h-6" />
  </a>
 
</div>
      </div>

      <div>
          <Image
          className='rounded-full w-64 h-64'
            src="/emmilina.png"
            alt={"Emily image"}
            priority={true}

            height={200}
            width={200}
          />
        </div>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      <Link href="/dashboard/education" 
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-pink-300 hover:bg-gray-100 hover:light:border-neutral-700 hover:dark:bg-neutral-800/30"
                >

       
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Education{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Primary, Secondary, University
          </p>
        </Link>
        <Link
          href="/dashboard/experience"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-pink-300 hover:bg-gray-100 hover:light:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Experience{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Internships, volunteering and work experience
          </p>
        </Link>

        <Link href="/dashboard/achievements"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-pink-300 hover:bg-gray-100 hover:light:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Achievements{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Hackathons, awards, scholarships, etc.
          </p>
        </Link>

        <Link href="/dashboard/publications"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-pink-300 hover:bg-gray-100 hover:light:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Publications{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Academic work
          </p>
        </Link>
      </div>
    </main>
  )
}
