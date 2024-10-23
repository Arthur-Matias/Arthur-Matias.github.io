export type ProjectCategory = "all" | "design" | "dev";
export type Page = "Home" | "Contact" | "NotFound";

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

export interface iState {
  prefersReducedMotion: boolean;
  menuOpen: boolean;
  darkTheme: boolean;
  currentPage: Page;
  colors: iColors;
  projects: iProject[];
}

export interface GlobalCtxProps {
  children: ReactNode;
}
export interface ColorParams{
  accent: GrayscaleColors,
  bg: GrayscaleColors,
  main: MainColors
}