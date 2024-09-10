import React, { FC } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useWorkspaceId } from "@/hooks/use-workspace-id";
import { useGetWorkspace } from "@/features/workspaces/api/use-get-workspace";
import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspaces";
import { useCreateWorkspaceModal } from "@/features/workspaces/store/use-create-workspace-modal";
import { LoaderIcon, PlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";

interface WorkspaceSwitcherProps {}

const WorkspaceSwitcher: FC<WorkspaceSwitcherProps> = ({}) => {
  const workspaceId = useWorkspaceId();
  const router = useRouter();
  const [_open, setOpen] = useCreateWorkspaceModal();
  const { data: workspaces, isLoading: workspacesLoading } = useGetWorkspaces();
  const { data: workspace, isLoading: workspaceLoading } = useGetWorkspace({
    id: workspaceId,
  });

  const filteredWorkspaces = workspaces?.filter(
    (workspace) => workspace?._id !== workspaceId,
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button className="relative size-9 overflow-hidden bg-[#ababad] text-xl font-semibold text-slate-800 hover:bg-[#ababad]/80">
          {workspaceLoading ? (
            <LoaderIcon className="size-5 shrink-0 animate-spin" />
          ) : (
            workspace?.name.charAt(0).toUpperCase()
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" align="start" className="w-64">
        <DropdownMenuItem
          onClick={() => router.push(`/workspace/${workspaceId}`)}
          className="cursor-pointer flex-col items-start justify-start capitalize"
        >
          {workspace?.name}
          <span className="text-xs text-muted-foreground">
            Active workspace
          </span>
        </DropdownMenuItem>
        {filteredWorkspaces?.map((workspace) => (
          <DropdownMenuItem
            key={workspace._id}
            className="cursor-pointer overflow-hidden capitalize"
            onClick={() => {
              router.push(`/workspace/${workspace._id}`);
            }}
          >
            <div className="relative mr-2 flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-md bg-[#616061] text-xl font-semibold text-white">
              {workspace.name.charAt(0).toUpperCase()}
            </div>
            <p className="truncate">{workspace.name}</p>
          </DropdownMenuItem>
        ))}
        <DropdownMenuItem
          onClick={() => setOpen(true)}
          className="cursor-pointer"
        >
          <div className="relative mr-2 flex size-9 items-center justify-center overflow-hidden rounded-md bg-[#F2F2F2] text-xl font-semibold text-slate-800">
            <PlusIcon />
          </div>
          Create a new workspace
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default WorkspaceSwitcher;
