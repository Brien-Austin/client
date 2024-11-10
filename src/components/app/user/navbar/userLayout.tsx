import React, { useEffect } from 'react';
import NavBar from './navbar';
import { useLocation, useNavigate } from 'react-router-dom';

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleAuth = async () => {
      // Check URL parameters first
      const queryParams = new URLSearchParams(location.search);
      const accessToken = queryParams.get('accessToken');
      const refreshToken = queryParams.get('refreshToken');

      if (accessToken && refreshToken) {
        // Store tokens
        localStorage.setItem('userAccessToken', accessToken);
        localStorage.setItem('userRefreshToken', refreshToken);
        
        // Clean URL
        const newUrl = window.location.pathname;
        window.history.replaceState({}, document.title, newUrl);
        
        // Don't redirect since we just got valid tokens
        return;
      }

      // If no URL params, check localStorage
      const storedAccessToken = localStorage.getItem('userAccessToken');
      
      if (!storedAccessToken) {
        router('/onboard');
      }
    };

    // Small delay to ensure localStorage is updated before checks
    const timeoutId = setTimeout(handleAuth, 100);
    return () => clearTimeout(timeoutId);
  }, [location.search, router]);

  return (
    <main className="h-screen w-full">
      <NavBar />
      <div className="mt-5 lg:px-10 sm:px-5 lg:ml-64">
        {children}
      </div>
    </main>
  );
};

export default UserLayout;