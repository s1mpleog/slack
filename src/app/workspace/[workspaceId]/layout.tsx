"use client";
import React, { FC } from "react";
import Toolbar from "./Toolbar";

interface WorkspaceIdLayoutProps {
  children: React.ReactNode;
}

const WorkspaceIdLayout: FC<WorkspaceIdLayoutProps> = ({ children }) => {
  return (
    <div className="h-full">
      <Toolbar />
      {children}
    </div>
  );
};

export default WorkspaceIdLayout;
