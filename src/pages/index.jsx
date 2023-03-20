import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Container } from '@/components/Container';
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from '@/components/SocialIcons';
import { LinkIcon } from '@/components/LinkIcon';
import logoTpusa from '@/images/logos/tpusa.jpeg';
import logoDreamflow from '@/images/logos/dreamflow.png';
import logoJohnDeere from '@/images/logos/john-deere.png';
import logoKreative from '@/images/logos/kreative.png';
import logoIsu from '@/images/logos/isu.jpeg';
import image1 from '@/images/guppyPhotos/image1.jpg';
import image2 from '@/images/guppyPhotos/image2.jpg';
import image3 from '@/images/guppyPhotos/image3.jpg';
import image4 from '@/images/guppyPhotos/image4.jpg';
import image5 from '@/images/guppyPhotos/image5.jpg';
import { formatDate } from '@/lib/formatDate';
import { generateRssFeed } from '@/lib/generateRssFeed';
import { getAllArticles } from '@/lib/getAllArticles';
import projects from '@/lib/projects';
import { useEffect } from 'react';

function MailIcon(props) {
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
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  );
}

function BriefcaseIcon(props) {
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

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  );
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  );
}

function Resume() {
  let resume = [
    {
      company: 'John Deere',
      title: 'Software Engineer',
      logo: logoJohnDeere,
      start: 'Nov 2022',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'CyStarters',
      title: 'Cohort Member',
      logo: logoIsu,
      start: 'Aug 2021',
      end: 'May 2022',
    },
    {
      company: 'Student Innovation Center',
      title: 'Project Manager',
      logo: logoIsu,
      start: 'Oct 2021',
      end: 'May 2022',
    },
    {
      company: 'President',
      title: 'Turning Point USA',
      logo: logoTpusa,
      start: 'Aug 2021',
      end: 'May 2022',
    },
    {
      company: 'Kreative Dreamflow',
      title: 'Web Developer',
      logo: logoDreamflow,
      start: 'Sep 2020',
      end: 'Present',
    },
    {
      company: 'Kreative',
      title: 'Founder & CEO',
      logo: logoKreative,
      start: 'June 2018',
      end: 'Present',
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
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={role.logo}
                alt=""
                className="h-full w-full rounded-full"
                unoptimized
              />
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
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button
        href="https://drive.google.com/file/d/1qltXlWbZEmWRnwh8QdYImB6RuwlgjESw/view"
        target="_blank"
        variant="secondary"
        className="group mt-6 w-full"
      >
        Download Resume
        <ArrowTopRightOnSquareIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  );
}

function Photos() {
  let rotations = [
    'rotate-2',
    '-rotate-2',
    'rotate-2',
    'rotate-2',
    '-rotate-2',
  ];

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image4, image2, image3, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home({ articles }) {
  const [featuredProjects, setFeaturedProjects] = useState([]);

  useEffect(() => {
    setFeaturedProjects(projects.filter((project) => project.featured));
  }, [projects]);

  return (
    <>
      <Head>
        <title>
          Armaan Gupta - Software engineer and designer to aid the human
          condition.
        </title>
        <meta
          name="description"
          content="I'm Armaan, a software engineer, designer and entrepreneur based in Ames, Iowa."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software engineer and designer to aid the human condition.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Armaan, a software engineer, designer and entrepreneur based in
            Ames, Iowa. I&apos;m currently studying Management Information
            Systems at Iowa State. When I&apos;m skipping class, it&apos;s
            usually to work on my company, Kreative, where I&apos;m hacking
            together products and services to make people&apos;s lives a tad bit
            easier.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://instagram.com/armaangupta57"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com/guppy57"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com/in/armaangupta57"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold dark:text-white">
              Hello, I&apos;m Guppy 👋
            </h2>
            <p className="dark:text-white">
              As a current student at Iowa State University studying Management
              Information Systems, I don&apos;t get out too much, so I used my
              nifty programming skills to build this website so you can get to
              know me a little better.
            </p>
            <p className="pb-2 dark:text-white">
              When I'm not in class or crying about some test, I'm probably
              working on my company, Kreative, where I&apos;m designing or
              developing something I find interesting. Or, I&apos;m fixing bugs
              at John Deere as a student software engineer.
            </p>
            <Link
              href="/about"
              className="text-left text-purple-500 hover:text-purple-700 dark:text-purple-300 dark:hover:text-purple-400"
            >
              Read the full story &rarr;
            </Link>
            <h2 className="pt-6 text-2xl font-bold dark:text-white">
              Featured projects
            </h2>
            <div className="mt-6">
              <ul className="grid grid-cols-1 gap-x-12 gap-y-16" role="list">
                {featuredProjects.map((project) => (
                  <Card as="li" key={project.name}>
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                      <Image
                        src={project.logo}
                        alt=""
                        className="h-full w-full rounded-full"
                        unoptimized
                      />
                    </div>
                    <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                      <Card.Link href={project.link.href}>
                        {project.name}
                      </Card.Link>
                    </h2>
                    <Card.Description>{project.description}</Card.Description>
                    <Card.Skills>
                      {project.skills.map((skill) => (
                        <Card.Skill key={skill}>{skill}</Card.Skill>
                      ))}
                    </Card.Skills>
                    <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-purple-500 dark:text-zinc-200">
                      <LinkIcon className="h-6 w-6 flex-none" />
                      <span className="ml-2">{project.link.label}</span>
                    </p>
                  </Card>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed();
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  };
}
