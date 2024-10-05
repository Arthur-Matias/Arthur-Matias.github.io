

// export type Page = "Home" | "About" | "Contact";
import React, { createContext, ReactNode, useContext, useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from '../firebase'; 
import { getDownloadURL, ref as storageRef } from "firebase/storage";
import { storage } from '../firebase'; 

export type ProjectCategory = "all" | "design" | "dev";
export type Page = "Home" | "About" | "Contact";

export interface Project {
  imgUrl: string; 
  name: string;
  alt: string;
  link: string;
  category: string;
}

interface State {
  menuOpen: boolean;
  darkTheme: boolean;
  currentPage: Page;
  mainColor: string;
  projects: Project[];
}

interface GlobalCtxProps {
  children: ReactNode;
}

const defaultContextValue: State = {
  menuOpen: false,
  darkTheme: window.matchMedia('(prefers-color-scheme: dark)').matches,
  currentPage: "Home",
  mainColor: "black",
  projects: []
};

const GlobalContext = createContext<{
  state: State;
  toggleMenu: () => void;
  toggleDarkMode: () => void;
  changeCurrentPage: (newPage: Page) => void;
}>({
  state: defaultContextValue,
  toggleMenu: () => {},
  toggleDarkMode: () => {},
  changeCurrentPage: () => {}
});

export const GlobalProvider: React.FC<GlobalCtxProps> = ({ children }) => {
  const [state, setState] = useState<State>(defaultContextValue);

  const toggleMenu = () => {
    setState((prevState) => ({ ...prevState, menuOpen: !prevState.menuOpen }));
  };

  const toggleDarkMode = () => {
    setState((prevState) => ({ ...prevState, darkTheme: !prevState.darkTheme }));
  };

  const changeCurrentPage = (newPage: Page) => {
    setState((prevState) => ({ ...prevState, currentPage: newPage }));
  };

  useEffect(() => {
    const root = document.getElementById("root");
    if (state.darkTheme) {
      root?.classList.add('dark');
    } else {
      root?.classList.remove('dark');
    }
  }, [state.darkTheme]);

  useEffect(() => {
    const projectsRef = ref(database, '/projects'); 
    const unsubscribe = onValue(projectsRef, async (snapshot) => {
      const data = snapshot.val();
      console.log("Fetched data:", data); // Log the raw data
      if (data) {
        const projectsData: Project[] = Object.values(data);
        console.log("Projects Data:", projectsData); // Log projectsData
        const projectsWithUrls = await Promise.all(projectsData.map(async (project) => {
          try {
            const imgUrl = await getDownloadURL(storageRef(storage, `/${project.imgUrl}`));
            return { ...project, imgUrl };
          } catch (error) {
            console.error(`Failed to fetch URL for ${project.imgUrl}:`, error);
            return { ...project, imgUrl: '' }; // Handle missing images
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
    <GlobalContext.Provider value={{ state, toggleMenu, toggleDarkMode, changeCurrentPage }}>
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
