//this file controls the interaction of the elements in 'resolver ejercicios' screen

//importing the necessary functions
import { navigate } from '../router/router.js';
import { ResolverScreen } from '../screens/resolver_screen.js';


export function ResolverController (params){
    //getting elements in container
    const container = ResolverScreen();

    return container;
}