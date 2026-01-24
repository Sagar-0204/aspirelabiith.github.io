import { SITE_CONFIG } from "@/lib/constants";

export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_CONFIG.baseUrl}#organization`,
    name: SITE_CONFIG.name,
    alternateName: SITE_CONFIG.fullName,
    url: SITE_CONFIG.baseUrl,
    logo: `${SITE_CONFIG.baseUrl}/logo.png`,
    description: `${SITE_CONFIG.fullName} at ${SITE_CONFIG.institution}. Research in autonomous robotic systems, deep reinforcement learning, perception, and intelligent control. The lab is primarily associated with the Department of Mechanical and Aerospace Engineering and actively works with students from the Department of Artificial Intelligence.`,
    parentOrganization: {
      "@type": "CollegeOrUniversity",
      "@id": "https://www.iith.ac.in#organization",
      name: "Indian Institute of Technology Hyderabad",
      alternateName: ["IIT Hyderabad", "IITH"],
      url: "https://www.iith.ac.in",
      logo: "https://www.iith.ac.in/assets/images/logo.png",
      sameAs: [
        "https://en.wikipedia.org/wiki/Indian_Institute_of_Technology,_Hyderabad",
        "https://www.linkedin.com/school/iithyd/",
        "https://twitter.com/IITHyderabad",
        "https://www.facebook.com/iithyd",
      ],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: `${SITE_CONFIG.address.line1}, ${SITE_CONFIG.address.line2}`,
      addressLocality: "Kandi, Sangareddy",
      addressRegion: "Telangana",
      postalCode: "502284",
      addressCountry: "IN",
    },
    employee: {
      "@type": "Person",
      name: "R Prasanth Kumar",
      url: "https://www.iith.ac.in/~rpkumar",
      jobTitle: "Professor",
      affiliation: {
        "@id": "https://www.iith.ac.in#organization",
      },
    },
    knowsAbout: [
      "Robotics",
      "Autonomous Systems",
      "Deep Reinforcement Learning",
      "Computer Vision",
      "Control Theory",
      "Artificial Intelligence",
      "UAVs",
      "Humanoid Robots",
      "Quadruped Robots",
      "Underwater Robotics",
    ],
    hasPart: {
      "@type": "WebPage",
      "@id": `${SITE_CONFIG.baseUrl}/publications`,
      name: "Research Publications",
    },
    sameAs: ["https://github.com/aspirelabiith"],
    affiliation: [
      {
        "@type": "Organization",
        name: "Department of Mechanical and Aerospace Engineering",
        url: "https://mae.iith.ac.in",
        parentOrganization: {
          "@id": "https://www.iith.ac.in#organization",
        },
      },
      {
        "@type": "Organization",
        name: "Department of Artificial Intelligence",
        url: "https://ai.iith.ac.in",
        parentOrganization: {
          "@id": "https://www.iith.ac.in#organization",
        },
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_CONFIG.baseUrl}#website`,
    url: SITE_CONFIG.baseUrl,
    name: `${SITE_CONFIG.name} - ${SITE_CONFIG.institution}`,
    description: `${SITE_CONFIG.fullName} research laboratory at IIT Hyderabad`,
    publisher: {
      "@id": `${SITE_CONFIG.baseUrl}#organization`,
    },
    inLanguage: "en-IN",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "IIT Hyderabad",
        item: "https://www.iith.ac.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Mechanical & Aerospace Engineering",
        item: "https://mae.iith.ac.in",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "ASPIRE Lab",
        item: SITE_CONFIG.baseUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
