import React from 'react'
import { Tag, Plus, Search, Filter } from 'lucide-react'

interface Voucher {
  id: string
  code: string
  discount: string
  status: 'active' | 'expired' | 'used'
  validUntil: string
  usageCount: number
  maxUsage: number
}

const mockVouchers: Voucher[] = [
  {
    id: '1',
    code: 'SAVE20',
    discount: '20% off',
    status: 'active',
    validUntil: '2024-12-31',
    usageCount: 45,
    maxUsage: 100
  },
  {
    id: '2',
    code: 'WELCOME10',
    discount: '$10 off',
    status: 'active',
    validUntil: '2024-11-30',
    usageCount: 78,
    maxUsage: 200
  },
  {
    id: '3',
    code: 'SUMMER50',
    discount: '50% off',
    status: 'expired',
    validUntil: '2024-08-31',
    usageCount: 150,
    maxUsage: 150
  },
  {
    id: '4',
    code: 'NEWUSER25',
    discount: '25% off',
    status: 'active',
    validUntil: '2024-12-15',
    usageCount: 12,
    maxUsage: 50
  }
]

export const Vouchers: React.FC = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
      case 'expired':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
      case 'used':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
    }
  }

  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Vouchers</h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Manage your discount vouchers and promotional codes
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md shadow-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <Plus className="h-4 w-4 mr-2" />
            Create Voucher
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 space-y-4 sm:space-y-0">
        <div className="relative flex-1 max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search vouchers..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex items-center space-x-2">
          <button className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </button>
        </div>
      </div>

      {/* Vouchers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockVouchers.map((voucher) => (
          <div
            key={voucher.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Tag className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                  {voucher.code}
                </span>
              </div>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(voucher.status)}`}>
                {voucher.status}
              </span>
            </div>
            
            <div className="space-y-3">
              <div>
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {voucher.discount}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Valid until {new Date(voucher.validUntil).toLocaleDateString()}
                </p>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Usage: {voucher.usageCount}/{voucher.maxUsage}
                </span>
                <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full"
                    style={{ width: `${(voucher.usageCount / voucher.maxUsage) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 flex space-x-2">
              <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Edit
              </button>
              <button className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-2 px-3 rounded-md text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                Copy
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 