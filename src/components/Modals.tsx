"use client";

import React, { useEffect, useState } from "react";
import CreateWorkspaceModal from "@/features/workspaces/components/CreateWorkspaceModal";

export default function Modals() {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <CreateWorkspaceModal />
    </>
  );
}
