import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import MainMenu from './components/MainMenu';
import Portfolio from './pages/Portfolio';
import PicSlider from './pages/PicSlider';
import Contact from './pages/Contact';

interface RoutesProps{
    color: string;
    allColors: string[];
    menuItems: string[];
}

const Routes:React.FC<RoutesProps>= ({
    color,
    allColors,
    menuItems,
}) => {
    return(
        <BrowserRouter>
        <MainMenu currentColor={ color } menuItems={menuItems}/>
            <Switch>
            <Redirect from="/home" to="/" exact />
                <Route path="/" exact>

                    <Home color={color} />
                </Route>
                <Route path="/about" exact >
                    <About color={color} />
                </Route>

                <Route path="/portfolio">
                    <Portfolio color={color} />
                    <Route path='/portfolio/design'>
                        <Route path="/portfolio/design/:id" >
                            
                        </Route>
                    </Route>

                    <Route path='/portfolio/proggramming'/>
                        
                </Route>

                <Route path="/contact">
                    <Contact color={color} />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;