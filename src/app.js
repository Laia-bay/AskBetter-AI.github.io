//this file initializes the website

// Importing necessary files and functions
import './routes.js';
import { router } from './router.js';
import { initCommmonLayout } from './controllers/commonLayout_controller.js';


async function initApp(){
    
    window.addEventListener('hashchange', router);
    
    window.addEventListener('load', async () => {
        initCommmonLayout();
        router();
    }) 
};

initApp();