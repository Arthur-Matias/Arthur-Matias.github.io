
// export type Page = "Home" | "About" | "Contact";
import React, { createContext, ReactNode, useContext, useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from '../firebase'; 
import { getDownloadURL, ref as storageRef } from "firebase/storage";
import { storage } from '../firebase'; 
import { MainColors, GrayscaleColors, colorsMap } from './tailwindColors';

export type ProjectCategory = "all" | "design" | "dev";
export type Page = "Home" | "About" | "Contact";

// export interface iColorNames{
//   main: mainColors;
//   bg: grayscaleColors;
//   accent: grayscaleColors;
// }

export interface iColors{
  main: MainColors;
  bg: GrayscaleColors;
  accent: GrayscaleColors;
}

export interface iProject {
  imgURL: string; 
  name: string;
  alt: string;
  link: string;
  category: string;
}

interface iState {
  menuOpen: boolean;
  darkTheme: boolean;
  currentPage: Page;
  colors: iColors;
  projects: iProject[];
}

interface GlobalCtxProps {
  children: ReactNode;
}

const defaultContextValue: iState = {
  menuOpen: false,
  darkTheme: window.matchMedia('(prefers-color-scheme: dark)').matches,
  currentPage: "Home",
  colors: window.matchMedia('(prefers-color-scheme: dark)').matches?{
    accent: "slate",
    bg: "gray",
    main: "blue"
  }:{
    accent: "gray",
    bg: "slate",
    main: "blue"
  },
  projects: []
};

const GlobalContext = createContext<{
  state: iState;
  toggleMenu: () => void;
  toggleDarkMode: () => void;
  changeCurrentPage: (newPage: Page) => void;
  changeColors: ( {} ) => void;
}>({
  state: defaultContextValue,
  toggleMenu: () => {},
  toggleDarkMode: () => {},
  changeCurrentPage: () => {},
  changeColors: () => {}
});
// function shuffleArray(array: any[]) {
//   for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
//       [array[i], array[j]] = [array[j], array[i]]; // Swap elements
//   }
//   return array;
// }
export const GlobalProvider: React.FC<GlobalCtxProps> = ({ children }) => {
  const [state, setState] = useState<iState>(defaultContextValue);
  
  const toggleMenu = () => {
    setState((prevState) => ({ ...prevState, menuOpen: !prevState.menuOpen }));
  };

  const toggleDarkMode = () => {
    setState(prevState=>( {...prevState,darkTheme: !prevState.darkTheme, colors:{
      bg: prevState.colors.accent,
      accent: prevState.colors.bg,
      main: prevState.colors.main,
    }}  
  ))
    
  };
  

  const changeCurrentPage = (newPage: Page) => {
    setState((prevState) => ({ ...prevState, currentPage: newPage }));
  };

  const changeColors = ({
      accent = state.colors.accent, 
      bg = state.colors.bg, 
      main = state.colors.main
    }) => {
    const newMainColor = state.darkTheme?colorsMap("800")[main]:colorsMap("400")[main];
    const newBgColor = state.darkTheme?colorsMap("950")[bg]:colorsMap("200")[bg]; // bg-slate-200 dark:bg-gray-950 
    const newAccentColor = state.darkTheme?colorsMap("200")[accent]:colorsMap("950")[accent]; // dark:text-slate-200 text-gray-950
    // setState((prevState) => ({...prevState, colors: color}))
    document.documentElement.style.setProperty('--color-main', newMainColor);
    document.documentElement.style.setProperty('--color-bg', newBgColor);
    document.documentElement.style.setProperty('--color-accent', newAccentColor);
    // console.log("main: " + newMainColor)
    // console.log("main: " + main)
    // console.log("bg: " + newBgColor)
    // console.log("bg: " + bg)
    // console.log("accent: " + newAccentColor)
    // console.log("accent: " + accent)
  }
  

  useEffect(() => {
    const root = document.getElementById("root");
    if (state.darkTheme) {
      root?.classList.add('dark');
    } else {
      root?.classList.remove('dark');
    }
    changeColors({})
  }, [state.darkTheme, state.colors]);

  useEffect(() => {
    const projectsRef = ref(database, '/projects');
    const unsubscribe = onValue(projectsRef, async (snapshot) => {
      const data = snapshot.val();
      // console.log("Fetched data:", data); // Log the raw data
      if (data) {
        const projectsData: iProject[] = Object.values(data).map((item: any) => ({
          imgURL: item.imgURL,
          name: item.name,
          alt: item.alt,
          link: item.link,
          category: item.category,
        }));
  
        // console.log("Projects Data:", projectsData); // Log projectsData
  
        const projectsWithUrls = await Promise.all(projectsData.map(async (project) => {
          try {
            // Use imgURL instead of imgURL
            if (!project.imgURL) {
              throw new Error("Image URL is undefined");
            }
        
            const imgRef = storageRef(storage, project.imgURL); // Adjusted key
            const imgURL = await getDownloadURL(imgRef);
            
            return { ...project, imgURL }; // Use imgURL for the final object
          } catch (error) {
            console.error(`Failed to fetch URL for ${project.imgURL}:`, error);
            return { ...project, imgURL: '' }; // Handle missing images
          }
        }));
        setState((prevState) => ({ ...prevState, projects: projectsWithUrls }));
      } else {
        setState((prevState) => ({ ...prevState, projects: [] }));
      }
    }, (error) => {
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
