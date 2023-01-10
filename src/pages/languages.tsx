import Head from 'next/head';

import { Card } from '@/components/Card';
import { Section, type SectionProps } from '@/components/Section';
import { SimpleLayout } from '@/components/SimpleLayout';

function LanguageSection({ children, ...props }: SectionProps) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  );
}

interface PostProps {
  cta: string;
  description: string;
  event: string;
  href: string;
  title: string;
}

function Post({ title, description, event, cta, href }: PostProps) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  );
}

export default function Languages() {
  return (
    <>
      <Head>
        <title>Languages - Jacob Foster</title>
        <meta
          name="description"
          content="I'm quite passionate about languages and have been learning Japanese for a few years now."
        />
      </Head>
      <SimpleLayout
        title="I'm fascinated by languages and the ways that people communicate with one-another."
        intro="The ability for humans to communicate with one-another is one of the most fundamental aspects of being human. Being able to convey complex emotions and intentions with a series of sounds will never stop amazing me."
      >
        <div className="space-y-20">
          <LanguageSection title="Japanese">
            <Post
              href="#"
              title="My journey with Japanese"
              description="A quick overview of my interest in Japanese and how learning it has changed my life."
              event="Overview"
              cta="Read post"
            />
          </LanguageSection>
          <LanguageSection title="Korean">
            <Post
              href="#"
              title="Passing interest in Korean"
              description="I plan on tackling Korean after I am comfortable with my Japanese ability. This post talks about what interests me the most about the language."
              event="Overview"
              cta="Read post"
            />
          </LanguageSection>
        </div>
      </SimpleLayout>
    </>
  );
}
