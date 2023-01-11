import Head from 'next/head';
import { useEffect } from 'react';

type Employment = {
  company: string;
  endDate: string;
  location: string;
  position: string;
  responsibilities: string[];
  selectAccomplishments: string;
  startDate: string;
};

const highlights: string[] = [
  `Over 9 years of full-stack development experience using frameworks such as ASP.NET, Laravel, Next.js, Remix, and Ruby on Rails.`,
  `Designed database schemas, migrated data and schemas in production environments, and coordinated data synching between SQL and NoSQL databases.`,
  `Gathered feedback from users and turned it into actionable items to improve existing features or develop new features to enhance the user experience.`,
  `Managed CI/CD pipelines with Docker, GitHub Actions, AWS CDK, the Serverless Framework, and cloud build tools.`,
];

const keyQualifications: string[] = [
  `Project Management`,
  `Concise Communication`,
  `Training and Mentorship`,
  `TypeScript and React`,
  `Systems Integration`,
  `Test-Driven Development`,
  `Serverless Architecture`,
  `Monorepo Development`,
  `Database Design`,
  `Clean Code Principles`,
  `CI/CD`,
  `Event-Driven Architecture`,
];

const employments: Employment[] = [
  {
    company: `NativShark, Inc.`,
    endDate: `December 2022`,
    location: `Bellevue, WA / Fukuoka, Japan (Remote)`,
    position: `Chief Technology Officer`,
    responsibilities: [
      `Designed the interface for the current site as well as the new version in development and implemented it using styled-components and TailwindCSS`,
      `Integrated with Mecab, a lexical analyzer for Japanese, to intelligently parse sentences and enhance them with additional data`,
      `Architected a progression system that tracked what users understood, were struggling with, and what their tolerance was to provide an effective, burden-free learning experience`,
      `Mentored junior developers and helped them to better understand JavaScript and React, as well as how to be more effective in their roles`,
      `Maintained an active role in the Discord community to understand which parts of the system should be changed or what new features needed to be added to make learning Japanese easier and more effective`,
      `Balanced student requests with requests from the content team to ensure that both parties were able to effectively accomplish their goals`,
    ],
    selectAccomplishments: `Starting with a series of lessons written on the Teachable platform, I was able to architect and design an all-inclusive platform for people to learn actual Japanese. The system manages everything for users from ensuring they do not forget what they have already learned through to carefully showing them new content when they are ready for it. I also researched new technology to find ways to cut costs while providing enhanced experiences to our users. The last thing I did was re-create the site from the ground up on Remix, migrating everything from Elixir to TypeScript while also improving every aspect of the interface to address long-standing community issues.`,
    startDate: `August 2019`,
  },
  {
    company: `Stone Soup Solutions`,
    endDate: `July 2019`,
    location: `Fort Worth, Texas (Remote)`,
    position: `Software Developer`,
    responsibilities: [
      `Implemented pixel-perfect designs across multiple devices in Magento, Wordpress, and ASP.NET`,
      `Extended Magento to support custom functionality such as a custom checkout process which integrates with SheerID for identity verification and custom product builders`,
      `Researched new technologies and patterns to solve complex problems for clients, including solutions that can run on highly secure government servers`,
    ],
    selectAccomplishments: `One of our clients was a government contract agency which wanted to consolidate its processes for generating background check reports across all of its different organizations. I was tasked with extracting common data and patterns out of existing background reports to generate a form which agents could fill out to generate accurate background reports, including handling edge cases to ensure that the English was grammatically correct. For another client I was tasked with creating a custom integration between Magento and Fishbowl to better manage their stock levels so that accurate inventory reports could be generated and overselling of products could be mitigated.`,
    startDate: `October 2017`,
  },
  {
    company: `Common Tongue, Inc.`,
    endDate: `January 2017`,
    location: `Provo, Utah (Remote)`,
    position: `Director of Design`,
    responsibilities: [
      `Used Laravel and Wkhtmltopdf to create a generator which would take a user's input and generate PDFs which could be used to print cards for a language learning game`,
      `Created a companion mobile application using React Native allowing customers to scan barcodes on cards to hear native audio of the words on the cards as well as learn additional information`,
      `Prototyped a digital version of the game using React Native which allowed users to play the game on their phones or tablets`,
      `Wrote blog posts and social media updates across Twitter and Instagram to promote the game, teach people Japanese, and help increase sales through brand visibility`,
      `Designed posters and materials use at conventions to sell the game and promote the brand`,
      `Attended convetions as a merchant in Utah, Maryland, and Washington to sell the game`,
    ],
    selectAccomplishments: `When I first joined Common Tongue, Inc, there was an issue with organization as well as easily creating new cards to be included in their main product: Japanese The Game. My first task was to streamline this process by creating a process in which cards could be generated by simply filling out a form. After that, I was tasked with overseeing social media and marketing efforts to increase brand awareness and sales as well as coming up with new business strategies. Through attending conventions and selling the game directly to customers, I was able to better understand what people wanted from the game, leading to a native mobile application allowing customers to scan the cards for more information.`,
    startDate: `January 2015`,
  },
  {
    company: `UniverCity, Inc.`,
    endDate: `Present (Contractor)`,
    location: `Bowie, Maryland (Remote)`,
    position: `Lead Engineer`,
    responsibilities: [
      `Designed a 3D recreation of the University of Oregon and its surrounding area in Unity and C# which communicated with a backend server to provide business details and special deals for students`,
      `Reverse-engineered the existing system from Java to Ruby on Rails after the previous engineer left the company and did not provide any details surrounding the codebase to avoid downtime`,
      `Gathered requirements and built a system for companies to easily sell remaining products to interested merchants at bulk discounts in MongoDB and MeteorJS, including email and SMS campaigns`,
      `Used Laravel and test-driven development to build a system that allows businesses to create interactive ads, promote events, and provide exclusive deals to local residents`,
      `Architected a system for the government of Florida which allows health care professionals to easily submit and update their information so that patients can quickly find doctors which accept their insurance and provide necessary treatments`,
    ],
    selectAccomplishments: `I first started working for UniverCity, Inc when I was still in college and they needed someone who knew C# and Unity. My first job was coordinating with the existing engineer to dynamically retrieve data from a server to show students inside of the Unity application. When that engineer left, I was given full responsibility over the entire project and taught myself Ruby on Rails to reverse-engineer the existing Java system that was in place. From then I moved onto building entirely new systems to solve unique problems that businesses were facing from scratch, taking control of the projects from start to finish.`,
    startDate: `February 2013`,
  },
];

function ResumePage() {
  useEffect(() => {
    document.body.classList.add('bg-white', 'dark:bg-white');
  }, []);

  return (
    <>
      <Head>
        <title>Resume - Jacob Foster</title>
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
      <div className="mx-auto mt-4 mb-6 w-full max-w-[44rem] px-3 font-ibm-plex-serif text-sm print:px-0 print:font-sans">
        <div className="text-center font-bold">Jacob Foster</div>
        <div className="flex items-center justify-center gap-x-2 text-xs">
          <a href="mailto:me@jacob-foster.com">me@jacob-foster.com</a>
          <span>|</span>
          <a href="https://www.jacob-foster.com">www.jacob-foster.com</a>
          <span>|</span>
          <span>phone on request</span>
        </div>
        <div className="mt-4 font-bold">
          Full-Stack expert taking solutions from idea to reality, focusing on
          developer and user experiences
        </div>
        <ul className="mt-1 list-disc px-8 text-xs leading-snug">
          {highlights.map((highlight, index) => (
            <li key={`highlight-${index}`}>{highlight}</li>
          ))}
        </ul>
        <div className="mt-4 font-bold">Key Qualifications</div>
        <div className="mt-1 grid grid-cols-2 gap-x-6 text-xs leading-tight md:grid-cols-3">
          {keyQualifications.map((keyQualification, index) => (
            <span key={`key-qualification-${index}`}>{keyQualification}</span>
          ))}
        </div>
        <div className="mt-4 font-bold">
          Professional Experience & Select Accomplishments
        </div>
        <div className="mt-1 flex flex-col gap-y-4">
          {employments.map((employment, index) => (
            <div key={`employment-${index}`} className="text-xs">
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
              <div className="mt-1 font-bold italic">
                Select Accomplishments:
              </div>
              <p className="leading-tight">
                {employment.selectAccomplishments}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-4 font-bold">Education</div>
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

ResumePage.displayName = 'ResumePage';

export default ResumePage;
