"use client";
import { useState, useEffect, FC } from 'react';
import { MDXRemote } from 'next-mdx-remote';
import MDXComponents from '../MDXComponents';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

interface MarkdownPreviewProps {
  path: string;
}

const Markdown: FC<MarkdownPreviewProps> = ({ path }) => {
  const [mdxSource, setMdxSource] = useState<any>(null);
 
  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(path);
        const mdContent = await response.text();
        const mdx = await serialize(mdContent, {
          mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [
                rehypeSlug,
                [rehypeAutolinkHeadings, { behaviour: "wrap" }],
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
    <main className="max-w-full prose dark:prose-invert prose-fuchsia">
        {mdxSource ? <MDXRemote {...mdxSource} components={MDXComponents} /> : ''}
    </main>
  );
};

export default Markdown;

