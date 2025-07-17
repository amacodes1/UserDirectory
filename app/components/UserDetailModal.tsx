import React from 'react'
import { X, Phone, MapPin, FileText } from 'lucide-react'
import type { User } from '../../src/store/userSlice'

interface UserDetailModalProps {
  isOpen: boolean
  onClose: () => void
  user: User | null
}

export const UserDetailModal: React.FC<UserDetailModalProps> = ({ isOpen, onClose, user }) => {
  if (!isOpen || !user) return null

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white dark:bg-[#1E1E1E] rounded-lg shadow-xl max-w-md w-full">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-sans font-semibold text-gray-900 dark:text-white">
              User Details
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* User Info */}
          <div className="space-y-6">
            {/* Avatar and Name */}
            <div className="flex flex-col items-center">
              <div className="h-24 w-24 rounded-full overflow-hidden mb-4">
                <img
                  src={user.avatar || '/usericon3.png'}
                  alt={user.name}
                  className="h-full w-full object-cover"
                />
              </div>

                {/* Gradient Background Behind Name */}
                <div className="w-fit text-center bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2">
                  <h3 className="text-xl font-semibold text-white">{user.name}</h3>
                </div>

                <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-1">
                  {user.email}
                </p>
              </div>

            {/* Details */}
            <div className="space-y-4">
              {user.phone && (
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-[#3B82F6]" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                    <p className="text-gray-900 dark:text-white">{user.phone}</p>
                  </div>
                </div>
              )}

              {user.location && (
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-[#7C3AED]" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                    <p className="text-gray-900 dark:text-white">{user.location}</p>
                  </div>
                </div>
              )}

              {user.dob && (
                <div className="flex items-center space-x-3">
                  <FileText className="h-5 w-5 text-[#9333EA]" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Date of Birth</p>
                    <p className="text-gray-900 dark:text-white">
                      {new Date(user.dob).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
