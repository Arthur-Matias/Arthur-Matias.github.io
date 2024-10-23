import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from '../firebase'; 
import { getDownloadURL, ref as storageRef } from "firebase/storage";
import { storage } from '../firebase'; 
import { MainColors, colorsMap, mainColors } from '../scripts/tailwindColors';
import { getRandomItem, updateFavicon } from '../scripts/consts';
import { ColorParams, GlobalCtxProps, iProject, iState, Page } from '../types';

const preferredLastColor = localStorage.getItem("preferredColor");

const defaultContextValue: iState = {
  // prefersReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  prefersReducedMotion: false,
  menuOpen: false,
  darkTheme: window.matchMedia('(prefers-color-scheme: dark)').matches,
  currentPage: "Home",
  colors: {
    accent: window.matchMedia('(prefers-color-scheme: dark)').matches ? "slate" : "gray",
    bg: window.matchMedia('(prefers-color-scheme: dark)').matches ? "gray" : "slate",
    main: preferredLastColor ? preferredLastColor as MainColors : getRandomItem(mainColors)
  },
  projects: []
};

const GlobalContext = createContext<{
  state: iState;
  toggleMenu: () => void;
  toggleDarkMode: () => void;
  changeCurrentPage: (newPage: Page) => void;
  changeColors: (params: ColorParams) => void;
}>({
  state: defaultContextValue,
  toggleMenu: () => {},
  toggleDarkMode: () => {},
  changeCurrentPage: () => {},
  changeColors: () => {}
});

export const GlobalProvider: React.FC<GlobalCtxProps> = ({ children }) => {
  const [state, setState] = useState<iState>(defaultContextValue);

  const toggleMenu = () => {
    setState(prevState => ({ ...prevState, menuOpen: !prevState.menuOpen }));
  };

  const changeColors = useCallback(({ accent, bg, main }: ColorParams) => {
    const isDark = state.darkTheme;
  
    const newMainColor = colorsMap(isDark ? "800" : "500")[main];
    const newBgColor = isDark ? colorsMap("950")[bg] : colorsMap("200")[bg];
    const newAccentColor = isDark ? colorsMap("200")[accent] : colorsMap("950")[accent];
  
    // Update document styles
    document.documentElement.style.setProperty('--color-main', newMainColor);
    document.documentElement.style.setProperty('--color-bg', newBgColor);
    document.documentElement.style.setProperty('--color-accent', newAccentColor);
    updateFavicon(newMainColor);
  
    setState(prevState => ({
      ...prevState,
      colors: { accent, bg, main }
    }));
  }, [state.darkTheme]);
  
  

  useEffect(() => {
    const path = window.location.pathname;
    const newPage = path === '/' ? 'Home' : path === '/contact' ? 'Contact' : 'NotFound';
    setState(prevState => ({ ...prevState, currentPage: newPage }));
  }, []);

  const changeCurrentPage = (newPage: Page) => {
    setState(prevState => ({ ...prevState, currentPage: newPage }));
  };
  useEffect(() => {
    changeColors({
      bg: state.colors.bg,
      accent: state.colors.accent,
      main: state.colors.main
    });
  }, [state.colors.bg, state.colors.accent, state.colors.main, changeColors]);
  
  const toggleDarkMode = () => {
    setState(prevState => {
      const newDarkTheme = !prevState.darkTheme;
  
      return {
        ...prevState,
        darkTheme: newDarkTheme
      };
    });
  };
  

  // Effect for dark mode toggling
  useEffect(() => {
    const root = document.getElementById("root");
    if (root) {
      root.classList.toggle('dark', state.darkTheme);
    }
  }, [state.darkTheme]); 

  // Fetch projects from Firebase
  useEffect(() => {
    const projectsRef = ref(database, '/projects');
    const unsubscribe = onValue(projectsRef, async snapshot => {
      const data = snapshot.val() as Record<string, iProject>;
      if (data) {
        const projectsData: iProject[] = Object.values(data).map(item => ({
          imgURL: item.imgURL,
          name: item.name,
          alt: item.alt,
          link: item.link,
          category: item.category,
        }));

        const projectsWithUrls = await Promise.all(projectsData.map(async project => {
          try {
            if (!project.imgURL) throw new Error("Image URL is undefined");
            const imgRef = storageRef(storage, project.imgURL);
            const imgURL = await getDownloadURL(imgRef);
            return { ...project, imgURL };
          } catch (error) {
            console.error(`Failed to fetch URL for ${project.imgURL}:`, error);
            return { ...project, imgURL: '' };
          }
        }));

        setState(prevState => ({ ...prevState, projects: projectsWithUrls }));
      } else {
        setState(prevState => ({ ...prevState, projects: [] }));
      }
    }, error => {
      console.error('Failed to fetch portfolio items:', error);
    });

    return () => unsubscribe();
  }, []);

  return (
    <GlobalContext.Provider value={{ state, toggleMenu, toggleDarkMode, changeCurrentPage, changeColors }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};
