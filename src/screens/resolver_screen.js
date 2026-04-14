export function ResolverScreen (params){

    // ELEMENTS IN HTML FORM
    const container = document.createElement('div');
    container.innerHTML = `
        <h4 class="titles" style="color:limegreen"><b>Resolver ejercicios</b></h4>

        <section id="resolver" class="content-section">
            <h3 style="color:limegreen"><em><b>Resolución de ejercicios con IA Generativa</b></em></h3>
            <div>
                <p>
                La IA Generativa tiene un gran potencial para explicar los pasos de los ejercicios de diferentes maneras para el/la estudiante, 
                pero los prompts utilizados afectan al resultado.
                </p>
                <p>
                Ahora miraremos las estrategias que son usadas habitualmente, y alternativas que pueden ser útiles.
                </p>
            </div>

            <h3 style="color:limegreen"><em><b>Estrategia habitual</b></em></h3>
            <p>Para ahorrar tiempo, normalmente le decimos a la IA que resuleva un ejercicio, y automáticamente lo hace por pasos.
            </p>

            
            <h3 style="color:limegreen"><em><b>Estrategia alternativa</b></em></h3>
            <div>
                <p>Para sacarle el mayor partido a la IA generativa a la hora de resolver ejercicios hay que crear prompts más específicos.</p>
                <p>Una cosa muy importante es dar información del contexto: en qué curso estás, qué estudias, qué asignatura es...<br>
                 De esta manera, el nuevo contenido creado estará alineado con el nivel esperado para alguien en tu curso.</p>
                <p>Otro punto importante es tu manera de aprender. <br>
                Algo bueno de la IA es que puede hacer que el aprendizaje sea personalizado a tus necesidades. 
                Por eso, mencionar de qué manera aprendes mejor hará que la IA te enseñe de esa manera, y el tiempo dedicado sea más eficiente, 
                reduciendo la frustración por no entender lo que explica, o por no obtener una respuesta que te sirva.</p>
            </div>
            <h3 style="color:limegreen"><em><b>Comparativa</b></em></h3>
            <p>Pongamos como ejemplo que necesitas entender cómo funciona <em>'el protocolo TCP'</em>.<br>
            Esto es lo que tienes en las diapositivas de teoría:
            </p>

            <div class="comparison">
                <div class="promptText">
                    <h5><b>________</b></h5>
                    <p>
                    ______________________
                    </p>

                    <p>
                   ______________________________
                    </p>
                </div>
                <div class="promptsDiv">
                    <div>
                        <h5 style="color:limegreen"><b><em>Prompts habituales</b></em></h5>
                        <div class="promptText">
                            <p><i class="bi bi-caret-right"></i>Haz este ejercicio.</p>
                            <p><i class="bi bi-caret-right"></i>haz esto paso por paso.</p>
                        </div>
                    </div>
                    <div>
                        <h5 style="color:limegreen"><b><em>Prompts mejorados</b></em></h5>
                        <div class="promptText">
                            <p><i class="bi bi-caret-right"></i>_____________</p>
                            <p><i class="bi bi-caret-right"></i>____________.</p>
                            <p><i class="bi bi-caret-right"></i>__________________</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="resultsDiv">
                <div>
                    <h5 style="color:limegreen"><b><em>Resultado 1-</b> Prompt nºX (habitual)</em></h5>
                    <div class="promptText">
                        <p>LALALALALA</p>
                    </div>
                </div>
                <div>
                    <h5 style="color:limegreen"><b><em>Resultado 2 -</b> Prompt nºX (mejorado)</em></h5>
                    <div class="promptText" style="max-height:360px">
                        <p>LALALALALA</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="pruebatu" class="content-section" style="display:none">
            <h3 style="color:limegreen"><em><b>Aplícalo a tu caso particular</b></em></h3>    
            <p>Piensa en los prompts propuestos en la página anterior, y utiliza, o crea uno particular que te sirva para la asignatura que quieras.
            Utiliza tu IA de confianza.</p>
            <div class="pistaDiv">
                <p><em><b>¿Necesitas ayuda?</b></em></p>
                <button id="pistaBtn" class="btn pista resolver btn-sm">
                    <i class="bi bi-lightbulb"></i> Pista
                </button>
            </div>
            <div id="pistasPrompt" class="promptText" style="display:none; gap:40px">
                <div>
                    <p style="justify-self:center">Si _________</p>
                    <hr></hr>
                    <p><i class="bi bi-caret-right"></i>_________.</p>
                    <p style="margin-top:4px"><i class="bi bi-caret-right"></i>___________.</p>
                    <p style="margin-top:4px"><i class="bi bi-caret-right"></i>____________.
                    </p>
                </div>
                <div>
                    <p style="justify-self:center">Si _________</p>
                    <hr></hr>
                    <p><i class="bi bi-caret-right"></i>_________.</p>
                    <p style="margin-top:4px"><i class="bi bi-caret-right"></i>___________.</p>
                    <p style="margin-top:4px"><i class="bi bi-caret-right"></i>____________.
                    </p>
                </div>
                <div>
                    <p style="justify-self:center">Si _________</p>
                    <hr></hr>
                    <p><i class="bi bi-caret-right"></i>_________.</p>
                    <p style="margin-top:4px"><i class="bi bi-caret-right"></i>___________.</p>
                    <p style="margin-top:4px"><i class="bi bi-caret-right"></i>____________.
                    </p>
                </div>
            </div>
            <h3 style="color:limegreen"><em><b>Momento de reflexión</b></em></h3>
            <p>Una vez has aplicado los nuevos prompts, es momento de reflexionar sobre qué has aprendido y cómo te sientes. 
            Aquí debajo tienes algunas afirmaciones que te podrían servir como guía.</p>
            <div class="titleReflection"><h5 style="color:limegreen"><b><em>¿Qué ha cambiado al usar este tipo de prompts?</b></em></h5></div>
            <div class="reflection">
                <div>
                    <input class="form-check-input resolver" type="checkbox" id="opt1">
                    <label class="form-check-label" for="opt1">He entendido más</label>
                </div>
                <div>
                    <input class="form-check-input resolver" type="checkbox" id="opt2">
                    <label class="form-check-label" for="opt2">He estado más tiempo hablando con la IA</label>
                </div>
                <div>
                    <input class="form-check-input resolver" type="checkbox" id="opt3">
                    <label class="form-check-label" for="opt3">Sé explicarlo por mi cuenta</label>
                </div>
                <div>
                    <input class="form-check-input resolver" type="checkbox" id="opt4">
                    <label class="form-check-label" for="opt4">Me ha ofrecido respuestas que se adherían más a mi forma de aprender</label>
                </div>
            </div>
        </section>

        <section id="footer" class="footerSec">
            <div><button id="atrasBtn" class="btn btn-outline-light me-2" style="display:none">Atrás</button></div>
            <div><button id="pruebaBtn" class="btn prueba resolver" style="align-content:flex-end">Pruebalo tú!</button></div>
        </section>
    `;

    return container;
}