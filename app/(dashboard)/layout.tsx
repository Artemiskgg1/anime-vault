import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="h-screen  bg-[#131313]">{children}</div>;
};

export default layout;
