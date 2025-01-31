import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons';
import logoHypergiant from '@/images/logos/hypergiant.jpg';
import logoNativShark from '@/images/logos/nativshark.png';
import logoNutrien from '@/images/logos/nutrien.jpg';
import Avatar from 'boring-avatars';
import Head from 'next/head';
import Image, { StaticImageData } from 'next/image';
import Link, { type LinkProps } from 'next/link';
import type { ReactElement } from 'react';

function BriefcaseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  );
}

interface SocialLinkProps extends LinkProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

function SocialLink({ icon: Icon, ...props }: SocialLinkProps) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}

type ResumeEntry = {
  company: string;
  end: string;
  start: string;
  title: string;
} & (
  | {
      logo: StaticImageData;
      placeholderLogo: false;
    }
  | {
      logo: ReactElement;
      placeholderLogo: true;
    }
);

function Resume() {
  let resume: ResumeEntry[] = [
    {
      company: 'Hypergiant',
      end: 'Present',
      logo: logoHypergiant,
      placeholderLogo: false,
      start: '2023',
      title: 'Engineering Manager',
    },
    {
      company: 'Nutrien',
      end: '2023',
      logo: logoNutrien,
      placeholderLogo: false,
      start: '2023',
      title: 'Senior Software Engineer',
    },
    {
      company: 'NativShark',
      end: '2022',
      logo: logoNativShark,
      placeholderLogo: false,
      start: '2019',
      title: 'CTO',
    },
    {
      company: 'Stone Soup Solutions',
      end: '2019',
      logo: (
        <Avatar
          name="Stone Soup Solutions"
          variant="beam"
          colors={['#F43F5E', '#EAB308', '#22C55E', '#3B82F6', '#A855F7']}
        />
      ),
      placeholderLogo: true,
      start: '2017',
      title: 'Software Developer',
    },
    {
      company: 'Common Tongue, Inc.',
      end: '2017',
      logo: (
        <Avatar
          name="Common Tongue, Inc."
          variant="beam"
          colors={['#F43F5E', '#EAB308', '#22C55E', '#3B82F6', '#A855F7']}
        />
      ),
      placeholderLogo: true,
      start: '2015',
      title: 'Director of Design',
    },
    {
      company: 'UniverCity, Inc.',
      end: '2019',
      logo: (
        <Avatar
          name="UniverCity, Inc."
          variant="beam"
          colors={['#F43F5E', '#EAB308', '#22C55E', '#3B82F6', '#A855F7']}
        />
      ),
      placeholderLogo: true,
      start: '2013',
      title: 'Lead Engineer / Contractor',
    },
  ];

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center overflow-hidden rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              {!role.placeholderLogo ? (
                <Image
                  src={role.logo}
                  alt=""
                  width="28"
                  height="28"
                  className="h-10 w-10 object-contain"
                  unoptimized
                />
              ) : (
                (role.logo as unknown as React.JSX.Element)
              )}
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start} until ${role.end}`}
              >
                <time dateTime={role.start}>{role.start}</time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end}>{role.end}</time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button href="/resume" variant="secondary" className="group mt-6 w-full">
        View Resume
      </Button>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Jacob Foster — Passionate, proud developer and language enthusiast.
        </title>
        <meta
          name="description"
          content="I'm Jacob Foster and I love to create elegant experiences that solve complex problems."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Passionate,{' '}
            <span className="proud-underline">
              <span>proud</span>
            </span>{' '}
            developer and language enthusiast.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Hey there, I'm Jacob. I am focused on providing organizations and
            engineering teams with impactful solutions and mentorship. Currently
            interested in contract or consulting opportunities.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/shadyendless"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com/in/imjacobf/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none">
          <div className="space-y-10">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  );
}
