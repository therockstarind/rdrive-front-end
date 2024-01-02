"use client";
import { useState, useEffect, FC } from 'react';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from "rehype-pretty-code";
import MDXComponents from './MDXPreview';
import { MarkdownSkeleton } from '../Skeleton';
interface MarkdownPreviewProps {
  path: string;
}

const Markdown: FC<MarkdownPreviewProps> = ({ path }) => {
  const [mdxSource, setMdxSource] = useState<any>(null);
  const Options = {
    theme: {
      dark: 'github-dark',
      light: 'light-plus',
    },
    onVisitLine(node: any) {
      // Prevent lines from collapsing in `display: grid` mode, and
      // allow empty lines to be copy/pasted
      if (node.children.length === 0) {
        node.children = [{ type: "text", value: " " }];
      }
    },
    // Feel free to add classNames that suit your docs
    onVisitHighlightedLine(node: any) {
      node.properties.className.push("highlighted");
    },
    onVisitHighlightedWord(node: any) {
      node.properties.className = ["word"];
    },
  };
 
  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(path);
        const mdContent = await response.text();
        const mdx = await serialize(mdContent, {
          mdxOptions: {
            rehypePlugins: [
              rehypeSlug,
              [rehypeAutolinkHeadings],
              [rehypePrettyCode as any, Options],
            ],
            development: process.env.NODE_ENV === "development"
          },
        });
        setMdxSource(mdx);
      } catch (error) {
        console.error('Error fetching markdown:', error);
      }
    };

    fetchMarkdown();
  }, [path]);

  return (
    <main
    className="max-w-none prose dark:prose-invert prose-h1:text-3xl md:prose-h1:text-4xl md:mx-4 prose-m-0">
        {mdxSource ? 
        <MDXRemote {...mdxSource} components={MDXComponents} /> 
        : 
        <MarkdownSkeleton />
        }
    </main>
  );
};

export default Markdown;

