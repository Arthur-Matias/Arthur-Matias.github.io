import Logo from "./Logo";
import MenuBtn from "./MenuBtn";

export default function Topbar(){
    return (
        <div className="h-20 dark:bg-gray-950 bg-white pl-12 pr-12 flex justify-between fixed z-10 top-0 w-full opacity-70 backdrop-blur">
            <div className="flex items-center justify-center">
                <div className="flex">
                    <div><Logo /></div>
                    {/* <p className="ml-4 font-display font-bold text-2xl">Arthur Matias</p> */}
                </div>
            </div>
            <div className="flex items-center justify-center">
                <MenuBtn />
            </div>
        </div>
    )
}