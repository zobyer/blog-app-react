import React from "react";

import TopBar from "./topbar";
import Footer from "./footer";
import { LayOut as LayOutProps } from "types/layout";

const LayOut: React.FC<LayOutProps> = ({ children }) => {
  return (
    <>
      <TopBar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default LayOut;
