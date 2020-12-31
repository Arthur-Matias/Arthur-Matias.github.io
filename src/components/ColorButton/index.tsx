import React from 'react';
import { ButtonContainer, ButtonColor } from './styles'


interface ButtonInterface{
    color: string;
}

const Button: React.FC<ButtonInterface> = ({
    color,
})=>{
    return(
        <>
            <ButtonContainer>
                <ButtonColor  color={color} />
            </ButtonContainer>
        </>
    )
}

export default Button;