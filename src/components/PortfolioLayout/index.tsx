import {PortfolioContainer,PortfolioSection,IconContainer, PortfolioContent, PortfolioText, AwesomeLink} from './styles'

import PcIcon from '../PcIcon'
import React, { useState } from 'react';

export interface PortfolioInterface{
    color:string;
}

const PortfolioLayout:React.FC<PortfolioInterface> = ({
    color
})=>{

    const [fillDesign, setFillDesign] = useState(`#595C64`);
    const [fillProg, setFillProg] = useState(`#595C64`);

    let pathname = window.location.pathname

    function handleRedirectClick(e:string){
        window.location.href = e;
    }

    return(
        <>
            <PortfolioContainer>
            <AwesomeLink onClick={()=>handleRedirectClick('https://www.behance.net/arthurmm18')}>
                <PortfolioSection onMouseOver={()=>setFillDesign(`var(--main-${color})`)} onMouseOut={()=>setFillDesign(`#595C64`)} >
                    <IconContainer>
                        <PcIcon color={fillDesign} isDesign />
                    </IconContainer>
                    <PortfolioContent>
                        <PortfolioText color={color}>
                        In 2017, i had the opportunity to join the Federal
                        University of Paraná, where i learned about design
                        concepts and softwares like Adobe Photoshop and illustrator,
                        industrial drawing, 3D modelling, calculus 1 2 & 3, analytical
                        and descriptive geometry and also where i first knew JavaScript.
                        </PortfolioText>
                    </PortfolioContent>
                </PortfolioSection>
            </AwesomeLink>
                
                <AwesomeLink onClick={()=>handleRedirectClick('https://github.com/Arthur-Matias/')}>
                    <PortfolioSection onMouseOver={()=>setFillProg(`var(--main-${color})`)} onMouseOut={()=>setFillProg(`#595C64`)}>
                        <IconContainer>
                            <PcIcon color={fillProg} />
                        </IconContainer>
                        <PortfolioContent>
                        <PortfolioText color={color}>
                            In early 2019 I started searching the web for information about
                            programming logic and its languages, where I discovered that this
                            was my dream field, in 2020 with the COVID-19 pandemic, I locked
                            up the college, and I took the opportunity to learn everything
                            that I could about this area, each time identifying myself more.
                            Currently my focus is web development with TypeScript, HTML5,
                            CSS3, and their frameworks. But I also know C #, Java and Python.
                            </PortfolioText>
                        </PortfolioContent>
                    </PortfolioSection>
                </AwesomeLink>
                
                
            </PortfolioContainer>
        </>
    )
}

export default PortfolioLayout;