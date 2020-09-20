import React from "react";

const PathContext = React.createContext({
  host: "",
  path: "",
  rendering: "",
  title: "",
  url: ""
});

export default PathContext;
