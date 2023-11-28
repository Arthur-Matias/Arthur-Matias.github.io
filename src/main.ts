import './styles/style.scss'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.css'


import AnimationController, { animationIDs } from './controllers/animationController.ts'
import { EventHandler, clickEventName } from './controllers/eventHandlers.ts'

let eventHandler: EventHandler;
let animationController: AnimationController;

window.addEventListener("load", ()=>{
    animationController = new AnimationController();
    eventHandler = new EventHandler(animationController);
})
window.addEventListener('resize', () => {
    if (!!eventHandler)
    eventHandler.handleResize();
});
window.addEventListener("scroll", () => {
    if (!!eventHandler)
    eventHandler.handleScrollEvent();
});
window.addEventListener("click", (event) => {
    if (!!eventHandler)
    eventHandler.handleClick(event);
})