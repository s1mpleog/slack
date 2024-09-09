"use client";
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCreateWorkspaceModal } from "../store/use-create-workspace-modal";
import { useCreateWorkspace } from "../api/use-create-workspace";

export default function CreateWorkspaceModal() {
  const [open, setOpen] = useCreateWorkspaceModal();
  const { mutate } = useCreateWorkspace();

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    mutate(
      {
        name: "Workspace 1",
      },
      {
        onSuccess() {
          // redirect to workspace id
        },
      }
    );
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle className="text-left">Add a workspace</DialogTitle>
        </DialogHeader>
        <form className="space-y-4">
          <Input
            disabled={false}
            value=""
            required
            autoFocus
            minLength={3}
            placeholder="Workspace name e.g. 'Work', 'Personal', 'Home'"
          />
          <div className="flex justify-end">
            <Button disabled={false}>Create</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
