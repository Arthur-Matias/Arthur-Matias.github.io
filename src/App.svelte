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
export let color:string = `hsl(0,100%,41%)`;
export let secondaryColor:string;
export let isOpen = false;
export let pageNum = '01';

</script>

<Router url="{url}">
	<MainMenu bind:pageNum bind:color bind:secondaryColor bind:isOpen/>
	<main class='App'>
		<div class="menu-icon">
			<MenuButton bind:color  bind:isOpen={isOpen}/>
		</div>
		<div class="side-bar-wrapper">
			<SideBar bind:pageNum={pageNum} bind:color={color} bind:isOpen={isOpen} />
		</div>
		<div class="content" on:mouseover="{()=>console.log(url)}">
			<!-- <Route path="contact"><Contact bind:pageNum bind:color={color} /></Route> -->
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
		overflow: hidden;

		height: 100vh;
		width: 100vw;
		
		text-align: center;
		font-family: var(--regular-font);
		color: var(--white);
		
		position: relative;
		top: 0;
		left: 0;

		display: grid;

		grid-template-columns: repeat(12, 1fr);
		grid-template-rows: repeat(8, 1fr);

		background: var(--dark-bg-color);
	}

	.content{
		grid-column-start: 2;
		grid-column-end: 13;
		grid-row-start: 2;
		grid-row-end: 9;
	}
    
	.menu-icon{
		display: flex;
		align-items: center;
		justify-content: center;
		right: 2rem;
		top: 2rem;
		padding-top: 1rem;
		grid-column-start: 12;
		grid-column-end: 13;
		grid-row-start: 1;
		grid-row-end: 2;
	}

	.side-bar-wrapper{
		grid-column-start: 1;
		grid-column-end: 2;
		grid-row-start: 1;
		grid-row-end: 9;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		width: 100%;
	}
	

</style>