//this file controls the interaction of the elements in 'trabajar con codigo' screen

//importing the necessary functions
import { navigate } from '../router/router.js';
import { CodigoScreen } from '../screens/codigo_screen.js';


export function CodigoController (params){
    //getting elements in Codigo screen
    const container = CodigoScreen();

    //referencing the 3 options in container
    const entender_btn = container.querySelector('#entenderBtn');
    const falla_btn = container.querySelector('#fallaBtn');
    const noaprendo_btn = container.querySelector('#noaprendoBtn');
    
    //referencing the 3 sections
    const ent_section = container.querySelector('#entender');
    const falla_section = container.querySelector('#falla');
    const no_section = container.querySelector('#noaprendo');
    const pruebatu_section = container.querySelector('#pruebatu');
    
    //referencing the navigation section and its buttons
    const footer_section = container.querySelector('#footer');
    const atras_btn = container.querySelector('#atrasBtn');
    const prueba_btn = container.querySelector('#pruebaBtn');

    //knowing the section that the user is actually on and if pruebalo tu section is visible
    let actualSection = null;
    let isVisible = null;

    //referencing the elements from pruebalo tu section/page
    const pistas = container.querySelector('#pistasPrompt');
    const pista_btn = container.querySelector('#pistaBtn');








    //FUNCTIONS
    function showSection(section){
        //first of all, hide the buttons
        entender_btn.style.display = "none";
        falla_btn.style.display = "none";
        noaprendo_btn.style.display = "none";
        //show the navigation buttons
        footer_section.style.display="flex";

        //showing the correct one
        if (section == "entender"){
            ent_section.style.display = "flex";
            falla_section.style.display = "none";
            no_section.style.display = "none";
            actualSection = ent_section;
        }

        else if (section == "falla"){
            falla_section.style.display = "flex";
            ent_section.style.display = "none";
            no_section.style.display = "none";
            actualSection = falla_section;

        }

        else if (section == "noaprendo"){
            no_section.style.display = "flex";
            ent_section.style.display = "none";
            falla_section.style.display = "none";
            actualSection = no_section;

        }
    }

        //go back: let the user choose one of the 3 options again
    function goBack(){
        //show the options to choose
        entender_btn.style.display = "";
        falla_btn.style.display = "";
        noaprendo_btn.style.display = "";

        //hide all the sections
        no_section.style.display = "none";
        ent_section.style.display = "none";
        falla_section.style.display = "none";

        //hide the navigation buttons
        footer_section.style.display="none";
    }

        //pruebalo tu: give the user some tips on how to apply it to their own code
    function pruebaloTu(actualSection){
        isVisible = true;
        actualSection.style.display="none";
        pruebatu_section.style.display="";
        prueba_btn.style.display = "none";
        
        return;
    }

    function atrasEvent(actualSection){
        //if we are on pruebalo tu section, atrás goes back to the previous one

        if(isVisible == true){
            actualSection.style.display="";
            pruebatu_section.style.display="none";
            prueba_btn.style.display = "";
            footer_section.style.display = "";
            
        }
        //else, atrás shows the buttons to choose again
        else {
            goBack();
        }
        isVisible = false;
    }


    //EVENT LISTENERS

        //choosing an option
    entender_btn.onclick = () => { showSection("entender")};
    falla_btn.onclick = () => { showSection("falla") };
    noaprendo_btn.onclick = () => { showSection("noaprendo") };

        //going back to choose another OR going back to the previous section when on Pruebalo tu
    atras_btn.addEventListener('click', () =>{
        atrasEvent(actualSection); 
    });

        //going to pruebalo tu screen
    prueba_btn.addEventListener('click', ()=> {pruebaloTu(actualSection)});

        //showing clues of prompts
    pista_btn.addEventListener('click', () =>{
        if(pista_btn.className == "btn pista btn-sm"){
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