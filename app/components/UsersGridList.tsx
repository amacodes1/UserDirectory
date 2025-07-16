import React from 'react'
import type { User } from '../../src/store/userSlice'
import { LoadingSkeleton } from './LoadingSkeleton'

interface UsersGridListProps {
  users: User[]
  loading: boolean
  error: string | null
  isGridView: boolean
  hasLoaded: boolean
  onUserClick: (user: User) => void
  onRetry: () => void
}

export const UsersGridList: React.FC<UsersGridListProps> = ({
  users,
  loading,
  error,
  isGridView,
  hasLoaded,
  onUserClick,
  onRetry
}) => {
  // Show skeleton if loading OR if we haven't loaded yet
  if (loading || !hasLoaded) {
    return <LoadingSkeleton isGridView={isGridView} />
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center max-w-md">
          <div className="text-red-500 mx-auto mb-4 text-4xl">⚠️</div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Error Loading Users
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-4">{error}</p>
          <button
            onClick={onRetry}
            className="inline-flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            <span>Retry</span>
          </button>
        </div>
      </div>
    )
  }

  if (users.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="text-gray-400 dark:text-gray-500 text-6xl mb-4">👥</div>
          <p className="text-gray-500 dark:text-gray-400">No users available.</p>
        </div>
      </div>
    )
  }

  if (isGridView) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            onClick={() => onUserClick(user)}
            className="bg-white dark:bg-[#1E1E1E] rounded-lg shadow-sm border border-gray-200 dark:border-[#222222] p-6 hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="flex flex-col items-center">
              <div className="h-20 w-20 rounded-full overflow-hidden mb-4">
                {user.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-xl">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white text-center">
                {user.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                {user.email}
              </p>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {users.map((user) => (
        <div
          key={user.id}
          onClick={() => onUserClick(user)}
          className="bg-white dark:bg-[#1E1E1E] rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 hover:shadow-md transition-shadow cursor-pointer"
        >
          <div className="flex items-center">
            <div className="h-16 w-16 rounded-full overflow-hidden mr-4">
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-lg">
                  {user.name.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                {user.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {user.email}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
} 