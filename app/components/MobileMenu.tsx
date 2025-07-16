import React from 'react'
import { X, Tag , LayoutGrid, ChartNoAxesColumn, Sparkle, Locate  } from 'lucide-react'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  activePage: string
  onPageChange: (page: string) => void
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  activePage,
  onPageChange
}) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutGrid },
    { id: 'users', label: 'Users', icon: Locate },
    { id: 'vouchers', label: 'Vouchers', icon: Tag },
    { id: 'analytics', label: 'Analytics', icon: ChartNoAxesColumn },
    { id: 'spotlight', label: 'Spotlight', icon: Sparkle }
  ]

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex z-40 lg:hidden">
      <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={onClose} />
      <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white dark:bg-[#1E1E1E]">
        <div className="absolute top-0 right-0 -mr-12 pt-2">
          <button
            onClick={onClose}
            className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <X className="h-6 w-6 text-white" />
          </button>
        </div>
        <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
          <div className="flex-shrink-0 flex items-center px-4">
            <div className="flex justify-center items-center">
              <img src="/useID.png" alt="useID" className="w-20 h-7"/>
            </div>
          </div>
          <nav className="mt-5 px-2 space-y-1">
            {menuItems.map((item) => {
              const isActive = activePage === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onPageChange(item.id)
                    onClose()
                  }}
                  className={`w-full text-left group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                    isActive
                      ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  <item.icon className={`mr-4 h-6 w-6 ${
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