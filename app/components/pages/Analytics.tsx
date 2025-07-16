import React from 'react'
import { TrendingUp, TrendingDown, Users, Eye, MousePointer, Clock } from 'lucide-react'

export const Analytics: React.FC = () => {
  const metrics = [
    {
      name: 'Page Views',
      value: '45,231',
      change: '+20.1%',
      changeType: 'positive',
      icon: Eye
    },
    {
      name: 'Unique Visitors',
      value: '12,847',
      change: '+15.3%',
      changeType: 'positive',
      icon: Users
    },
    {
      name: 'Click Rate',
      value: '3.2%',
      change: '-2.1%',
      changeType: 'negative',
      icon: MousePointer
    },
    {
      name: 'Avg. Session',
      value: '2m 34s',
      change: '+8.5%',
      changeType: 'positive',
      icon: Clock
    }
  ]

  const topPages = [
    { name: '/dashboard', views: '12,847', change: '+12%' },
    { name: '/users', views: '8,234', change: '+8%' },
    { name: '/vouchers', views: '6,123', change: '+15%' },
    { name: '/analytics', views: '4,567', change: '+5%' },
    { name: '/settings', views: '2,345', change: '-2%' }
  ]

  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Analytics</h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Track your website performance and user behavior
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric) => (
          <div
            key={metric.name}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6"
          >
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <metric.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="ml-4 flex-1">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {metric.name}
                </p>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {metric.value}
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-center">
              {metric.changeType === 'positive' ? (
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
              )}
              <span className={`text-sm font-medium ${
                metric.changeType === 'positive' 
                  ? 'text-green-600 dark:text-green-400' 
                  : 'text-red-600 dark:text-red-400'
              }`}>
                {metric.change}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                from last month
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Top Pages */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            Top Pages
          </h3>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {topPages.map((page, index) => (
            <div key={index} className="px-6 py-4 flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {page.name}
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {page.views} views
                </span>
                <span className="text-sm text-green-600 dark:text-green-400">
                  {page.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 