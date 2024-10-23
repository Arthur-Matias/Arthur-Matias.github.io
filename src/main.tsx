import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import './index.css';
import './output.css';
import { GlobalProvider } from './components/GlobalContext';
import Contact from './pages/Contact';
// const mediaQueryList = window.matchMedia('(prefers-reduced-motion: reduce)');
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />, // Use JSX syntax here
  },
  {
    path: '/contact',
    element: <Contact />, // Use JSX syntax here
  },
  {
    path: '*',
    element: <>Not found</>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  </StrictMode>,
);