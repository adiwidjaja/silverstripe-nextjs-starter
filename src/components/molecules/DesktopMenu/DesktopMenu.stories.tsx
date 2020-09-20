import React from "react";
import DesktopMenu from "./DesktopMenu";

export default { title: "Molecules/DesktopMenu" };

const menuItems = [
  {
    "id": 1,
    "className": "Page",
    "title": "Home",
    "menuTitle": "Home",
    "content": "<p>Welcome to SilverStripe! This is the default homepage. You can edit this page by opening <a href=\"admin/\">the CMS</a>.</p><p>You can now access the <a href=\"http://docs.silverstripe.org\">developer documentation</a>, or begin the <a href=\"http://www.silverstripe.org/learn/lessons\">SilverStripe lessons</a>.</p>",
    "link": "/headless-demo/backend/public/",
    "section": true
  },
  {
    "id": 2,
    "className": "Page",
    "title": "About Us",
    "menuTitle": "About Us",
    "content": "<p>You can fill this page out with your own content, or delete it and create your own pages.</p>",
    "link": "/headless-demo/backend/public/about-us/",
    "section": false
  },
  {
    "id": 3,
    "className": "Page",
    "title": "Contact Us",
    "menuTitle": "Contact Us",
    "content": "<p>You can fill this page out with your own content, or delete it and create your own pages.</p>",
    "link": "/headless-demo/backend/public/contact-us/",
    "section": false
  },
  {
    "id": 6,
    "className": "SilverStripe\\CMS\\Model\\RedirectorPage",
    "title": "redirect",
    "menuTitle": "redirect",
    "link": "/headless-demo/backend/public/",
    "section": false
  }
];

export const example = () => (
  <DesktopMenu
    menuItems={menuItems}
  />
);

