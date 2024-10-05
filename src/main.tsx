import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import './index.css';
import './output.css';
import { GlobalProvider } from './components/GlobalContext';

// Import the functions you need from the SDKs you need


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional




// Initialize Firebase

// const app = initializeApp(firebaseConfig);

// export default app;

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
