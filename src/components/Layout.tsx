import { ReactNode } from "react";
import Topbar from "./Topbar";
import { useGlobalContext } from "./GlobalContext";
import Menu from "./Menu";
import BlobBackground from "./BlobBackground";
import Sketch from "./Sketch";

interface LayoutProps {
    children: ReactNode;
    progress?: number;
}

const Layout: React.FC<LayoutProps> = ({ children, progress }) => {
    const { state } = useGlobalContext();
    const maxSize = Math.min(window.innerHeight, window.innerWidth) * 0.7;
    return (
        <div className="relative min-h-screen bg-slate-200 dark:bg-gray-950 dark:text-slate-200 text-gray-950 font-display">
            {/* Background Blob */}
            {!state.menuOpen && (
                <>
                <div className="fixed inset-0 z-0">
                    <Sketch numOfPoints={5} maxRadius={maxSize} minRadius={10} speedFactorX={100} speedFactorY={10} offsetX={0.5} offsetY={0.5}/>
                </div>
    
                <div className="relative z-10 pl-12 pr-12 p-6 dark:bg-gray-950 bg-slate-200 bg-opacity-50 dark:bg-opacity-50 top-0 w-full backdrop-blur-3xl dark:backdrop-blur-3xl">
                    {children}
                </div>
                </>
)}  
                <Topbar />
            {state.menuOpen && <Menu />}
        </div>
    );
};

export default Layout;
