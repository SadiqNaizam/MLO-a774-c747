import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Search,
  Bell,
  User,
  Settings,
  LogOut,
  Code2,
  Menu // For mobile menu toggle, though not explicitly requested, good for headers
} from 'lucide-react';

interface TopHeaderProps {
  className?: string;
}

const TopHeader: React.FC<TopHeaderProps> = ({ className }) => {
  const user = {
    name: 'Jane Pearson',
    role: 'Administrator',
    avatarUrl: 'https://i.pravatar.cc/150?u=janepearson',
    initials: 'JP',
  };
  const notificationCount = 3;

  return (
    <header
      className={cn(
        'sticky top-0 z-50 flex h-20 items-center justify-between border-b bg-card px-6',
        className
      )}
    >
      <div className="flex items-center">
        {/* Mobile Menu Button - can be shown on smaller screens via responsive classes */}
        <Button variant="ghost" size="icon" className="mr-2 lg:hidden">
          <Menu className="h-6 w-6" />
        </Button>
        
        {/* Search Bar - The image doesn't show one, but typical for headers */}
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="pl-10 w-64 lg:w-96 bg-background focus-visible:ring-primary"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <Button variant="outline" className="hidden sm:flex items-center text-sm">
          <Code2 className="mr-2 h-4 w-4" />
          Source code
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              {notificationCount > 0 && (
                <span className="absolute top-1 right-1 flex h-2.5 w-2.5 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {/* Example Notifications */}
            <DropdownMenuItem className="flex flex-col items-start">
                <p className="font-semibold">New comment on your post</p>
                <p className="text-xs text-muted-foreground">John Doe commented: "Great work!" - 2m ago</p>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex flex-col items-start">
                <p className="font-semibold">System update complete</p>
                <p className="text-xs text-muted-foreground">The system has been updated to v1.2.0. - 1h ago</p>
            </DropdownMenuItem>
            {notificationCount > 2 && 
              <DropdownMenuItem className="text-xs text-muted-foreground text-center">
                View all {notificationCount} notifications
              </DropdownMenuItem>
            }
            {notificationCount === 0 && 
              <DropdownMenuItem className="text-xs text-muted-foreground text-center">
                No new notifications
              </DropdownMenuItem>
            }
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={user.avatarUrl} alt={user.name} />
                <AvatarFallback>{user.initials}</AvatarFallback>
              </Avatar>
              <div className="hidden md:flex flex-col items-start">
                <span className="text-sm font-medium text-card-foreground">{user.name}</span>
                <span className="text-xs text-muted-foreground">{user.role}</span>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>
              My Account
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default TopHeader;
