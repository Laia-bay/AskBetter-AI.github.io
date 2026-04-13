export function ConceptoScreen (params){

    // ELEMENTS IN HTML FORM
    const container = document.createElement('div');
    container.innerHTML = `
        <h4 class="titles" style="color:blueviolet"><b>Entender un concepto</b></h4>

        <p class="subtitles" style="margin-top:50px"> ¿Qué problema te estás encontrando?</p>
    
        <div id="explaining">
            <button id="teoriaBtn" class="btn option concepto">No entiendo la teoría</button>
            <button id="repasarBtn" class="btn option concepto">Quiero repasar la teoría</button>
        </div>

        <!--depending on the option chosen the content will be different-->

        <section id="teoria" class="explaining-section" style="display:none">
            <h3 style="color:blueviolet"><em><b>No entiendo la teoría</b></em></h3>
            <div>
                <p>
                La IA Generativa tiene un gran potencial para explicar la teoría de diferentes maneras para el/la estudiante,  
                pero los prompts utilizados afectan al resultado.
                </p>
                <p>
                Ahora miraremos las estrategias que son usadas habitualmente, y alternativas que pueden ser útiles.
                </p>
            </div>

            <h3 style="color:blueviolet"><em><b>Estrategia habitual</b></em></h3>
            <p>Para ahorrar tiempo, normalmente le decimos a la IA que haga un resumen, o que lo explique de otra manera,
            pero para obtener un buen resultado, se debe ser más específico. <br>
            Si no, es posible que el nivel al que te lo explique no sea el adecuado, se olvide de puntos clave, o no se adhiera
            a tu manera de aprender. <br>
            Esto acaba resultando en muchas iteraciones con la IA hasta obtener una explicación con la que estés satisfecho/a, 
            y mucho tiempo invertido, lo que puede provocar frustración o desdén hacia la IA y hacia el contenido a aprender.
            </p>

            
            <h3 style="color:blueviolet"><em><b>Estrategia alternativa</b></em></h3>
            <div>
                <p>Para sacarle el mayor partido a la IA generativa a la hora de estudiar o aprender teoría, hay que crear prompts más específicos.</p>
                <p>Una cosa muy importante es dar información del contexto: en qué curso estás, qué estudias, qué asignatura es...<br>
                 De esta manera, el nuevo contenido creado estará alineado con el nivel esperado para alguien en tu curso.</p>
                <p>Otro punto importante es tu manera de aprender. <br>
                Algo bueno de la IA es que puede hacer que el aprendizaje sea personalizado a tus necesidades. 
                Por eso, mencionar de qué manera aprendes mejor hará que la IA te enseñe de esa manera, y el tiempo dedicado sea más eficiente, 
                reduciendo la frustración por no entender lo que explica, o por no obtener una respuesta que te sirva.</p>
            </div>
            <h3 style="color:blueviolet"><em><b>Comparativa</b></em></h3>
            <p>Pongamos como ejemplo que necesitas entender cómo funciona <em>'el protocolo TCP'</em>.<br>
            Esto es lo que tienes en las diapositivas de teoría:
            </p>

            <div class="comparison">
                <div class="promptText">
                    <h5><b>TCP: Transmission Control Protocol</b></h5>
                    <p>
                    TCP ofrece <b>transferencia fiable de datos</b>. 
                    Mediante técnicas como <em>flow control</em>, números de secuencia, confirmaciones (<em>acknowledgments</em>) 
                    y temporizadores, TCP garantiza que los datos se entreguen correctamente y en orden entre procesos. 
                    De este modo, convierte el servicio no fiable de IP en un transporte fiable entre procesos.
                    </p>

                    <p>
                    Además, TCP proporciona <b>control de congestión</b>. 
                    Este mecanismo no está pensado tanto para una aplicación concreta, sino para el buen funcionamiento de 
                    toda la red. Básicamente, evita que una sola conexión TCP sature los enlaces y routers con demasiado tráfico. 
                    TCP intenta repartir el ancho de banda de forma equitativa entre las conexiones, 
                    regulando la velocidad de envío de datos.
                    </p>
                </div>
                <div class="promptsDiv">
                    <div>
                        <h5 style="color:blueviolet"><b><em>Prompts habituales</b></em></h5>
                        <div class="promptText">
                            <p><i class="bi bi-caret-right"></i>Explicame esto.</p>
                            <p><i class="bi bi-caret-right"></i>No lo entiendo, explícalo de otra manera.</p>
                        </div>
                    </div>
                    <div>
                        <h5 style="color:blueviolet"><b><em>Prompts mejorados</b></em></h5>
                        <div class="promptText">
                            <p><i class="bi bi-caret-right"></i>No entiendo este concepto, ¿me lo puedes explicar brevemente 
                            y con un ejemplo real?</p>
                            <p><i class="bi bi-caret-right"></i>Quiero que expliques este concepto de una manera menos técnica, 
                            y que luego relaciones la explicación que me has dado con la original.</p>
                            <p><i class="bi bi-caret-right"></i>Aprendo de manera visual y no entiendo este concepto, 
                            ¿me peudes hacer un flowchart, un gráfico o buscar un vídeo de cómo funciona?</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="resultsDiv">
                <div>
                    <h5 style="color:blueviolet"><b><em>Resultado 1-</b> Prompt nº2 (habitual)</em></h5>
                    <div class="promptText">
                        <h5><b>¿Qué hace TCP?</b></h5>
                        <div>
                            <p>TCP es un protocolo de transporte que proporciona <b>entrega fiable y ordenada de datos</b> 
                            sobre una red no fiable como IP.</p>

                            <p>Divide los datos en segmentos y los numera para poder reconstruir el orden correcto. 
                            El receptor confirma los segmentos recibidos mediante <b>ACKs</b>. 
                            Si no hay confirmación, se considera pérdida y se retransmite.
                            </p>

                            <p><b>Además:</b></p>
                            <ul>
                                <li><b>Control de flujo:</b> limita la cantidad de datos enviados según la capacidad del receptor.</li>
                                <li><b>Control de congestión:</b> adapta la velocidad de envío según la carga de la red para 
                                evitar saturación.</li>
                            </ul>

                            <p>En conjunto, TCP asegura que los datos lleguen correctamente, en orden y sin sobrecargar la red.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h5 style="color:blueviolet"><b><em>Resultado 2 -</b> Prompt nºX (mejorado)</em></h5>
                    <div class="promptText" style="max-height:360px">
                        <h5><b>1. Transferencia fiable de datos</b></h5>
                        <div>
                            <p>TCP se asegura de que los datos lleguen:</p>
                            <ul>
                            <li>Sin perderse</li>
                            <li>Sin duplicarse</li>
                            <li>En el orden correcto</li>
                            </ul>

                            <p><b>¿Cómo lo hace?</b></p>
                            <ul>
                            <li>Cada trozo de datos tiene un <b>número de secuencia</b></li>
                            <li>El receptor envía un <b>ACK (confirmación)</b> cuando lo recibe</li>
                            <li>Si el emisor no recibe el ACK, <b>reenvía</b> el dato</li>
                            </ul>
                        </div>

                        <div>
                            <p><b>Ejemplo real:</b><p>
                            <p>Imagina que envías un archivo por WhatsApp:</p>
                            <ul>
                                <li>El archivo se divide en partes</li>
                                <li>Tu móvil envía parte 1, 2, 3…</li>
                                <li>El otro móvil responde: “recibí la 1 y la 2”</li>
                                <li>Si la 3 no llega, se vuelve a enviar</li>
                            </ul>
                            <p><b>Resultado:</b> el archivo llega completo y en orden, aunque la red falle.</p>
                        </div>
                        <h5><b>2. Control de congestión</b></h5>
                        <div>
                            <p>Esto no es solo para ti, sino para <b>toda la red</b>.</p>

                            <p>TCP intenta evitar que:</p>
                            <ul>
                            <li>Demasiados datos saturen routers o enlaces</li>
                            <li>Se produzcan pérdidas masivas</li>
                            </ul>

                            <p><b>¿Cómo lo hace?</b></p>
                            <ul>
                            <li>Empieza enviando <b>poco tráfico</b></li>
                            <li>Si todo va bien → <b>aumenta la velocidad</b></li>
                            <li>Si detecta problemas → <b>reduce la velocidad</b></li>
                            </ul>
                        </div>

                        <div>
                            <p><b>Ejemplo real:</b></p>
                            <p>Imagina una autopista:</p>
                            <ul>
                                <li>Si hay pocos coches → puedes ir más rápido</li>
                                <li>Si empieza a haber tráfico → reduces velocidad</li>
                                <li>Si hay atasco → avanzas muy lento</li>
                            </ul>
                            <p><b>TCP hace lo mismo</b> con los datos para no colapsar Internet.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section id="repasar" class="explaining-section" style="display:none">
            <h3 style="color:blueviolet"><em><b>Quiero repasar la teoría</b></em></h3>

            <p>
            La IA Generativa tiene un gran potencial para actuar como profesor, o ofrecer ejercicios y preguntas para asegurar 
            que has entendido el contenido, pero los prompts utilizados afectan al resultado. 
            Ahora miraremos la estrategia que es usada habitualmente, y alternativas que pueden ser útiles.
            </p>

            <h3 style="color:blueviolet"><em><b>Estrategia habitual</b></em></h3>
            <p>LALLLALL
            </p>

            
            <h3 style="color:blueviolet"><em><b>Estrategia alternativa</b></em></h3>
            <div>
                <p>Para sacarle el mayor partido a la IA generativa, se debe pasar la responsabilidad de la IA al estudiante.</p>
                <p>LALALALALALLALALLALALALALAL</p>
            </div>
            <h3 style="color:blueviolet"><em><b>Comparativa</b></em></h3>
            <p>Pongamos como ejemplo que quieres repasar qué es <em>'_____'</em>.<br>
            Esto es lo que tienes en las diapositivas/en tus apuntes:
            </p>

            <div class="comparison">
                <div class="promptText">
                    <p>eoeoeoeoeoeoe</p>
                    <ul>
                        <li><p>oaoaoaooao</p></li>
                        <li><p>oaoaoaooao</p></li>
                        <li><p>oaoaoaooao</p></li>
                    </ul>
                    <p>lalallala</p>
                </div>
                <div class="promptsDiv">
                    <div>
                        <h5 style="color:blueviolet"><b><em>Prompts habituales</b></em></h5>
                        <div class="promptText">
                            <p><i class="bi bi-caret-right"></i>Hazme preguntas para ver si he entendido esto</p>
                            <p><i class="bi bi-caret-right"></i>Ayudame a repasar esta teoria</p>
                        </div>
                    </div>
                    <div>
                        <h5 style="color:blueviolet"><b><em>Prompts mejorados</b></em></h5>
                        <div class="promptText">
                            <p><i class="bi bi-caret-right"></i>________________________________</p>
                            <p><i class="bi bi-caret-right"></i>____________________________
                            </p>
                            <p><i class="bi bi-caret-right"></i>________________________</p>
                            <p><i class="bi bi-caret-right"></i>_____________________</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="resultsDiv">
                <div>
                    <h5 style="color:blueviolet"><b><em>Resultado 1-</b> Prompt nºX (habitual)</em></h5>
                    <div class="promptText">
                        <p>eoeoeoeoeoeoe</p>
                        <ul>
                            <li><p>oaoaoaooao</p></li>
                            <li><p>oaoaoaooao</p></li>
                            <li><p>oaoaoaooao</p></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h5 style="color:blueviolet"><b><em>Resultado 2 -</b> Prompt nº1 (mejorado)</em></h5>
                    <div class="promptText">
                        <p>eoeoeoeoeoeoe</p>
                        <ul>
                            <li><p>oaoaoaooao</p></li>
                            <li><p>oaoaoaooao</p></li>
                            <li><p>oaoaoaooao</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section id="pruebatu" class="explaining-section" style="display:none">
            <h3 style="color:blueviolet"><em><b>Aplícalo a tu caso particular</b></em></h3>    
            <p>Piensa en los prompts propuestos en la página anterior, y utiliza, o crea uno particular que te sirva para la asignatura que quieras.
            Utiliza tu IA de confianza.</p>
            <div class="pistaDiv">
                <p><em><b>¿Necesitas ayuda?</b></em></p>
                <button id="pistaBtn" class="btn pista concepto btn-sm">
                    <i class="bi bi-lightbulb"></i> Pista
                </button>
            </div>
            <div id="pistasPrompt" class="promptText" style="display:none; gap:40px">
                <!--se rellenará dinámicamente--!>
            </div>
            <h3 style="color:blueviolet"><em><b>Momento de reflexión</b></em></h3>
            <p>Una vez has aplicado los nuevos prompts, es momento de reflexionar sobre qué has aprendido y cómo te sientes. 
            Aquí debajo tienes algunas afirmaciones que te podrían servir como guía.</p>
            <div class="titleReflection"><h5 style="color:blueviolet"><b><em>¿Qué ha cambiado al usar este tipo de prompts?</b></em></h5></div>
            <div class="reflection">
                <div>
                    <input class="form-check-input" type="checkbox" id="opt1">
                    <label class="form-check-label" for="opt1">He entendido más</label>
                </div>
                <div>
                    <input class="form-check-input" type="checkbox" id="opt2">
                    <label class="form-check-label" for="opt2">He estado más tiempo conversando con la IA</label>
                </div>
                <div>
                    <input class="form-check-input" type="checkbox" id="opt3">
                    <label class="form-check-label" for="opt3">Sé explicarlo por mi cuenta</label>
                </div>
                <div>
                    <input class="form-check-input" type="checkbox" id="opt4">
                    <label class="form-check-label" for="opt4">Me ha ofrecido respuestas que se adherían más a mi forma de aprender</label>
                </div>
            </div>
        </section>

        <section id="footer" class="footerSec" style="display:none">
            <button id="atrasBtn" class="btn btn-outline-light me-2">Atrás</button>
            <button id="pruebaBtn" class="btn prueba concepto">Pruebalo tú!</button>
        </section>


    `;

    return container;
}