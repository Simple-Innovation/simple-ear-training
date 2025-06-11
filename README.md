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

- **Node.js 18+** - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** - [Download here](https://git-scm.com/)
- **GitHub account** - For deployment to GitHub Pages

### System Requirements

- **Operating System**: Windows 10+, macOS 10.15+, or Linux
- **Memory**: 4GB RAM minimum (8GB recommended)
- **Storage**: 500MB free space for dependencies

### Repository Setup

1. **Fork or clone** this repository:

   ```bash
   git clone https://github.com/[username]/simple-ear-training.git
   cd simple-ear-training
   ```

2. **Enable GitHub Pages** (for automatic deployment):
   - Go to your repository on GitHub
   - Navigate to **Settings → Pages**
   - Under **Source**, select **"Deploy from a branch"**
   - Choose **"gh-pages"** branch
   - Click **Save**

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

- **TypeScript**: `tsconfig.json` - TypeScript compiler configuration
- **Vite**: `vite.config.ts` - Build tool configuration
- **GitHub Actions**: `.github/workflows/deploy-gh-pages.yml` - CI/CD pipeline

## 🚨 Troubleshooting

### Common Issues

#### Node.js Version

- **Error**: `npm ERR! engine Unsupported platform`
- **Solution**: Ensure you're using Node.js 18+ by running `node --version`

#### Build Failures

- **Error**: TypeScript compilation errors
- **Solution**: Run `npm run type-check` to see detailed type errors

#### Deployment Issues

- **Error**: GitHub Pages not updating
- **Solution**:
  1. Check if GitHub Actions workflow completed successfully
  2. Verify GitHub Pages is enabled in repository settings
  3. Ensure the `gh-pages` branch exists

#### Module Not Found

- **Error**: `Cannot find module...`
- **Solution**: Delete `node_modules` and run `npm install` again
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```

### Environment Variables

No environment variables are required for this project. All configuration is handled through:

- `vite.config.ts` for build settings
- `tsconfig.json` for TypeScript settings
- Repository settings for GitHub Pages deployment

### Performance Tips

- Use `npm ci` instead of `npm install` in production/CI environments
- Run `npm run type-check` before committing to catch TypeScript errors early
- Use `npm run preview` to test the production build locally before deploying
