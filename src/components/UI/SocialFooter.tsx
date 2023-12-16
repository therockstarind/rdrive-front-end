
import Link from "next/link";
import { GitHub, YouTube } from "../icons";

const SocialFooter = () => {
    const socialIcons = [
        {
          title: 'Github',
          href: ``,
          icon: <GitHub />,
        },
        {
          title: 'YouTube',
          href: ``,
          icon: <YouTube />,
        }
      ];

  return (
    <div className='flex justify-center items-center gap-5'>
      {socialIcons.map(({ href, icon, title }, index) => (
        <Link href={href} target='_blank' rel='noopener noreferrer' key={index} aria-label={title}>
          {icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialFooter;