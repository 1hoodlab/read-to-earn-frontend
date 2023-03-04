import { NextSeoProps } from "next-seo";

export const NEXT_SEO_DEFAULT: NextSeoProps = {
  titleTemplate: '%s',
  defaultTitle: 'Snews',
  description: "News of Web3",
  openGraph: {
    type: "website",
    locale: "en_IE",
    title: "Open Graph Snews",
    images: [
        {
            url: '',
            width: 800,
            height: 600,
            alt: 'OG Image Alt Snews',
            type: 'image/jpeg',
        }
    ]
  },
  twitter: {
    handle: '@hoando',
    site: '@snews',
    cardType: 'summary_large_image'
  },
};
