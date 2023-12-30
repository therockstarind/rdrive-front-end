"use client";
import { Snippet } from "@nextui-org/react";
import { ReactElement, useEffect, useRef } from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import CodeTitle from "./CodeTitle";
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

const Pre = ({ children }: { children?: ReactElement | undefined }) => {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [children]);
  const getClassName = () => {
    const className = children?.props?.className;
    return className ? className.replace("language-", "") : "";
  };

  return (
<main className="border border-gray-400/30 !rounded-md my-4">
  <div className="flex items-center justify-between px-4 my-2">
    {getClassName() && (
      <div className="flex items-center">
        <CodeTitle lang={getClassName()} />
      </div>
    )}
    <div className="flex items-center flex-grow justify-end">
      <Snippet
        size="sm"
        hideSymbol
        classNames={{ base: "-p-1 bg-transparent", pre: "hidden" }}
        copyIcon={<MdOutlineContentCopy />}
      >
        {children}
      </Snippet>
    </div>
  </div>
  <div className="border-b border-gray-400/30" />
  <pre>
      <code ref={codeRef}>
        {children}
      </code>
  </pre>
</main>
  );
};

export default Pre;