import { Animations, animationControls, setupAnimation } from "./animations";
import { startPortfolio } from "./portfolio";

export enum animationIDs{
    home= "home",
    quote= "quote",
    about= "about",
    portfolio= "portfolio",
    contact= "contact",
    menu= "menu",
}

export default class AnimationController{
    private activeAnimations: animationIDs[] = [];
    private lastActive!: animationIDs;
    private animations: {[id in animationIDs]: animationControls} = {} as {[id in animationIDs]: animationControls};
    constructor(){
        this.animations.home = setupAnimation({
            targetElementID: "home",
            animation: Animations.circleRotation
        })
        this.animations.home.startSketch.bind(this)
        this.animations.home.stopSketch.bind(this)
        
        this.animations.quote = setupAnimation({
            targetElementID: "quote",
            animation: Animations.dotMatrix
        })
        this.animations.quote.startSketch.bind(this)
        this.animations.quote.stopSketch.bind(this)
        
        this.animations.about = setupAnimation({
            targetElementID: "blob",
            animation: Animations.blobAnimation
        })
        this.animations.about.startSketch.bind(this)
        this.animations.about.stopSketch.bind(this)
        
        this.animations.contact = setupAnimation({
            targetElementID: "dot-quad",
            animation: Animations.dotSquare
        })
        this.animations.contact.startSketch.bind(this)
        this.animations.contact.stopSketch.bind(this)
        
        this.animations.menu = setupAnimation({
            targetElementID: "menu-animation",
            animation: Animations.dotMatrix
        })
        this.animations.menu.startSketch.bind(this)
        this.animations.menu.stopSketch.bind(this)
        
        this.startAnimation(animationIDs.home)
        this.startAnimation(animationIDs.portfolio)
    }
    private activateHome(){
        this.startAnimation(animationIDs.quote)
        this.startAnimation(animationIDs.home)
    
        this.stopAnimation(animationIDs.about)
        this.stopAnimation(animationIDs.contact)
        this.lastActive = animationIDs.home
    }
    private activateQuote(){
        this.startAnimation(animationIDs.home)
        this.startAnimation(animationIDs.quote)
        this.startAnimation(animationIDs.about)
    
        this.stopAnimation(animationIDs.contact)
        this.lastActive = animationIDs.quote
    }
    private activateAbout(){
        this.startAnimation(animationIDs.quote)
        this.startAnimation(animationIDs.about)
    
        this.stopAnimation(animationIDs.home)
        this.stopAnimation(animationIDs.contact)
        this.lastActive = animationIDs.about
    }
    // private activatePortfolio(){
    //     this.startAnimation(animationIDs.about)
    //     this.startAnimation(animationIDs.contact)
    //     this.startAnimation(animationIDs.portfolio)
        
    //     this.stopAnimation(animationIDs.quote)
    //     this.stopAnimation(animationIDs.home)
    // }
    private activateContact(){
        this.startAnimation(animationIDs.portfolio)
        this.startAnimation(animationIDs.contact)
    
        this.stopAnimation(animationIDs.home)
        this.stopAnimation(animationIDs.about)
        this.stopAnimation(animationIDs.quote)
    
        this.lastActive = animationIDs.contact
    }
    private activateMenu(){
        this.startAnimation(animationIDs.menu)
    }
    private stopAnimation(id: animationIDs){
        try {
            if(this.activeAnimations.indexOf(id) !== -1){
                this.animations[id].stopSketch()
                this.activeAnimations.splice(this.activeAnimations.indexOf(id), 1)
            }
        } catch (error) {
            
        }
    }
    private startAnimation(id: animationIDs){
        try {
            if(this.activeAnimations.indexOf(id) === -1){
                if(id === animationIDs.portfolio){
                    startPortfolio();
                }else{
                    this.animations[id].startSketch()
                }
                this.activeAnimations.push(id)
            }
        } catch (error) {
            console.error(error)
        }
    }
    public genericStartAnimation(id: animationIDs){
        switch (id) {
            case animationIDs.home:
                // console.log("activating home")
                this.activateHome()
            break;
            case animationIDs.quote:
                this.activateQuote()
                // console.log("activating quote")
            break;
            case animationIDs.about:
                this.activateAbout()
                // console.log("activating about")
                
            break;
            case animationIDs.portfolio:
                // this.activatePortfolio()
                // console.log("activating portfolio")
                
            break;
            case animationIDs.contact:
                // console.log("activating contact")
                this.activateContact()
                
            break;
            case animationIDs.menu:
                this.activateMenu()
                
            break;
        
            default:
                break;
        }
    }
    public genericStopAnimation(id: animationIDs){
        this.stopAnimation(id);
    }
    public get LastActive():animationIDs{
        return this.lastActive;
    }
    public set LastActive(value: animationIDs){
        this.LastActive = value;
    }
    public get ActiveAnimations(): animationIDs[]{
        return this.activeAnimations;
    }
}