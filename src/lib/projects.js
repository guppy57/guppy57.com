import logoPokedex from '@/images/logos/pokedex.png';
import logoKreativeID from '@/images/logos/id.png';
import logoKreativeHyperlink from '@/images/logos/hyperlink.png';
import logoKTemplates from '@/images/logos/ktemplates.png';
import logoKreativeHorizon from '@/images/logos/kreativehorizon.png';

const projects = [
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
    description: '24-hour hackathon for the brightest students at Iowa State.',
    link: {
      href: 'https://kreativehorizon.com/hackisu',
      label: 'kreativehorizon.com/hackisu',
    },
    logo: logoKreativeHorizon,
    skills: ['Events', 'Sales', 'Graphic Design'],
    featured: true,
  },
];

export default projects;
