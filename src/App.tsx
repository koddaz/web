import { useState } from 'react';
import { Hero } from './components/Hero';
import { Current } from './components/Current';
import { Previous } from './components/Previous';
import { PixelButton } from './components/PixelButton';
import { Home, Zap, Archive, Mail } from 'lucide-react';
import { GithubIcon } from './components/icons/GithubIcon';
import { LinkedinIcon } from './components/icons/LinkedinIcon';
import './styles/globals.css';

type Page = 'home' | 'current' | 'previous';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Hero />;
      case 'current':
        return <Current />;
      case 'previous':
        return <Previous />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Retro Header */}
      <header className="border-b-4 border-foreground bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-primary animate-pulse pixel-corners"></div>
              <h1 className="text-foreground">./albert/portfolio.sh</h1>
              <div className="w-4 h-4 bg-primary animate-pulse pixel-corners"></div>
            </div>
            
            {/* Navigation */}
            <nav className="flex gap-4 flex-wrap">
              <PixelButton
                variant="primary"
                active={currentPage === 'home'}
                onClick={() => setCurrentPage('home')}
              >
                <span className="flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  HOME
                </span>
              </PixelButton>
              <PixelButton
                variant="secondary"
                active={currentPage === 'current'}
                onClick={() => setCurrentPage('current')}
              >
                <span className="flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  CURRENT
                </span>
              </PixelButton>
              <PixelButton
                variant="accent"
                active={currentPage === 'previous'}
                onClick={() => setCurrentPage('previous')}
              >
                <span className="flex items-center gap-2">
                  <Archive className="w-4 h-4" />
                  PREVIOUS
                </span>
              </PixelButton>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {renderPage()}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t-4 border-foreground bg-card mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-primary">KONTAKT</h3>
                <div className="space-y-2">
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-accent" />
                    albert.niklasson@gmail.com
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-primary">SOCIALA MEDIER</h3>
                <div className="flex gap-4">
                  <a href="https://github.com/koddaz" target="_blank" rel="noopener noreferrer">
                    <PixelButton variant="primary" className="!px-4 !py-2">
                      <GithubIcon className="w-5 h-5" />
                    </PixelButton>
                  </a>
                  <PixelButton variant="secondary" className="!px-4 !py-2">
                    <LinkedinIcon className="w-5 h-5" />
                  </PixelButton>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t-2 border-foreground text-center">

              <p className="text-muted-foreground mt-2">
                © 2025 ALBERT NIKLASSON. ALL RIGHTS RESERVED.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Retro Corner Decoration */}
      <div className="fixed top-0 left-0 w-8 h-8 border-l-4 border-t-4 border-primary pointer-events-none"></div>
      <div className="fixed top-0 right-0 w-8 h-8 border-r-4 border-t-4 border-primary pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 w-8 h-8 border-l-4 border-b-4 border-primary pointer-events-none"></div>
      <div className="fixed bottom-0 right-0 w-8 h-8 border-r-4 border-b-4 border-primary pointer-events-none"></div>
    </div>
  );
}
