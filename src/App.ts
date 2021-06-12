import { User } from './models/User';

window.onload = () => {
    let title = document.querySelector("#title");
    const USER = new User("User", 24);
    if(title) title.innerHTML = USER.hello();
}