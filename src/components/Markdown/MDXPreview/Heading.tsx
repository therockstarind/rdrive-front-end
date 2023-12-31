"use client";
import { ReactNode } from 'react';

import AnimatedDiv from '®/components/FramerMotion/AnimatedDiv';
import { fromLeftVariant } from '®/lib/FramerMotionVariants';

interface HeadingProps {
  children: ReactNode;
  id?: string;
}

const createHeading = (level: 1 | 2 | 3 | 4 | 5 | 6) => {
  return ({ children, id }: HeadingProps) => {
    const Heading = `h${level}` as keyof JSX.IntrinsicElements;

    const content = (level === 1 || level === 2 || level === 3)  ? (
      <AnimatedDiv variants={fromLeftVariant}>
        {children} <span className="heading-anchor">#️</span>
      </AnimatedDiv>
    ) : (
      <>{children} <span className="heading-anchor">#️</span></>
    );

    return (
      <Heading id={id} className="flex items-center gap-1 heading-link" aria-label={id}>
        <a href={`#${id}`} className="no-underline text-pretty" >
          {content}
        </a>
      </Heading>
    );
  };
};

export const H1 = createHeading(1);
export const H2 = createHeading(2);
export const H3 = createHeading(3);
export const H4 = createHeading(4);
export const H5 = createHeading(5);
export const H6 = createHeading(6);
