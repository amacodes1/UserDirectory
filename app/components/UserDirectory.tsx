import { useState, useEffect } from 'react'
import { Plus } from 'lucide-react'
import { useAppDispatch, useAppSelector } from '../../src/store/hooks'
import { fetchUsers, addUser } from '../../src/store/userSlice'
import type { User } from '../../src/store/userSlice'

import { MainMenu } from './MainMenu'
import { PageHeader } from './PageHeader'
import { SearchAndViewControls } from './SearchAndViewControls'
import { UsersGridList } from './UsersGridList'
import { MobileMenu } from './MobileMenu'
import AddUserModal from './AddUserModal'
import { UserDetailModal } from './UserDetailModal'
import { Dashboard } from './pages/Dashboard'
import { Vouchers } from './pages/Vouchers'
import { Analytics } from './pages/Analytics'
import { Spotlight } from './pages/Spotlight'

export function UserDirectory() {
  const dispatch = useAppDispatch()
  const { users, loading, error, hasLoaded } = useAppSelector((state) => state.users)

  const [activePage, setActivePage] = useState('users')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isGridView, setIsGridView] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isUserDetailModalOpen, setIsUserDetailModalOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const filteredUsers = users.filter((user: User) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleUserClick = (user: User) => {
    setSelectedUser(user)
    setIsUserDetailModalOpen(true)
  }

  const handleAddUser = (userData: { name: string; location: string; dob: string }) => {
    dispatch(addUser(userData))
    setIsAddModalOpen(false)
  }

  const renderPageContent = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard />
      case 'users':
        return (
          <>
            {/* Page Title & Add Button (hidden on mobile) */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">User directory</h1>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Find a list of users below</p>
              </div>
              <div className="mt-4 sm:mt-0 hidden sm:block">
                <button
                  onClick={() => setIsAddModalOpen(true)}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add new
                </button>
              </div>
            </div>

            {/* Search bar and view toggle */}
            <SearchAndViewControls
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              isGridView={isGridView}
              onViewChange={setIsGridView}
              isMobile={isMobile}
            />

            {/* Grid or List display */}
            <UsersGridList
              users={filteredUsers}
              loading={loading}
              error={error}
              isGridView={isGridView}
              hasLoaded={hasLoaded}
              onUserClick={handleUserClick}
              onRetry={() => dispatch(fetchUsers())}
            />
          </>
        )
      case 'vouchers':
        return <Vouchers />
      case 'analytics':
        return <Analytics />
      case 'spotlight':
        return <Spotlight />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="h-screen flex bg-gray-50 dark:bg-[#121212]">
      {/* Sidebar */}
      <MainMenu activePage={activePage} onPageChange={setActivePage} />

      {/* Main Content */}
      <div className="lg:pl-64 flex flex-col flex-1">
        {/* Top Bar */}
        {!isMobile ? (
          <PageHeader
            onMobileMenuOpen={() => setIsMobileMenuOpen(true)}
            onSearchChange={(value) => setSearchTerm(value)}
          />
        ) : (
          <div className="sm:hidden p-4">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 text-gray-700 dark:text-gray-200 focus:outline-none"
              aria-label="Open menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        )}

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-[#121212]">
          <div className="px-4 py-6 sm:px-6 lg:px-8">{renderPageContent()}</div>
        </main>
      </div>

      {/* Mobile Sidebar */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activePage={activePage}
        onPageChange={setActivePage}
      />

      {/* Add User Modal */}
      {isAddModalOpen && (
        <AddUserModal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
        />
      )}

      {/* User Details Modal */}
      <UserDetailModal
        isOpen={isUserDetailModalOpen}
        onClose={() => setIsUserDetailModalOpen(false)}
        user={selectedUser}
      />
    </div>
  )
}
