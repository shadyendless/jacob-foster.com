import Head from 'next/head';

import { Card } from '@/components/Card';
import { Section, type SectionProps } from '@/components/Section';
import { SimpleLayout } from '@/components/SimpleLayout';

function ResumeSection({ children, ...props }: SectionProps) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  );
}

interface SkillProps {
  children: React.ReactNode;
  href: string;
  title: string;
}

function Skill({ title, href, children }: SkillProps) {
  return (
    <Card as="li">
      <Card.Link target={href === '#' ? undefined : '_blank'} href={href}>
        <Card.Title as="h3">{title}</Card.Title>
        <Card.Description>{children}</Card.Description>
      </Card.Link>
    </Card>
  );
}

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume - Jacob Foster</title>
        <meta
          name="description"
          content="As a full-stack engineer with over 9 years of experience, I have intimate knowledge of the entire software development lifecycle, from UI design through to CI/CD pipelines and production support. Check out my resumes to see what I can offer your team."
        />
      </Head>
      <SimpleLayout
        title="I've done a lot of things"
        intro="As a full-stack engineer with over 9 years of experience, I have intimate knowledge of the entire software development lifecycle, from UI design through to CI/CD pipelines and production support. Check out my resumes to see what I can offer your team."
      >
        <div className="space-y-20">
          <ResumeSection title="Resumes">
            <Skill href="/resume-fullstack" title="Full Stack">
              If you are looking for someone who can take an idea from concept
              to reality and lead the entire development process, look no
              further. I can design interfaces, APIs, database designs, system
              architectures, and write the code or go hands-on with a team to
              make it all happen.
            </Skill>
            <Skill href="/resume-frontend" title="Frontend">
              From vanilla JavaScript and CSS through to build tools such as
              Webpack and Babel and beyond into React and Tailwind, I have a
              breadth of knowledge and experience when it comes to delivering
              performant, beautiful websites that work across all devices.
            </Skill>
            <Skill href="#" title="Backend (Coming Soon)">
              Whether it's writing performant APIs in Node.js, caching data in
              Redis, writing database migrations, or working with distributed,
              event-driven systems, I have the experience to take control of the
              process and lead a team to success.
            </Skill>
          </ResumeSection>
        </div>
      </SimpleLayout>
    </>
  );
}
