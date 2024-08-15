import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-7xl h-full mx-auto">{children}</div>;
};

export default layout;
