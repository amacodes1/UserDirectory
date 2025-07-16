import React from 'react'
import { Star, Award, TrendingUp, Calendar, Users, Zap } from 'lucide-react'

export const Spotlight: React.FC = () => {
  const featuredItems = [
    {
      id: '1',
      title: 'Top Performing User',
      subtitle: 'Alex Morgan',
      description: 'Generated 45 new leads this month',
      icon: Award,
      color: 'text-yellow-600 dark:text-yellow-400',
      bgColor: 'bg-yellow-100 dark:bg-yellow-900/20'
    },
    {
      id: '2',
      title: 'Best Campaign',
      subtitle: 'Summer Sale 2024',
      description: 'Increased revenue by 23%',
      icon: TrendingUp,
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-100 dark:bg-green-900/20'
    },
    {
      id: '3',
      title: 'New Feature',
      subtitle: 'Advanced Analytics',
      description: 'Launched successfully with 98% uptime',
      icon: Zap,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900/20'
    }
  ]

  const upcomingEvents = [
    {
      id: '1',
      title: 'Team Meeting',
      date: '2024-01-15',
      time: '10:00 AM',
      attendees: 12
    },
    {
      id: '2',
      title: 'Product Launch',
      date: '2024-01-20',
      time: '2:00 PM',
      attendees: 8
    },
    {
      id: '3',
      title: 'Client Presentation',
      date: '2024-01-25',
      time: '11:30 AM',
      attendees: 5
    }
  ]

  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Spotlight</h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Highlights and featured content from your organization
        </p>
      </div>

      {/* Featured Items */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {featuredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6"
          >
            <div className="flex items-center mb-4">
              <div className={`p-3 rounded-lg ${item.bgColor}`}>
                <item.icon className={`h-6 w-6 ${item.color}`} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item.subtitle}
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white">
          <div className="flex items-center">
            <Users className="h-8 w-8 mr-3" />
            <div>
              <p className="text-sm opacity-90">Total Users</p>
              <p className="text-2xl font-bold">2,847</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-lg p-6 text-white">
          <div className="flex items-center">
            <TrendingUp className="h-8 w-8 mr-3" />
            <div>
              <p className="text-sm opacity-90">Growth Rate</p>
              <p className="text-2xl font-bold">+23.5%</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg p-6 text-white">
          <div className="flex items-center">
            <Star className="h-8 w-8 mr-3" />
            <div>
              <p className="text-sm opacity-90">Rating</p>
              <p className="text-2xl font-bold">4.8/5</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg p-6 text-white">
          <div className="flex items-center">
            <Zap className="h-8 w-8 mr-3" />
            <div>
              <p className="text-sm opacity-90">Active Projects</p>
              <p className="text-2xl font-bold">12</p>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            Upcoming Events
          </h3>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="px-6 py-4 flex items-center justify-between">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-gray-400 mr-3" />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {event.title}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(event.date).toLocaleDateString()} at {event.time}
                  </p>
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <Users className="h-4 w-4 mr-1" />
                {event.attendees} attendees
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 