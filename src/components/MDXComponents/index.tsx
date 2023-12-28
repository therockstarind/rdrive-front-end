import Code from "./Code";
import CodeSandbox from "./CodeSandbox";
import CodeTitle from "./CodeTitle";
import Danger from "./Danger";
import EmbedBlog from "./EmbedBlog";
import Figcaption from "./Figcaption";
import Pre from "./Pre";
import Step from "./Step";
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
  Step,
  CodeSandbox,
  YouTube,
  EmbedBlog,
  UrlMetaInfo,
  pre: Pre,
  code: Code,
  Title,
};

export default MDXComponents;
