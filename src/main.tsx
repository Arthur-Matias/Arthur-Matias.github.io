import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import './output.css';
import { GlobalProvider } from './components/GlobalContext';

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDxPWSpn-t71JvqjMldBrN1bVuDJcqwovs",

  authDomain: "blog-fa837.firebaseapp.com",

  databaseURL: "https://blog-fa837-default-rtdb.firebaseio.com",

  projectId: "blog-fa837",

  storageBucket: "blog-fa837.appspot.com",

  messagingSenderId: "150129514022",

  appId: "1:150129514022:web:a90f18adb0deeff67bf8e7",

  measurementId: "G-0BQYEGGDW6"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

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
