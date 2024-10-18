import { useGlobalContext } from "./GlobalContext";
import TopbarLogo from "./TopbarLogo";
import MenuBtn from "./MenuBtn";

export default function Topbar() {

    const { state } = useGlobalContext()

    return (
        <div className="h-20  pl-12 pr-12 flex justify-between fixed z-20 top-0 w-full">
            <div className="flex items-center justify-center">
                <div className="flex">
                    {!state.menuOpen &&
                        <TopbarLogo />
                    }
                </div>
            </div>
            <div className="flex items-center justify-center">
                <MenuBtn />
            </div>
        </div>
    );
}