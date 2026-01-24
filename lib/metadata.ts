import { Metadata } from "next";
import { SITE_CONFIG } from "./constants";

export function createMetadata({
  title,
  description,
  keywords = [],
  type = "website",
  path = "",
}: {
  title: string;
  description: string;
  keywords?: string[];
  type?: "website" | "article";
  path?: string;
}): Metadata {
  const baseKeywords = [
    "robotics research",
    "autonomous systems",
    "IIT Hyderabad",
    "IITH",
    "Indian Institute of Technology Hyderabad",
    "artificial intelligence",
    "machine learning",
    "robotics lab",
    "research laboratory India",
  ];

  const url = path ? `${SITE_CONFIG.baseUrl}${path}` : SITE_CONFIG.baseUrl;

  return {
    title,
    description,
    keywords: [...baseKeywords, ...keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      type,
      url,
      siteName: `${SITE_CONFIG.name} - ${SITE_CONFIG.institution}`,
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export const ROOT_METADATA: Metadata = {
  metadataBase: new URL(SITE_CONFIG.baseUrl),
  title: {
    default: `${SITE_CONFIG.name} - Robotics Research Lab at ${SITE_CONFIG.institution}`,
    template: `%s | ${SITE_CONFIG.name} - ${SITE_CONFIG.institution}`,
  },
  description: `${SITE_CONFIG.fullName} (${SITE_CONFIG.name}) at Indian Institute of Technology Hyderabad (IIT Hyderabad). Leading research in autonomous robotic systems, deep reinforcement learning, computer vision, UAVs, humanoid robots, and intelligent control systems.`,
  keywords: [
    "robotics research",
    "autonomous systems",
    "IIT Hyderabad",
    "IITH",
    "Indian Institute of Technology Hyderabad",
    "artificial intelligence",
    "machine learning",
    "deep reinforcement learning",
    "computer vision",
    "control systems",
    "robotics lab India",
    "autonomous robots",
    "UAV research",
    "humanoid robotics",
    "quadruped robots",
    "research laboratory",
    "MAE IIT Hyderabad",
    "mechanical engineering research",
  ],
  authors: [
    { 
      name: `${SITE_CONFIG.name}`,
      url: SITE_CONFIG.baseUrl,
    },
    {
      name: `R Prasanth Kumar, ${SITE_CONFIG.institution}`,
      url: "https://www.iith.ac.in/~rpkumar",
    }
  ],
  creator: `${SITE_CONFIG.name}, ${SITE_CONFIG.institution}`,
  publisher: SITE_CONFIG.institution,
  alternates: {
    canonical: SITE_CONFIG.baseUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_CONFIG.baseUrl,
    siteName: `${SITE_CONFIG.name} - ${SITE_CONFIG.institution}`,
    title: `${SITE_CONFIG.name} - Robotics Research Lab at ${SITE_CONFIG.institution}`,
    description: `${SITE_CONFIG.fullName} at IIT Hyderabad. Leading research in autonomous robots, AI, and intelligent systems.`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} - ${SITE_CONFIG.institution}`,
    description: `${SITE_CONFIG.fullName} at IIT Hyderabad`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
