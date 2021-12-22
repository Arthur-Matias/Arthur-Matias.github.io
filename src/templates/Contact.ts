import config from "../config";
import attachmentClip from "../assets/clip.svg"
import axios from "axios";

type Form = {
    name: HTMLInputElement;
    company: HTMLInputElement;
    category: HTMLInputElement;
    message: HTMLTextAreaElement;
    attachments: HTMLInputElement;
    email: HTMLInputElement;
    phone: HTMLInputElement;
}

type FormType = HTMLFormElement & Form

export default function Contact(){
    const contactConf = config["contact"]
    const sections = contactConf.sections;

    let name = "";
    function render():HTMLElement{
        const contact:HTMLDivElement = document.createElement("div");
        contact.id = "contact"
        contact.innerHTML += `
            <div class="contact-wrapper">
                <h2 class="styled-text">${contactConf.title}</h2>
                <form enctype="multipart/form-data" method="POST" action="https://formspree.io/f/mpzbzolz" id="contact-form">
                    <div class="form-section active">
                        <p class="section-description">
                            ${sections[0].title}
                        </p>
                        <div class="input-wrapper">
                            <input required id="name" name="name" type="text" placeholder="${sections[0].placeholders![0]}">
                            <input id="company" name="company" type="text" placeholder="${sections[0].placeholders![1]}">
                        </div>
                        <div class="form-controls">
                            <div style="visibility: hidden;" class="back-btn">${contactConf.buttons.back}</div>
                            <div class="current-section">
                                <svg width="46" height="39" viewBox="0 0 46 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23 0L45.5167 39H0.483339L23 0Z" fill="var(--main-color)"/>
                                </svg>
                                <svg width="46" height="39" viewBox="0 0 46 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23 39L0.483337 0L45.5167 0L23 39Z" fill="#C4C4C4"/>
                                </svg>
                                <svg width="46" height="39" viewBox="0 0 46 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23 0L45.5167 39H0.483339L23 0Z" fill="#C4C4C4"/>
                                </svg>
                                <svg width="46" height="39" viewBox="0 0 46 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23 39L0.483337 0L45.5167 0L23 39Z" fill="#C4C4C4"/>
                                </svg>
                            </div>
                            <div class="next-btn">${contactConf.buttons.next}</div>
                        </div>
                    </div>
                    <div class="form-section">
                        <p class="section-description">
                            ${sections[1].title}
                        </p>
                        <div class="categories">
                            <input checked type="radio" id="not-sure" value="not sure" name="category">
                            <label for="not-sure" class="active">
                                <h2>
                                    ${sections[1].options![0].title}
                                </h2>
                                <p>
                                    ${sections[1].options![0].description}
                                </p>
                            </label>
                            <input type="radio" id="design" value="design" name="category">
                            <label for="design">
                                <h2>
                                    ${sections[1].options![1].title}
                                </h2>
                                <p>
                                    ${sections[1].options![1].description}
                                </p>
                            </label>
                            <input type="radio" id="development" value="development" name="category">
                            <label for="development">
                                <h2>
                                    ${sections[1].options![2].title}
                                </h2>
                                <p>
                                    ${sections[1].options![2].description}
                                </p>
                            </label>
                        </div>
                        <div class="form-controls">
                            <div class="back-btn">${contactConf.buttons.back}</div>
                            <div class="current-section">
                                <svg width="46" height="39" viewBox="0 0 46 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23 0L45.5167 39H0.483339L23 0Z" fill="var(--main-color)"/>
                                </svg>
                                <svg width="46" height="39" viewBox="0 0 46 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23 39L0.483337 0L45.5167 0L23 39Z" fill="var(--main-color)"/>
                                </svg>
                                <svg width="46" height="39" viewBox="0 0 46 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23 0L45.5167 39H0.483339L23 0Z" fill="#C4C4C4"/>
                                </svg>
                                <svg width="46" height="39" viewBox="0 0 46 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23 39L0.483337 0L45.5167 0L23 39Z" fill="#C4C4C4"/>
                                </svg>
                            </div>
                            <div class="next-btn">${contactConf.buttons.next}</div>
                        </div>
                    </div>
                    <div class="form-section">
                        <p class="section-description">
                            ${sections[2].title}
                        </p>
                        <textarea id="message" required name="message" placeholder="${sections[2].placeholders![0]}"></textarea>
                        <label style="display: none;" for="attachments"> 
                            <img src="${attachmentClip}" alt="attach files">
                            ${sections[2].placeholders![1]}
                            <input type="file" id="attachments" name="attachments" accept="image/png, image/jpeg">
                        </label>
                        <div class="form-controls">
                            <div class="back-btn">${contactConf.buttons.back}</div>
                            <div class="current-section">
                                <svg width="46" height="39" viewBox="0 0 46 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23 0L45.5167 39H0.483339L23 0Z" fill="var(--main-color)"/>
                                </svg>
                                <svg width="46" height="39" viewBox="0 0 46 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23 39L0.483337 0L45.5167 0L23 39Z" fill="var(--main-color)"/>
                                </svg>
                                <svg width="46" height="39" viewBox="0 0 46 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23 0L45.5167 39H0.483339L23 0Z" fill="var(--main-color)"/>
                                </svg>
                                <svg width="46" height="39" viewBox="0 0 46 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23 39L0.483337 0L45.5167 0L23 39Z" fill="#C4C4C4"/>
                                </svg>
                            </div>
                            <div class="next-btn">${contactConf.buttons.next}</div>
                        </div>
                    </div>
                    <div class="form-section">
                    <p class="section-description">
                        ${sections[3].title}
                    </p>
                    <div class="input-wrapper">
                        <input required id="email" name="email" type="email" placeholder="${sections[3].placeholders![0]}">
                        <input id="phone" name="phone" type="text" placeholder="${sections[3].placeholders![1]}">
                    </div>
                    <div class="form-controls">
                        <div class="back-btn">${contactConf.buttons.back}</div>
                        <div class="current-section">
                            <svg width="46" height="39" viewBox="0 0 46 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23 0L45.5167 39H0.483339L23 0Z" fill="var(--main-color)"/>
                            </svg>
                            <svg width="46" height="39" viewBox="0 0 46 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23 39L0.483337 0L45.5167 0L23 39Z" fill="var(--main-color)"/>
                            </svg>
                            <svg width="46" height="39" viewBox="0 0 46 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23 0L45.5167 39H0.483339L23 0Z" fill="var(--main-color)"/>
                            </svg>
                            <svg width="46" height="39" viewBox="0 0 46 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23 39L0.483337 0L45.5167 0L23 39Z" fill="var(--main-color)"/>
                            </svg>
                        </div>
                        <div class="send-btn">${contactConf.buttons.send}</div>
                    </div>
                </div>
                </form>
            </div>
        `;


        return contact;
    }
    function handleNextBtnClick(value: number){
        if (value == 0) {
            name = (document.getElementById("name") as HTMLInputElement).value!.split(" ")[0]
            if (!name) {
                alert("You need to insert a name")
                return
            }
            let descriptions = document.getElementsByClassName("section-description") as HTMLCollectionOf<HTMLElement>
            let description = descriptions.item(1)!.innerHTML!.replace("{name}", `${name}`);
            descriptions.item(1)!.innerHTML = description;
        }
        if (value == 2) {
            let message = (document.getElementById("message") as HTMLTextAreaElement).value;
            if (!message) {
                alert("You need to insert a message")
                return
            }
        }
        const sections = document.getElementsByClassName("form-section") as HTMLCollectionOf<HTMLElement>;
        const currentSection = sections[value];
        sections[value+1].classList.toggle("active")
        currentSection.classList.toggle("active")
    }
    function handleBackBtnClick(value: number){
        const sections = document.getElementsByClassName("form-section") as HTMLCollectionOf<HTMLElement>;
        const currentSection = sections[value];
        sections[value-1].classList.toggle("active")
        currentSection.classList.toggle("active")
    }
    function handleSendBtnClick(){

        //getting form inputs
        const form: FormType = document.getElementById("contact-form") as FormType
        const sendBtn = document.getElementsByClassName("send-btn")[0] as HTMLElement;
        if (!!sendBtn) {
          sendBtn.onclick = null
          sendBtn.style.filter = "opacity(.6)"
        }
        
        let name = form.name.value,
            company = form.company.value,
            message = form.message.value,
            // attachments = form.attachments.files![0],
            category = form.category.value,
            email = form.email.value,
            phone = form.phone.value;

        // console.log(name)
        // console.log(company)
        // console.log(message)
        // console.log(attachments)
        // console.log(category)
        // console.log(email)
        // console.log(phone)

        let regex = /^\s*(?:\+?(\d{1,4}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
        
        if (!phone.match(regex)) {
            alert("The phone number inserted is not valid")
            return
        }
        
        if (!email) {
            alert("You need to insert an email")
            return
        }
        // send form
        axios({
            url: 'https://formspree.io/f/mpzbzolz',
            method: 'post',
            headers: {
                'Accept': 'application/json'
            },
            data: {
                name,
                company,
                message,
                // attachments,
                category,
                email,
                phone
            }
        }).then((response) => { 
            console.log(response);
            if (!!sendBtn) {
                sendBtn.onclick = handleSendBtnClick
                sendBtn.style.filter = "opacity(1)"
            }
            alert("Email sent");
        }).catch(e=>{
            console.log(e)
            alert("An error has occurred, please, try again later")
        })
        
        
    }
    return {
        render,
        handleNextBtnClick,
        handleBackBtnClick,
        handleSendBtnClick
    }
}