//this file controls the interaction of the elements in 'entender un concepto' screen

//importing the necessary functions
import { navigate } from '../router/router.js';
import { ConceptoScreen } from '../screens/concepto_screen.js';


export function ConceptoController (params){
    //getting elements in container
    const container = ConceptoScreen();

    return container;
}