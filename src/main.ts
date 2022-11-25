import "./system/Global/Styles/app.css"
import OS from './system/OS.svelte'

const app = new OS({
  target: document.getElementById('app')
})

export default app