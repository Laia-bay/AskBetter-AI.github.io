export function CodigoScreen (params){

    // ELEMENTS IN HTML FORM
    const container = document.createElement('div');
    container.innerHTML = `
        <h4 class="titles" style="color:dodgerblue"><b>Trabajar con código</b></h4>

        <p class="subtitles" style="margin-top:50px"> ¿Qué problema te estás encontrando?</p>
    
        <div id="coding">
            <button id="entenderBtn" class="btn option codigo">No entiendo el código</button>
            <button id="fallaBtn" class="btn option codigo">No me funciona y no sé por qué</button>
            <button id="noaprendoBtn" class="btn option codigo">La IA me lo resuelve y no aprendo</button>
        </div>

        <!--depending on the option chosen the content will be different-->

        <section id="entender" class="coding-section" style="display:none">
            <h3 style="color:dodgerblue"><em><b>No entiendo el código</b></em></h3>

            <p>No te preocupes, es un problema muy común.
             La IA Generativa tiene un gran potencial para explicar código y aprender cosas nuevas, 
             pero los prompts utilizados afectan al resultado.
            Ahora miraremos la estrategia que es usada habitualmente, y alternativas que pueden ser útiles.
            </p>

            <h3 style="color:dodgerblue"><em><b>Estrategia habitual</b></em></h3>
            
            <p>A menudo, cuando no entendemos el código le decimos a la IA, "explícame esto",
            sin especificar qué es lo que no se entiende, o por qué. 
            De esta manera, se pone todo el peso del aprendizaje en la IA y ninguno en nosotros,
            que resulta en un aprendizaje más superficial que puede olvidarse el día del examen. 
            </p>

            <h3 style="color:dodgerblue"><em><b>Estrategia alternativa</b></em></h3>

            <h3 style="color:dodgerblue"><em><b>Comparativa</b></em></h3>
            <p>Pongamos como ejemplo una función de <em>'Binary Search'</em> con python. 
            Esta función encuentra un valor en una array de manera más rápida que un loop normal.
            </p>

            <div class=comparison>
                <div class=code>
    <!--code takes into account spaces, so we have to put it at the same indentation as container-->
    <pre><code class="language-python">def binarySearch(array,target):
    left = 0
    right = len(array)-1

    while left <=right:
        mid = (left + right)//2

        if array[mid] == target:
            return mid

        elif array[mid] < target:
            left = mid+1

        else:
            right = mid-1

    return -1</code></pre>
                </div>
                <div class="promptsDiv">
                    <div>
                        <h5 style="color:dodgerblue"><b><em>Prompt habitual</b></em></h5>
                        <div class="promptText">
                            <p><i class="bi bi-caret-right"></i>Explica esta función</p>
                            <p><i class="bi bi-caret-right"></i>¿Esto qué hace?</p>
                        </div>
                    </div>
                    <div>
                        <h5 style="color:dodgerblue"><b><em>Prompt mejorado</b></em></h5>
                        <div class="promptText">
                            <p><i class="bi bi-caret-right"></i>Explica línea por línea qué hace esta función</p>
                            <p><i class="bi bi-caret-right"></i>Quiero entender este código, pero no me lo expliques todo de golpe. 
                            Explícame las primeras líneas y hazme preguntas para ver si lo entiendo.
                            </p>
                            <p><i class="bi bi-caret-right"></i>¿Me puedes explicar qué hace el 'while' de esta función?</p>
                            <p><i class="bi bi-caret-right"></i>¿Qué hace la condición 'elif' en esta función?</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="resultsDiv">
                <div>
                    <h5 style="color:dodgerblue"><b><em>Resultado 1-</b> Explica qué hace</em></h5>
                    <div class="promptText">

                        <p>Ese código implementa el algoritmo de <strong>búsqueda binaria</strong>, que sirve para encontrar un elemento (<code>target</code>) dentro de una lista (<code>array</code>) <strong>ordenada</strong>.</p>

                        <h5>¿Cómo funciona?</h5>
                        <ol>
                            <li>Empieza con dos índices:
                                <ul>
                                    <li><code>left</code> (inicio de la lista)</li>
                                    <li><code>right</code> (final de la lista)</li>
                                </ul>
                            </li>
                            <li>Mientras <code>left &lt;= right</code>:
                                <ul>
                                    <li>Calcula el punto medio:
                                        mid = (left + right) // 2
                                    </li>
                                    <li>Compara el valor del medio con el <code>target</code>:
                                        <ul>
                                            <li>Si es igual → devuelve la posición (<code>mid</code>)</li>
                                            <li>Si es menor → busca en la mitad derecha</li>
                                            <li>Si es mayor → busca en la mitad izquierda</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>Si no encuentra el elemento → devuelve <code>-1</code></li>
                    </div>
                </div>
                <div>
                    <h5 style="color:dodgerblue"><b><em>Resultado 2 -</b> Explica línea por línea</em></h5>
                    <div class="promptText">

                        <ul><code>def binarySearch(array,target):</code></ul>
                        <p>Aquí estás <strong>definiendo una función</strong> llamada <code>binarySearch</code> que recibe dos parámetros:<br>
                        <strong>array</strong>: una lista de números que debe estar ordenada.<br>
                        <strong>target</strong>: el número que quieres buscar dentro de esa lista.</p>

                        <ul><code>left = 0<br>
                        right = len(array)-1</code></ul>

                        <p>Estas dos líneas crean <strong>dos “punteros” o índices</strong>:<br>
                        <strong>left = 0</strong> → empieza al inicio de la lista<br>
                        <strong>right = len(array)-1</strong> → apunta al final de la lista</p>

                        <p>En otras palabras, estás diciendo: 
                        <em>"Voy a buscar entre la posición 0 y la última posición del array."</em>
                        </p>

                        <h5>Preguntas para comprobar si lo entiendes:</h5>
                        <ol>
                            <li>Si <strong>array = [2, 4, 6, 8, 10]</strong>, ¿qué valor tendría <code>right</code>?</li>
                            <li>¿Por qué crees que usamos <code>len(array)-1</code> y no solo <code>len(array)</code>?</li>
                            <li>¿Qué representan realmente <code>left</code> y <code>right</code>: valores o posiciones?</li>
                        </ol>
                        <p>Respóndeme y seguimos con la siguiente parte!</p>
                    </div>
                </div>
            </div>
            
        </section>

        <section id="falla" class="coding-section" style="display:none">
            <p>No me funciona y no sé por qué</p>
        </section>

        <section id="noaprendo" class="coding-section" style="display:none">
            <p>La IA me lo resuelve y no aprendo</p>
        </section>

        <section id="pruebatu" class="coding-section" style="display:none">
            <h3 style="color:dodgerblue"><em><b>Aplícalo a tu caso particular</b></em></h3>    
            <p>Piensa en los prompts propuestos en la página anterior, y utiliza, o crea uno particular que te sirva para el código que no has entendido.
            Utiliza tu IA de confianza.</p>
            <div class="pistaDiv">
                <p><em><b>¿Necesitas ayuda?</b></em></p>
                <button id="pistaBtn" class="btn pista btn-sm">
                    <i class="bi bi-lightbulb"></i> Pista
                </button>
            </div>
            <div id="pistasPrompt" class="promptText" style="display:none">
                <div>
                    <p>----Si no entiendes nada----</p>
                </div>
                <div>
                    <p>----Si no entiendes una parte----</p>
                </div>
                <div>
                    <p>----Si eres un visual learner----</p>
                </div>
            </div>
            <h3 style="color:dodgerblue"><em><b>Momento de reflexión</b></em></h3>
            <p>Una vez has aplicado los nuevos prompts, y entendido el código, es momento de reflexionar sobre qué has aprendido y cómo te sientes.</p>
        </section>

        <section id="footer" class="footerSec" style="display:none">
            <button id="atrasBtn" class="btn btn-outline-light me-2">Atrás</button>
            <button id="pruebaBtn" class="btn prueba">Pruebalo tú!</button>
        </section>
    `;



    Prism.highlightElement(container.querySelector("code"));

    return container;
}