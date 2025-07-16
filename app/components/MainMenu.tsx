import React from 'react'
import { Users, Tag, LayoutGrid, ChartNoAxesColumn, Sparkle } from 'lucide-react'

interface MainMenuProps {
  activePage: string
  onPageChange: (page: string) => void
}

export const MainMenu: React.FC<MainMenuProps> = ({ activePage, onPageChange }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutGrid },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'vouchers', label: 'Vouchers', icon: Tag },
    { id: 'analytics', label: 'Analytics', icon: ChartNoAxesColumn },
    { id: 'spotlight', label: 'Spotlight', icon: Sparkle }
  ]

  return (
    <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
      <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto bg-white dark:bg-[#1E1E1E] border-r border-gray-200 dark:border-gray-800">
        <div className="flex items-center flex-shrink-0 px-4">
          <div className="flex justify-center items-center">
            <img src="/useID.png" alt="useID" className="w-20 h-7"/>
          </div>
        </div>
        <div className="mt-8 flex-grow flex flex-col">
          <nav className="flex-1 px-2 space-y-1">
            {menuItems.map((item) => {
              const isActive = activePage === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => onPageChange(item.id)}
                  className={`w-full text-left group flex items-center px-2 py-2 text-sm font-medium rounded-md relative ${
                    isActive
                      ? 'bg-gray-100 dark:bg-[#222222] text-gray-900 dark:text-white'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 dark:bg-blue-500 rounded-r"></div>
                  )}
                  <item.icon className={`mr-3 h-5 w-5 ${
                    isActive 
                      ? 'text-blue-600 dark:text-white' 
                      : 'text-gray-400 dark:text-gray-500'
                  }`} />
                  {item.label}
                </button>
              )
            })}
          </nav>
        </div>
      </div>
    </div>
  )
} 