import config from "../config";

export default function Home(){

    const { greetings,name, description } = config["home"].texts;
    const image = config["home"].image;
    console.log(greetings, name, description)
    
    function render():HTMLElement{
        const home:HTMLDivElement = document.createElement("div");
        home.id = "home"
        let [fName, lName] = name.split(" ");
        home.innerHTML += `
            <div class="home-wrapper">
                <div class="square"></div>
                <div class="img"></div>
                <div class="texts">
                    <h6>${greetings}</h6>
                    <h1 class="styled-text">${fName}</h1>
                    <h1 class="styled-text">${lName}</h1>
                    <p>${description}</p>
                </div>
            </div>
        `;


        return home;
    }

    return {
        render
    }
}