"use client";
import { Text, Tooltip } from "@radix-ui/themes";
import Link from "next/link";

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
              <Tooltip content="Add to library">
    <li>
        <Link href={href} passHref rel='noopener noreferrer' key={index} aria-label={tooltip}>
        <Text size="1">{title}</Text>
        </Link>
    </li>
    </Tooltip>
      ))}
    </>
  );
};

export default FooterLinks;