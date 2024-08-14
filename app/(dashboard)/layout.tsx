import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-7xl h-screen mx-auto bg-[#0a0a0b]">{children}</div>
  );
};

export default layout;
