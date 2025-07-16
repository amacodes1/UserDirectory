import React, { useState, useEffect } from 'react'
import { Search, Bell, Menu, Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'

interface PageHeaderProps {
  onMobileMenuOpen: () => void
  onSearchChange?: (value: string) => void
}

export const PageHeader: React.FC<PageHeaderProps> = ({ onMobileMenuOpen, onSearchChange }) => {
  const { theme, setTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchValue(value)
    onSearchChange?.(value)
  }

  return (
    <header 
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-[#121212]/95 backdrop-blur-md shadow-lg' 
          : 'bg-white dark:bg-[#121212]'
      }`}
    >
      <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center flex-1 max-w-2xl">
          <button
            onClick={onMobileMenuOpen}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-[#1E1E1E] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 mr-3"
          >
            <Menu className="h-6 w-6" />
          </button>
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchValue}
              onChange={handleSearchChange}
              placeholder="Search users..."
              className="block w-80 pl-10 pr-4 py-2.5 border-0 rounded-[30px] leading-5 bg-gray-50 dark:bg-[#1E1E1E] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white dark:focus:bg-[#1E1E1E] transition-colors"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4 ml-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-[#1E1E1E] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          <button className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-[#1E1E1E] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
            <Bell className="h-5 w-5" />
          </button>
          <div className="h-8 w-8 rounded-full bg-gray-300 dark:bg-[#1E1E1E] overflow-hidden">
            <img
              src="/usericon3.png"
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  )
} 