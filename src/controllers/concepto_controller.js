//this file controls the interaction of the elements in 'entender un concepto' screen

//importing the necessary functions
import { navigate } from '../router/router.js';
import { ConceptoScreen } from '../screens/concepto_screen.js';


export function ConceptoController (params){
    //getting elements in container
    const container = ConceptoScreen();

        //referencing the 2 options in container
    const teoria_btn = container.querySelector('#teoriaBtn');
    const repasar_btn = container.querySelector('#repasarBtn');
    
    //referencing the 3 sections
    const teoria_section = container.querySelector('#teoria');
    const repasar_section = container.querySelector('#repasar');
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
        teoria_btn.style.display = "none";
        repasar_btn.style.display = "none";
        //show the navigation buttons
        footer_section.style.display="flex";

        //showing the correct one
        if (section == "teoria"){
            teoria_section.style.display = "flex";
            repasar_section.style.display = "none";
            actualSection = teoria_section;
        }

        else if (section == "repasar"){
            teoria_section.style.display = "none";
            repasar_section.style.display = "flex";
            actualSection = repasar_section;

        }
    }

        //go back: let the user choose one of the 3 options again
    function goBack(){
        //show the options to choose
        teoria_btn.style.display = "";
        repasar_btn.style.display = "";

        //hide all the sections
        teoria_section.style.display = "none";
        repasar_section.style.display = "none";

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
            pistas.style.display="none";
            pista_btn.innerHTML = `<i class="bi bi-lightbulb"></i> Pista`;
            pista_btn.classList.remove("hide");
            
        }
        //else, atrás shows the buttons to choose again
        else {
            goBack();
        }
        isVisible = false;
    }

    function fillPistas(section){
        if (section == "teoria"){
            pistas.innerHTML = `
                <div>
                    <p style="justify-self:center">Si ___________</p>
                    <hr></hr>
                    <p><i class="bi bi-caret-right"></i>___________</p>
                    <p style="margin-top:4px"><i class="bi bi-caret-right"></i>______________</p>
                    <p style="margin-top:4px"><i class="bi bi-caret-right"></i>________
                    </p>
                </div>
                <div>
                    <p style="justify-self:center">Si ________________</p>
                    <hr></hr>
                    <p><i class="bi bi-caret-right"></i>_______________</p>
                    <p style="margin-top:4px"><i class="bi bi-caret-right"></i>________________
                    </p>
                    <p style="margin-top:4px"><i class="bi bi-caret-right"></i>___________________
                    </p>
                </div>
                <div>
                    <p style="justify-self:center">Si _____________</p>
                    <hr></hr>
                    <p><i class="bi bi-caret-right"></i>__________________</p>
                    <p style="margin-top:4px"><i class="bi bi-caret-right"></i>_______________</p>
                    <p style="margin-top:4px"><i class="bi bi-caret-right"></i>_____________________</p>
                </div>
            `;
        }

        if (section == "repasar"){
            pistas.innerHTML = `
                <div>
                    <p style="justify-self:center">Si ___________</p>
                    <hr></hr>
                    <p><i class="bi bi-caret-right"></i>___________</p>
                    <p style="margin-top:4px"><i class="bi bi-caret-right"></i>______________</p>
                    <p style="margin-top:4px"><i class="bi bi-caret-right"></i>________
                    </p>
                </div>
                <div>
                    <p style="justify-self:center">Si ________________</p>
                    <hr></hr>
                    <p><i class="bi bi-caret-right"></i>_______________</p>
                    <p style="margin-top:4px"><i class="bi bi-caret-right"></i>________________
                    </p>
                    <p style="margin-top:4px"><i class="bi bi-caret-right"></i>___________________
                    </p>
                </div>
                <div>
                    <p style="justify-self:center">Si _____________</p>
                    <hr></hr>
                    <p><i class="bi bi-caret-right"></i>__________________</p>
                    <p style="margin-top:4px"><i class="bi bi-caret-right"></i>_______________</p>
                    <p style="margin-top:4px"><i class="bi bi-caret-right"></i>_____________________</p>
                </div>
            `;
        }
    }


    //EVENT LISTENERS

        //choosing an option
    teoria_btn.onclick = () => { showSection("teoria"), fillPistas("teoria")};
    repasar_btn.onclick = () => { showSection("repasar"), fillPistas("repasar") };

        //going back to choose another OR going back to the previous section when on Pruebalo tu
    atras_btn.addEventListener('click', () =>{
        atrasEvent(actualSection); 
    });

        //going to pruebalo tu screen
    prueba_btn.addEventListener('click', ()=> {pruebaloTu(actualSection)});

        //showing clues of prompts
    pista_btn.addEventListener('click', () =>{
        if(pista_btn.className == "btn pista concepto btn-sm"){
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