import { IWorkCardProps } from "./WorksList.components/WorkCard";
import glibSrc from '../../../public/images/glib.png';
import nftSrc from '../../../public/images/nft.png';
import cartySrc from '../../../public/images/carty.png';
import dsSrc from '../../../public/images/ds.png';

export const WORKS_LIST: IWorkCardProps[] = [
  {
    name: 'Glib Portfolio',
    image: glibSrc,
    description: 'Digital agency is a landing page built with the latest version of next.js using best practices.',
    tags: [
      { text: 'HTML'  },
      { text: 'Tailwind' },
      { text: 'Typescript' },
      { text: 'Next.js' }
    ],
    year: '2023'
  },
    {
    name: 'NFT Marketplace',
    image: nftSrc,
    description: 'Digital agency is a landing page built with the latest version of next.js using best practices.',
    tags: [
      { text: 'HTML'  },
      { text: 'Tailwind' },
      { text: 'Typescript' },
      { text: 'Next.js' }
    ],
    year: '2023'
  },
    {
    name: 'Fintech landing',
    image: cartySrc,
    description: 'Digital agency is a landing page built with the latest version of next.js using best practices.',
    tags: [
      { text: 'HTML'  },
      { text: 'Tailwind' },
      { text: 'Typescript' },
      { text: 'Next.js' }
    ],
    year: '2023'
  },
    {
    name: 'Digital Agency',
    image: dsSrc,
    description: 'Digital agency is a landing page built with the latest version of next.js using best practices.',
    tags: [
      { text: 'HTML'  },
      { text: 'Tailwind' },
      { text: 'Typescript' },
      { text: 'Next.js' }
    ],
    year: '2023'
  }
]