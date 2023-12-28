import { useState, useEffect, FC } from 'react';
import { MDXRemote } from 'next-mdx-remote';
import MDXComponents from '../MDXComponents';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';

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
                [rehypePrettyCode, {theme: 'dracula'}],
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
    <main className="markdown-body">
        {mdxSource ? <MDXRemote {...mdxSource} components={MDXComponents} /> : ''}
    </main>
  );
};

export default Markdown;
