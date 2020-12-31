import React, {useState} from 'react';

import Routes from '../../Routes';

interface LayoutInterface{
    color:string;
    menuItems:string[];
    allColors:string[];
}

const Layout: React.FC<LayoutInterface> = ({
    color,
    menuItems,
    allColors,
})=>{
    
    return (
        <Routes allColors={allColors} color={color} menuItems={menuItems} />
    )
}

export default Layout;