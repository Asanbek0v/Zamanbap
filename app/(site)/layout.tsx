import LayoutSite from "@/components/layout/LayoutSite";
import FloatingActions from "@/components/pages/FloatingActions";
import React, { FC, ReactNode } from "react";

interface ILayoutProps {
  children: ReactNode;
}
const layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <LayoutSite>
      {children}
      <FloatingActions />
    </LayoutSite>
  );
};

export default layout;
