import Head from 'next/head';

import { Card } from '@/components/Card';
import { Section, type SectionProps } from '@/components/Section';
import { SimpleLayout } from '@/components/SimpleLayout';

function SkillsSection({ children, ...props }: SectionProps) {
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
  href?: string;
  title: string;
}

function Skill({ title, href, children }: SkillProps) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  );
}

export default function Skills() {
  return (
    <>
      <Head>
        <title>Skills - Jacob Foster</title>
        <meta
          name="description"
          content="Programming languages, libraries, frameworks, and applications that I am familiar with."
        />
      </Head>
      <SimpleLayout
        title="A collection of the skills I use to craft experiences"
        intro="I am well-versed in a lot of different languages, libraries, frameworks, and applications. Here's a categorized list of what I use to solve problems. As a lifelong learner, this list is always growing and changing alongside myself."
      >
        <div className="space-y-20">
          <SkillsSection title="Languages">
            <Skill title="HTML">
              The foundation of the web. Understanding semantic HTML and how to
              best use it to aid in accessibility is an often overlooked skill.
            </Skill>
            <Skill title="CSS">
              Most of the work I do when it comes to styling things is done with{' '}
              <a className="site-link" href="https://tailwindcss.com/">
                Tailwind CSS
              </a>
              . I also have a lot of experience with{' '}
              <a className="site-link" href="https://sass-lang.com/">
                Sass
              </a>{' '}
              and{' '}
              <a className="site-link" href="https://styled-components.com/">
                styled-components
              </a>
              .
            </Skill>
            <Skill title="JavaScript">
              JavaScript has permeated the web, mobile, and desktop applications
              either through the browser directly, on the server, or through a
              bridge to the native platform.
            </Skill>
            <Skill title="TypeScript">
              My preferred language for writing code, TypeScript is a superset
              of JavaScript that adds static typing and makes it easier to build
              easy-to-understand applications.
            </Skill>
            <Skill title="Elixir">
              Elixir runs on the Erlang VM and is one of the most pleasurable
              functional programming languages around. It's easy to understand
              and has a friendly community.
            </Skill>
            <Skill title="C#">
              Microsoft's Java challenger, C# has been around for a long time
              and continues to improve with every release. When combined with
              .NET you gain an impressive developer experience and a powerful
              ecosystem.
            </Skill>
            <Skill title="PHP">
              Often considered the laughing stock of the programming world, PHP
              has grown a lot from the early days of the web. It's quite
              pleasant to work with now, especially when combined with Laravel.
            </Skill>
            <Skill title="SQL">
              While ORMs exist, sometimes you just need to write some SQL. I
              often find myself writing raw SQL queries to optimize performance
              or build complex queries.
            </Skill>
          </SkillsSection>
          <SkillsSection title="Libraries">
            <Skill title="date-fns">
              date-fns is the preferred way to manipulate and format dates in
              JavaScript until the Temporal proposal is finalized, which should
              hopefully be any time.
            </Skill>
            <Skill title="Framer Motion">
              Framer Motion makes coordinating complex animations across an
              application easy and determinative.
            </Skill>
            <Skill title="Lodash">
              Lodash has been around for a long time and for good reason. It
              provides a lot of utility functions for working with arrays,
              objects, and strings.
            </Skill>
            <Skill title="Prisma">
              Prisma is an indespensible tool for interacting with databases and
              supports PostgreSQL, MySQL, SQLite, SQL Server, and MongoDB. When
              used in a TypeScript project, it also provides an intuitive API
              for interacting with the database.
            </Skill>
            <Skill title="React">
              React is a declarative library for building and composing user
              interfaces. It provides primitives that can be used to build
              components that can be combined and reused to build complex
              experiences.
            </Skill>
            <Skill title="TanStack">
              The TanStack is a series of various libraries that are used to
              simplify things from{' '}
              <a className="site-link" href="https://tanstack.com/query/v4">
                managing queries from the client
              </a>
              , to{' '}
              <a className="site-link" href="https://tanstack.com/table/v8">
                complex tables
              </a>
              , and all the way{' '}
              <a className="site-link" href="https://tanstack.com/router/v1">
                through to routing
              </a>
              .
            </Skill>
            <Skill title="Vue">
              Vue makes building complex user interfaces easy and allows
              developers to work with standard APIs that they are already
              familiar with, such as HTML, CSS, and JavaScript.
            </Skill>
            <Skill title="Zod">
              Zod is a TypeScript library for building schemas and validating
              data against the schemas. It has incredible type-inference
              capabilities and allows you to compose schemas together to handle
              more complex validation logic.
            </Skill>
            <Skill title="And many more...">
              I've highlighted a few of my favorite libraries that I often reach
              for when building new things, but I have experience with more than
              I could reasonably list on this page. If you're curious about any
              specific library, feel free to reach out and ask.
            </Skill>
          </SkillsSection>
          <SkillsSection title="Frameworks">
            <Skill title="ASP.NET">
              ASP.NET is the go-to framework for building web applications in C#
              and can be run on any platform that supports .NET (Windows, Linux,
              and Mac with the latest versions).
            </Skill>
            <Skill title="Entity Framework">
              Entity Framework (EF) is an object-database mapper for .NET
              supporing LINQ queries, change tracking, updates, and schema
              migrations. It can be thought of as Prisma for the .NET world and
              is indespensible.
            </Skill>
            <Skill title="Laravel">
              Laravel is a framework for building rich web applications with
              PHP. It provides practically everything you would need out of the
              box, has excellent documentation, and has a rich ecosystem of
              packages to simplify most tasks.
            </Skill>
            <Skill title="NestJS">
              NestJS is a framework for building web servers using TypeScript
              that is heavily inspired by AngularJS. It makes heavy use of
              dependency-injection and the MVC pattern to make building complex
              applications easy.
            </Skill>
            <Skill title="Next.js">
              Next.js is one of the leading frameworks for building full-stack
              React applications that run in traditional server environments,
              serverless environments, or as static sites.
            </Skill>
            <Skill title="Phoenix">
              Phoenix is a framework for building web applications with Elixir
              that allows you to build real-time applications with ease. It is
              also incredibly resilient thanks to the Erlang VM.
            </Skill>
            <Skill title="Remix">
              Remix is a new framework that builds on top of web standards and
              allows you to build full-stack applications with ease. It takes
              care of a lot of edge cases around data mutation and refreshing
              that you would otherwise have to solve yourself.
            </Skill>
          </SkillsSection>
          <SkillsSection title="Applications">
            <Skill title="Affinity Designer">
              Similar to Photoshop, Affinity Designer is a tool that I use to
              create various graphics, especially for print jobs. It has an
              elegant interface and is highly performant.
            </Skill>
            <Skill title="DBeaver">
              DBeaver is my go-to tool for interacting with SQL databases. It
              makes it easy to see and edit data as well as ensure secure
              environments that force transactions and prevent accidental
              operations.
            </Skill>
            <Skill title="Git">
              Git is the de-facto version control system for software. I use it
              for all of my projects, regardless of their size or complexity.
            </Skill>
            <Skill title="Oh My Zsh">
              Oh My Zsh is a framework for customizing your terminal experience
              that I use on Mac as well as in Ubuntu (WSL). It has a large
              community of users and a lot of plugins to extend its
              functionality.
            </Skill>
            <Skill title="Photoshop">
              While not related to programming, Photoshop is a tool that I find
              myself using quite often to edit images and create graphics. I've
              been using it for over 10 years and have a good understanding of
              how to do most things in it.
            </Skill>
            <Skill title="Postman">
              Postman is one of the most useful tools for interacting with APIs.
              It provides a centralized hub for making requests to your API,
              writing tests to ensure your API is correct, and allows you to
              easily share your work with others.
            </Skill>
            <Skill title="Turbo Repo">
              I am not sure if Turbo Repo is considered an application, but it
              is a powerful build tool for managing and coordinating
              dependencies across a monorepo.
            </Skill>
            <Skill title="Visual Studio Code">
              Visual Studio Code is my preferred editor for writing code. It has
              an incredibly varied and useful extension ecosystem allowing you
              to customize and configure it to your liking.
            </Skill>
          </SkillsSection>
        </div>
      </SimpleLayout>
    </>
  );
}
