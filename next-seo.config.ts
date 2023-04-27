import { NextSeoProps } from "next-seo";

const DESCRIPTION_DEFAULT =
  "To attain such decentralized ownership for a new internet architecture, Web 3.0’s proponents argue for a blockchain-oriented structuring of the internet, with the onus of participation and possession relegated to the user at the centre. ";
export const NEXT_SEO_DEFAULT: NextSeoProps = {
  titleTemplate: "%s",
  defaultTitle: "Snews",
  description: DESCRIPTION_DEFAULT,
  openGraph: {
    type: "website",
    locale: "en_IE",
    title: "Open Graph Snews",
    images: [
      {
        url: "/assets/paper.jpeg",
        width: 800,
        height: 600,
        alt: "OG Image Alt Snews",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    handle: "@hoando",
    site: "@snews",
    cardType: "summary_large_image",
  },
};
