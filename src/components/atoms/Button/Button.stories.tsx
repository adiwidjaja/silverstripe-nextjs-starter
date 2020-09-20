import React from "react";
import Button from "./Button";

export default { title: "Atoms/Button" };

export const example = () => (
  <Button href="#">Testbutton</Button>
);

export const onClick = () => (
  <Button onClick={() => alert("ding")}>Testbutton</Button>
);

