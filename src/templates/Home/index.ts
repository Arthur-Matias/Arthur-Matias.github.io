import "./style.scss"
import config from "../../consts/config";

export default function Home(){
    const { greetings,name, description } = config["home"].texts;

    function render():HTMLElement{
        const home:HTMLDivElement = document.createElement("div");
        home.id = "home"
        let [fName, lName] = name.split(" ");
        home.innerHTML += `
            <div class="home-wrapper">
                <div class="square"></div>
                <div class="img" style="background-image: url(${config["home"].image});"></div>
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