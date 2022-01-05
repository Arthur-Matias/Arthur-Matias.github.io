import Colors from './colors'

import "./styles/global.scss"

import Topbar from './templates/TopBar'
import Home from './templates/Home'
import About from './templates/About'
import Contact from './templates/Contact'
import Footer from './templates/Footer'

const colors = Colors()

window.onload = init

function init(){
  const app = document.querySelector<HTMLDivElement>('#app')!
  const appWrapper = document.createElement("div")
  const topBar = Topbar()
  const home = Home()
  const about = About()
  const contact = Contact()
  const footer = Footer()

  app.innerHTML = "";
  appWrapper.innerHTML = "";
  appWrapper.classList.add("app-wrapper")
  app.appendChild(topBar.render())
  
  appWrapper.appendChild(home.render())
  appWrapper.appendChild(about.render())
  appWrapper.appendChild(contact.render())
  appWrapper.appendChild(footer.render())
  
  app.appendChild(appWrapper)

  about.addListeners()

  const menuBtn = document.getElementById("menu-btn") as HTMLElement;
  const slider = document.getElementById("color-slider") as HTMLInputElement;
  const menuLinks = document.getElementsByClassName("menu-link") as HTMLCollectionOf<HTMLElement>

  for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].onclick = topBar.handleLinkClick;
  }

  const nextBtns = document.getElementsByClassName("next-btn") as HTMLCollectionOf<HTMLElement>
  const backBtns = document.getElementsByClassName("back-btn") as HTMLCollectionOf<HTMLElement>
  const sendBtn = document.getElementsByClassName("send-btn")[0] as HTMLElement;

  for (let i = 0; i < nextBtns.length; i++) {
    nextBtns[i].onclick = () => contact.handleNextBtnClick(i);
  }
  for (let i = 0; i < backBtns.length; i++) {
    backBtns[i].onclick = () => contact.handleBackBtnClick(i);
  }
  if (!!sendBtn) {
    sendBtn.onclick = contact.handleSendBtnClick
  }
  menuBtn.onclick = topBar.handleMenuClick

  let niceSliderColors = ["38","48","117","122","142","171","226","203","287","322","343","357"];

  slider.value = niceSliderColors[Math.floor(Math.random() * (niceSliderColors.length-1))]
  colors.setMainColor(slider.value)
  slider.oninput = ()=>topBar.handleSlider(colors.setMainColor)
}