import React, { createContext, ReactNode, useContext, useState, useEffect } from 'react';

export type page = "Home" | "About" | "Contact";

interface State {
  menuOpen: boolean;
  darkTheme: boolean;
  currentPage: page;
  mainColor: string;
  apiUrl: string;
}

interface GlobalCtxProps {
  children: ReactNode;
}

// Default value for context
const defaultContextValue: State = {
  menuOpen: false,
  darkTheme: window.matchMedia('(prefers-color-scheme: dark)').matches,
  currentPage: "Home",
  mainColor: "black",
  apiUrl:  import.meta.env.VITE_API_URL
};

const GlobalContext = createContext<{
  state: State;
  toggleMenu: () => void;
  toggleDarkMode: () => void;
  changeCurrentPage:(newPage: page) => void;
}>({
  state: defaultContextValue,
  toggleMenu: () => {},
  toggleDarkMode: () => {},
  changeCurrentPage: ()=>{}
});

export const GlobalProvider: React.FC<GlobalCtxProps> = ({ children }) => {
  const [state, setState] = useState<State>(defaultContextValue);

  const toggleMenu = () => {
    setState((prevState) => ({ ...prevState, menuOpen: !prevState.menuOpen }));
  };

  const toggleDarkMode = () => {
    setState((prevState) => ({ ...prevState, darkTheme: !prevState.darkTheme}));
    // console.log("darkmode: " + state.darkTheme)
  };
  const changeCurrentPage = (newPage: page) => {
    setState((prevState) => ({...prevState, currentPage: newPage}))
  }
  useEffect(() => {
    const root = document.getElementById("root");
    if (state.darkTheme) {
      root?.classList.add('dark');
    } else {
      root?.classList.remove('dark');
    }
  }, [state.darkTheme]); // Run effect when darkTheme changes

  return (
    <GlobalContext.Provider value={{ state, toggleMenu, toggleDarkMode, changeCurrentPage }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  // console.log(context.state.darkTheme)
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};
