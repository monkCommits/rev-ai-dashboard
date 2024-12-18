import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { AlertCircle } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';

// Define interface for collection stage data
interface CollectionStage {
  stage: string;
  totalAccounts: number;
  collectionRate: number;
  timeToClosure: string;
  riskLevel: 'Low' | 'Medium' | 'High' | 'Critical';
}

const SimplifiedCopayCollectionDashboard: React.FC = () => {
  // Simplified collection journey data
  const collectionStages: CollectionStage[] = [
    {
      stage: 'Preventive',
      totalAccounts: 10000,
      collectionRate: 95,
      timeToClosure: '7 days',
      riskLevel: 'Low',
    },
    {
      stage: 'Early Follow-up',
      totalAccounts: 2000,
      collectionRate: 75,
      timeToClosure: '21 days',
      riskLevel: 'Medium',
    },
    {
      stage: 'Intensive Follow-up',
      totalAccounts: 500,
      collectionRate: 45,
      timeToClosure: '45 days',
      riskLevel: 'High',
    },
    {
      stage: 'Final Recovery',
      totalAccounts: 100,
      collectionRate: 15,
      timeToClosure: '90+ days',
      riskLevel: 'Critical',
    },
  ];

  // Determine color based on risk level
  const getRiskColor = (riskLevel: CollectionStage['riskLevel']): string => {
    switch (riskLevel) {
      case 'Low':
        return 'bg-green-500';
      case 'Medium':
        return 'bg-yellow-500';
      case 'High':
        return 'bg-orange-500';
      case 'Critical':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className=" space-y-6">
      <Breadcrumb pageName="Chart" />

      {/* Collection Performance Chart */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Collection Rates by Stage
          </h3>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={collectionStages}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="stage"
                interval={0}
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis
                label={{
                  value: 'Collection Rate (%)',
                  angle: -90,
                  position: 'insideLeft',
                }}
                domain={[0, 100]}
              />
              <Tooltip
                formatter={(value, name, props) => {
                  if (name === 'collectionRate')
                    return [`${value}%`, 'Collection Rate'];
                  return [value, name];
                }}
              />
              <Bar dataKey="collectionRate" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Stage Details */}
      <div className="grid md:grid-cols-2 gap-4">
        {collectionStages.map((stage) => (
          <div
            key={stage.stage}
            className="bg-white shadow rounded-lg overflow-hidden"
          >
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {stage.stage}
              </h3>
            </div>
            <div className="px-4 py-5 sm:p-6 space-y-4">
              <div className="flex items-center space-x-4">
                <div
                  className={`w-4 h-4 rounded-full ${getRiskColor(
                    stage.riskLevel,
                  )}`}
                ></div>
                <span className="text-sm">Risk Level: {stage.riskLevel}</span>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Total Accounts</span>
                  <span className="font-bold">{stage.totalAccounts}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${stage.collectionRate}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Collection Rate</span>
                  <span>{stage.collectionRate}%</span>
                </div>
              </div>

              <div className="flex justify-between text-sm">
                <span>Avg. Time to Resolution</span>
                <span className="font-semibold">{stage.timeToClosure}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimplifiedCopayCollectionDashboard;
