import logoPokedex from '@/images/logos/pokedex.png';
import logoKreativeID from '@/images/logos/id.png';
import logoKreativeHyperlink from '@/images/logos/hyperlink.png';
import logoKTemplates from '@/images/logos/ktemplates.png';
import logoKreativeHorizon from '@/images/logos/kreativehorizon.png';
import logoDocuvet from '@/images/logos/kreativedocuvet.png';

const projects = [
  {
    name: 'Kreative DocuVet',
    description: 'AI powered scribe for the everyday veterinarian',
    link: {
      href: 'https://kreativedocuvet.com',
      label: 'kreativedocuvet.com',
    },
    logo: logoDocuvet,
    skills: ['AI', 'Marketing', 'Next.js'],
    featured: true,
  },
  {
    name: 'DataISU v1',
    description:
      'First 24-hour datathon at Iowa State for 40 students',
    link: {
      href: 'https://kreativehorizon.com/events/dataisu-v1',
      label: 'kreativehorizon.com/events/dataisu-v1',
    },
    logo: logoKreativeHorizon,
    skills: ['Events', 'Data', 'Marketing'],
    featured: true,
  },
  {
    name: 'HackIowaState v2',
    description:
      '24-hour hackathon for 140 students at Iowa State from 6 schools.',
    link: {
      href: 'https://kreativehorizon.com/events/hackisu-v2',
      label: 'kreativehorizon.com/events/hackisu-v2',
    },
    logo: logoKreativeHorizon,
    skills: ['Event Management', 'Marketing'],
    featured: true,
  },
  {
    name: 'Kreative ID',
    description:
      'Cross-service identity authentication and authorization service for Kreative.',
    link: {
      href: 'https://github.com/kreative/id-api',
      label: 'github.com',
    },
    logo: logoKreativeID,
    skills: ['TypeScript', 'Nest.js', 'React', 'SQL'],
    featured: false,
  },
  {
    name: 'kreativehorizon.com',
    description: 'Next.js and Sanity website for Kreative Horizon with built-in events manager.',
    link: {
      href: 'https://github.com/kreative/kreativehorizon.com',
      label: 'github.com',
    },
    logo: logoKreativeHorizon,
    skills: ['Next.js', 'Sanity', 'Tailwind CSS'],
    featured: false,
  },
  {
    name: 'Kreative Hyperlink',
    description:
      'Blazing-fast and free URL shortening service with analytics, leaderboards, and more.',
    link: {
      href: 'https://kreativehyperlink.com',
      label: 'kreativehyperlink.com',
    },
    logo: logoKreativeHyperlink,
    skills: ['Nest.js', 'TypeScript', 'React', 'Next,js'],
    featured: false,
  },
  {
    name: "Armaan's Pokedex",
    description:
      'A simple Pokedex app built with Next.js and PokeAPI, just for fun.',
    link: {
      href: 'https://pokedex.kreativeusa.com',
      label: 'pokedex.kreativeusa.com',
    },
    logo: logoPokedex,
    skills: ['TypeScript', 'Next.js', 'PostgreSQL'],
    featured: false,
  },
  {
    name: 'Kreative Templates',
    description: 'Peer to peer marketplace to share Obsidian templates.',
    link: {
      href: 'https://kreativetemplates.co',
      label: 'kreativetemplates.co',
    },
    logo: logoKTemplates,
    skills: ['Next.js', 'Nest.js', 'PostgreSQL'],
    featured: true,
  },
  {
    name: 'HackIowaState v1',
    description: '24-hour hackathon for 50+ students at Iowa State.',
    link: {
      href: 'https://kreativehorizon.com/events/hackisu-v1',
      label: 'kreativehorizon.com/events/hackisu-v1',
    },
    logo: logoKreativeHorizon,
    skills: ['Events', 'Sales', 'Graphic Design'],
    featured: true,
  },
];

export default projects;
