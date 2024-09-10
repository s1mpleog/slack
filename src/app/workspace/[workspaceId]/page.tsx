"use client";
import { useGetWorkspace } from "@/features/workspaces/api/use-get-workspace";
import { useWorkspaceId } from "@/hooks/use-workspace-id";
import React from "react";

export default function WorkspaceIdPage() {
  const workspaceId = useWorkspaceId();
  const {} = useGetWorkspace({ id: workspaceId });
  return <div>DATA</div>;
}
