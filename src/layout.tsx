import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-24">
      {children}
    </div>
  );
};

export default Layout;
