import clsx from 'clsx';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@/components/Container';
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons';
import portraitImage from '@/images/portrait.jpg';

interface SocialLinkProps {
  className?: string;
  href: string;
  children: React.ReactNode;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: SocialLinkProps) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-indigo-500 dark:text-zinc-200 dark:hover:text-indigo-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-indigo-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  );
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Jacob Foster</title>
        <meta
          name="description"
          content="I'm Jacob Foster, a proud, passionate developer looking to leave my mark."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Hey, I'm Jacob. It's nice to meet you.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I've been fascinated by how the technology works ever since I
                was a kid. I first started programming when I was 14 years-old
                by teaching myself C++ and making games thanks to{' '}
                <a
                  className="site-link"
                  href="https://www.youtube.com/playlist?list=PL1D6727247CA35794"
                >
                  courses from 3D Buzz
                </a>
                . Once I was comfortable with C++, I started to teach myself C#
                so that I could make simple Windows applications which slowly
                evolved into an interest in ASP.NET and how websites work.
              </p>
              <p>
                Alongside my interest in programming, I was also involved in a
                lot of online games, starting with Ultima Online and moving
                through practically every MMORPG that has been released. One of
                these games, Final Fantasy XI, was pivotal in shaping my future.
                It was through this game that I gained an interest in Japan and
                the Japanese language as well as a passion for web development.
              </p>
              <p>
                I began creating websites in Geocities before I became more
                confident in my own abilities. Since then, I've worked as a game
                programmer, application developer, integration expert, and CTO,
                challenging myself to learn new technologies, paradigms, and
                techniques along the way.
              </p>
              {/* <p>
                You can see{' '}
                <a className="site-link" href="/projects">
                  some projects that I've decided to highlight
                </a>
                , read my{' '}
                <a className="site-link" href="/articles">
                  musings and teachings
                </a>
                , dive into my{' '}
                <a className="site-link" href="/languages">
                  language learning journey
                </a>
                , or check out{' '}
                <a className="site-link" href="/skills">
                  an assortment of technologies and skills
                </a>{' '}
                that I use to craft experiences.
              </p> */}
              <p>
                I'd love to work with your team to help push your product to the
                next level or to realize a product that you think the world
                needs. Reach out to me{' '}
                <a className="site-link" href="mailto:me@jacob-foster.com">
                  via email
                </a>{' '}
                or on{' '}
                <a
                  className="site-link"
                  href="https://www.twitter.com/im_jacobf"
                >
                  Twitter
                </a>{' '}
                and let's chat!
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://www.twitter.com/im_jacobf"
                icon={TwitterIcon}
              >
                Follow on Twitter
              </SocialLink>
              <SocialLink
                href="https://www.instagram.com/shadyendless"
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow on Instagram
              </SocialLink>
              <SocialLink
                href="https://www.github.com/shadyendless"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/imjacobf/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:me@jacob-foster.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                me@jacob-foster.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
}
