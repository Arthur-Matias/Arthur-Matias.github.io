import './styles/style.scss'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.css'

import { Animations, animationControls, setupAnimation } from './components/animations.ts'
import { handlePortfolioLinkClick, portfolioItems, startPortfolio } from './components/portfolio.ts'


let lastScrollTop = 0;
enum clickEventName {
    menuBtn = "menu-btn",
    allPortfolio="allPortfolio",
    design = "designPortfolio",
    menuLink = "menu-link",
    webDev = "webdevPortfolio",
    math = "mathPortfolio",
    topbarLogo = "topbarLogo"
}
let clickEvents: { [key in clickEventName]: (...params: any) => void } = {
    "menu-btn": handleMenuBtnClick,
    "allPortfolio": (e)=>handlePortfolioLinkClick(e, portfolioItems.all),
    "designPortfolio": (e)=>handlePortfolioLinkClick(e, portfolioItems.design),
    "webdevPortfolio": (e)=>handlePortfolioLinkClick(e, portfolioItems.webDev),
    "mathPortfolio": (e)=>handlePortfolioLinkClick(e, portfolioItems.math),
    "menu-link": toggleMenu,
    "topbarLogo": handleTopBarLogoClick
}

const sections = document.querySelectorAll(".main-content") as NodeListOf<HTMLElement>;
const navLinks = document.querySelectorAll(".menu-link");

enum animationIDs{
    home= "home",
    quote= "quote",
    about= "about",
    portfolio= "portfolio",
    contact= "contact",
    menu= "menu",
}
let lastActive = ""
let animations: {[id in animationIDs]: animationControls} = {} as {[id in animationIDs]: animationControls};

const activeAnimations: animationIDs[] = [];

animations.home = setupAnimation({
    targetElementID: "home",
    animation: Animations.circleRotation
})
animations.quote = setupAnimation({
    targetElementID: "quote",
    animation: Animations.dotMatrix
})
animations.about = setupAnimation({
    targetElementID: "blob",
    animation: Animations.blobAnimation
})
animations.contact = setupAnimation({
    targetElementID: "dot-quad",
    animation: Animations.dotSquare
})
animations.menu = setupAnimation({
    targetElementID: "menu-animation",
    animation: Animations.dotMatrix
})

function stopAnimation(id: animationIDs){
    try {
        if(activeAnimations.indexOf(id) !== -1){
            animations[id].stopSketch()
            activeAnimations.splice(activeAnimations.indexOf(id), 1)
        }
    } catch (error) {
        
    }finally{

    }
}
function startAnimation(id: animationIDs){
    try {
        if(activeAnimations.indexOf(id) === -1){
            if(id === animationIDs.portfolio){
                startPortfolio();
            }else{
                animations[id].startSketch()
            }
            activeAnimations.push(id)
        }
    } catch (error) {
        
    }
}

function activateHome(){
    startAnimation(animationIDs.quote)
    startAnimation(animationIDs.home)

    stopAnimation(animationIDs.about)
    // stopAnimation(animationIDs.portfolio)
    stopAnimation(animationIDs.contact)
    lastActive = "home"
}
function activateQuote(){
    startAnimation(animationIDs.home)
    startAnimation(animationIDs.quote)
    startAnimation(animationIDs.about)

    stopAnimation(animationIDs.contact)
    // stopAnimation(animationIDs.portfolio)
    lastActive = "quote"
}
function activateAbout(){
    startAnimation(animationIDs.quote)
    startAnimation(animationIDs.about)
    startAnimation(animationIDs.portfolio)

    stopAnimation(animationIDs.home)
    stopAnimation(animationIDs.contact)
    lastActive = "about"
}
function activatePortfolio(){
    stopAnimation(animationIDs.quote)
    stopAnimation(animationIDs.home)

    startAnimation(animationIDs.portfolio)
    startAnimation(animationIDs.about)
    startAnimation(animationIDs.contact)
    lastActive = "portfolio"
}
function activateContact(){
    startAnimation(animationIDs.portfolio)
    startAnimation(animationIDs.contact)

    stopAnimation(animationIDs.home)
    stopAnimation(animationIDs.about)
    stopAnimation(animationIDs.quote)

    lastActive = "contact"
}
function toggleMenu(){
    const menuBtn = document.getElementById("menu-btn") as HTMLElement;
    const menu = document.getElementById("menu") as HTMLElement;
    menuBtn.classList.toggle("active")
    menu.classList.toggle("open")
    
    if (menu.classList.contains("open")) {
        startAnimation(animationIDs.menu)
    } else {
        stopAnimation(animationIDs.menu)
    }
}
function handleMenuBtnClick() {
    toggleMenu()
}
function handleMenuSwitch(i:number){
    navLinks.forEach((link) => link.classList.remove("current"));
    navLinks[i].classList.add("current");
    let activeLink = navLinks[i] as HTMLAnchorElement;

    if(activeLink.href.includes(animationIDs.home) && lastActive !== animationIDs.home){
        activateHome();
    }else if(activeLink.href.includes("quote") && lastActive !== animationIDs.quote){
        activateQuote();
    }else if(activeLink.href.includes("about") && lastActive !== animationIDs.about){
        activateAbout();
    }else if(activeLink.href.includes("portfolio") && lastActive !== animationIDs.portfolio){
        return
    }else if(activeLink.href.includes("contact") && lastActive !== animationIDs.contact){
        activateContact();
    }
}
let colorBarOpen = false;
function handleTopBarLogoClick(){
    // console.log("clicked")
    colorBarOpen = true;
    
}
const form = document.getElementById("mailForm") as HTMLFormElement;

form.addEventListener("submit", e=>handleMailSend(e))


function handleMailSend(e: SubmitEvent){
    e.preventDefault();
    const [nameInput, emailInput, subjectInput, textInput] = form.elements
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
        method: form.method,
        headers: h,
        body: JSON.stringify(mail)
    })
    .then(response=>{
        if(response.ok){
            status.innerHTML = "Thanks for your contact!";
            form.reset()
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

function addScrollAnimation(){
    const scrollerInner = document.querySelector(".icon-wrapper__inner") as Element;
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach(item=>{
        const duplicatedItem = item.cloneNode(true) as HTMLElement;
        duplicatedItem.setAttribute("aria-hidden", "true");
        scrollerInner.append(duplicatedItem);
    })
}
window.addEventListener("load", ()=>{
    const activeLink = document.querySelector(".menu-link.current") as HTMLAnchorElement;
    const animationStartFunctions: {[id in animationIDs]: ()=>void} = {
        home: activateHome,
        quote: activateQuote,
        about: activateAbout,
        portfolio: activatePortfolio,
        contact: activateContact,
        menu: ()=>{}
    }
    
    for(let id in animationIDs){
        if(activeLink.href.includes(id)){
            if(id === animationIDs.portfolio){
                activatePortfolio();
            }else{
                animationStartFunctions[id as animationIDs]();

            }
        }
        lastActive = id
    }
    addScrollAnimation();
    

})
let resizeTimeouts: number[] = [];
window.addEventListener('resize', () => {
    activeAnimations.map((e,i)=>{
        clearTimeout(resizeTimeouts[i]);
        if(e !== animationIDs.portfolio){
            stopAnimation(e)
            startAnimation(e);
        }
        resizeTimeouts[i] = setTimeout(() => {
            // console.log('Resize event throttled!');
        }, i*50)
    });
});

window.addEventListener("resize", ()=>{
  
})
window.addEventListener("scroll", () => {
    let index = sections.length;

    while (--index && window.scrollY + 150  < sections[index].offsetTop) { }
    handleMenuSwitch(index) 
});

window.addEventListener('scroll', function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // console.log('Scrolling Down');
    } else {
        // console.log('Scrolling Up');
    }
    lastScrollTop = scrollTop;
});
window.addEventListener("click", (event) => {
    let el = event.target as HTMLElement;
    if(colorBarOpen){
        colorBarOpen = false
    }
    try {
        console.log(el.id)
        clickEvents[el.id as clickEventName](event);
    } catch (error) {
        el.classList.forEach(c=>{
            try {
                clickEvents[c as clickEventName](event);
            } catch (error) {
            }

        })
    }
})