import React from 'react';
import { cn } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { LineChart as LucideLineChart, Copy, MoreHorizontal } from 'lucide-react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

interface ActivityChartProps {
  className?: string;
}

const lineChartData = [
  { name: 'Jan', Purchases: 20, Sales: 30 },
  { name: 'Feb', Purchases: 45, Sales: 35 },
  { name: 'Mar', Purchases: 30, Sales: 50 },
  { name: 'Apr', Purchases: 60, Sales: 70 },
  { name: 'May', Purchases: 50, Sales: 60 },
  { name: 'Jun', Purchases: 80, Sales: 90 },
  { name: 'Jul', Purchases: 70, Sales: 85 },
  { name: 'Aug', Purchases: 90, Sales: 110 },
  { name: 'Sep', Purchases: 60, Sales: 75 },
  { name: 'Oct', Purchases: 110, Sales: 130 },
  { name: 'Nov', Purchases: 100, Sales: 120 },
  { name: 'Dec', Purchases: 130, Sales: 150 },
];

interface UserActivity {
  id: string;
  userName: string;
  userInitials: string;
  avatarUrl?: string;
  commitMessage: string;
  date: string;
}

const userActivities: UserActivity[] = [
  {
    id: '1',
    userName: 'Ronald Bradley',
    userInitials: 'RB',
    avatarUrl: 'https://i.pravatar.cc/150?u=ronald',
    commitMessage: 'Initial commit with basic structure',
    date: 'May 6, 2018',
  },
  {
    id: '2',
    userName: 'Russell Gibson',
    userInitials: 'RG',
    commitMessage: 'Main structure: Added new navigation components',
    date: 'April 22, 2018',
  },
  {
    id: '3',
    userName: 'Beverly Armstrong',
    userInitials: 'BA',
    avatarUrl: 'https://i.pravatar.cc/150?u=beverly',
    commitMessage: 'Left sidebar adjustments and theming update',
    date: 'April 15, 2018',
  },
  {
    id: '4',
    userName: 'Alice Wonderland',
    userInitials: 'AW',
    commitMessage: 'Implemented user authentication module',
    date: 'April 10, 2018',
  },
];

const ActivityChart: React.FC<ActivityChartProps> = ({ className }) => {
  return (
    <Card className={cn('shadow-sm hover:shadow-md transition-shadow', className)}>
      <CardHeader>
        <div className="flex items-center justify-between">
            <div className="flex items-center">
                <LucideLineChart className="h-6 w-6 mr-2 text-primary" />
                <CardTitle>Development Activity</CardTitle>
            </div>
            <Badge variant="outline">Last 12 Months</Badge>
        </div>
        <CardDescription>
          Tracking purchases and sales over time.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full mb-8">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lineChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
              <YAxis tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
              <Tooltip
                contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    borderColor: 'hsl(var(--border))',
                    borderRadius: 'var(--radius)'
                }}
              />
              <Legend wrapperStyle={{ fontSize: '14px' }}/>
              <Line type="monotone" dataKey="Purchases" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ r: 3 }} activeDot={{ r: 5 }} />
              <Line type="monotone" dataKey="Sales" stroke="hsl(var(--success))" strokeWidth={2} dot={{ r: 3 }} activeDot={{ r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <h3 className="text-md font-semibold mb-3 text-card-foreground">Recent Commits</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px]">User</TableHead>
              <TableHead>Commit</TableHead>
              <TableHead className="text-right w-[150px]">Date</TableHead>
              <TableHead className="text-right w-[50px]">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {userActivities.map((activity) => (
              <TableRow key={activity.id}>
                <TableCell>
                  <div className="flex items-center">
                    <Avatar className="h-8 w-8 mr-3">
                      <AvatarImage src={activity.avatarUrl} alt={activity.userName} />
                      <AvatarFallback>{activity.userInitials}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium text-card-foreground">{activity.userName}</span>
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground text-sm">{activity.commitMessage}</TableCell>
                <TableCell className="text-right text-muted-foreground text-sm">{activity.date}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Copy className="h-4 w-4 text-muted-foreground" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ActivityChart;
