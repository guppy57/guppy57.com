import Head from 'next/head';
import Image from 'next/image';

import { Card } from '@/components/Card';
import { SimpleLayout } from '@/components/SimpleLayout';
import projects from '@/lib/projects';
import { LinkIcon } from '@/components/LinkIcon';

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Armaan Gupta</title>
        <meta
          name="description"
          content="Things I've made trying to put a scratch on the universe."
        />
      </Head>
      <SimpleLayout
        label="My projects"
        title="Things I've made trying to put a scratch on the universe."
        intro="I have found that my work gives me meaning and while I have worked on quite the number of projects, here are the ones I am most proud of. For me, building products and services that people genuinely enjoy is the most rewarding thing I can do."
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
                  className="h-full w-full rounded-full"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
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
      </SimpleLayout>
    </>
  );
}
