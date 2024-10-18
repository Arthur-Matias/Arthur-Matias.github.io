import { ReactNode } from "react";
import Topbar from "./Topbar";
import { useGlobalContext } from "./GlobalContext";
import Menu from "./Menu";
import BlobAnimation from "./BlobAnimation";

interface LayoutProps {
    children: ReactNode;
    progress: number;
}


const Layout: React.FC<LayoutProps> = ({ children, progress }) => {
    const { state } = useGlobalContext();
    const blobPoints = 6;
    return (
        <div className="bg-slate-200 dark:bg-gray-950 dark:text-slate-200 text-gray-950 font-display h-dvh top-20">
            {/* Background Blob */}
            {!state.menuOpen && (
                <>
                    <div className="absolute left-0 h-full inset-0 z-0">
                        <BlobAnimation progress={progress} maxPoints={blobPoints} />
                    </div>
                    <div className="pt-20 left-0 z-10 w-full h-full dark:bg-gray-950 bg-slate-200 bg-opacity-70 dark:bg-opacity-50 backdrop-blur-3xl dark:backdrop-blur-3xl flex flex-col justify-center box-border">
                        <div className="w-full home-section justify-center items-center self-center relative overflow-hidden">
                            {children}
                        </div>
                    </div>
                </>
            )}
            {state.menuOpen && <Menu />}
            <Topbar />
        </div>
    );
};

export default Layout;
