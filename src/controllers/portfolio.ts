export enum portfolioItems{
    all = "allPortfolio",
    design = "designPortfolio",
    webDev = "webdevPortfolio",
    math = "mathPortfolio",
}

type item = {url: string, id: string, title: string};

type FixedLengthArray<T, N extends number> = N extends N ? number extends N ? T[] : _FixedLengthArray<T, N, []> : never;
type _FixedLengthArray<T, N extends number, R extends unknown[]> = R['length'] extends N ? R : _FixedLengthArray<T, N, [T, ...R]>;

const imgs: {[id in portfolioItems]: item[]} = {
    allPortfolio : [
        {
            id: "picture",
            url : "",
            title: ""
        },
        {
            id: "picture",
            url : "",
            title: ""
        },
        {
            id: "picture",
            url : "",
            title: ""
        },
        {
            id: "picture",
            url : "",
            title: ""
        },
        {
            id: "picture",
            url : "",
            title: ""
        },
    ],
    designPortfolio: [
        {
            id: "sodivel_bosch",
            url : "https://www.behance.net/gallery/78339971/Campanha-Bosch-Sodivel",
            title: "Bosch Sodivel Marketing Campaign"
        },
        {
            id: "cannabis_slides",
            url : "https://www.behance.net/gallery/107493303/Instagram-Template-for-Laboratory",
            title: "Instagram Template for Laboratory"
        },
        {
            id: "yapira_video",
            url : "https://www.behance.net/gallery/81460661/Institutional-Video-Yapira-Team",
            title: "Institutional Video Yapira Team"
        },
        {
            id: "continental_correias",
            url : "https://www.behance.net/gallery/79315515/Campanha-Continental-Sodivel",
            title: "Continental Sodivel Marketing Campaign"
        },
        {
            id: "trade_bridge",
            url : "https://www.behance.net/gallery/96597079/Visual-Identity-Institutional-Video-and-Wireframe",
            title: "Visual Identity, Institutional Video and Wireframe"
        },
        {
            id: "curfew_bar",
            url : "https://www.behance.net/gallery/113523017/Bar-Webpage-UI",
            title: "Bar Webpage UI"
        },
        {
            id: "smiles_realiza",
            url : "https://www.behance.net/gallery/116441669/Visual-Identify-and-Wireframe",
            title: "Visual Identify and Wireframe"
        },
    ],
    webdevPortfolio: [
        {
            id: "blockchain",
            url : "https://github.com/Arthur-Matias/typescript-blockchain",
            title: "TypeScript Blockchain"
        },
        {
            id: "glassmorphism_website",
            url : "https://arthur-matias.github.io/glassmorphism-website/",
            title: "Responsive Glassmorphism Style Website"
        },
        {
            id: "operational_system",
            url : "https://arthur-matias.github.io/operational_system/",
            title: "Operational System"
        },
        {
            id: "windows_error",
            url : "https://arthur-matias.github.io/windows98-error-message/",
            title: "Windows 98 error message"
        },
        {
            id: "space_game",
            url : "https://github.com/Arthur-Matias/space-game",
            title: "Space Game (not asteroids)"
        },
    ],
    mathPortfolio: [
        {
            id: "text_flow_field",
            url : "https://arthur-matias.github.io/text_flow_field/",
            title: "Text Flow Field"
        },
        {
            id: "fractal_tree",
            url : "https://arthur-matias.github.io/fractal_tree/",
            title: "Fractal Tree"
        },
        {
            id: "fourier_series",
            url : "https://arthur-matias.github.io/fourier_series/",
            title: "Fourier Series"
        },
        {
            id: "flow_field",
            url : "https://arthur-matias.github.io/flow_field/",
            title: "Flow Field"
        },
        {
            id: "lowpoly",
            url : "https://github.com/Arthur-Matias/lowpoly",
            title: "Low Poly image generator"
        },
    ]
};

const mosaicID = "mosaic-grid";

function getFullImageArr(): item[]{
    let newArr = imgs.designPortfolio.concat(imgs.webdevPortfolio.concat(imgs.webdevPortfolio.concat(imgs.mathPortfolio)))
    return newArr;
}

function getRandomArr<T>(arr: T[]): FixedLengthArray<T, 5>{
    let newArr: T[] = [];
    while(newArr.length < 5){
        let i = Math.floor(Math.random() * arr.length)
        if(newArr.indexOf(arr[i]) === -1){
            newArr.push(arr[i])
        }
    }

    return [newArr[0], newArr[1], newArr[2],newArr[3], newArr[4]];
}

export function handlePortfolioLinkClick(e: MouseEvent, id: portfolioItems){
    e.preventDefault()
    const mosaicElement = document.getElementById(mosaicID) as HTMLDivElement;
    const linkElement = document.getElementById(id) as HTMLAnchorElement;

    const textElement = getPortfolioItems(getCurrent(id));
    const currentActive = document.querySelector("#portfolio .nav-link.active") as HTMLAnchorElement;

    if(linkElement != currentActive){
        currentActive.classList.toggle("active");
        linkElement.classList.toggle("active");
        mosaicElement.innerHTML = textElement
    }
}

function getPortfolioItems(param: FixedLengthArray<item, 5>): string{

    const element = `
    <div class="container">
        <div class="row">
        <div class="col-md-6">
            <div class="row mb-4">
            <div class="col-6">
                <a title="${param[0].title}" aria-describedby="${param[0].id}-title" href="${param[0].url}" target="_blank">
                    <div id="${param[0].id}" class="mosaic-img" style="background-image: url('/portfolio/${param[0].id}.png');">
                        <h4 id="${param[0].id}-title" class="title">${param[0].title}</h2>
                    </div>
                </a>
            </div>
            <div class="col-6">
                <a title="${param[1].title}" aria-describedby="${param[1].id}-title" href="${param[1].url}" target="_blank">
                    <div id="${param[1].id}" class="mosaic-img" style="background-image: url('/portfolio/${param[1].id}.png');">
                        <h4 id="${param[1].id}-title" class="title">${param[1].title}</h2>
                    </div>
                </a>
            </div>
            </div>
            <div class="row">
            <div class="col-6">
                <a title="${param[2].title}" aria-describedby="${param[2].id}-title" href="${param[2].url}" target="_blank">
                    <div id="${param[2].id}" class="mosaic-img" style="background-image: url('/portfolio/${param[2].id}.png');">
                        <h4 id="${param[2].id}-title" class="title">${param[2].title}</h2>
                    </div>
                </a>
            </div>
            <div class="col-6">
                <a title="${param[3].title}" aria-describedby="${param[3].id}-title" href="${param[3].url}" target="_blank">
                    <div id="${param[3].id}" class="mosaic-img" style="background-image: url('/portfolio/${param[3].id}.png');">
                        <h4 id="${param[3].id}-title" class="title">${param[3].title}</h2>
                    </div>
                </a>
            </div>
            </div>
        </div>
        <div class="col-md-6 d-none d-md-block">
            <a title="${param[4].title}" aria-describedby="${param[4].id}-title" href="${param[4].url}" target="_blank">
                <div id="${param[4].id}" class="mosaic-img big" style="background-image: url('/portfolio/${param[4].id}.png');">
                    <h4 id="${param[4].id}-title" class="title">${param[4].title}</h2>
                </div>
            </a>
        </div>
        </div>
    </div>
    `

    return element
}

export function startPortfolio(){
    const allImages = getCurrent(portfolioItems.all)
    const mosaicElement = document.getElementById(mosaicID) as HTMLDivElement;
    console.log()
    if(mosaicElement.children.length === 0){
        mosaicElement.innerHTML = getPortfolioItems(allImages);
    }
}

function getCurrent(id: portfolioItems){
    if(id === portfolioItems.all){
        let allImgs = getFullImageArr();
        let currentRandomized = getRandomArr(allImgs)
        return currentRandomized;
    }else{
        return getRandomArr(imgs[id])
    }
}