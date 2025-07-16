import React from 'react'
import { RefreshCw, AlertCircle } from 'lucide-react'
import { useAppDispatch } from '../../src/store/hooks'
import { fetchUsers, clearError } from '../../src/store/userSlice'

interface LoadingErrorStateProps {
  loading: boolean
  error: string | null
}

export const LoadingErrorState: React.FC<LoadingErrorStateProps> = ({ loading, error }) => {
  const dispatch = useAppDispatch()

  const handleRetry = () => {
    dispatch(clearError())
    dispatch(fetchUsers())
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-500 dark:text-gray-400">Loading users...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center max-w-md">
          <AlertCircle className="text-red-500 mx-auto mb-4" size={48} />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Error Loading Users
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-4">{error}</p>
          <button
            onClick={handleRetry}
            className="inline-flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            <RefreshCw size={16} />
            <span>Retry</span>
          </button>
        </div>
      </div>
    )
  }

  return null
} 