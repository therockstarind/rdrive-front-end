"use client";
import { Text, Tooltip } from "@radix-ui/themes";
import Link from "next/link";
import LegalLinks from "./LegalLinks";
import React from "react";

const FooterLinks = () => {
    const FooterLinks: { href: string; title: string; tooltip: string;}[] = [
        {
          href: '/FRP',
          title: 'FRP',
          tooltip: 'FRP Bypass Files & Tool',
        },
        {
          href: '/Drivers',
          title: 'Drivers',
          tooltip: 'Android USB Flashing Driver',
        },
        {
          href: '/Flash-Tool',
          title: 'Flash Tool',
          tooltip: 'Mobile Flashing Tools',
        },
        {
          href: '/iCloud',
          title: 'iCloud Bypass',
          tooltip: 'Say goodbye to iCloud locks: Unlock now.',
        },
        {
          href: '/service-center-price-list',
          title: 'Parts Price List',
          tooltip: 'All Brand Parts Service Center Price List',
        },
        {
          href: `/sponsor`,
          title: 'Sponsor',
          tooltip: 'Show Your Love',
        },
        {
          href: `https://status.rdrive.org/`,
          title: 'Status',
          tooltip: 'APIs Status Check',
        },  
        {
          href: `/sitemap.xml`,
          title: 'Sitemap',
          tooltip: 'Sitemap Index URL',
        },
      ];

  return (
    <>
      {FooterLinks.map(({ href, title, tooltip }, index) => (
        <React.Fragment key={index} >
        {index === FooterLinks.length - 1 &&<LegalLinks />}
              <Tooltip content={tooltip}>
    <li>
        <Link href={href} aria-label={tooltip}  className="text-[#666] dark:text-[#888] hover:text-black dark:hover:text-white">
        <Text size="2">{title}</Text>
        </Link>
    </li>
    </Tooltip>
    </React.Fragment>
      ))}
    </>
  );
};

export default FooterLinks;