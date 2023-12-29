# **Install Intel Rapid Storage Technology (IRST) driver**

1. Connect the USB flash drive containing the Windows 11/10 installation media and the extracted Intel Rapid Storage Technology (IRST) driver **(VMD_DCH_Intel_F_V19.5.1.1040_30787)** to the computer. (If you are installing using a Windows 11/10 CD, please insert the CD along with the USB flash drive mentioned above.) **Note**: The version numbers and images below are for reference only. Please download the latest version from the support page for your computer model when performing the actual operation.
2. Proceed with the Windows 11/10 installation process again. If you need to know how to install Windows 11/10 using installation media, please refer to this article: How to use installation media to install Windows 11/10.
3. When you see the screen **“Where do you want to install Windows”** and Windows cannot find any drives, please click **[Load driver]** ①.
    
    ![](https://km-ap.asus.com/uploads/PhotoLibrarys/8a53fc79-6a00-4a96-8408-a7e886967aef/20230420150600769_EN_12.png)
    
4. Select **[Browse]** ②.
    
   ![](https://km-ap.asus.com/uploads/PhotoLibrarys/8a53fc79-6a00-4a96-8408-a7e886967aef/20230420150600769_EN_13.png)
    
5. Find the folder where you extracted the IRST driver earlier, select the **[RST]** folder③, and then click **[OK]** ④.
    
    ![](https://km-ap.asus.com/uploads/PhotoLibrarys/8a53fc79-6a00-4a96-8408-a7e886967aef/20230420150600769_EN_14.png)
    
6. Select **[Intel RST VMD Controller]** ⑤, and then click **[Next]** ⑥ to start installing the driver.
    
    ![](https://km-ap.asus.com/uploads/PhotoLibrarys/8a53fc79-6a00-4a96-8408-a7e886967aef/20230420150601097_EN_15.png)
    
7. Once the driver installation is complete, the disk drive will be displayed normally.
    
    ![](https://km-ap.asus.com/uploads/PhotoLibrarys/8a53fc79-6a00-4a96-8408-a7e886967aef/20230420150600769_EN_16.png)
    

If you still cannot find the disk drive during Windows installation, consider referring to this section: Disable Intel Volume Management Device (VMD) technology to continue with the installation of Windows.
-  When you see the screen **“Where do you want to install Windows”** and Windows cannot find any drives, please click
-  When you see the screen **“Where do you want to install Windows”** and Windows cannot find any drives, please click
-  When you see the screen **“Where do you want to install Windows”** and Windows cannot find any drives, please click
-  When you see the screen **“Where do you want to install Windows”** and Windows cannot find any drives, please click
-  When you see the screen **“Where do you want to install Windows”** and Windows cannot find any drives, please click

```js
const { i18n } = require('./next-i18next.config')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false,
})

module.exports = withBundleAnalyzer({
  env: {
    FAUNA_ADMIN_KEY: process.env.FAUNA_ADMIN_KEY,
    HIDDEN_FOLDERS_RGX: process.env.HIDDEN_FOLDERS_RGX,
    SITE_TITLE: process.env.SITE_TITLE,
    SITE_FOOTER: process.env.SITE_FOOTER
  },
  images: {
    domains: [ 
    'localhost', 
    'southindia1-mediap.svc.ms',
    'centralindia1-mediap.svc.ms',
    'rdrive.in', 
    'res.cloudinary.com', 
    '*'
  ],
  },
  i18n,
  reactStrictMode: true,
  // Required by Next i18n with API routes, otherwise API routes 404 when fetching without trailing slash
  trailingSlash: true,
})
```
```ts
module.exports = withBundleAnalyzer({
  env: {
    FAUNA_ADMIN_KEY: process.env.FAUNA_ADMIN_KEY,
    HIDDEN_FOLDERS_RGX: process.env.HIDDEN_FOLDERS_RGX,
    SITE_TITLE: process.env.SITE_TITLE,
    SITE_FOOTER: process.env.SITE_FOOTER
  },
  images: {
    domains: [ 
    'localhost', 
    'southindia1-mediap.svc.ms',
    'centralindia1-mediap.svc.ms',
    'rdrive.in', 
    'res.cloudinary.com', 
    '*'
  ],
  },
  i18n,
  reactStrictMode: true,
  // Required by Next i18n with API routes, otherwise API routes 404 when fetching without trailing slash
  trailingSlash: true,
})
```

*italic* or _italic_
**bold** or __bold__

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

