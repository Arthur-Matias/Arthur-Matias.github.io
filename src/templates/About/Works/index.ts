import "./style.scss"
import config from "../../../consts/config";
import PortfolioItem from "../../../consts/PortfolioItem";
import Swiper from "swiper";

export default function Works(){

    let swiper:Swiper;
    let id:string;

    const {Design, Development} = config["portfolio"];
    
    function getWorks(_id: string, items: PortfolioItem[]):HTMLElement{     
        id=_id   
        const works = document.createElement("div")
        works.id = id;
        works.classList.add("swiper");
        works.classList.add("works");
        let beginning: string = `<div id="close-btn">close</div><div class="works-wrapper swiper-wrapper">`;
        let end: string = '<div class="texts-wrapper">';
        items.map(item=>{
            beginning += `
                <div style="background-image: url(${item.imgSrc})" class="swiper-slide item-wrapper">
                    
                </div>
            `;
            end += `
                <div class="item-text">
                    <h2>${item.name}</h2>
                    <p>${item.description}</p>
                    <div class="item-btn-wrapper">
                        <a href="${item.buttons.project}" target="_blank">project</a>
                        ${item.buttons.deploy?`<a href="${item.buttons.deploy}">deploy</a>`:""}
                    </div>
                </div>
            `;
        })

        beginning += "</div>";
        works.innerHTML = beginning + end + "</div>";

        return works;
    }
    function renderDesignWorks():HTMLElement{
        return getWorks("design", Design)
    }
    function renderDevelopmentWorks():HTMLElement{
        return getWorks("development", Development)
    }
    function initGallery(){
        const closeBtn = document.getElementById("close-btn") as HTMLElement;
        const activeText = document.getElementsByClassName("item-text")[0];
        activeText.classList.toggle("active")
        closeBtn.addEventListener("click",close)
        swiper = new Swiper(".swiper",{
            loop: true,
            slidesPerView: 3,
            spaceBetween: 30,
            height: window.innerHeight*0.4,
            preloadImages: true,
            centeredSlides: true,
            autoHeight: false,
            simulateTouch: true,
            breakpoints: {
                300: {
                    slidesPerView: 2
                },
                800: {
                    slidesPerView: 4,
                },
                1200: {
                    slidesPerView: 6
                }
            }
        });
        swiper.on("snapIndexChange", e=>{
            console.log("changed - ", e.realIndex)
            const texts = document.getElementsByClassName("item-text") as HTMLCollectionOf<HTMLElement>
            const currActiveText = document.getElementsByClassName("item-text active")[0];
            currActiveText.classList.toggle("active")
            texts[e.realIndex].classList.toggle("active")
        })
    }
    function close(){
        const element = document.getElementById(id);
        element?.remove();
        if(!element){
            destroyGallery();
        }
    }
    function destroyGallery(){
        swiper.destroy();
    }
    return {
        renderDesignWorks,
        renderDevelopmentWorks,
        initGallery,
        destroyGallery
    }
}