import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/common/Navbar';
import { SocialBar } from './components/common/SocialBar';
import { Footer } from './components/common/Footer';
import { BackgroundEffects } from './components/common/BackgroundEffects';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));

// Error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#282C33] text-white flex items-center justify-center p-6 font-mono">
          <div className="text-center max-w-md p-8 border border-[#ABB2BF] bg-[#282C33]">
            <h1 className="text-2xl font-bold mb-4 text-[#C778DD]">&lt;Error /&gt;</h1>
            <p className="text-[#ABB2BF] mb-6 text-xs">An unexpected error occurred. Please refresh or try again.</p>
            <button
              onClick={() => window.location.reload()}
              className="retro-btn"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Loading component for lazy loaded pages
const PageLoader = () => (
  <div className="min-h-screen bg-[#282C33] flex items-center justify-center font-mono">
    <div className="flex flex-col items-center gap-3">
      <div className="w-8 h-8 border-2 border-[#C778DD] rotate-45 animate-spin flex items-center justify-center" />
      <span className="text-xs text-[#ABB2BF] tracking-widest lowercase">
        #loading...
      </span>
    </div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <div className="min-h-screen bg-[#282C33] text-[#ABB2BF] font-mono flex flex-col justify-between selection:bg-[#C778DD] selection:text-white">
          <BackgroundEffects />
          <SocialBar />
          <Navbar />
          <main className="relative flex-1">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
