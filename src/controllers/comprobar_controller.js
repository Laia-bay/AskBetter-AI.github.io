//this file controls the interaction of the elements in 'comprobar resultados' screen

//importing the necessary functions
import { navigate } from '../router/router.js';
import { ComprobarScreen } from '../screens/comprobar_screen.js';


export function ComprobarController (params){
    //getting elements in container
    const container = ComprobarScreen();
//getting the content of the section and the pruebatu section
    const comprobar_section = container.querySelector('#comprobar')
    const pruebatu_section = container.querySelector('#pruebatu');

    //referencing the navigation section and its buttons
    const atras_btn = container.querySelector('#atrasBtn');
    const prueba_btn = container.querySelector('#pruebaBtn');

    //knowing if pruebalo tu section is visible
    let isVisible = null;

    //referencing the elements from pruebalo tu section/page
    const pistas = container.querySelector('#pistasPrompt');
    const pista_btn = container.querySelector('#pistaBtn');



    //FUNCTIONS
    function pruebaloTu(){
        isVisible = true;
        pruebatu_section.style.display="";
        comprobar_section.style.display="none";
        prueba_btn.style.display = "none";
        atras_btn.style.display="";
        
        return;
    }


    //EVENT LISTENERS
        //going to pruebalo tu screen
    prueba_btn.addEventListener('click', ()=> {pruebaloTu()});

        //going back to the main content in comprbar screen
    atras_btn.addEventListener('click', () =>{
        comprobar_section.style.display="";
        pruebatu_section.style.display="none";
        prueba_btn.style.display = "";
        atras_btn.style.display = "none";
        pistas.style.display="none";
        pista_btn.innerHTML = `<i class="bi bi-lightbulb"></i> Pista`;
        pista_btn.classList.remove("hide"); 
    });

        //showing clues of prompts
    pista_btn.addEventListener('click', () =>{
        if(pista_btn.className == "btn pista comprobar btn-sm"){
            pistas.style.display="";
            pista_btn.innerText = "esconde";
            pista_btn.classList.add("hide");
        }
        else{
            pistas.style.display="none";
            pista_btn.innerHTML = `<i class="bi bi-lightbulb"></i> Pista`;
            pista_btn.classList.remove("hide");
        }
    });
            

    return container;
}