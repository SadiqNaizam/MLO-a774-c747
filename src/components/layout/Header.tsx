import React from 'react';
import TopHeader from '../Dashboard/TopHeader';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  // The TopHeader component, as provided in context, already implements its own styling
  // including height (h-20), sticky positioning, background (bg-card), border, and internal flex layout.
  // This Header component acts as a lightweight wrapper, passing through any additional classNames.
  return (
    <TopHeader className={className} />
  );
};

export default Header;
