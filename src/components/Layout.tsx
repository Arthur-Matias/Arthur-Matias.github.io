import { ReactNode } from "react";
import Topbar from "./Topbar";
import { useGlobalContext } from "./GlobalContext";
import Menu from "./Menu";
// import Galaxy from "./Galaxy";

interface LayoutProps {
    children: ReactNode;
    progress?: number;
}

const Layout: React.FC<LayoutProps> = ({ children, progress }) => {
    const { state } = useGlobalContext();

    return (
        <div className="dark:bg-gray-900 bg-slate-200 dark:text-slate-50 text-gray-950 min-h-screen">
            <div className="fixed top-0 left-0 h-full w-full z-0">
                {/* <Galaxy progress={progress} /> */}
            </div>
            <div className="pl-12 pr-12 z-10 relative">
                {children}
            </div>
            <Topbar />
            {state.menuOpen && <Menu />}
        </div>
    );
};

export default Layout;
