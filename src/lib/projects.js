import logoPokedex from '@/images/logos/pokedex.png';
import logoKreativeID from '@/images/logos/id.png';
import logoKreativeHyperlink from '@/images/logos/hyperlink.png';

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
    featured: true,
  },
  {
    name: 'Kreative Hyperlink',
    description:
      'Blazing-fast and free URL shorterner with analytics, leaderboards, and more.',
    link: {
      href: 'https://kreativehyperlink.com',
      label: 'kreativehyperlink.com',
    },
    logo: logoKreativeHyperlink,
    skills: ['Nest.js', 'TypeScript', 'React', 'Next,js'],
    featured: true,
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
];

export default projects;