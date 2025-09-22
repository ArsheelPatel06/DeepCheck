# DeepCheck - AI-Powered Misinformation Detection

![DeepCheck Logo](./public/logo.svg)

**Advanced AI tool for detecting misinformation, analyzing content authenticity, and educating users on digital literacy.**

## 🌐 Live Demo

- **GitHub Pages**: https://arsheelpatel06.github.io/DeepCheck/
- **Vercel**: https://deepcheck-qqpwsq00v-arsheel-patels-projects.vercel.app

## ✨ Features

### 🔍 **Multi-Content Analysis**
- **News Checker** - Verify news articles via URL or text
- **Social Media Checker** - Analyze Instagram Reels and TikTok videos
- **YouTube Checker** - Detect manipulated video content
- **File Upload** - Analyze images, videos, audio, and documents

### 🧠 **AI-Powered Detection**
- Real-time fake news detection
- Source credibility analysis using machine learning
- Deepfake and manipulation detection
- Cross-verification with trusted sources

### 📊 **Detailed Results**
- **Trust Score** (0-100%) with color-coded flags
- **Detailed Reasoning** explaining why content is flagged
- **Source Verification** with publisher credibility ratings
- **Cross-Checking Results** from multiple databases
- **Risk Assessment** and impact analysis

### 🎓 **User Education**
- Simple explanations of verification process
- Educational content about misinformation techniques
- Tips for identifying credible sources
- Interactive learning modules

### 📝 **History & Tracking**
- Persistent analysis history using localStorage
- Search and filter past analyses
- Export results for research purposes

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/ArsheelPatel06/DeepCheck.git
cd DeepCheck

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production
```bash
# Build for local deployment
npm run build

# Build for GitHub Pages
GITHUB_PAGES=true npm run build
```

## 🏗️ Project Structure

```
DeepCheck/
├── public/                 # Static assets
│   ├── logo.svg           # Main logo
│   ├── hero-ai-human.jpg  # Hero image
│   ├── favicon.ico        # Favicon
│   └── 404.html          # SPA routing fallback
├── src/
│   ├── components/        # React components
│   │   ├── dashboard/     # Dashboard-specific components
│   │   ├── landing/       # Landing page components
│   │   └── ui/           # Reusable UI components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   └── pages/            # Page components
├── .github/
│   └── workflows/        # GitHub Actions for deployment
└── package.json
```

## 🛠️ Technology Stack

- **Frontend**: React 18, TypeScript, Vite
- **UI Framework**: shadcn/ui, Tailwind CSS
- **3D Graphics**: Three.js, React Three Fiber
- **Animation**: Framer Motion
- **Routing**: React Router
- **State Management**: React Query, Local Storage
- **Charts**: Recharts
- **Icons**: Lucide React

## 🌍 Deployment

### GitHub Pages
Automatic deployment via GitHub Actions when pushing to `main` branch.

### Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel --prod
```

## 🔧 Configuration

### Environment Variables
- `GITHUB_PAGES`: Set to `true` for GitHub Pages deployment
- `CI`: Automatically set in CI environments
- `GITHUB_ACTIONS`: Automatically set in GitHub Actions

### Vite Configuration
The app automatically detects deployment environment and adjusts base paths accordingly.

## 🎯 How It Works

1. **Content Input**: Users can input news URLs, social media links, or upload files
2. **AI Analysis**: Advanced ML models analyze content for authenticity markers
3. **Source Verification**: Cross-reference with trusted news databases and fact-checkers
4. **Risk Assessment**: Evaluate potential harm and spread patterns
5. **User Education**: Provide clear explanations and learning resources

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- 3D graphics powered by [Three.js](https://threejs.org/)
- Deployed on [GitHub Pages](https://pages.github.com/) and [Vercel](https://vercel.com/)

## 📧 Contact

For questions, suggestions, or collaborations, please reach out through:
- GitHub Issues
- Project Repository: https://github.com/ArsheelPatel06/DeepCheck

---

**Fighting misinformation, one verification at a time.** 🛡️