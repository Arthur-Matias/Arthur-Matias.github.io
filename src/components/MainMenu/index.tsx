import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import { MenuItem, MenuSection, MenuContainer, MenuLogo } from './styles'

interface MenuInterface {
    menuItems: string[];
    currentColor: string;
}

const MainMenu: React.FC<MenuInterface> = ({
    menuItems,
    currentColor,
}) => {

    let [path, setPath] = useState(``);

    let pathname = window.location.pathname;

    function setActivePage(e:string){
        setPath(`/${e}`);
    }

    return (
            <MenuContainer>
                

                <MenuSection color={currentColor}>
                    <Logo color={currentColor} />
                </MenuSection>
                

                <MenuSection color={currentColor}>
                    {menuItems.map((e, i) => {
                            
                        return (
                            <Link key={i} to={`/${e}`}>
                                <MenuItem color={currentColor}>
                                    <div onMouseOver={()=>setActivePage(e)} className={path === pathname?'active' : ''}> <p>{`  ${e}  `}</p> </div>
                                </MenuItem>
                            </Link>
                        )
                    })}
                </MenuSection>
            </MenuContainer>
    )
}

export default MainMenu;