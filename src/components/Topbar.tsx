import Logo from "./Logo";
import MenuBtn from "./MenuBtn";

export default function Topbar() {
    return (
        <div className="h-20 dark:bg-gray-950 bg-slate-200 bg-opacity-50 dark:bg-opacity-50 pl-12 pr-12 flex justify-between fixed z-10 top-0 w-full backdrop-blur-md dark:backdrop-blur-md">
            <div className="flex items-center justify-center">
                <div className="flex">
                    <div><Logo /></div>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <MenuBtn />
            </div>
        </div>
    );
}