import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUp, ArrowDown } from 'lucide-react';

export interface StatCardProps {
  id: string;
  title: string;
  value: string;
  percentageChange: number;
  isPositive: boolean;
  period?: string;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  percentageChange,
  isPositive,
  period,
  className,
}) => {
  const absPercentageChange = Math.abs(percentageChange);

  return (
    <Card className={cn('shadow-sm hover:shadow-md transition-shadow', className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="text-3xl font-bold text-card-foreground">{value}</div>
          <div
            className={cn(
              'flex items-center text-sm font-semibold',
              isPositive ? 'text-success' : 'text-destructive'
            )}
          >
            {isPositive ? (
              <ArrowUp className="h-4 w-4 mr-1" />
            ) : (
              <ArrowDown className="h-4 w-4 mr-1" />
            )}
            {absPercentageChange}%
          </div>
        </div>
        {period && <p className="text-xs text-muted-foreground mt-1">{period}</p>}
      </CardContent>
    </Card>
  );
};

export default StatCard;
