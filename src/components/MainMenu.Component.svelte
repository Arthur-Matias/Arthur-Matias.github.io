<script lang="ts">
  import {Link} from 'svelte-routing'
  import ColorSlider from './ColorSlider.Component.svelte';
  
  export let secondaryColor: string;
  export let color: string;
  export let isOpen:boolean;
  export let pageNum:string;


function handleMouseOver(e){
  e.target.style = `color: ${color};`
  console.log(color)
  console.log(secondaryColor)
}
function handleMouseOut(e){
  e.target.style = `color: var(--white);`
}
function getProps({ location, href, isPartiallyCurrent, isCurrent }) {
    const isActive = href === "/" ? isCurrent : isPartiallyCurrent || isCurrent;

    // The object returned here is spread on the anchor element's attributes
    if (isActive) {
      return { style: `color: ${color}` };
    }
    return {};
  }
  function hanldeClick(value: string){
    isOpen = false;
    pageNum = value;
  }
</script>

<div style={isOpen?'':'display:none;'} class="main-menu-container">
  <div class="slider">
    <ColorSlider bind:secondaryColor bind:color />
  </div>
  
  <nav class="menu-option-container">
    <div on:click="{()=>hanldeClick('01')}" on:mouseover={handleMouseOver} on:mouseout={handleMouseOut} >
      <Link to="" getProps={getProps} >
        <div class="menu-item" >Home <span>01</span></div>
      </Link>
    </div>

    <div on:click="{()=>hanldeClick('02')}" on:mouseover={handleMouseOver} on:mouseout={handleMouseOut} >
      <Link to="about" getProps={getProps}>
        <div class="menu-item" >About <span>02</span></div>
      </Link>
    </div>

    <div on:click="{()=>hanldeClick('03')}" on:mouseover={handleMouseOver} on:mouseout={handleMouseOut} >
      <Link to="portfolio" getProps={getProps}>
        <div class="menu-item"  >Portfolio <span>03</span></div>
      </Link>
    </div>

    <div on:click="{()=>hanldeClick('04')}" on:mouseover={handleMouseOver} on:mouseout={handleMouseOut} >
      <Link to="contact" getProps={getProps}>
        <div class="menu-item" >Contact <span>04</span></div>
      </Link>
    </div>
  </nav>
</div>

<style>

.main-menu-container{
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--dark-bg-color);
  display: flex;
  transform: translateY(1000px);
  animation: menuSlideIn .1s ease-in-out forwards .1s;
  overflow: hidden;
}

.menu-option-container{
  margin-top: 20rem;
  display: flex;
  bottom: 0;
  right: 0;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 6rem;
  width: 100vw;
  height: 100vh;
  font-weight: 900;
}

.menu-item{
  font-size: 8rem;
  color: var(--white);
  display: flex;
  line-height: 8rem;
  transform: translateY(-1000px);
  animation: slideLeft .2s ease-in-out forwards .2s;
}

.menu-item span{
  font-size: 1rem;
  position:relative;
  margin-top: -2rem;
  visibility: hidden;
  user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
}

.menu-item:hover span{
  visibility: visible;
}

.slider{
  margin-left: 8rem;
  transform: translateX(-1000px);
  animation: slideRight .2s ease-in-out forwards .2s;
}

@media screen and (max-width: 1200px){
  .main-menu-container{
    display: flex;
    align-items: flex-end;
    justify-content: end;
    width: 100%;
    height: 100%;
  }
  .menu-option-container{
    padding-top: 20rem;
    padding-left: 5rem;
    padding-right: 0;
  }
  .menu-item{
    font-size: 2rem;
    line-height: 3rem;
  }
  .slider{
    z-index: 600;
    margin: 0;
    top: 0;
    position: absolute;
  }
  
}
  @media screen and (min-width: 1200px) and (max-width: 1600px){
    .menu-option-container{
      padding: 0;
    }
    .menu-item{
      font-size: 5rem;
      line-height: 5rem;
    }
  }

@keyframes menuSlideIn{
  0% {
    opacity: 0;
    transform: translateY(-10000px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
@keyframes slideRight{
  0% {
    transform: translateX(-500px);
  }
  100% {
    transform: translateX(0px);
  }
}
@keyframes slideLeft{
  0% {
    transform: translateX(500px);
  }
  100% {
    transform: translateX(0px) translateY(50px);
  }
}

</style>