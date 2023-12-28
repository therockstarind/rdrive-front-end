import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from "rehype-slug";

export async function MDXContent(rawContent: string) {
  // Use gray-matter to parse the markdown frontmatter
  const { content, data } = matter(rawContent);
  const prettyCodeOptions = {
    theme: "one-dark-pro",
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
  // Serialize the content with next-mdx-remote/serialize
  const mdxSource = await serialize(content, {
    // MDX options
    mdxOptions: {
        development: process.env.NODE_ENV === "development",
        rehypePlugins: [
          rehypeSlug,
          [rehypeAutolinkHeadings, { behaviour: "wrap" }],
          
        ],
      },
    scope: data,
  });

  return mdxSource;
}
