import{S as L,a as k}from"./vendor.b81d48a8.js";const C=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function a(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=a(t);fetch(t.href,i)}};C();function x(){document.documentElement.style.setProperty("--gradient",n());function n(){let a="linear-gradient(to right, ";for(let o=1;o<361;o++)o===360?a+=`hsl(${o}, 96%, 45%))`:a+=`hsl(${o}, 96%, 45%),`;return a}function e(a){console.log(a),document.documentElement.style.setProperty("--main-color",`hsl(${a}, 96%, 45%)`),document.documentElement.style.setProperty("--hue-angle",`${a}deg`)}return{setMainColor:e}}var B="/assets/photo.1274236f.png",S="/assets/plus-sign.34d3408a.svg",$="/assets/behance.d87a736d.svg",M="/assets/linkedin.a08b4e6d.svg",I="/assets/github.cdb8f18a.svg",A="/assets/clip.f4ee25ed.svg",E="/assets/snowfall.90b10022.png",T="/assets/space-game.082fcbde.png",H="/assets/bunny.eb54d0bd.png",j="/assets/discord.c710e7db.png",P="/assets/pong.7cb5375a.png",w="/assets/glowing-btns.b87077a8.png",N="/assets/glassmorphism-calc.d4fecc18.png",D="/assets/glass-website.419bb16c.png",G="/assets/3d-cube.01057324.png",W="/assets/insta-clone.597a961f.png",Z="/assets/animated-login.908e36a3.png",F="/assets/flappy.2f41233f.png",q="/assets/curfew-bar.0826d81b.png",J="/assets/facebook-cover-imortais.c60aeacb.png",_="/assets/mug-imortais.665a8675.png",R="/assets/book-cover.dcf546b8.png",V="/assets/yapira-video.a4bd4a49.png",U="/assets/e-sports-team-logo.4e2a0886.png",O="/assets/no-img.968c4321.png";const v={menu:{links:["home","about","contact"],texts:["Home","About","contAct"]},home:{texts:{greetings:"<b>-</b> Hello i'm",name:"ArtHur mAtiAs",description:"a <b>Designer</b> and <b>Developer</b>"},image:B},about:{title:"About",plusSign:S,buttons:["Design","Development"]},contact:{title:"contAct me",icons:[A],sections:[{title:"Good <b>afternoon</b> human. Who are you?",placeholders:["first and last name *","company"]},{title:"Nice to meet you <b>{name}</b>. What can i help you with?",options:[{title:"Not Sure",description:"I don\u2019t know yet. Let\u2019s talk and explore the possibilities."},{title:"Design",description:"I need a video, web design or design system to be created."},{title:"Development",description:"I need a website, game, prototype or something else to be developed."}]},{title:"Cool. What can you tell me about your <b>project</b>?",placeholders:["message *","attatchments"]},{title:"Nearly there. How can I <b>reach</b> you?",placeholders:["email address *","phone number (only numbers)"]}],buttons:{back:"back",next:"next",send:"send"}},portfolio:{Design:[{buttons:{project:"https://www.behance.net/gallery/113523017/Bar-Webpage-UI"},name:"Website UI for bar",imgSrc:q,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend lectus vel gravida vehicula. Sed congue eget mi eget euismod. Pellentesque fringilla viverra nisl, eget tincidunt tortor viverra eget. Fusce ultricies non enim ut egestas"},{buttons:{project:"https://www.behance.net/gallery/113425787/Capa-e-moldura-para-Facebook"},name:"Cover and frame for facebook for Academic Athletic Association",imgSrc:J,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend lectus vel gravida vehicula. Sed congue eget mi eget euismod. Pellentesque fringilla viverra nisl, eget tincidunt tortor viverra eget. Fusce ultricies non enim ut egestas"},{buttons:{project:"https://www.behance.net/gallery/113425585/Design-de-Caneca-universitaria-com-tirante"},name:"Strap Leash, Mug and T-Shirt Design for Academic Athletic Association",imgSrc:_,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend lectus vel gravida vehicula. Sed congue eget mi eget euismod. Pellentesque fringilla viverra nisl, eget tincidunt tortor viverra eget. Fusce ultricies non enim ut egestas"},{buttons:{project:"https://www.behance.net/gallery/95806451/Cover-for-guitar-Book"},name:"Guitar Book Cover",imgSrc:R,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend lectus vel gravida vehicula. Sed congue eget mi eget euismod. Pellentesque fringilla viverra nisl, eget tincidunt tortor viverra eget. Fusce ultricies non enim ut egestas"},{buttons:{project:"https://www.behance.net/gallery/81460661/Institutional-Video-Yapira-Team"},name:"Institutional Video for UFPR Robotics Team Yapira",imgSrc:V,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend lectus vel gravida vehicula. Sed congue eget mi eget euismod. Pellentesque fringilla viverra nisl, eget tincidunt tortor viverra eget. Fusce ultricies non enim ut egestas"},{buttons:{project:"https://www.behance.net/gallery/95801161/Logo-Redesign-for-Esports-Team"},name:"E-Sports Team Logo Redesign",imgSrc:U,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend lectus vel gravida vehicula. Sed congue eget mi eget euismod. Pellentesque fringilla viverra nisl, eget tincidunt tortor viverra eget. Fusce ultricies non enim ut egestas"}],Development:[{buttons:{deploy:"https://arthur-matias.github.io/space-game/",project:"https://github.com/arthur-matias/space-game/"},name:"Space Game",imgSrc:T,description:'A "Asteroids" like game, made in unity and built for the web with the WebGL plugin. Use <b>W</b>, <b>A</b>, <b>S</b>, <b>D</b> or <b>Arrow Keys</b> to move the player and <b>SPACE</b> to shoot.'},{buttons:{deploy:"https://arthur-matias.github.io/snowfall/",project:"https://github.com/arthur-matias/snowfall/"},link:"https://arthur-matias.github.io/snowfall/",name:"Snowfall",imgSrc:E,description:"Snowfall simulation made with <b>P5JS/Processing</b>"},{buttons:{deploy:"https://arthur-matias.github.io/bunny-jump/",project:"https://github.com/arthur-matias/bunny-jump/"},link:"https://arthur-matias.github.io/bunny-jump/",name:"Bunny Jump",imgSrc:H,description:"Infinite bunny jumper game. Developed with JavaScript and PhaserJS"},{buttons:{project:"https://github.com/arthur-matias/typescript-blockchain"},name:"TypeScript Blockchain",imgSrc:O,description:"This project is a cyptocurrency blockchain template API, developed with <b>TypeScript</b> and <b>NodeJs</b>."},{buttons:{project:"https://github.com/Arthur-Matias/discord_clone",deploy:"https://arthur-matias.github.io/discord_clone/"},name:"Discord Clone",imgSrc:j,description:"This project is a Discord frontend clone made with <b>React</b> + <b>styled components</b> and <b>TypeScript</b>."},{buttons:{project:"https://github.com/Arthur-Matias/pong-processing",deploy:"https://arthur-matias.github.io/pong-processing/"},name:"Pong",imgSrc:P,description:`Game Pong made in Processing/p5.js
 To play it you can use the <b>Up</b> and <b>Down</b> Arrow Keys to move the right pad, and <b>W</b>/<b>S</b> to move the left pad.`},{buttons:{project:"https://github.com/Arthur-Matias/glowing-ckeckbox-button",deploy:"https://arthur-matias.github.io/glowing-ckeckbox-button/"},name:"Glowing Buttons",imgSrc:w,description:"A nice glowing checkbox button made only with <b>HTML</b> and <b>CSS</b>."},{buttons:{project:"https://github.com/Arthur-Matias/calculator-glassmorphism",deploy:"https://arthur-matias.github.io/calculator-glassmorphism"},name:"Glassmorphism Calculator",imgSrc:N,description:"A beatiful Glassmorphism style calculator made entirely in <b>HTML</b> and <b>CSS</b>."},{buttons:{project:"https://github.com/Arthur-Matias/team-section-page",deploy:"https://arthur-matias.github.io/team-section-page"},name:"Team Section Page",imgSrc:w,description:"A cool <b>HTML</b> + <b>CSS</b> only Glassmorphism style Team Page."},{buttons:{project:"https://github.com/Arthur-Matias/glassmorphism-website",deploy:"https://arthur-matias.github.io/glassmorphism-website"},name:"Glassmorphism Website",imgSrc:D,description:"A cool <b>HTML</b> + <b>CSS</b> only Glassmorphism style Team Page."},{buttons:{project:"https://github.com/Arthur-Matias/3d-rendering",deploy:"https://arthur-matias.github.io/3d-rendering/"},name:"3D Rendering With Linear Algebra",imgSrc:G,description:"3D visualization with perspective using <b>Linear Algebra</b>, <b>MathJs</b> and <b>Processing/P5JS</b>."},{buttons:{project:"https://github.com/Arthur-Matias/instagram-clone",deploy:"https://arthur-matias.github.io/instagram-clone/"},name:"Instagram Login Clone",imgSrc:W,description:`Instagram login clone made with HTML and CSS. <b>IMPORTANT</b>: Chrome will throw a security warning, it's all safe, this happens because it is a copy of a "famous" website`},{buttons:{project:"https://github.com/Arthur-Matias/tela-de-login-interativa/",deploy:"https://arthur-matias.github.io/tela-de-login-interativa/"},name:"Animated Login Page",imgSrc:Z,description:"A nice animated login page. Made only with <b>HTML</b> and <b>CSS</b>"},{buttons:{project:"https://github.com/Arthur-Matias/FlappyBird-Clone/",deploy:"https://arthur-matias.github.io/FlappyBird-Clone/"},name:"Flappy Bird Clone",imgSrc:F,description:"A clone of the famous Flappy Bird game. Made with <b>JavaScript</b> and <b>HTML5 Canvas</b>"}]},"social-media":{icons:{behance:$,linkedin:M,github:I}}};function Y(){function n(){const t=v.menu,{linkedin:i,behance:d,github:p}=v["social-media"].icons,s=t.links,r=t.texts,l=document.createElement("div");return l.id="topbar",l.innerHTML+=`
            <div class="topbar-wrapper">
                <a href="#" class="topbar-logo">
                    <svg viewBox="0 0 48 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M48 41.9708L42.8414 51C37.5845 47.2296 31.2467 45.3443 24.8107 45.7413C19.652 46.1381 14.6407 47.9737 10.4647 51L19.6029 35.0749C24.0246 33.8842 28.6919 34.4796 32.7206 36.712C30.3624 32.6439 28.0532 28.5263 25.695 24.4582C25.1546 23.466 24.565 22.5233 24.0246 21.5311L7.12387 51H5.20778L0 41.9708L24.0246 0L48 41.9708Z" fill="var(--main-color)"/>
                    </svg>
                </a>
                <div id="menu">
                    <a href="#${s[0]}" class="menu-link styled-text active">${r[0]}</a>
                    <a href="#${s[1]}" class="menu-link styled-text">${r[1]}</a>
                    <a href="#${s[2]}" class="menu-link styled-text">${r[2]}</a>
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
                        <img src="${i}" alt="LinkedIn">
                    </a>
                    <a href="https://www.behance.net/arthurmm18" target="_blank">
                        <img src="${d}" alt="Behance">
                    </a>
                    <a href="https://github.com/Arthur-Matias" target="_blank">
                        <img src="${p}" alt="Github">
                    </a>
                </div>
            </div>
        `,l}function e(){const t=document.getElementById("topbar"),i=document.getElementsByClassName("btn6")[0];t.classList.toggle("open"),i.classList.toggle("active")}function a(t){const i=document.getElementById("color-slider");t(i.value)}function o(){const t=document.getElementsByClassName("btn6")[0];document.getElementById("topbar").classList.toggle("open"),t.classList.toggle("active")}return{render:n,handleMenuClick:o,handleSlider:a,handleLinkClick:e}}function z(){const{greetings:n,name:e,description:a}=v.home.texts;function o(){const t=document.createElement("div");t.id="home";let[i,d]=e.split(" ");return t.innerHTML+=`
            <div class="home-wrapper">
                <div class="square"></div>
                <div class="img" style="background-image: url(${v.home.image});"></div>
                <div class="texts">
                    <h6>${n}</h6>
                    <h1 class="styled-text">${i}</h1>
                    <h1 class="styled-text">${d}</h1>
                    <p>${a}</p>
                </div>
            </div>
        `,t}return{render:o}}function K(){let n,e;const{Design:a,Development:o}=v.portfolio;function t(l,g){e=l;const m=document.createElement("div");m.id=e,m.classList.add("swiper"),m.classList.add("works");let u='<div id="close-btn">close</div><div class="works-wrapper swiper-wrapper">',c='<div class="texts-wrapper">';return g.map(h=>{u+=`
                <div style="background-image: url(${h.imgSrc})" class="swiper-slide item-wrapper">
                    
                </div>
            `,c+=`
                <div class="item-text">
                    <h2>${h.name}</h2>
                    <p>${h.description}</p>
                    <div class="item-btn-wrapper">
                        <a href="${h.buttons.project}" target="_blank">project</a>
                        ${h.buttons.deploy?`<a href="${h.buttons.deploy}">deploy</a>`:""}
                    </div>
                </div>
            `}),u+="</div>",m.innerHTML=u+c+"</div>",m}function i(){return t("design",a)}function d(){return t("development",o)}function p(){const l=document.getElementById("close-btn");document.getElementsByClassName("item-text")[0].classList.toggle("active"),l.addEventListener("click",s),n=new L(".swiper",{loop:!0,slidesPerView:3,spaceBetween:30,height:window.innerHeight*.4,preloadImages:!0,centeredSlides:!0,autoHeight:!1,simulateTouch:!0,breakpoints:{300:{slidesPerView:2},800:{slidesPerView:4},1200:{slidesPerView:6}}}),n.on("snapIndexChange",m=>{console.log("changed - ",m.realIndex);const u=document.getElementsByClassName("item-text");document.getElementsByClassName("item-text active")[0].classList.toggle("active"),u[m.realIndex].classList.toggle("active")})}function s(){const l=document.getElementById(e);l==null||l.remove(),l||r()}function r(){n.destroy()}return{renderDesignWorks:i,renderDevelopmentWorks:d,initGallery:p,destroyGallery:r}}function Q(){const n=K(),e=document.createElement("div"),a=v.about;function o(){return e.id="about",e.innerHTML+=`
            <div class="about-wrapper">
                <h2 class="about-title styled-text">
                    ${a.title}
                    <h3>Under development ...</h3>
                </h2>

                <div class="about-btn-wrapper">
                    <div class="about-btn" id="design-btn">${a.buttons[0]}</div>
                    <div class="about-btn" id="development-btn">${a.buttons[1]}</div>
                </div>
            </div>
        `,e}function t(){const d=document.getElementById("design-btn"),p=document.getElementById("development-btn");d.addEventListener("click",()=>i("design")),p.addEventListener("click",()=>i("development"))}function i(d){const p=document.getElementById("about"),s=d==="design"?n.renderDesignWorks():n.renderDevelopmentWorks();p.appendChild(s),n.initGallery()}return{render:o,addListeners:t}}function X(){const n=v.contact,e=n.sections,a=n.icons[0];let o="";function t(){const s=document.createElement("div");return s.id="contact",s.innerHTML+=`
            <div class="contact-wrapper">
                <h2 class="styled-text">${n.title}</h2>
                <form id="contact-form">
                    <div class="form-section active">
                        <p class="section-description">
                            ${e[0].title}
                        </p>
                        <div class="input-wrapper">
                            <input required id="name" name="name" type="text" placeholder="${e[0].placeholders[0]}">
                            <input id="company" name="company" type="text" placeholder="${e[0].placeholders[1]}">
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
                            ${e[1].title}
                        </p>
                        <div class="categories">
                            <input checked type="radio" id="not-sure" value="not sure" name="category">
                            <label for="not-sure" class="active">
                                <h2>
                                    ${e[1].options[0].title}
                                </h2>
                                <p>
                                    ${e[1].options[0].description}
                                </p>
                            </label>
                            <input type="radio" id="design" value="design" name="category">
                            <label for="design">
                                <h2>
                                    ${e[1].options[1].title}
                                </h2>
                                <p>
                                    ${e[1].options[1].description}
                                </p>
                            </label>
                            <input type="radio" id="development" value="development" name="category">
                            <label for="development">
                                <h2>
                                    ${e[1].options[2].title}
                                </h2>
                                <p>
                                    ${e[1].options[2].description}
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
                            ${e[2].title}
                        </p>
                        <textarea id="message" required name="message" placeholder="${e[2].placeholders[0]}"></textarea>
                        <label style="display: none;" for="attachments"> 
                            <img src="${a}" alt="attach files">
                            ${e[2].placeholders[1]}
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
                        ${e[3].title}
                    </p>
                    <div class="input-wrapper">
                        <input required id="email" name="email" type="email" placeholder="${e[3].placeholders[0]}">
                        <input id="phone" name="phone" type="text" placeholder="${e[3].placeholders[1]}">
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
        `,s}function i(s){if(s==0){if(o=document.getElementById("name").value.split(" ")[0],!o){alert("You need to insert a name");return}let g=document.getElementsByClassName("section-description"),m=g.item(1).innerHTML.replace("{name}",`${o}`);g.item(1).innerHTML=m}if(s==2&&!document.getElementById("message").value){alert("You need to insert a message");return}const r=document.getElementsByClassName("form-section"),l=r[s];r[s+1].classList.toggle("active"),l.classList.toggle("active")}function d(s){const r=document.getElementsByClassName("form-section"),l=r[s];r[s-1].classList.toggle("active"),l.classList.toggle("active")}function p(){const s=document.getElementById("contact-form"),r=document.getElementsByClassName("send-btn")[0];r&&(r.onclick=null,r.style.filter="opacity(.6)");let l=s.name.value,g=s.company.value,m=s.message.value,u=s.category.value,c=s.email.value,h=s.phone.value,y=/^\s*(?:\+?(\d{1,4}))?[-. (]*(\d{3,4})[-. )]*(\d{3,4})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;if(!h.match(y)){alert("The phone number inserted is not valid"),r.onclick=p;return}if(!c){alert("You need to insert an email"),r.onclick=p;return}k({url:"https://formspree.io/f/mpzbzolz",method:"post",headers:{Accept:"application/json"},data:{name:l,company:g,message:m,category:u,email:c,phone:h}}).then(b=>{console.log(b),r&&(r.onclick=p,r.style.filter="opacity(1)"),alert("Email sent")}).catch(b=>{console.log(b),alert("An error has occurred, please, try again later")})}return{render:t,handleNextBtnClick:i,handleBackBtnClick:d,handleSendBtnClick:p}}function ee(){function n(){const e=document.createElement("div"),{linkedin:a,behance:o,github:t}=v["social-media"].icons;return e.id="footer",e.innerHTML+=`
            <div class="footer-wrapper">
                <svg width="48" height="51" viewBox="0 0 48 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M48 41.9708L42.8414 51C37.5845 47.2296 31.2467 45.3443 24.8107 45.7413C19.652 46.1381 14.6407 47.9737 10.4647 51L19.6029 35.0749C24.0246 33.8842 28.6919 34.4796 32.7206 36.712C30.3624 32.6439 28.0532 28.5263 25.695 24.4582C25.1546 23.466 24.565 22.5233 24.0246 21.5311L7.12387 51H5.20778L0 41.9708L24.0246 0L48 41.9708Z" fill="var(--main-color)"/>
                </svg>

                <p>find me on:</p>
                <div class="social-media">
                <a href="https://www.linkedin.com/in/arthur-matias/" target="_blank">
                    <img src="${a}" alt="LinkedIn">
                </a>
                <a href="https://www.behance.net/arthurmm18" target="_blank">
                    <img src="${o}" alt="Behance">
                </a>
                <a href="https://github.com/Arthur-Matias" target="_blank">
                    <img src="${t}" alt="Github">
                </a>
                </div>
            </div>
        `,e}return{render:n}}const f=x();window.onload=te;function te(){const n=document.querySelector("#app"),e=document.createElement("div"),a=Y(),o=z(),t=Q(),i=X(),d=ee();n.innerHTML="",e.innerHTML="",e.classList.add("app-wrapper"),n.appendChild(a.render()),e.appendChild(o.render()),e.appendChild(t.render()),e.appendChild(i.render()),e.appendChild(d.render()),n.appendChild(e),t.addListeners();const p=document.getElementById("menu-btn"),s=document.getElementById("color-slider"),r=document.getElementsByClassName("menu-link");for(let c=0;c<r.length;c++)r[c].onclick=a.handleLinkClick;const l=document.getElementsByClassName("next-btn"),g=document.getElementsByClassName("back-btn"),m=document.getElementsByClassName("send-btn")[0];for(let c=0;c<l.length;c++)l[c].onclick=()=>i.handleNextBtnClick(c);for(let c=0;c<g.length;c++)g[c].onclick=()=>i.handleBackBtnClick(c);m&&(m.onclick=i.handleSendBtnClick),p.onclick=a.handleMenuClick;let u=["38","48","117","122","142","171","226","203","287","322","343","357"];s.value=u[Math.floor(Math.random()*(u.length-1))],f.setMainColor(s.value),s.oninput=()=>a.handleSlider(f.setMainColor)}
