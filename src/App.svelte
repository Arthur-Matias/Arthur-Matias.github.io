<script lang="ts">
import Logo from "./components/Logo.Component.svelte";
import MainMenu from "./components/MainMenu.Component.svelte";
import MenuButton from "./components/MenuButton.Component.svelte";
import SideBar from "./components/SideBar.Component.svelte";
import { Router, Route } from "svelte-routing";
import Home from './pages/Home.Page.svelte';
import About from './pages/About.Page.svelte';
import Portfolio from './pages/Portfolio.Page.svelte';
import Contact from './pages/Contact.Page.svelte';

export let url = "";
export let color:string;
export let secondaryColor:string;
export let isOpen = false;
export let pageNum = '01';

</script>

<Router url="{url}">
	<main class='App'>
		<div class="menu-icon">
			<MenuButton bind:color  bind:isOpen={isOpen}/>
		</div>
		<MainMenu bind:pageNum bind:color bind:secondaryColor bind:isOpen/>
		<div class="side-bar-container">
			<SideBar bind:pageNum={pageNum} bind:color={color} bind:isOpen={isOpen} />
		</div>
		<div class="content" on:mouseover="{()=>console.log(url)}">
			<Route path="contact"><Contact bind:pageNum bind:color={color} /></Route>
			<Route path="portfolio"><Portfolio bind:pageNum bind:color={color} /></Route>
			<!-- <Route path="portfolio/design" component="{PortfolioItem}" /> -->
			<!-- <Route path="portfolio/Proggramming" component="{PortfolioItem}" /> -->
			<!-- <Route path="portfolio/design/:id" component="{PortfolioItem}" /> -->
			<!-- <Route path="portfolio/Proggramming/:id" component="{PortfolioItem}" /> -->
			<Route path="about" ><About bind:pageNum bind:color={color} bind:secondaryColor={secondaryColor} /></Route>
			<Route path="/"><Home bind:pageNum bind:color={color}/></Route>
		</div>
	</main>
</Router>

<style>
	.App {
		overflow-x: hidden;
		overflow-y: auto;

		height: 100vh;
		width: 100vw;
		
		text-align: center;
		font-family: var(--regular-font);
		color: var(--white);
		
		background-color: var(--dark-bg-color);
		
		
		position: relative;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
		grid-template-rows: 15% 1fr;
		grid-column-gap: 2rem;

		padding: 1rem;
	}

    
	.menu-icon{
		position: absolute;
		right: 2rem;
		top: 0;
	}

	.side-bar-container{
		display: flex;
		text-align: center;
		grid-column-start: 1;
		grid-column-end: 2;
		grid-row-start:	1;
		grid-row-end: 3;
		align-items: center;
		flex-direction: column;
	}
	.content{
		grid-column-start: 2;
		grid-column-end: 13;
		grid-row-start:	2;
		grid-row-end: 3;
	}
	
	@media screen and (max-width: 1200px){
        .App{
			display: flex;
			position: relative;
			padding: 0;
		}
		.menu-icon{
			margin-top: -1rem;
		}
		.side-bar-container{
			position: fixed;
			left: 2rem;
			top: 0;
			width: 3rem;
			z-index: 500;
		}
		.content{
			width: 100vw;
			height: 100vh;
			
		}

    }
    @media screen and (min-width: 1600px){
        
    }
</style>