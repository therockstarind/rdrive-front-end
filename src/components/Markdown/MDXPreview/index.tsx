"use client";
import CodeTitle from "./CodeTitle";
import Danger from "./Danger";
import EmbedBlog from "./EmbedBlog";
import Figcaption from "./Figcaption";
import { H1, H2, H3, H4, H5, H6 } from "./Heading";
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
  // pre: Pre,
  Title,
  img: IMG,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
};

export default MDXComponents;
