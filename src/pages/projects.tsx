import Head from 'next/head';
import Image, { type StaticImageData } from 'next/image';

import { Card } from '@/components/Card';
import { SimpleLayout } from '@/components/SimpleLayout';
import logoHaleyStrategic from '@/images/logos/haley-strategic.jpg';
import logoJapaneseTheGame from '@/images/logos/japanese-the-game.png';
import logoNativShark from '@/images/logos/nativshark.png';

type Project = {
  name: string;
  description: string;
  link: {
    overview: string;
    href: string;
    label: string;
  };
  logo: string | StaticImageData;
};

const projects: Project[] = [
  {
    name: 'NativShark',
    description: `Crafted an all-in-one platform for people to learn Japanese.`,
    link: {
      overview: '/projects/nativshark',
      href: 'https://nativshark.com',
      label: 'nativshark.com',
    },
    logo: logoNativShark,
  },
  {
    name: 'Haley Strategic',
    description: `Built a Magento eCommerce store with a custom theme to match the client's branding.`,
    link: {
      overview: '/projects/haley-strategic',
      href: 'https://haleystrategic.com/',
      label: 'haleystrategic.com',
    },
    logo: logoHaleyStrategic,
  },
  {
    name: 'Japanese the Game',
    description: `Built an iOS application to scan cards to hear their audio as well as designed cards for various expansions.`,
    link: {
      overview: '/projects/japanese-the-game',
      href: 'https://japanesethegame.com/',
      label: 'japanesethegame.com',
    },
    logo: logoJapaneseTheGame,
  },
];

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Jacob Foster</title>
        <meta
          name="description"
          content="An overview of projects I've worked on over the years."
        />
      </Head>
      <SimpleLayout
        title="What I've built so far"
        intro="I tend to chase my passions and build things for companies that align with my goals or challenge my abilities. Below are some of the things I've made over the years. Click on any project to see more details about my role."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8 rounded-full object-contain"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.overview}>
                  {project.name}
                </Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  );
}
