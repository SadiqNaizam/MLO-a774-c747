import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import StatsCardGrid from '../components/Dashboard/StatsCardGrid';
import ActivityChart from '../components/Dashboard/ActivityChart';
import DocumentationCard from '../components/Dashboard/DocumentationCard';
import PieChartCard from '../components/Dashboard/PieChartCard';

// TypeScript interface for pie chart data items
interface PieChartDataItem {
  name: string;
  value: number;
  fill: string;
}

// Data for the first PieChartCard (Donut Chart)
// Colors are chosen to resemble the greens in the reference image.
// First color is similar to theme's --success, second is a lighter shade.
const pieChartData1: PieChartDataItem[] = [
  { name: 'Organic', value: 63, fill: 'hsl(122, 39%, 52%)' }, // Darker Green (similar to --success #51AC55)
  { name: 'Referral', value: 37, fill: 'hsl(122, 39%, 70%)' }, // Lighter Green
];

// Data for the second PieChartCard (Pie Chart)
// Colors are chosen to resemble the blues in the reference image.
// Uses theme's --primary and its lighter shades.
const pieChartData2: PieChartDataItem[] = [
  { name: 'Desktop', value: 47.4, fill: 'hsl(var(--primary))' },    // Primary blue (#467FCF)
  { name: 'Mobile', value: 33.1, fill: 'hsl(216, 59%, 65%)' },     // Medium blue (lighter primary)
  { name: 'Tablet', value: 10.5, fill: 'hsl(216, 59%, 75%)' },     // Light blue (even lighter primary)
  { name: 'Other', value: 9.0, fill: 'hsl(216, 59%, 85%)' },      // Very light blue (lightest primary)
];

const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      {/* Main content container with vertical spacing */}
      <div className="flex flex-col space-y-6">
        <h1 className="text-3xl font-semibold text-foreground">
          Dashboard Overview
        </h1>
        
        {/* Stats Card Grid - typically spans full width of its container */}
        <StatsCardGrid />
        
        {/* Section for Activity Chart and other cards, adhering to mainContent.layout requirement */}
        {/* This grid will be 2 columns on medium screens and up, as per layoutStructure.mainContent.layout ("grid grid-cols-2 gap-6") */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Activity Chart takes the first column */}
          <ActivityChart />
          
          {/* Stack of DocumentationCard and PieChartCards in the second column */}
          <div className="space-y-6">
            <DocumentationCard />
            <PieChartCard 
              title="Chart title" // As per image
              data={pieChartData1} 
              chartType="donut" 
              description="Breakdown of primary vs. secondary sources."
            />
            <PieChartCard 
              title="Chart title" // As per image
              data={pieChartData2} 
              chartType="pie" 
              description="User access patterns across different platforms."
            />
          </div>
        </div>
      </div>
    </MainAppLayout>
  );
};

export default IndexPage;
