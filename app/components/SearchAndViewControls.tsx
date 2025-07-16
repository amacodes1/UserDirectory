import React from 'react'
import { Search, LayoutGrid, List } from 'lucide-react'

interface SearchAndViewControlsProps {
  searchTerm: string
  onSearchChange: (value: string) => void
  isGridView: boolean
  onViewChange: (isGrid: boolean) => void
  isMobile?: boolean
}

export const SearchAndViewControls: React.FC<SearchAndViewControlsProps> = ({
  searchTerm,
  onSearchChange,
  isGridView,
  onViewChange,
  isMobile
}) => {
  return (
    <div className="mb-6">
      <div className="flex items-center bg-gray-100 dark:bg-[#1E1E1E] rounded-lg p-2">
        {/* Search */}
        <div className="flex-1 flex items-center">
          <span className={`${isMobile ? 'hidden' : 'hidden sm:inline-block'}`}>
            <Search className="h-5 w-5 text-gray-600 ml-2" />
          </span>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={isMobile ? 'Search users by name...' : 'Search user by name'}
            className={`flex-1 bg-transparent border-0 focus:outline-none focus:ring-0 ml-2 ${
              isMobile
                ? 'text-white placeholder-white'
                : 'text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-600'
            }`}
          />
        </div>

        {/* View Controls - hidden on mobile */}
        {!isMobile && (
          <div className="flex items-center space-x-1 ml-4">
            <button
              onClick={() => onViewChange(false)}
              className={`p-2 rounded-md transition-colors ${
                !isGridView
                  ? 'bg-white dark:bg-[#222222] text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-gray-500 dark:text-gray-700 hover:text-gray-700 dark:hover:text-gray-300 border border-gray-800'
              }`}
            >
              <List className="h-4 w-4" />
            </button>
            <button
              onClick={() => onViewChange(true)}
              className={`p-2 rounded-md transition-colors ${
                isGridView
                  ? 'bg-white text-gray-600 dark:text-gray-300 shadow-sm dark:bg-stone-700'
                  : 'text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              <LayoutGrid className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
