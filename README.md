# Simple Ear Training

A React TypeScript application for ear training exercises.

## 🚀 Deployment

This project automatically deploys to GitHub Pages when you push to the main branch.

### Automatic Deployment
- Push your changes to the `main` branch
- GitHub Actions will automatically build and deploy to GitHub Pages
- Your site will be available at: `https://[username].github.io/simple-ear-training/`

### Manual Deployment
You can also deploy manually using:
```bash
npm run deploy
```

## 🛠️ Development

### Prerequisites
- Node.js 18+
- npm

### Getting Started
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Type check
npm run type-check

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗️ Tech Stack
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **GitHub Pages** - Hosting
- **GitHub Actions** - CI/CD

## 📁 Project Structure
```
src/
├── main.tsx        # Entry point
├── App.tsx         # Main app component
├── Home.tsx        # Home page
└── About.tsx       # About page
```

## 🔧 Configuration
- **TypeScript**: `tsconfig.json`
- **Vite**: `vite.config.ts`
- **GitHub Actions**: `.github/workflows/deploy-gh-pages.yml`
