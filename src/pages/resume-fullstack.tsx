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
  `Over 9 years of full-stack development experience using frameworks such as Next.js, Remix, Laravel, and Ruby on Rails.`,
  `Designed database schemas, migrated data and schemas in production environments, and coordinated data synching between SQL and NoSQL databases.`,
  `Gathered feedback from users and turned it into actionable items to improve existing features or develop new features to enhance the user experience.`,
  `Managed CI/CD pipelines with Docker, GitHub Actions, AWS CDK, the Serverless Framework, and cloud build tools.`,
];

const keyQualifications: string[] = [
  `React / Vue`,
  `TypeScript / JavaScript`,
  `Tailwind / CSS`,
  `Next.js / Remix`,
  `Laravel / Ruby on Rails`,
  `Kafka / Cloud PubSub`,
  `SQL (Postgres, MySQL, SQLServer)`,
  `NoSQL (MongoDB, DynamoDB)`,
  `Redis / Memcached`,
  `REST / GraphQL`,
  `CI/CD`,
  `Serverless Development`,
  `Event-Driven Architectures`,
  `Domain-Driven Design`,
  `Cloud-Native Development`,
];

const employments: Employment[] = [
  {
    company: `NativShark, Inc.`,
    endDate: `December 2022`,
    location: `Bellevue, WA / Fukuoka, Japan (Remote)`,
    position: `Chief Technology Officer`,
    responsibilities: [
      `Crafted high-fidelity mockups for the student-facing site as well as the CMP in Figma and implemented them using styled-components and Tailwind CSS`,
      `Integrated with system-level programs such as Mecab and FFMPEG via Node.js to analyze Japanese sentences, normalize and trim audio files, and stitch audio files together on demand`,
      `Designed a proprietary system using numerous data points to ensure users do not forget what they have learned as well as show them new information only when they are ready for it`,
      `Mentored junior developers and helped them to better understand JavaScript, TypeScript, and React, as well as how to be more confident and effective in their roles`,
      `Maintained open channels with users, shareholders, and institutions to gather feedback, organize it into actionable items, and place those items into sprints`,
      `Coordinated data production and consumption across multiple cloud services using Kafka, Amazon SNS/SQS, API Gateway, MongoDB Change Streams, and PostgreSQL subscriptions`,
    ],
    highlightedProject: `NativShark is an all-in-one platform to teach people Japanese. Starting from zero, students can log in and simply press "Study Now", do what the system presents itself, and be done for the day. With our proprietary technology, we track everything they know, how it relates to what is coming up, and deliver a path that they automatically follow that teaches them at a pace unique to them.`,
    startDate: `August 2019`,
  },
  {
    company: `Stone Soup Solutions`,
    endDate: `July 2019`,
    location: `Fort Worth, Texas (Remote)`,
    position: `Software Developer`,
    responsibilities: [
      `Converted mockups from designers into pixel-perfect custom themes for Wordpress and Magento in CSS`,
      `Wrote custom extensions for Magento providing inventory management, custom course creation, and unique checkout flows`,
      `Standardized a manual process of data collection and report generation by extracting key features of reports and creating a system which generated standardized, natural language PDF reports using C# and XPath analysis`,
      `Increased the efficiency of background report generation and the amount of reports that could be handled via a proprietary report generation system and CRM`,
    ],
    highlightedProject: `One of our clients was a government contract agency in charge of generating background reports for various government agencies. Each of these reports had different requirements in terms of their final design as well as the data that was required. I looked through hundreds of sample reports to generate standard formats for each of the report types and came up with an interface that agents could use in the field to easily and accurately input data.`,
    startDate: `October 2017`,
  },
  {
    company: `Common Tongue, Inc.`,
    endDate: `January 2017`,
    location: `Provo, Utah (Remote)`,
    position: `Director of Design`,
    responsibilities: [
      `Architected a playing card generation system using Laravel which could generate custom, print-ready cards for Japanese: The Game`,
      `Developed a companion application for Japanese: The Game using React Native which allowed players to scan cards for additional information`,
      `Prototyped a digital version of Japanese: The Game to allow for easier playtesting and to allow for a more accessible version of the game`,
    ],
    highlightedProject: `Japanese: The Game is a card game that teaches people Japanese vocabulary and sentence structure. It was originally built using spreadsheets, scattered images, and Photoshop files for creating the cards. I took the data that was on each of the cards and built a system allowing cards to be generated based on the input data that could be immediately sent to print.`,
    startDate: `January 2015`,
  },
  {
    company: `UniverCity, Inc.`,
    endDate: `Present (Contractor)`,
    location: `Bowie, Maryland (Remote)`,
    position: `Lead Engineer / Contractor`,
    responsibilities: [
      `Recreated the University of Oregon and its surrounding area in Unity3D and talked with an external API to retrieve data about businesses in the local area`,
      `Reverse-engineered an existing Java API and rewrote it in Ruby on Rails using test-driven development and the strangler pattern to allow for a smooth transition from the old system to the new system`,
      `Designed a B2B application that allows businesses to sell leftover products to interested buys in bulk at a discounted price using Meteor, React, MongoDB, and Twilio`,
      `Wrote a B2C application using Laravel and React which allows community members to easily find events and deals with local businesses as well as allowing businesses to create events, deals, and coupons for their community`,
      `Architected a system using Remix and React for the government of Florida which allows health care professionals to easily submit and update their information so that patients can quickly find doctors which accept their insurance and provide necessary treatments`,
    ],
    highlightedProject: `I was approached to build a system for the government of Florida to help simplify the process of finding a physician. The system has a complex authorization system which allows for one-directional account control and management, as well as auditing. Hospitals, HPCGs, and independent doctors can update their information such as accepted insurances, offered services, and areas of operation and patients can quickly filter this information and find the best physician for themselves.`,
    startDate: `February 2013`,
  },
];

function FullstackResumePage() {
  useEffect(() => {
    document.body.classList.add('bg-white', 'dark:bg-white');
  }, []);

  return (
    <>
      <Head>
        <title>Fullstack Resume - Jacob Foster</title>
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
      <div className="mx-auto mt-4 mb-6 w-full max-w-[44rem] px-3 font-ibm-plex-serif text-sm leading-snug print:px-0 print:font-sans">
        <div className="text-center font-bold">Jacob Foster</div>
        <div className="flex flex-wrap justify-center gap-x-2 text-center text-xs print:flex-row print:items-center md:flex-row md:items-center">
          <a href="mailto:me@jacob-foster.com">me@jacob-foster.com</a>
          <span className="hidden print:inline md:inline">|</span>
          <a href="https://www.jacob-foster.com">www.jacob-foster.com</a>
          <span className="hidden print:inline md:inline">|</span>
          <span>Phone on request</span>
        </div>
        <div className="mt-2 font-bold print:hidden">
          Full-Stack expert taking solutions from idea to reality, focusing on
          developer and user experiences
        </div>
        <ul className="mt-1 list-disc px-8 text-xs leading-snug print:hidden">
          {highlights.map((highlight, index) => (
            <li key={`highlight-${index}`}>{highlight}</li>
          ))}
        </ul>
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
                employment.company.includes('Common Tongue')
                  ? 'print:hidden'
                  : '',
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

FullstackResumePage.displayName = 'FullstackResumePage';

export default FullstackResumePage;
