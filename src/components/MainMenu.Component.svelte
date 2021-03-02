<script lang="ts">
  import {Link} from 'svelte-routing'
  import ColorSlider from './ColorSlider.Component.svelte';
  
  export let secondaryColor: string;
  export let color: string;
  export let isOpen:boolean;
  export let pageNum:string;

function getProps({ location, href, isPartiallyCurrent, isCurrent }) {
    const isActive = href === "/" ? isCurrent : isPartiallyCurrent || isCurrent;

    // The object returned here is spread on the anchor element's attributes
    if (isActive) {
      return { class: 'active' };
    }
    return {};
  }

  function hanldeClick(value: string){
    isOpen = false;
    pageNum = value;
  }
</script>

<div style={isOpen?'':'display:none;'} class="animate__animated animate__bounceInDown main-menu-container">
  <div class="slider animate__animated animate__fadeInLeft">
    <ColorSlider bind:secondaryColor bind:color />
  </div>
  
  <nav style={`--custom-color:${color}`} class="menu-option-container">
    <div class='menu-option animate__animated animate__bounce' on:click="{()=>hanldeClick('01')}" >
      <Link to="" getProps={getProps} >
        <div class="menu-item" >Home <span>01</span></div>
      </Link>
    </div>

    <div class='menu-option animate__animated animate__bounce' on:click="{()=>hanldeClick('02')}" >
      <Link to="about" getProps={getProps}>
        <div class="menu-item" >About <span>02</span></div>
      </Link>
    </div>

    <div class='menu-option animate__animated animate__bounce' on:click="{()=>hanldeClick('03')}" >
      <Link to="portfolio" getProps={getProps}>
        <div class="menu-item"  >Portfolio <span>03</span></div>
      </Link>
    </div>

    <div class='menu-option animate__animated animate__bounce' on:click="{()=>hanldeClick('04')}" >
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

  display: grid;
  grid-template-columns: repeat(12, 1fr);
	grid-template-rows: repeat(8, 1fr);
  
  z-index: 200;
}

.slider{
  display: flex;
  align-items: center;
  justify-content: start;
  background-color: var(--dark-bg-color);
  margin-left: 50%;
  margin-top: 2.8rem;
  position: absolute;
}

.menu-option-container{
  text-align: right;
  grid-row-start: auto;
  grid-row-end: 9;
  grid-column-end: 13;
  padding: 2rem;
  width: max-content;
}

.menu-option{
  padding: 1rem;
}

.menu-item{
  font-size: 9rem;
  font-weight: 900;
  position: relative;
  color: var(--white);
  line-height: 6rem;
  transition: color 0.2s ease;
}
.menu-item span{
  visibility: hidden;
  font-size: 1rem;
  position: absolute;
  top: -2rem;
  transition: color 0.2s ease;
}
.menu-item:hover > span, .menu-option .active .menu-item > span{
  visibility: visible;
}
.menu-option .active .menu-item,.menu-option:hover .menu-item {
  color: var(--custom-color);
}
.menu-option .active .menu-item,.menu-option:hover .menu-item span {

}

.animate__animated.animate__fadeInLeft{
  animation-delay: .5s;
  animation-duration: 1s;
}
@media screen and (max-height: 768px){
  .menu-item{
    font-size: 5rem;
    line-height: 3rem;
  }
        
}
@media screen and (max-width: 600px){
  .menu-item{
  font-size: 3rem;
  font-weight: 900;
  position: relative;
  color: var(--white);
  line-height: 2rem;
}
}

</style>