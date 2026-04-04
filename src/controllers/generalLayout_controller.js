import { navigate } from "../router/router.js";


export function initGeneralLayout(){

    const app = document.getElementById("app");
    //header (home button)
    const home_btn =  document.getElementById('menuBtn');
    home_btn.addEventListener('click',
        navigate('/main')
    );
};

