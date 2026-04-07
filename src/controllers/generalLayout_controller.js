import { navigate } from "../router/router.js";


export function initGeneralLayout(){

    const app = document.getElementById("app");
    //header (home button)
    const home_btn =  document.getElementById('homeBtn');
    home_btn.onclick = () => {navigate('/main')};

    const help_btn =  document.getElementById('helpBtn');
    help_btn.onclick = () => {navigate('/help')};

    const back_btn = document.getElementById('backBtn');
};

