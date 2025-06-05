import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  // Layout Requirements from project context:
  // - overall.definition: "grid-cols-[auto_1fr] grid-rows-[auto_auto]"
  // - overall.sizing.sidebar: "w-64" (maps to theme(spacing.64) or 16rem/256px)
  // - overall.sizing.header: "h-20" (maps to theme(spacing.20) or 5rem/80px)
  // - overall.sizing.mainContent: "flex-1"
  // - mainContent.container: "px-6 py-4"

  return (
    <div 
      className={cn(
        "grid min-h-screen bg-background",
        // First column (sidebar) uses theme.spacing.64 (256px).
        // Second column (header/main content) takes remaining width (1fr).
        "grid-cols-[theme(spacing.64)_1fr]", 
        // First row (header) height is 'auto', determined by Header content (h-20).
        // Second row (main content) height is 'auto', expands to fill due to flex setup below.
        "grid-rows-[auto_auto]",             
        className
      )}
    >
      {/* Sidebar Area */}
      {/* Spans both rows. Width defined by grid-cols. Overflow for long nav lists. */}
      <aside className="row-span-2 bg-sidebar text-sidebar-foreground border-r border-sidebar-border overflow-y-auto">
        <Sidebar />
      </aside>

      {/* Header Area */}
      {/* Positioned in the second column, first row. */}
      {/* Height is 'auto' based on grid-rows, effectively theme.spacing.20 due to Header's internal h-20. */}
      <header className="col-start-2 bg-card text-card-foreground border-b border-border">
        <Header />
      </header>

      {/* Main Content Area */}
      {/* Positioned in the second column, second row. Height is 'auto'. */}
      {/* 'flex flex-col' allows the inner div with 'flex-1' to expand vertically. */}
      {/* 'overflow-y-auto' for scrollable content if it exceeds viewport. */}
      <main className="col-start-2 row-start-2 flex flex-col overflow-y-auto">
        {/* Inner div for padding and to take up flexible space (flex-1). */}
        <div className="px-6 py-4 flex-1">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainAppLayout;
