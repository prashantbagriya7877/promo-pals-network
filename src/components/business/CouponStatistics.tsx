
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from "recharts";
import { CouponStats } from "@/types/coupon";

interface CouponStatisticsProps {
  stats: CouponStats;
}

const CouponStatistics = ({ stats }: CouponStatisticsProps) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'performance'>('overview');

  // Sample data for the charts - would be derived from the actual stats in a real app
  const chartData = [
    { name: 'Jan', claimed: 4, redeemed: 2 },
    { name: 'Feb', claimed: 6, redeemed: 4 },
    { name: 'Mar', claimed: 8, redeemed: 3 },
    { name: 'Apr', claimed: 12, redeemed: 8 },
    { name: 'May', claimed: 10, redeemed: 7 },
    { name: 'Jun', claimed: 14, redeemed: 9 },
  ];

  const pieData = [
    { name: 'Active', value: stats.activeCoupons },
    { name: 'Claimed', value: stats.claimedCoupons },
    { name: 'Unused', value: stats.totalCoupons - stats.activeCoupons - stats.claimedCoupons }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Coupon Statistics</CardTitle>
        <CardDescription>
          Track the performance of your coupon campaigns
        </CardDescription>
        <div className="border-b mt-4">
          <div className="flex">
            <button
              className={`pb-2 px-4 font-medium text-sm transition-colors ${
                activeTab === 'overview' 
                  ? 'text-primary border-b-2 border-primary' 
                  : 'text-gray-500 hover:text-primary'
              }`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button
              className={`pb-2 px-4 font-medium text-sm transition-colors ${
                activeTab === 'performance' 
                  ? 'text-primary border-b-2 border-primary' 
                  : 'text-gray-500 hover:text-primary'
              }`}
              onClick={() => setActiveTab('performance')}
            >
              Performance
            </button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {activeTab === 'overview' ? (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-500 text-sm">Total Coupons</p>
                <p className="text-2xl font-bold">{stats.totalCoupons}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-500 text-sm">Claimed Coupons</p>
                <p className="text-2xl font-bold">{stats.claimedCoupons}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-500 text-sm">Redemption Rate</p>
                <p className="text-2xl font-bold">{stats.redemptionRate}%</p>
              </div>
            </div>
            
            <div className="h-60">
              <p className="text-sm font-medium mb-2">Coupon Distribution</p>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <p className="text-sm font-medium mb-2">Monthly Performance</p>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={chartData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="claimed" fill="#8884d8" name="Claimed" />
                  <Bar dataKey="redeemed" fill="#82ca9d" name="Redeemed" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Performance Insights</h4>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• Your most popular coupon is "{stats.popularCoupons[0]?.title || 'None'}"</li>
                <li>• Most coupons are claimed on weekends</li>
                <li>• Your redemption rate is {stats.redemptionRate}% (Industry avg: 23%)</li>
              </ul>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CouponStatistics;
