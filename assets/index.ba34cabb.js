import{a as k}from"./vendor.a6cc7faa.js";const C=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerpolicy&&(i.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?i.credentials="include":e.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(e){if(e.ep)return;e.ep=!0;const i=o(e);fetch(e.href,i)}};C();function $(){document.documentElement.style.setProperty("--gradient",n());function n(){let o="linear-gradient(to right, ";for(let a=1;a<361;a++)a===360?o+=`hsl(${a}, 96%, 45%))`:o+=`hsl(${a}, 96%, 45%),`;return o}function t(o){document.documentElement.style.setProperty("--main-color",`hsl(${o}, 96%, 45%)`),document.documentElement.style.setProperty("--hue-angle",`${o}deg`)}return{setMainColor:t}}var w="/assets/behance.d87a736d.svg",b="/assets/linkedin.a08b4e6d.svg",y="/assets/github.cdb8f18a.svg",B="/assets/photo.1274236f.png",f="/assets/example.60c4079e.png",M="/assets/plus-sign.37d7ebea.svg";const g={menu:{links:["home","works","contact"],texts:["Home","works","contAct"]},home:{texts:{greetings:"<b>-</b> Hello i'm",name:"ArtHur mAtiAs",description:"a <b>Designer</b> and <b>Developer</b>"},image:B},works:{title:"Works",plusSign:M,works:[{title:"Name of the project",description:"1Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",link:"http://google.com",image:f},{title:"Name of the project",description:"2Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",link:"http://google.com",image:f},{title:"Name of the project",description:"3Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",link:"http://google.com",image:f}]},contact:{title:"contAct me",sections:[{title:"Good <b>afternoon</b> human. Who are you?",placeholders:["first and last name *","company"]},{title:"Nice to meet you <b>{name}</b>. What can i help you with?",options:[{title:"Not Sure",description:"I don\u2019t know yet. Let\u2019s talk and explore the possibilities."},{title:"Design",description:"I need an interactive design or design system to be created."},{title:"Development",description:"I need a website, online store or prototype to be built."}]},{title:"Cool. What can you tell me about your <b>project</b>?",placeholders:["message *","attatchments"]},{title:"Nearly there. How can I <b>reach</b> you?",placeholders:["email address *","phone number"]}],buttons:{back:"back",next:"next",send:"send"}}};function E(){function n(){let e=g.menu,i=e.links,r=e.texts;const l=document.createElement("div");return l.id="topbar",l.innerHTML+=`
            <div class="topbar-wrapper">
                <a href="#" class="topbar-logo">
                    <svg viewBox="0 0 48 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M48 41.9708L42.8414 51C37.5845 47.2296 31.2467 45.3443 24.8107 45.7413C19.652 46.1381 14.6407 47.9737 10.4647 51L19.6029 35.0749C24.0246 33.8842 28.6919 34.4796 32.7206 36.712C30.3624 32.6439 28.0532 28.5263 25.695 24.4582C25.1546 23.466 24.565 22.5233 24.0246 21.5311L7.12387 51H5.20778L0 41.9708L24.0246 0L48 41.9708Z" fill="var(--main-color)"/>
                    </svg>
                </a>
                <div id="menu">
                    <a href="#${i[0]}" class="menu-link styled-text active">${r[0]}</a>
                    <a href="#${i[1]}" class="menu-link styled-text">${r[1]}</a>
                    <a href="#${i[2]}" class="menu-link styled-text">${r[2]}</a>
                    <input id="color-slider" type="range" min="1" max="360">
                </div>
                <div id="menu-btn">
                    <div class="btn6 btn">
                    <span class="line"></span>
                    <span class="line"></span>
                </div>
                </div>
                <div class="social-media">
                    <a href="https://www.linkedin.com/in/arthur-matias/" target="_blank">
                        <img src="${b}" alt="LinkedIn">
                    </a>
                    <a href="https://www.behance.net/arthurmm18" target="_blank">
                        <img src="${w}" alt="Behance">
                    </a>
                    <a href="https://github.com/Arthur-Matias" target="_blank">
                        <img src="${y}" alt="Github">
                    </a>
                </div>
            </div>
        `,l}function t(){const e=document.getElementById("topbar"),i=document.getElementsByClassName("btn6")[0];e.classList.toggle("open"),i.classList.toggle("active")}function o(e){const i=document.getElementById("color-slider");e(i.value)}function a(){const e=document.getElementsByClassName("btn6")[0];document.getElementById("topbar").classList.toggle("open"),e.classList.toggle("active")}return{render:n,handleMenuClick:a,handleSlider:o,handleLinkClick:t}}function N(){const{greetings:n,name:t,description:o}=g.home.texts;console.log(n,t,o);function a(){const e=document.createElement("div");e.id="home";let[i,r]=t.split(" ");return e.innerHTML+=`
            <div class="home-wrapper">
                <div class="square"></div>
                <div class="img"></div>
                <div class="texts">
                    <h6>${n}</h6>
                    <h1 class="styled-text">${i}</h1>
                    <h1 class="styled-text">${r}</h1>
                    <p>${o}</p>
                </div>
            </div>
        `,e}return{render:a}}function H(){const n=g.works.works;function t(){const a=document.createElement("div");return a.id="works",a.innerHTML+=`
            <div class="works-wrapper">
                <h2 class="works-title styled-text">
                    ${g.works.title}
                </h2>
                <div class="main-gallery">
                    <div class="gallery-cell" id="cell-${0}">
                        <img class="carousel-image" src="${n[0].image}">
                        <a target="_blank" class="hover-span" href="${n[0].link}">
                            <img src="${g.works.plusSign}">
                            <p>
                                More...
                            </p>
                        </a>
                    </div>
                    <div class="gallery-cell selected" id="cell-${1}">
                        <img class="carousel-image styled-text" src="${n[1].image}">
                        <a target="_blank" class="hover-span" href="${n[1].link}">
                            <img src="${g.works.plusSign}">
                            <p>
                                More...
                            </p>
                        </a>
                    </div>
                    <div class="gallery-cell" id="cell-${2}">
                        <img class="carousel-image" src="${n[2].image}">
                        <a target="_blank" class="hover-span" href="${n[2].link}">
                            <img src="${g.works.plusSign}">
                            <p>
                                More...
                            </p>
                        </a>
                    </div>
                </div>
                <div class="gallery-texts">
                    <div class="gallery-text">
                        <h2>${n[0].title}</h2>
                        <p>${n[0].description}</p>
                    </div>
                    <div class="gallery-text selected">
                        <h2>${n[1].title}</h2>
                        <p>${n[1].description}</p>
                    </div>
                    <div class="gallery-text">
                        <h2>${n[2].title}</h2>
                        <p>${n[2].description}</p>
                    </div>
                </div>
            </div>
        `,a}function o(a){var m;const e=document.getElementsByClassName("gallery-cell"),i=document.getElementsByClassName("gallery-text"),r=document.querySelector(".gallery-cell.selected"),l=document.querySelector(".gallery-text.selected"),s=Number((m=a.target.parentElement)==null?void 0:m.id.replace("cell-",""));r.classList.toggle("selected"),l.classList.toggle("selected"),e[s].classList.toggle("selected"),i[s].classList.toggle("selected");for(let d=0;d<e.length;d++){const p=e[d];p.style.order=`${d}`}s==0&&r.id!=="cell-0"?(e[s].style.order="2",e[s+1].style.order="1"):s==1&&r.id!=="cell-1"?e[s].style.order="2":s==2&&r.id!=="cell-2"&&(r.style.order="3",e[s].style.order="2",e[s].style.marginRight="2rem"),s!=2&&(e[2].style.marginRight="0")}return{render:t,changeSelectedWork:o}}var q="/assets/clip.f4ee25ed.svg";function S(){const n=g.contact,t=n.sections;let o="";function a(){const l=document.createElement("div");return l.id="contact",l.innerHTML+=`
            <div class="contact-wrapper">
                <form enctype="multipart/form-data" method="POST" action="https://formspree.io/f/mpzbzolz" id="contact-form">
                    <h2 class="styled-text">${n.title}</h2>
                    <div class="form-section active">
                        <p class="section-description">
                            ${t[0].title}
                        </p>
                        <div class="input-wrapper">
                            <input required id="name" name="name" type="text" placeholder="${t[0].placeholders[0]}">
                            <input id="company" name="company" type="text" placeholder="${t[0].placeholders[1]}">
                        </div>
                        <div class="form-controls">
                            <div style="visibility: hidden;" class="back-btn">${n.buttons.back}</div>
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
                            <div class="next-btn">${n.buttons.next}</div>
                        </div>
                    </div>
                    <div class="form-section">
                        <p class="section-description">
                            ${t[1].title}
                        </p>
                        <div class="categories">
                            <input checked type="radio" id="not-sure" value="not sure" name="category">
                            <label for="not-sure" class="active">
                                <h2>
                                    ${t[1].options[0].title}
                                </h2>
                                <p>
                                    ${t[1].options[0].description}
                                </p>
                            </label>
                            <input type="radio" id="design" value="design" name="category">
                            <label for="design">
                                <h2>
                                    ${t[1].options[1].title}
                                </h2>
                                <p>
                                    ${t[1].options[1].description}
                                </p>
                            </label>
                            <input type="radio" id="development" value="development" name="category">
                            <label for="development">
                                <h2>
                                    ${t[1].options[2].title}
                                </h2>
                                <p>
                                    ${t[1].options[2].description}
                                </p>
                            </label>
                        </div>
                        <div class="form-controls">
                            <div class="back-btn">${n.buttons.back}</div>
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
                            <div class="next-btn">${n.buttons.next}</div>
                        </div>
                    </div>
                    <div class="form-section">
                        <p class="section-description">
                            ${t[2].title}
                        </p>
                        <textarea id="message" required name="message" placeholder="${t[2].placeholders[0]}"></textarea>
                        <label style="display: none;" for="attachments"> 
                            <img src="${q}" alt="attach files">
                            ${t[2].placeholders[1]}
                            <input type="file" id="attachments" name="attachments" accept="image/png, image/jpeg">
                        </label>
                        <div class="form-controls">
                            <div class="back-btn">${n.buttons.back}</div>
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
                            <div class="next-btn">${n.buttons.next}</div>
                        </div>
                    </div>
                    <div class="form-section">
                    <p class="section-description">
                        ${t[3].title}
                    </p>
                    <div class="input-wrapper">
                        <input required id="email" name="email" type="email" placeholder="${t[3].placeholders[0]}">
                        <input id="phone" name="phone" type="text" placeholder="${t[3].placeholders[1]}">
                    </div>
                    <div class="form-controls">
                        <div class="back-btn">${n.buttons.back}</div>
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
                        <div class="send-btn">${n.buttons.send}</div>
                    </div>
                </div>
                </form>
            </div>
        `,l}function e(l){if(l==0){if(o=document.getElementById("name").value.split(" ")[0],!o){alert("You need to insert a name");return}let d=document.getElementsByClassName("section-description"),p=d.item(1).innerHTML.replace("{name}",`${o}`);d.item(1).innerHTML=p}if(l==2&&!document.getElementById("message").value){alert("You need to insert a message");return}const s=document.getElementsByClassName("form-section"),m=s[l];s[l+1].classList.toggle("active"),m.classList.toggle("active")}function i(l){const s=document.getElementsByClassName("form-section"),m=s[l];s[l-1].classList.toggle("active"),m.classList.toggle("active")}function r(){const l=document.getElementById("contact-form"),s=document.getElementsByClassName("send-btn")[0];s&&(s.onclick=null,s.style.filter="opacity(.6)");let m=l.name.value,d=l.company.value,p=l.message.value,u=l.category.value,h=l.email.value,c=l.phone.value,L=/^\s*(?:\+?(\d{1,4}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;if(!c.match(L)){alert("The phone number inserted is not valid");return}if(!h){alert("You need to insert an email");return}k({url:"https://formspree.io/f/mpzbzolz",method:"post",headers:{Accept:"application/json"},data:{name:m,company:d,message:p,category:u,email:h,phone:c}}).then(v=>{console.log(v),s&&(s.onclick=r,s.style.filter="opacity(1)"),alert("Email sent")}).catch(v=>{console.log(v),alert("An error has occurred, please, try again later")})}return{render:a,handleNextBtnClick:e,handleBackBtnClick:i,handleSendBtnClick:r}}function Z(){function n(){const t=document.createElement("div");return t.id="footer",t.innerHTML+=`
            <div class="footer-wrapper">
                <svg width="48" height="51" viewBox="0 0 48 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M48 41.9708L42.8414 51C37.5845 47.2296 31.2467 45.3443 24.8107 45.7413C19.652 46.1381 14.6407 47.9737 10.4647 51L19.6029 35.0749C24.0246 33.8842 28.6919 34.4796 32.7206 36.712C30.3624 32.6439 28.0532 28.5263 25.695 24.4582C25.1546 23.466 24.565 22.5233 24.0246 21.5311L7.12387 51H5.20778L0 41.9708L24.0246 0L48 41.9708Z" fill="var(--main-color)"/>
                </svg>

                <p>find me on:</p>
                <div class="social-media">
                <a href="https://www.linkedin.com/in/arthur-matias/" target="_blank">
                    <img src="${b}" alt="LinkedIn">
                </a>
                <a href="https://www.behance.net/arthurmm18" target="_blank">
                    <img src="${w}" alt="Behance">
                </a>
                <a href="https://github.com/Arthur-Matias" target="_blank">
                    <img src="${y}" alt="Github">
                </a>
                </div>
            </div>
        `,t}return{render:n}}const x=$();window.onload=()=>{const n=document.querySelector("#app"),t=document.createElement("div"),o=E(),a=N(),e=H(),i=S(),r=Z();n.innerHTML="",t.innerHTML="",t.classList.add("app-wrapper"),n.appendChild(o.render()),t.appendChild(a.render()),t.appendChild(e.render()),t.appendChild(i.render()),t.appendChild(r.render()),n.appendChild(t);const l=document.getElementById("menu-btn"),s=document.getElementById("color-slider"),m=document.getElementsByClassName("menu-link");for(let c=0;c<m.length;c++)m[c].onclick=o.handleLinkClick;const d=document.getElementsByClassName("gallery-cell");for(let c=0;c<d.length;c++)d[c].onclick=e.changeSelectedWork;const p=document.getElementsByClassName("next-btn"),u=document.getElementsByClassName("back-btn"),h=document.getElementsByClassName("send-btn")[0];for(let c=0;c<p.length;c++)p[c].onclick=()=>i.handleNextBtnClick(c);for(let c=0;c<u.length;c++)u[c].onclick=()=>i.handleBackBtnClick(c);h&&(h.onclick=i.handleSendBtnClick),l.onclick=o.handleMenuClick,s.value=`${Math.floor(Math.random()*360)}`,x.setMainColor(s.value),s.oninput=()=>o.handleSlider(x.setMainColor)};
