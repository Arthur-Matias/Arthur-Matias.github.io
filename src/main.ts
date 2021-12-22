import Colors from './colors'

import './styles/global.scss'
import './styles/topbar.scss'
import './styles/home.scss'
import './styles/works.scss'
import './styles/contact.scss'
import './styles/footer.scss'

import Topbar from './templates/Topbar'
import Home from './templates/Home'
import Works from './templates/Works'
import Contact from './templates/Contact'
import Footer from './templates/Footer'

const colors = Colors()

window.onload = ()=>{
  const app = document.querySelector<HTMLDivElement>('#app')!
  const appWrapper = document.createElement("div")
  const topBar = Topbar()
  const home = Home()
  const works = Works()
  const contact = Contact()
  const footer = Footer()
  
  app.innerHTML = "";
  appWrapper.innerHTML = "";
  appWrapper.classList.add("app-wrapper")
  app.appendChild(topBar.render())
  
  appWrapper.appendChild(home.render())
  appWrapper.appendChild(works.render())
  appWrapper.appendChild(contact.render())
  appWrapper.appendChild(footer.render())
  
  app.appendChild(appWrapper)

  const menuBtn = document.getElementById("menu-btn") as HTMLElement;
  const slider = document.getElementById("color-slider") as HTMLInputElement;
  const menuLinks = document.getElementsByClassName("menu-link") as HTMLCollectionOf<HTMLElement>

  for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].onclick = topBar.handleLinkClick;
  }

  const galleryCells = document.getElementsByClassName("gallery-cell") as HTMLCollectionOf<HTMLElement>
  for (let i = 0; i < galleryCells.length; i++) {
    galleryCells[i].onclick = works.changeSelectedWork
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

  slider.value = `${Math.floor(Math.random() * 360)}`
  colors.setMainColor(slider.value)
  slider.oninput = ()=>topBar.handleSlider(colors.setMainColor)
}
