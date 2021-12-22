import config from "../config";

export default function Works(){

    const worksArr = config["works"].works;
    
    function render():HTMLElement{
        const works:HTMLDivElement = document.createElement("div");
        works.id = "works"
        works.innerHTML += `
            <div class="works-wrapper">
                <h2 class="works-title styled-text">
                    ${config["works"].title}
                </h2>
                <div class="main-gallery">
                    <div class="gallery-cell" id="cell-${0}">
                        <img class="carousel-image" src="${worksArr[0].image}">
                        <a target="_blank" class="hover-span" href="${worksArr[0].link}">
                            <img src="${config["works"].plusSign}">
                            <p>
                                More...
                            </p>
                        </a>
                    </div>
                    <div class="gallery-cell selected" id="cell-${1}">
                        <img class="carousel-image styled-text" src="${worksArr[1].image}">
                        <a target="_blank" class="hover-span" href="${worksArr[1].link}">
                            <img src="${config["works"].plusSign}">
                            <p>
                                More...
                            </p>
                        </a>
                    </div>
                    <div class="gallery-cell" id="cell-${2}">
                        <img class="carousel-image" src="${worksArr[2].image}">
                        <a target="_blank" class="hover-span" href="${worksArr[2].link}">
                            <img src="${config["works"].plusSign}">
                            <p>
                                More...
                            </p>
                        </a>
                    </div>
                </div>
                <div class="gallery-texts">
                    <div class="gallery-text">
                        <h2>${worksArr[0].title}</h2>
                        <p>${worksArr[0].description}</p>
                    </div>
                    <div class="gallery-text selected">
                        <h2>${worksArr[1].title}</h2>
                        <p>${worksArr[1].description}</p>
                    </div>
                    <div class="gallery-text">
                        <h2>${worksArr[2].title}</h2>
                        <p>${worksArr[2].description}</p>
                    </div>
                </div>
            </div>
        `;

        return works;
    }
    function changeSelectedWork(event: MouseEvent){
        const galleryCells = document.getElementsByClassName("gallery-cell") as HTMLCollectionOf<HTMLAnchorElement>
        const galleryTexts = document.getElementsByClassName("gallery-text") as HTMLCollectionOf<HTMLElement>
    
        const selectedCell = document.querySelector(".gallery-cell.selected") as HTMLElement;
        const selectedText = document.querySelector(".gallery-text.selected") as HTMLElement;

        const target = Number((event.target as HTMLElement).parentElement?.id.replace("cell-", ""));


        selectedCell.classList.toggle("selected")
        selectedText.classList.toggle("selected")
        
        galleryCells[target].classList.toggle("selected")
        galleryTexts[target].classList.toggle("selected")

        for (let i = 0; i < galleryCells.length; i++) {
            const element = galleryCells[i] as HTMLAnchorElement;
            element.style.order = `${i}`
        }

        // Check wich cell is active and activate it if not the same
        if (target == 0 && selectedCell.id !== "cell-0") {
            galleryCells[target].style.order = "2"
            galleryCells[target + 1].style.order = "1"
        }else if(target == 1 && selectedCell.id !== "cell-1"){
            galleryCells[target].style.order = "2"
        }else if(target == 2 && selectedCell.id !== "cell-2"){
            selectedCell.style.order = "3"
            galleryCells[target].style.order = "2"
            galleryCells[target].style.marginRight = "2rem"
        }

        if (target != 2) {
            galleryCells[2].style.marginRight = "0"
        }
    }
    return {
        render,
        changeSelectedWork
    }
}