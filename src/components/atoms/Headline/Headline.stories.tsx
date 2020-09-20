import React from "react";
import Headline from "./Headline";

export default { title: "Atoms/Headline" };

export const h1 = () => (
  <Headline>
    Dies ist eine Headline
  </Headline>
);
export const h2 = () => (
  <Headline level={2}>
    Dies ist eine Headline
  </Headline>
);
export const h3 = () => (
  <Headline level={3}>
    Dies ist eine Headline
  </Headline>
);
