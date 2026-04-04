import { navigate } from '../router.js';


export function initGeneralLayout(){

    const app = document.getElementById("app");
    //header (home button)
    document.getElementById('menuBtn').addEventListener('click', () => {
        const user = JSON.parse(sessionStorage.getItem('currentUser'));
        if (user) {
            navigate('/main');
        }
    });
};

