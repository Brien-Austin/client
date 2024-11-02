import React, { useEffect } from 'react';
import NavBar from './navbar';
import { useLocation, useNavigate } from 'react-router-dom';

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useNavigate();
  const location = useLocation();

  useEffect(() => {
    
    const timeoutId = setTimeout(() => {
      const queryParams = new URLSearchParams(location.search);
      const accessToken = queryParams.get('accessToken');
      const refreshToken = queryParams.get('refreshToken');

      if (accessToken && refreshToken) {

        localStorage.setItem('userAccessToken', accessToken);
        localStorage.setItem('userRefreshToken', refreshToken);

       
        const newUrl = window.location.pathname; 
        window.history.replaceState({}, document.title, newUrl);
      }
    }, 1000);

    return () => clearTimeout(timeoutId); 
  }, [location.search]);

  useEffect(() => {
    const at = localStorage.getItem('userAccessToken');

    
    if (!at) {
      router('/onboard');
    }
  }, [router]); 

  return (
    <main className='h-screen w-full'>
      <NavBar />
      <div className="mt-5 lg:px-10 sm:px-5">
        {children}
      </div>
    </main>
  );
};

export default UserLayout;
