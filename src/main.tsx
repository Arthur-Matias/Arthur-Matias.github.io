import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import './output.css';
import { GlobalProvider } from './components/GlobalContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />, // Use JSX syntax here
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
