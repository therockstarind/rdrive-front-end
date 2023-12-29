"use client";
import Code from "./Code";
import CodeTitle from "./CodeTitle";
import Danger from "./Danger";
import EmbedBlog from "./EmbedBlog";
import Figcaption from "./Figcaption";
import IMG from "./Image";
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
  code: Code,
  Title,
  img: IMG,
};

export default MDXComponents;
