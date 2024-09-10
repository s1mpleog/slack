import UserButton from "@/features/auth/components/UserButton";
import React, { FC } from "react";
import WorkspaceSwitcher from "./WorkspaceSwitcher";
import { usePathname } from "next/navigation";
import SidebarButton from "./SidebarButton";
import {
  BellIcon,
  HomeIcon,
  MessageSquareIcon,
  MoreHorizontalIcon,
} from "lucide-react";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  const pathname = usePathname();
  return (
    <aside className="flex h-full w-[70px] flex-col items-center gap-y-4 bg-[#481349] pb-[4px] pt-[9px]">
      <WorkspaceSwitcher />
      <SidebarButton
        icon={HomeIcon}
        label="Home"
        isActive={pathname.includes("/workspace")}
      />
      <SidebarButton icon={MessageSquareIcon} label="DMs" />
      <SidebarButton icon={BellIcon} label="Activity" />
      <SidebarButton icon={MoreHorizontalIcon} label="More" />
      <div className="mt-auto flex flex-col items-center justify-center gap-y-1">
        <UserButton />
      </div>
    </aside>
  );
};

export default Sidebar;
