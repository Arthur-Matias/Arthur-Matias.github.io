import React from 'react';
import { useState } from 'react';

import ColorButton from '../ColorButton';
import { ColorsContainer, AppContainer } from './styles';

import Layout from '../Layout'

import MeBlue from '../../assets/azul.svg';
import MeOrange from '../../assets/laranja.svg';
import MeGreen from '../../assets/verde.svg';

interface ColorSwitcherInterface{
  menuItems: string[];
}



const ColorSwitcher: React.FC<ColorSwitcherInterface> = ({
  menuItems
}) => {

  const mainColors:string[] = ['blue', 'green', 'orange'];

  const [getColor, setColor] = useState('blue');
  const [activeImg, setActiveImg] = useState(MeBlue);

  const handleClick = (e: string) => {
    setColor(e);
  }
  return (
    <>
      <AppContainer>
        <ColorsContainer>
          {mainColors.map((e,i)=>{ 
            return (
              <div key={`${e}${i}`} onClick={()=>handleClick(e)}>
                <ColorButton key={`e${i}`} color={e} />
              </div>
            )
          })}
        </ColorsContainer>
        <Layout allColors={mainColors} color={getColor} menuItems={menuItems} />
      </AppContainer>
    </>
  );
}

export default ColorSwitcher;
