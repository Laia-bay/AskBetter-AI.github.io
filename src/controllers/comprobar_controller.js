//this file controls the interaction of the elements in 'comprobar resultados' screen

//importing the necessary functions
import { navigate } from '../router/router.js';
import { ComprobarScreen } from '../screens/comprobar_screen.js';


export function ComprobarController (params){
    //getting elements in container
    const container = ComprobarScreen();

    return container;
}