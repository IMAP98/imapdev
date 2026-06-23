/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomeView from './components/home/HomeView';
import ServicesView from './components/services/ServicesView';
import AboutView from './components/about/AboutView';
import ContactView from './components/contact/ContactView';
import PricingView from './components/pricing/PricingView';
import { Box } from '@mui/material';
import { useState, useEffect } from 'react';

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#home');

  useEffect(() => {
    const handleHashChange = () => {
      let hash = window.location.hash;
      if (!hash) hash = '#home';
      setCurrentHash(hash);
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    
    if (!window.location.hash) {
      window.location.hash = '#home';
    }
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderCurrentView = () => {
    switch (currentHash) {
      case '#services':
        return <ServicesView />;
      case '#about':
        return <AboutView />;
      case '#contact':
        return <ContactView />;
      case '#pricing':
        return <PricingView />;
      case '#home':
      default:
        return <HomeView />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Box component="main" sx={{ flexGrow: 1 }}>
          {renderCurrentView()}
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
