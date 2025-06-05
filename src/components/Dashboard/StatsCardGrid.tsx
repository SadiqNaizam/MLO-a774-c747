import React from 'react';
import { cn } from '@/lib/utils';
import StatCard, { StatCardProps } from './StatCard';

interface StatsCardGridProps {
  className?: string;
}

const statsData: StatCardProps[] = [
  {
    id: 'new-tickets',
    title: 'New Tickets',
    value: '43',
    percentageChange: 6,
    isPositive: true as const,
    period: 'vs last month'
  },
  {
    id: 'closed-today',
    title: 'Closed Today',
    value: '17',
    percentageChange: -3,
    isPositive: false as const,
    period: 'vs yesterday'
  },
  {
    id: 'new-replies',
    title: 'New Replies',
    value: '7',
    percentageChange: 9,
    isPositive: true as const,
    period: 'today'
  },
  {
    id: 'followers',
    title: 'Followers',
    value: '27.3k',
    percentageChange: 3,
    isPositive: true as const,
    period: 'total'
  },
  {
    id: 'daily-earnings',
    title: 'Daily earnings',
    value: '$95',
    percentageChange: -2,
    isPositive: false as const,
    period: 'today'
  },
  {
    id: 'products',
    title: 'Products',
    value: '621',
    percentageChange: -1,
    isPositive: false as const,
    period: 'total'
  },
];

const StatsCardGrid: React.FC<StatsCardGridProps> = ({ className }) => {
  return (
    <div className={cn('grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6', className)}>
      {statsData.map((stat) => (
        <StatCard
          key={stat.id}
          id={stat.id}
          title={stat.title}
          value={stat.value}
          percentageChange={stat.percentageChange}
          isPositive={stat.isPositive}
          period={stat.period}
        />
      ))}
    </div>
  );
};

export default StatsCardGrid;
