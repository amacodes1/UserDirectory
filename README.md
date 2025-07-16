# UserDirectory - User Directory Application

A modern React application with a user directory interface featuring dark mode support, real-time search, and responsive design.

## 🚀 Features

### Core Functionality
- **User Directory**: Display and manage users in both grid and list views
- **Real-time Search**: Search users by name or email with instant filtering
- **Dark Mode**: Toggle between light and dark themes with system preference detection
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modal Interactions**: Add new users and view detailed user information

### UI/UX Features
- **Sticky Header**: Header becomes opaque on scroll with backdrop blur
- **Sidebar Navigation**: Collapsible sidebar with active page indicators
- **Loading States**: Skeleton loading animations for better user experience
- **Toast Notifications**: Success and error feedback using Sonner
- **Smooth Transitions**: CSS transitions for all interactive elements

### Technical Features
- **Redux Toolkit**: State management with async thunks for API calls
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first styling with custom dark mode colors
- **Next Themes**: Professional theme management with system preference detection
- **React Router**: Client-side routing with file-based routing

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **Routing**: React Router v7
- **Theme**: next-themes
- **Notifications**: Sonner
- **Icons**: Lucide React
- **Build Tool**: Vite

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd UserDirectory
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
UserDirectory/
├── app/
│   ├── components/
│   │   ├── pages/           # Page components
│   │   │   ├── Dashboard.tsx
│   │   │   ├── Vouchers.tsx
│   │   │   ├── Analytics.tsx
│   │   │   └── Spotlight.tsx
│   │   ├── MainMenu.tsx     # Sidebar navigation
│   │   ├── PageHeader.tsx   # Top header with search
│   │   ├── SearchAndViewControls.tsx
│   │   ├── UsersGridList.tsx
│   │   ├── AddUserModal.tsx
│   │   ├── UserDetailModal.tsx
│   │   ├── LoadingSkeleton.tsx
│   │   └── MobileMenu.tsx
│   ├── root.tsx            # Root layout with providers
│   └── app.css            # Global styles
├── src/
│   ├── store/
│   │   ├── index.ts       # Redux store configuration
│   │   ├── userSlice.ts   # User state management
│   │   └── hooks.ts       # Typed Redux hooks
│   ├── App.tsx           # Main app component
│   └── main.tsx          # Entry point
├── public/               # Static assets
└── package.json
```

## 🎨 Design System

### Color Palette

#### Light Mode
- **Primary**: Blue (#3B82F6)
- **Background**: White (#FFFFFF)
- **Surface**: Gray-50 (#F9FAFB)
- **Text**: Gray-900 (#111827)

#### Dark Mode
- **Primary**: Blue (#60A5FA)
- **Background**: Dark (#121212)
- **Surface**: Dark Gray (#1E1E1E)
- **Hover**: Darker Gray (#222222)
- **Text**: White (#FFFFFF)

### Components

#### Layout Components
- **MainMenu**: Sidebar with navigation items
- **PageHeader**: Sticky header with theme toggle
- **SearchAndViewControls**: Unified search and view controls

#### User Components
- **UsersGridList**: Displays users in grid or list format
- **AddUserModal**: Form to add new users
- **UserDetailModal**: Detailed user information view
- **LoadingSkeleton**: Loading state animations

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=https://687124747ca4d06b34b97d3d.mockapi.io/api
```

### Redux Store
The application uses Redux Toolkit with the following slices:
- **userSlice**: Manages user data, loading states, and search functionality

### Theme Configuration
Dark mode is configured using `next-themes` with:
- System preference detection
- Local storage persistence
- Smooth transitions

## 📱 Usage

### Navigation
- Use the sidebar to navigate between different pages
- The header provides quick access to search and theme toggle
- Mobile menu is available on smaller screens

### User Management
1. **View Users**: Browse users in grid or list view
2. **Search Users**: Use the search bar to filter users by name or email
3. **Add User**: Click "Add new" to create a new user
4. **View Details**: Click on any user card to see detailed information

### Theme Toggle
- Click the sun/moon icon in the header to toggle between light and dark modes
- The theme preference is automatically saved and restored

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts to deploy

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit your changes: `git commit -m 'Add feature'`
5. Push to the branch: `git push origin feature-name`
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Troubleshooting

### Common Issues

**Theme not switching properly**
- Clear browser cache and local storage
- Check if `next-themes` is properly configured

**API calls failing**
- Verify the API endpoint is accessible
- Check network connectivity
- Review browser console for errors

**Build errors**
- Ensure all dependencies are installed: `npm install`
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`

## 📞 Support

For support and questions:
- Create an issue in the repository
- Check the troubleshooting section above
- Review the code comments for implementation details
