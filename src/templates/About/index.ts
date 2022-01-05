import "./style.scss"
import config from "../../consts/config";
import Works from "./Works";

export default function About(){
    const works = Works();
    const about:HTMLDivElement = document.createElement("div");
    const aboutProps = config["about"]
    function render():HTMLElement{
        about.id = "about"
        about.innerHTML += `
            <div class="about-wrapper">
                <h2 class="about-title styled-text">
                    ${aboutProps.title}
                    <h3>Under development ...</h3>
                </h2>

                <div class="about-btn-wrapper">
                    <div class="about-btn" id="design-btn">${aboutProps.buttons[0]}</div>
                    <div class="about-btn" id="development-btn">${aboutProps.buttons[1]}</div>
                </div>
            </div>
        `;

        return about;
    }
    function addListeners(){
        const designBtn = document.getElementById("design-btn") as HTMLElement
        const developmentBtn = document.getElementById("development-btn") as HTMLElement
        designBtn.addEventListener("click", ()=>open("design"))
        developmentBtn.addEventListener("click", ()=>open("development"))
    }
    function open(target: string){
        const about = document.getElementById('about') as HTMLElement
        const element = target === "design" ? works.renderDesignWorks() : works.renderDevelopmentWorks();
        about.appendChild(element);
        works.initGallery()
    }
    return {
        render,
        addListeners
    }
}