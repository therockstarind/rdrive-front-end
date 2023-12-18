"use client"
import React, { Suspense } from 'react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { Card, Flex } from '@radix-ui/themes';
import { motion } from 'framer-motion';
import { opacityVariant, popUpFromBottomForText } from '®/lib/FramerMotionVariants';
import AnimatedDiv from './FramerMotion/AnimatedDiv';

// Params component for displaying search parameters
function Params() {
  const searchParams = useSearchParams()!;

  return searchParams.toString().length !== 0 ? (
    <div className="px-2 text-gray-500">
      <span>?</span>
      {Array.from(searchParams.entries()).map(([key, value], index) => (
        <React.Fragment key={key}>
          {index !== 0 && <span>&</span>}
          <span className="px-1">
            <span className="animate-[highlight_1s_ease-in-out_1] text-gray-100">
              {key}
            </span>
            <span>=</span>
            <span className="animate-[highlight_1s_ease-in-out_1] text-gray-100">
              {value}
            </span>
          </span>
        </React.Fragment>
      ))}
    </div>
  ) : null;
}

// Breadcrumb component for displaying navigation breadcrumb
export function Breadcrumb() {
  const router = useRouter();
  const pathname = usePathname();

  // Split the pathname into segments
  const segments = pathname ? pathname.split('/').slice(1) : [];

  return (
    <AnimatedDiv
          variants={opacityVariant}>
    <Card size="1" className="dark:bg-black dark:bg-gradient-to-t dark:from-[#0D1117] dark:to-gray-850 select-none" my="2" aria-label="Breadcrumb">
        <Flex align="center" gap="2" className="text-sm font-medium overflow-x-scroll">
        {/* Base URL */}
        <div className="flex items-center text-[#666] dark:text-[#888] hover:text-black dark:hover:text-white cursor-pointer gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
            clipRule="evenodd"
          />
        </svg>
          <span
            onClick={() => router.push('/')}
          >
            RDRIVE.ORG
          </span>
        </div>
        {/* Path segments */}
        {segments.map((segment, index) => (
          <React.Fragment key={segment}>
            <div className="flex items-center gap-2">
            <span className="text-gray-600">/</span>
              <span
                className={index === segments.length - 1 ? 'text-green-400' : 'text-[#666] dark:text-[#888] hover:text-black dark:hover:text-white cursor-pointer'}
                onClick={() => router.push(`/${segments.slice(0, index + 1).join('/')}`)}
              >
                {segment}
              </span>
            </div>
          </React.Fragment>
        ))}
        {/* Display search parameters */}
        <Suspense>
          <Params />
        </Suspense>
        </Flex>
    </Card>
    </AnimatedDiv>
  );
}
