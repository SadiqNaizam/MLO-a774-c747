import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Home,
  LayoutPanelLeft,
  Package,
  FileText,
  Edit3,
  Image,
  BookOpen,
  ChevronRight,
  Settings,
  Users
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  href: string;
  active?: boolean;
  badge?: string;
  children?: NavItem[];
}

const initialNavItems: NavItem[] = [
  {
    id: 'home',
    label: 'Home',
    icon: Home,
    href: '#',
    active: true,
  },
  {
    id: 'interface',
    label: 'Interface',
    icon: LayoutPanelLeft,
    href: '#',
    children: [
      { id: 'interface-sub1', label: 'UI Elements', icon: Package, href: '#' },
      { id: 'interface-sub2', label: 'Forms', icon: Edit3, href: '#' },
    ],
  },
  {
    id: 'components',
    label: 'Components',
    icon: Package,
    href: '#',
    badge: 'New',
  },
  { id: 'pages', label: 'Pages', icon: FileText, href: '#' },
  { id: 'forms', label: 'Forms', icon: Edit3, href: '#' },
  { id: 'gallery', label: 'Gallery', icon: Image, href: '#' },
  {
    id: 'documentation',
    label: 'Documentation',
    icon: BookOpen,
    href: '#',
  },
  {
    id: 'settings-main',
    label: 'Settings',
    icon: Settings,
    href: '#',
    children: [
      { id: 'settings-profile', label: 'Profile', icon: Users, href: '#' },
      { id: 'settings-app', label: 'Application', icon: Settings, href: '#' },
    ]
  }
];

interface SidebarNavProps {
  className?: string;
}

const SidebarNav: React.FC<SidebarNavProps> = ({ className }) => {
  const [navItems, setNavItems] = useState<NavItem[]>(initialNavItems);
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({});

  const toggleSubmenu = (id: string) => {
    setOpenSubmenus(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleItemClick = (id: string) => {
    setNavItems(prevItems => 
      prevItems.map(item => 
        item.id === id 
          ? { ...item, active: true }
          : { ...item, active: false, children: item.children?.map(child => ({...child, active: false})) }
      )
    );
  };

  const renderNavItem = (item: NavItem, isSubItem: boolean = false) => {
    const IconComponent = item.icon;
    const isActive = item.active;

    return (
      <li key={item.id} className="w-full">
        <Button
          variant={isActive ? 'secondary' : 'ghost'}
          className={cn(
            'w-full justify-start text-sm font-medium',
            isActive 
              ? 'bg-sidebar-accent text-sidebar-primary hover:bg-sidebar-accent/90'
              : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
            isSubItem && 'pl-10'
          )}
          onClick={() => {
            if (item.children) {
              toggleSubmenu(item.id);
            }
            handleItemClick(item.id);
          }}
        >
          <IconComponent className="mr-3 h-5 w-5" />
          {item.label}
          {item.children && (
            <ChevronRight 
              className={cn(
                'ml-auto h-4 w-4 transition-transform duration-200',
                openSubmenus[item.id] && 'rotate-90'
              )}
            />
          )}
          {item.badge && (
            <Badge variant="default" className="ml-auto bg-primary text-primary-foreground">
              {item.badge}
            </Badge>
          )}
        </Button>
        {item.children && openSubmenus[item.id] && (
          <ul className="pl-4 mt-1 space-y-1">
            {item.children.map(child => renderNavItem(child, true))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <nav className={cn('flex flex-col p-4 space-y-1', className)}>
      <div className="mb-4 pl-3 flex items-center">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
            <path d="M4 6L4.69104 4.61792C4.99249 3.99082 5.64031 3.58333 6.33688 3.58333H17.6631C18.3597 3.58333 19.0075 3.99082 19.3089 4.61792L20 6M4 6L12 20.4167L20 6M4 6H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <h1 className="ml-2 text-2xl font-bold text-foreground">tabler</h1>
      </div>
      <ul className="space-y-1 w-full">
        {navItems.map(item => renderNavItem(item))}
      </ul>
    </nav>
  );
};

export default SidebarNav;
