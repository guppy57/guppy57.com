import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import { Container } from '@/components/Container';
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from '@/components/SocialIcons';
import portraitImage from '@/images/candidGuppy.jpeg';


function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-purple-500 dark:text-zinc-200 dark:hover:text-purple-300"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-purple-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

function MailIcon(props) {
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
        <title>About - Armaan Gupta</title>
        <meta
          name="description"
          content="I’m Spencer Sharp. I live in New York City, where I design the future."
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
              I&apos;m Armaan Gupta. I live in Ames, IA, where I build beautiful
              software for humans.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I&apos;ve been an entreprenuer since I was in elementary school
                when I started selling pens and pencils to fellow students. In
                middle school, I pivoted to selling second hand iPhones to kids
                who got theirs taken away. After that, I discovered how to make
                music with a Digital Audio Workstation (DAW) and started selling
                beats online. After that, I opened a failed gaming studio with a
                friend from my boy scout troop and a game developer in Romania I
                met on Reddit.
              </p>
              <p>
                Yet, near the end of high school, I found a bit of my stride:
                hackathons. After attending one on my own, I fell in love with
                the environment and connecting with fellow makers. So I decided
                to get into the hackathon business.
              </p>
              <p>
                In 2019, I ran my first event, BuildChicago, bringing together
                75 students from across the Chicagoland area. After that ended,
                I consulted on a few more hackathons and started working on four
                more across the nation. My business, Kreative, and the hackathon
                management subsidiary, Kreative Horizon, was going to bring over
                500 students together.
              </p>
              <p>
                Then COVID-19 came knocking. I had to shut down all of my events
                and pivotted to building beautiful websites for small businesses
                with my business Kreative Dreamflow. Today, I student Management
                Information Systems at Iowa State University (graduating in
                2024). In addition, I continue to run Kreative Dreamflow and am
                launching new hackathons in the greater Des Moines area. Plus, I
                work as a Software Engineer at John Deere with fellow ISU and
                UIUC students.
              </p>
              <p>
                Life&apos;s good and I&apos;m excited to continue to build
                useful and beautiful things for humans.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://instagram.com/armaangupta57"
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow on Instagram
              </SocialLink>
              <SocialLink
                href="https://github.com/guppy57"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://linkedin.com/in/armaangupta57"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:armaan@guppy.im"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                armaan@guppy.im
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
}
