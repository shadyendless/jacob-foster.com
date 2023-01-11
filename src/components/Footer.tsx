import Link from 'next/link';

import { Container } from '@/components/Container';
import { type NavigationItemProps } from '@/types';

function NavLink({ href, children }: NavigationItemProps) {
  return (
    <Link
      href={href}
      className="transition hover:text-indigo-500 dark:hover:text-indigo-400"
    >
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/about">About</NavLink>
                {/* <NavLink href="/projects">Projects</NavLink> */}
                {/* <NavLink href="/languages">Languages</NavLink> */}
                <NavLink href="/skills">Skills</NavLink>
                <NavLink href="/resume">Resume</NavLink>
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Jacob Foster. All rights
                reserved.
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  );
}
