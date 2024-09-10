"use client";
import React, { FC } from "react";
import Toolbar from "./Toolbar";
import Sidebar from "./Sidebar";

interface WorkspaceIdLayoutProps {
  children: React.ReactNode;
}

const WorkspaceIdLayout: FC<WorkspaceIdLayoutProps> = ({ children }) => {
  return (
    <div className="h-full">
      <Toolbar />
      <div className="flex h-[calc(100vh-40px)]">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default WorkspaceIdLayout;
