import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { toast } from 'sonner'

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  phone?: string
  location?: string
  dob?: string
}

interface UserState {
  users: User[]
  selectedUser: User | null
  loading: boolean
  error: string | null
  searchTerm: string
  hasLoaded: boolean
}

const initialState: UserState = {
  users: [],
  selectedUser: null,
  loading: false,
  error: null,
  searchTerm: '',
  hasLoaded: false,
}

// Async thunk for fetching all users
export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://687124747ca4d06b34b97d3d.mockapi.io/api/userId')
      if (!response.ok) {
        throw new Error('Failed to fetch users')
      }
      const data = await response.json()
      return data
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to fetch users'
      toast.error(errorMessage)
      return rejectWithValue(errorMessage)
    }
  }
)

// Async thunk for fetching a single user
export const fetchUserById = createAsyncThunk(
  'users/fetchUserById',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://687124747ca4d06b34b97d3d.mockapi.io/api/userId/${id}`)
      if (!response.ok) {
        throw new Error('Failed to fetch user')
      }
      const data = await response.json()
      return data
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to fetch user'
      toast.error(errorMessage)
      return rejectWithValue(errorMessage)
    }
  }
)

// Async thunk for adding a new user
export const addUser = createAsyncThunk(
  'users/addUser',
  async (userData: { name: string; location: string; dob: string }, { rejectWithValue }) => {
    try {
      const response = await fetch('https://687124747ca4d06b34b97d3d.mockapi.io/api/userId', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
      if (!response.ok) {
        throw new Error('Failed to add user')
      }
      const data = await response.json()
      toast.success(`User "${userData.name}" added successfully!`)
      return data
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to add user'
      toast.error(errorMessage)
      return rejectWithValue(errorMessage)
    }
  }
)

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload
    },
    setSelectedUser: (state, action: PayloadAction<User | null>) => {
      state.selectedUser = action.payload
    },
    clearError: (state) => {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch users
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false
        state.users = action.payload
        state.hasLoaded = true
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
      // Fetch single user
      .addCase(fetchUserById.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.loading = false
        state.selectedUser = action.payload
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
      // Add user
      .addCase(addUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.loading = false
        state.users.push(action.payload)
      })
      .addCase(addUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export const { setSearchTerm, setSelectedUser, clearError } = userSlice.actions
export default userSlice.reducer 