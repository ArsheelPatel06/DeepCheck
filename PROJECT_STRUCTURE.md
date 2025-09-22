# 🏗️ DeepCheck - Project Structure

## 📁 Directory Overview

This document provides a comprehensive overview of the DeepCheck project structure after cleanup and optimization.

```
DeepCheck/
├── 📂 public/                     # Static assets served directly
│   ├── 🖼️ hero-ai-human.jpg      # Hero section background image
│   ├── 🎨 logo.svg               # Application logo/favicon
│   ├── 📄 favicon.ico            # Browser favicon
│   ├── 📄 robots.txt             # Search engine directives
│   ├── 📄 404.html               # Custom 404 page for GitHub Pages
│   └── 📄 _redirects             # Netlify redirects for SPA routing
├── 📂 src/                        # Source code
│   ├── 📂 components/             # React components
│   │   ├── 📂 dashboard/          # Dashboard feature components
│   │   │   ├── 🔧 dashboard-page.tsx        # Main dashboard container
│   │   │   ├── 🔧 dashboard-sidebar.tsx     # Navigation sidebar
│   │   │   ├── 📰 news-checker-section.tsx  # News verification
│   │   │   ├── 📺 youtube-checker-section.tsx # YouTube verification
│   │   │   ├── 📱 social-media-checker-section.tsx # Social media verification
│   │   │   ├── 📊 results-section.tsx       # Analysis results display
│   │   │   ├── 📋 history-section.tsx       # Verification history
│   │   │   ├── ⚙️ settings-section.tsx      # User settings
│   │   │   └── 📤 upload-section.tsx        # File upload interface
│   │   ├── 📂 landing/            # Landing page components
│   │   │   └── 🏠 landing-page.tsx          # Landing/authentication page
│   │   └── 📂 ui/                 # Reusable UI components (cleaned)
│   │       ├── 🎨 badge.tsx       # Status badges
│   │       ├── 🔘 button.tsx      # Interactive buttons
│   │       ├── 📋 card.tsx        # Content containers
│   │       ├── 📝 input.tsx       # Form inputs
│   │       ├── 🏷️ label.tsx       # Form labels
│   │       ├── 📊 progress.tsx    # Progress indicators
│   │       ├── 📂 select.tsx      # Dropdown selectors
│   │       ├── 🔄 switch.tsx      # Toggle switches
│   │       ├── 📑 tabs.tsx        # Tabbed interfaces
│   │       ├── 📝 textarea.tsx    # Multi-line text inputs
│   │       ├── 🌌 three-scene.tsx # 3D background animation
│   │       ├── 🍞 toast.tsx       # Toast notifications
│   │       ├── 🍞 toaster.tsx     # Toast container
│   │       ├── 💬 tooltip.tsx     # Hover tooltips
│   │       ├── 🔔 sonner.tsx      # Sonner notifications
│   │       └── 🎣 use-toast.ts    # Toast hook utility
│   ├── 📂 hooks/                  # Custom React hooks
│   │   └── 🎣 use-toast.ts        # Toast notification hook
│   ├── 📂 lib/                    # Utility functions
│   │   └── 🛠️ utils.ts            # Common utility functions
│   ├── 📂 pages/                  # Page-level components
│   │   ├── 🏠 Index.tsx           # Main application entry point
│   │   └── ❌ NotFound.tsx        # 404 error page
│   ├── 🎨 index.css               # Global styles and Tailwind imports
│   ├── 🎨 App.css                # Application-specific styles
│   ├── ⚛️ App.tsx                # Root application component
│   ├── ⚛️ main.tsx               # Application entry point
│   └── 📝 vite-env.d.ts          # Vite environment types
├── 📄 package.json                # Dependencies and scripts
├── ⚙️ vite.config.ts              # Vite build configuration
├── 🎨 tailwind.config.ts          # Tailwind CSS configuration
├── 📝 tsconfig.json               # TypeScript configuration
├── 📄 index.html                  # HTML entry point
├── 📄 README.md                   # Project documentation
├── 📄 PROJECT_STRUCTURE.md        # This file
└── 🚀 vercel.json                 # Vercel deployment configuration
```

## 🧩 Component Architecture

### 🏗️ Main Application Flow

```
index.html → main.tsx → App.tsx → Index.tsx
                                      ↓
                              [Authentication State]
                                      ↓
                         LandingPage ← → DashboardPage
```

### 🔧 Dashboard Architecture

```
DashboardPage
├── DashboardSidebar (Navigation)
└── Content Area:
    ├── UploadSection (File uploads)
    ├── NewsCheckerSection (News verification)
    ├── YouTubeCheckerSection (Video verification)
    ├── SocialMediaCheckerSection (Social media verification)
    ├── ResultsSection (Analysis display)
    ├── HistorySection (Past analyses)
    └── SettingsSection (User preferences)
```

## 🎯 Feature Components

### 📰 News Verification (`news-checker-section.tsx`)

- **Purpose**: Verify news articles and text content
- **Features**: URL analysis, text analysis, source credibility
- **Exports**: `NewsCheckerSection` component, analysis functions

### 📺 YouTube Verification (`youtube-checker-section.tsx`)

- **Purpose**: Analyze YouTube videos for authenticity
- **Features**: URL parsing, video metadata analysis, channel verification
- **Exports**: `YouTubeCheckerSection` component

### 📱 Social Media Verification (`social-media-checker-section.tsx`)

- **Purpose**: Verify Instagram Reels, TikTok videos
- **Features**: Platform-specific analysis, engagement verification
- **Exports**: `SocialMediaCheckerSection` component

### 📊 Results Display (`results-section.tsx`)

- **Purpose**: Show detailed analysis results with explanations
- **Features**: Trust scores, verification badges, educational insights
- **Exports**: `ResultsSection` component with comprehensive result types

### 📋 History Management (`history-section.tsx`)

- **Purpose**: Track and display past verification analyses
- **Features**: localStorage persistence, filtering, debugging tools
- **Exports**: `HistorySection` component, `addToHistory` function, `HistoryItem` interface

## 🔧 Utilities & Configurations

### 🎣 Custom Hooks

- `use-toast.ts`: Toast notification management

### 🛠️ Utilities

- `utils.ts`: Common helper functions (className merging, etc.)

### ⚙️ Configuration Files

- `vite.config.ts`: Build configuration with path aliases
- `tailwind.config.ts`: Tailwind CSS customization
- `tsconfig.json`: TypeScript compiler options

## 🎨 Styling Architecture

### 🌈 Design System

- **Primary Colors**: AI (blue) and Human (purple) gradients
- **Components**: Glass morphism effects with backdrop blur
- **Typography**: Orbitron font for headings, default for body
- **Animations**: Framer Motion for smooth transitions

### 📱 Responsive Design

- **Mobile First**: Tailwind CSS responsive utilities
- **Breakpoints**: Default Tailwind breakpoints (sm, md, lg, xl)
- **Components**: All components are responsive by default

## 🚀 Deployment Configuration

### 🌐 Multi-Platform Support

- **Vercel**: Primary deployment target (vercel.json)
- **GitHub Pages**: SPA routing support (404.html, \_redirects)
- **Netlify**: Alternative deployment option

### 🔄 Build Process

- **Development**: `npm run dev` (Vite dev server)
- **Production**: `npm run build` (Static file generation)
- **Preview**: `npm run preview` (Production preview)

## 📦 Dependencies Overview

### 🎯 Core Libraries

- **React 18**: Modern React with hooks
- **TypeScript**: Type safety and developer experience
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework

### 🎨 UI & Animation

- **Framer Motion**: Animation library
- **Lucide React**: Icon library
- **Recharts**: Chart and data visualization
- **Three.js**: 3D graphics and animations

### 🧰 Utilities

- **React Router**: Client-side routing
- **React Query**: Server state management
- **Class Variance Authority**: Component variant management

## 🧹 Recent Cleanup

### ❌ Removed Unused Components

- 30+ unused UI components (accordion, alert, calendar, etc.)
- Duplicate asset files (logos, images)
- Unused hooks and utilities
- Commented code and dead imports

### ✅ Optimizations Applied

- Simplified component imports
- Removed duplicate files
- Cleaned up unused dependencies
- Streamlined project structure

## 🔄 Development Workflow

### 🛠️ Local Development

1. `npm install` - Install dependencies
2. `npm run dev` - Start development server
3. Navigate to `http://localhost:5173`

### 🧪 Testing & Debugging

- Browser DevTools for component inspection
- Console logging for state debugging
- React DevTools for component hierarchy

### 🚀 Deployment

1. `npm run build` - Generate production build
2. Deploy `dist/` folder to hosting platform
3. Configure SPA routing for client-side navigation

---

## 📚 Additional Documentation

For more detailed information, see:

- [`README.md`](./README.md) - Project overview and setup
- [`package.json`](./package.json) - Dependencies and scripts
- Component files - Individual component documentation
