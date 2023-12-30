![Hello im ALT](https://images.unsplash.com/photo-1470608756445-2c9906b0680f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJpZyUyMHNpemV8ZW58MHx8MHx8fDA%3D)

# **Install Intel Rapid Storage Technology (IRST) driver**

1. Connect the USB flash drive containing the Windows 11/10 installation media and the extracted Intel Rapid Storage Technology (IRST) driver **(VMD_DCH_Intel_F_V19.5.1.1040_30787)** to the computer. (If you are installing using a Windows 11/10 CD, please insert the CD along with the USB flash drive mentioned above.) **Note**: The version numbers and images below are for reference only. Please download the latest version from the support page for your computer model when performing the actual operation.
2. Proceed with the Windows 11/10 installation process again. If you need to know how to install Windows 11/10 using installation media, please refer to this article: How to use installation media to install Windows 11/10.
   
If you still cannot find the disk drive during Windows installation, consider referring to this section: Disable Intel Volume Management Device (VMD) technology to continue with the installation of Windows.
-  When you see the screen **“Where do you want to install Windows”** and Windows cannot find any drives, please click
-  When you see the screen **“Where do you want to install Windows”** and Windows cannot find any drives, please click
-  When you see the screen **“Where do you want to install Windows”** and Windows cannot find any drives, please click
-  When you see the screen **“Where do you want to install Windows”** and Windows cannot find any drives, please click
-  When you see the screen **“Where do you want to install Windows”** and Windows cannot find any drives, please click

## H2 TSX

```tsx
import React, { ReactElement, useEffect, useRef, useState } from "react";
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import { Snippet } from "@nextui-org/react";
import { MdOutlineContentCopy } from "react-icons/md";
import CodeTitle from "./CodeTitle";
import './Pre.css'; // Import your custom CSS

const Pre = ({ children }: { children?: ReactElement | undefined }) => {
  const [codeLines, setCodeLines] = useState<string[]>([]);
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (children?.props?.children) {
      const lines = children.props.children.split('\n');
      setCodeLines(lines);
    }
  }, [children]);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [codeLines]);

  const getClassName = () => {
    const className = children?.props?.className;
    return className ? className.replace("language-", "") : "";
  };

  return (
    <main className="border border-gray-400/30 !rounded-md my-4">
      {/* ... other component code ... */}
      <pre>
        <code ref={codeRef}>
          {codeLines.map((line, index) => (
            <span key={index} className="code-line">{line}</span>
          ))}
        </code>
      </pre>
    </main>
  );
};

export default Pre;

```
### H3 Link

[Link text](http://www.example.com)

> This is a blockquote.


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Country</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>30</td>
      <td>USA</td>
    </tr>
    <tr>
      <td>Jane Doe</td>
      <td>25</td>
      <td>Canada</td>
    </tr>
    <tr>
      <td>Foo Bar</td>
      <td>35</td>
      <td>Australia</td>
    </tr>
  </tbody>
</table>

- [x] Task 1
- [ ] Task 2
- [ ] Task 3
