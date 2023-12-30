"use client";
import CodeTitle from "./CodeTitle";
import Danger from "./Danger";
import EmbedBlog from "./EmbedBlog";
import Figcaption from "./Figcaption";
import IMG from "./Image";
import link from "./Link";
import Pre from "./Pre";
import Tip from "./Tip";
import Title from "./Title";
import UrlMetaInfo from "./UrlMetaInfo";
import Warning from "./Warning";
import YouTube from "./YouTube";

const MDXComponents = {
  Figcaption,
  Warning,
  Danger,
  CodeTitle,
  Tip,
  YouTube,
  EmbedBlog,
  UrlMetaInfo,
  pre: Pre,
  Title,
  img: IMG,
  a: link,
};

export default MDXComponents;
