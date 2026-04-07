//this file controls the interaction of the elements in 'trabajar con codigo' screen

//importing the necessary functions
import { navigate } from '../router/router.js';
import { CodigoScreen } from '../screens/codigo_screen.js';


export function CodigoController (params){
    //getting elements in container
    const container = CodigoScreen();

    return container;
}