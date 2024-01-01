"use client";
import React, { ReactNode } from 'react';

interface HeadingProps {
  children: ReactNode;
  id?: string;
}

const createHeading = (level: 1 | 2 | 3 | 4 | 5 | 6) => {
  return ({ children, id }: HeadingProps) => {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;

    return (
      <Tag id={id}>
        <a aria-hidden="true" tabIndex={-1} href={`#${id}`} className="heading-link no-underline">
         <span className="heading-anchor">#</span>
          {children}
        </a>
      </Tag>
    );
  };
};

export const H1 = createHeading(1);
export const H2 = createHeading(2);
export const H3 = createHeading(3);
export const H4 = createHeading(4);
export const H5 = createHeading(5);
export const H6 = createHeading(6);
