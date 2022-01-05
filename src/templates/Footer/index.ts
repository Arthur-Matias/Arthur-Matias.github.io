import "./style.scss"
import config from "../../consts/config";


export default function Footer(){

    
    function render():HTMLElement{
        const footer:HTMLDivElement = document.createElement("div");
        
        const { linkedin, behance, github } = config["social-media"].icons;

        footer.id = "footer"
        footer.innerHTML += `
            <div class="footer-wrapper">
                <svg width="48" height="51" viewBox="0 0 48 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M48 41.9708L42.8414 51C37.5845 47.2296 31.2467 45.3443 24.8107 45.7413C19.652 46.1381 14.6407 47.9737 10.4647 51L19.6029 35.0749C24.0246 33.8842 28.6919 34.4796 32.7206 36.712C30.3624 32.6439 28.0532 28.5263 25.695 24.4582C25.1546 23.466 24.565 22.5233 24.0246 21.5311L7.12387 51H5.20778L0 41.9708L24.0246 0L48 41.9708Z" fill="var(--main-color)"/>
                </svg>

                <p>find me on:</p>
                <div class="social-media">
                <a href="https://www.linkedin.com/in/arthur-matias/" target="_blank">
                    <img src="${linkedin}" alt="LinkedIn">
                </a>
                <a href="https://www.behance.net/arthurmm18" target="_blank">
                    <img src="${behance}" alt="Behance">
                </a>
                <a href="https://github.com/Arthur-Matias" target="_blank">
                    <img src="${github}" alt="Github">
                </a>
                </div>
            </div>
        `;


        return footer;
    }

    return {
        render
    }
}