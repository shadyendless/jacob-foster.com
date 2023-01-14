import clsx from 'clsx';
import Head from 'next/head';
import { useEffect } from 'react';

type Employment = {
  company: string;
  endDate: string;
  location: string;
  position: string;
  responsibilities: string[];
  highlightedProject: string;
  startDate: string;
};

const highlights: string[] = [
  `Over 9 years of full-stack development experience using frameworks such as ASP.NET, Laravel, Next.js, Remix, and Ruby on Rails.`,
  `Designed database schemas, migrated data and schemas in production environments, and coordinated data synching between SQL and NoSQL databases.`,
  `Gathered feedback from users and turned it into actionable items to improve existing features or develop new features to enhance the user experience.`,
  `Managed CI/CD pipelines with Docker, GitHub Actions, AWS CDK, the Serverless Framework, and cloud build tools.`,
];

const keyQualifications: string[] = [
  `React / Vue`,
  `CSS / SCSS`,
  `JavaScript / TypeScript`,
  `REST APIs`,
  `GraphQL / Apollo`,
  `Axios / Fetch`,
  `Webpack / Babel / Vite`,
  `Redux / Mobx / Jotai`,
  `React Dev Tools / Profiling`,
  `Accessibility / A11y / ARIA / WCAG`,
  `Responsive Design / Mobile First`,
  `Git / GitHub`,
];

const employments: Employment[] = [
  {
    company: `NativShark, Inc.`,
    endDate: `December 2022`,
    location: `Bellevue, WA / Fukuoka, Japan (Remote)`,
    position: `Chief Technology Officer (Lead Frontend Engineer)`,
    responsibilities: [
      `Crafted high-fidelity mockups for the student-facing site as well as the CMP in Figma and implemented them using styled-components and Tailwind CSS`,
      `Communicated with a GraphQL API using Apollo Client as well as graphql-request to query and mutate data as well as to subscribe to real-time updates`,
      `Debugged and fixed cross-browser inconsistencies as well as progressively-enhanced the site to work on older browsers`,
      `Focused on performance by reducing the amount of renders using hooks such as useMemo and useCallback as well as siloing state to appropriate components`,
      `Migrated a legacy codebase from React class-based components and Redux to React functional components with hooks and the React Context API`,
    ],
    highlightedProject: `NativShark is an all-in-one platform to teach people Japanese. To reduce the amount of overhead for our small team, we focused on ensuring that our mobile website was as performant as possible to avoid spending critical time on a native mobile application. We focused on ensuring that functionality was accurately translated across different display sizes and that it efficiently used the available space.`,
    startDate: `August 2019`,
  },
  {
    company: `Stone Soup Solutions`,
    endDate: `July 2019`,
    location: `Fort Worth, Texas (Remote)`,
    position: `Software Developer`,
    responsibilities: [
      `Converted mockups from designers into pixel-perfect custom themes for Wordpress and Magento in CSS`,
      `Implemented a complex, proprietary CRM using React which communicated with a REST API, focusing on efficient caching and state management`,
      `Took advantage of React Router and Redux to create a single-page application which allowed users to easily navigate between different pages without having to reload the entire application`,
      `Handled RBAC (role-based access control) and authorization using JWTs and restricted access to certain pages or functionality within pages based on the user's permissions`,
    ],
    highlightedProject: `One of our clients was a government contract agency in charge of generating background reports for various government agencies. This application was to be used in a management setting as well as in the field to input the appropriate data. I took charge to ensure that the management data could be effectively filtered and easily understood as well as ensuring that the forms were mobile-friendly and responsive for quick in-the-field updates.`,
    startDate: `October 2017`,
  },
  {
    company: `Common Tongue, Inc.`,
    endDate: `January 2017`,
    location: `Provo, Utah (Remote)`,
    position: `Director of Design`,
    responsibilities: [
      `Designed and developed a custom WordPress theme for a client using HTML, CSS, and JavaScript`,
      `Developed a companion application for Japanese: The Game using React Native which communicated over the native bridge to interact with a barcode scanning library to allow cards to be scanned to hear audio and get additional information about them`,
      `Prototyped a digital version of Japanese: The Game in React Native that allowed users to play the game on their phone or tablet as well as allow us to quickly playtest new ideas or rulesets`,
    ],
    highlightedProject: `Japanese: The Game is a card game that teaches people Japanese vocabulary and sentence structure. I was tasked with designing and developing a companion application for the game which allowed users to scan cards to hear audio and get additional information about them. I also took the initiative to work on a prototype for a digital version of the card game allowing the team to more quickly iterate on rulesets and ideas.`,
    startDate: `January 2015`,
  },
  {
    company: `UniverCity, Inc.`,
    endDate: `Present (Contractor)`,
    location: `Bowie, Maryland (Remote)`,
    position: `Lead Engineer / Contractor`,
    responsibilities: [
      `Implemented a CMS as well as a user-facing application using React and MaterialUI, communicating with a REST API via Axios`,
      `Managed complex forms and state management to coordinate multi-step registration processes which used localStorage to allow users to save their progress and return later`,
      `Integrated Google Maps to allow businesses locations to be plotted on a map and filtered by distance and used their Info Window API to create branded popups that displayed additional information about the business`,
      `Created a multi-tiered admin panel using React, Tailwind, and the React Context API to allow multiple user types to manage data in the system based on the access that they are granted`,
    ],
    highlightedProject: `I was approached to build a system for the government of Florida to help simplify the process of finding a physician. The system has complex, multi-step forms which change dynamically based on previous input. Using XState I was able to cleanly manage the state of each of the forms, ensure that navigation between steps could only occur when all of the prerequisites were met, and serialized that data to localStorage to enable the state machine to be re-instantiated upon returning to the site.`,
    startDate: `February 2013`,
  },
];

function FrontendResumePage() {
  useEffect(() => {
    document.body.classList.add('bg-white', 'dark:bg-white');
  }, []);

  return (
    <>
      <Head>
        <title>Frontend Resume - Jacob Foster</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Gilda+Display&family=IBM+Plex+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="mx-auto mt-4 mb-6 w-full max-w-[44rem] px-3 font-ibm-plex-serif text-sm leading-snug print:my-0 print:px-0 print:font-sans">
        <div className="text-center font-bold">Jacob Foster</div>
        <div className="flex flex-wrap justify-center gap-x-2 text-center text-xs print:flex-row print:items-center md:flex-row md:items-center">
          <a href="mailto:me@jacob-foster.com">me@jacob-foster.com</a>
          <span className="hidden print:inline md:inline">|</span>
          <a href="https://www.jacob-foster.com">www.jacob-foster.com</a>
          <span className="hidden print:inline md:inline">|</span>
          <span>Phone on request</span>
        </div>
        <div className="mt-2 font-bold print:hidden">
          Frontend expert with over 10 years of crafting clean, performant, and
          responsive interfaces
        </div>
        {/* <ul className="mt-1 list-disc px-8 text-xs leading-snug print:hidden">
          {highlights.map((highlight, index) => (
            <li key={`highlight-${index}`}>{highlight}</li>
          ))}
        </ul> */}
        <div className="mt-2 font-bold print:mt-0">Key Skills</div>
        <div className="mt-0 grid grid-cols-2 gap-x-6 text-xs leading-tight print:grid-cols-3 md:grid-cols-3">
          {keyQualifications.map((keyQualification, index) => (
            <span key={`key-qualification-${index}`}>{keyQualification}</span>
          ))}
        </div>
        <div className="mt-2 flex flex-col gap-y-3">
          {employments.map((employment, index) => (
            <div
              key={`employment-${index}`}
              className={clsx([
                `text-xs`,
                // employment.company.includes('Common Tongue')
                //   ? 'print:hidden'
                //   : '',
              ])}
            >
              <div className="leading-tight">
                <div className="flex flex-col justify-between print:flex-row print:items-center md:flex-row md:items-center">
                  <strong>{employment.position}</strong>
                  <span>
                    {employment.startDate} - {employment.endDate}
                  </span>
                </div>
                <span>
                  {employment.company}, {employment.location}
                </span>
              </div>
              <ul className="mt-2 list-disc px-8 leading-tight">
                {employment.responsibilities.map((responsibility, index) => (
                  <li key={`${employment.company}-responsibility-${index}`}>
                    {responsibility}
                  </li>
                ))}
              </ul>
              <div className="mt-1 font-bold italic print:hidden">
                Highlighted Project:
              </div>
              <p className="leading-tight print:hidden">
                {employment.highlightedProject}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-2 font-bold">Education</div>
        <div className="mt-1 flex flex-col gap-y-4">
          <div className="text-xs">
            <div className="leading-tight">
              <div className="flex flex-col justify-between print:flex-row print:items-center md:flex-row md:items-center">
                <strong>
                  Bachelor of Science in Software Engineering, Computers
                </strong>
                <span>2009 - 2014</span>
              </div>
              <span>Oregon Institute of Technology, Klamath Falls, Oregon</span>
            </div>
          </div>
          <div className="text-xs">
            <div className="leading-tight">
              <div className="flex items-center justify-between">
                <strong>
                  Associate of Engineering in Computer Engineering, Computers
                </strong>
                <span>2009 - 2011</span>
              </div>
              <span>Oregon Institute of Technology, Klamath Falls, Oregon</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

FrontendResumePage.displayName = 'ResumePage';

export default FrontendResumePage;
