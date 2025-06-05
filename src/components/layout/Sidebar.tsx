import React from 'react';
import SidebarNav from '../Dashboard/SidebarNav';
import { cn } from '@/lib/utils';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  // The parent <aside> element in MainAppLayout handles width, background, and border styling.
  // This component wraps SidebarNav, ensuring it occupies full height of the sidebar area.
  // SidebarNav itself handles its internal padding, logo, and navigation items layout.
  // The layoutRequirement for sidebar: "flex flex-col items-start" is effectively achieved
  // by SidebarNav's own structure and this wrapper ensuring vertical stacking if other elements were present.
  return (
    <div className={cn("h-full flex flex-col", className)}>
      <SidebarNav />
    </div>
  );
};

export default Sidebar;
