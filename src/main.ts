import "./Styles/app.css"
import OS from './OS.svelte'

const app = new OS({
  target: document.getElementById('app')
})

export default app