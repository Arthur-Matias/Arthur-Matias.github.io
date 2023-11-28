import AnimationController, { animationIDs } from "./animationController";
import { handlePortfolioLinkClick, portfolioItems } from './portfolio.ts'


export enum clickEventName {
    menuBtn = "menu-btn",
    allPortfolio="allPortfolio",
    design = "designPortfolio",
    menuLink = "menu-link",
    webDev = "webdevPortfolio",
    math = "mathPortfolio",
    topbarLogo = "topbarLogo"
}

export class EventHandler{
    private form: HTMLFormElement;
    private animationController:AnimationController;
    private navLinks: Array<HTMLElement>
    private sections: Array<HTMLElement>
    private colorBarOpen = false;
    private clickEvents: { [key in clickEventName]: (...params: any) => void }; 
    private resizeTimeouts: number[] = [];
    constructor(animationController: AnimationController){
        this.animationController = animationController;
        this.form = document.getElementById("mailForm") as HTMLFormElement;
        
        this.navLinks = Array.from(document.querySelectorAll(".menu-link") as NodeListOf<HTMLElement>);
        this.sections = Array.from(document.querySelectorAll(".main-content") as NodeListOf<HTMLElement>);
        
        this.form.addEventListener("submit", ((e: SubmitEvent)=>this.handleMailSend(e)).bind(this))

        this.clickEvents = {
            "menu-btn": this.handleMenuBtnClick.bind(this),
            "allPortfolio": ((e: MouseEvent)=>handlePortfolioLinkClick(e, portfolioItems.all)).bind(this),
            "designPortfolio": ((e: MouseEvent)=>handlePortfolioLinkClick(e, portfolioItems.design)).bind(this),
            "webdevPortfolio": ((e: MouseEvent)=>handlePortfolioLinkClick(e, portfolioItems.webDev)).bind(this),
            "mathPortfolio": ((e: MouseEvent)=>handlePortfolioLinkClick(e, portfolioItems.math)).bind(this),
            "menu-link": this.toggleMenu.bind(this),
            "topbarLogo": this.handleTopBarLogoClick.bind(this)
        }
        const activeLink = document.querySelector(".menu-link.current") as HTMLAnchorElement;
        const animationStartFunctions: {[id in animationIDs]: ()=>void} = {
            home: (()=>this.animationController.genericStartAnimation(animationIDs.home)).bind(this),
            quote: (()=>this.animationController.genericStartAnimation(animationIDs.quote)).bind(this),
            about: (()=>this.animationController.genericStartAnimation(animationIDs.about)).bind(this),
            portfolio: (()=>this.animationController.genericStartAnimation(animationIDs.portfolio)).bind(this),
            contact: (()=>this.animationController.genericStartAnimation(animationIDs.contact)).bind(this),
            menu: (()=>{}).bind(this)
        }
        
        for(let id in animationIDs){
            // console.log(id as animationIDs)
            if(activeLink.href.includes(id)){
                animationStartFunctions[id as animationIDs]();
            }
        }
        this.addScrollAnimation();
    }

    private handleMailSend(e: SubmitEvent){
        e.preventDefault();
        const [nameInput, emailInput, subjectInput, textInput] = this.form.elements
        const targetUrl = "https://formspree.io/f/xknawkno";
        const status = document.getElementById("form-status") as HTMLParagraphElement;
        const customHeaders = {
            'Accept': 'application/json'
        }
        let h = new Headers(customHeaders)
        const mail = {
            name: (nameInput as HTMLInputElement).value,
            email: (emailInput as HTMLInputElement).value,
            subjectInput: (subjectInput as HTMLInputElement).value,
            text: (textInput as HTMLInputElement).value
        }
    
        fetch(targetUrl, {
            method: this.form.method,
            headers: h,
            body: JSON.stringify(mail)
        })
        .then(response=>{
            if(response.ok){
                status.innerHTML = "Thanks for your contact!";
                this.form.reset()
            }else {
                response.json().then(data => {
                  if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map((error: any) => error["message"]).join(", ")
                  } else {
                    status.style.color = "red"
                    status.innerHTML = "Oops! There was a problem sending your email, you can try directly on arthur.matias@proton.me"
                  }
                })
              }
            }).catch(error => {
                console.log(error)
                status.style.color = "red"
              status.innerHTML = "Oops! There was a problem sending your email, you can try directly on arthur.matias@proton.me"
            });
        // console.log((textInput as HTMLTextAreaElement).value)
    }

    private toggleMenu(){
        const menuBtn = document.getElementById("menu-btn") as HTMLElement;
        const menu = document.getElementById("menu") as HTMLElement;
        menuBtn.classList.toggle("active")
        menu.classList.toggle("open")
        
        if (menu.classList.contains("open")) {
           this.animationController.genericStartAnimation(animationIDs.menu)
        } else {
            this.animationController.genericStopAnimation(animationIDs.menu)
        }
    }
    private handleMenuBtnClick() {
        this.toggleMenu()
    }
    private handleMenuSwitch(i:number){
        this.navLinks.forEach((link) => link.classList.remove("current"));
        this.navLinks[i].classList.add("current");
        let activeLink = this.navLinks[i] as HTMLAnchorElement;
        
        if(activeLink.href.includes(animationIDs.home) && this.animationController.LastActive !== animationIDs.home){
            this.animationController.genericStartAnimation(animationIDs.home);
        }else if(activeLink.href.includes("quote") && this.animationController.LastActive !== animationIDs.quote){
            this.animationController.genericStartAnimation(animationIDs.quote);
        }else if(activeLink.href.includes("about") && this.animationController.LastActive !== animationIDs.about){
            this.animationController.genericStartAnimation(animationIDs.about);
        }else if(activeLink.href.includes("portfolio") && this.animationController.LastActive !== animationIDs.portfolio){
            this.animationController.genericStartAnimation(animationIDs.portfolio);
            return
        }else if(activeLink.href.includes("contact") && this.animationController.LastActive !== animationIDs.contact){
            this.animationController.genericStartAnimation(animationIDs.contact);
        }
    }
    private addScrollAnimation(){
        const scrollerInner = document.querySelector(".icon-wrapper__inner") as Element;
        const scrollerContent = Array.from(scrollerInner.children);
    
        scrollerContent.forEach(item=>{
            const duplicatedItem = item.cloneNode(true) as HTMLElement;
            duplicatedItem.setAttribute("aria-hidden", "true");
            scrollerInner.append(duplicatedItem);
        })
    }
    private handleTopBarLogoClick(){
        console.log("clicked")
        this.colorBarOpen = true;
    }
    handleScrollEvent(){
        let index = this.sections.length;

        while (--index && window.scrollY + 150  < this.sections[index].offsetTop) { }
        this.handleMenuSwitch(index) 
    }
    handleResize(){
        this.animationController.ActiveAnimations.map((e,i)=>{
            clearTimeout(this.resizeTimeouts[i]);
            if(e !== animationIDs.portfolio){
                this.animationController.genericStopAnimation(e);
                this.animationController.genericStartAnimation(e);
            }
            this.resizeTimeouts[i] = setTimeout(() => {
            }, i*50)
        });
    }
    handleClick(event: MouseEvent){
        let el = event.target as HTMLElement;
        try {
            this.clickEvents[el.id as clickEventName](event);
        } catch (error) {
            el.classList.forEach(c=>{
                try {
                    this.clickEvents[c as clickEventName](event);
                } catch (error) {
                }
            })
        }
    }
}