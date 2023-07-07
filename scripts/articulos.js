const articulos = [
    {
        categoria: "iluminacion",
        nombre: "Cabezal Movil Mad-Tec",
        img: "./img/mad-tec.jpg",
        precio: 20000,
    },
    {
        categoria: "iluminacion",
        nombre: "Cabezal Móvil PLS 3en1 7R",
        img: "./img/Captura de pantalla 2023-07-06 a la(s) 15.34.30.png",
        precio: 27500,
    },
    {
        categoria: "iluminacion",
        nombre: "Cabezal Movil AURA",
        img: "./img/Captura de pantalla 2023-07-06 a la(s) 15.34.37.png",
        precio: 27500
    },
    {
        categoria: "iluminacion",
        nombre: "Strobo + Tilt RGB+W",
        img: "./img/strobo.jpg",
        precio: 18000
    },
    {
        categoria: "iluminacion",
        nombre: "Proton / Nebula (Rgbwuv)",
        img: "./img/nebula-proton.jpg",
        precio: 4000
    },
    {
        categoria: "iluminacion",
        nombre: "Proton Big Par 180",
        img: "./img/big-par180.jpg",
        precio: 5000
    },
    {
        categoria: "iluminacion",
        nombre: "Proton Inalámbrico",
        img: "./img/Captura de pantalla 2023-07-06 a la(s) 15.32.50.png",
        precio: 9000
    },
    {
        categoria: "iluminacion",
        nombre: "Par 36 - Pin",
        img: "./img/PIN PAR36.jpg",
        precio: 2500
    },
    {
        categoria: "iluminacion",
        nombre: "Par56 - 300 Watts",
        img: "./img/PAR56 - 300 W.jpg",
        precio: 2200
    },
    {
        categoria: "iluminacion",
        nombre: "Par64 - 1000 Watts",
        img: "./img/PAR1000.jpg",
        precio: 4000
    },
    {
        categoria: "iluminacion",
        nombre: "Fresnel 1 Kw",
        img: "./img/Fresnel1k.jpg",
        precio: 8500
    },
    {
        categoria: "iluminacion",
        nombre: "Fresnel 2 Kw",
        img: "./img/Fresnel1k.jpg",
        precio: 11000
    },
    
    {
        categoria: "iluminacion",
        nombre: "Barra de Led",
        img: "./img/BARRA DE LED .jpg",
        precio: 9000
    },
    {
        categoria: "iluminacion",
        nombre: "Atomix 3000",
        img: "./img/ATOMIX 3000.jpg",
        precio: 16500
    },
    {
        categoria: "iluminacion",
        nombre: "Elipsoidal 750 Watts",
        img: "./img/ELIPSOIDAL .jpg",
        precio: 11000
    },
    {
        categoria: "iluminacion",
        nombre: "Minibrut x 4 Lamps",
        img: "./img/MINIBRUT X 4.jpg",
        precio: 24000
    },
    {
        categoria: "iluminacion",
        nombre: "Minibrut x 8 Lamps",
        img: "./img/MINIBRUT X 8.jpg",
        precio: 40000
    },
    {
        categoria: "iluminacion",
        nombre: "HQI - 400 / Reflector Led",
        img: "./img/HQI 400.jpg",
        precio: 13500
    },
    {
        categoria: "iluminacion",
        nombre: "Seguidor 1200 c/ Seguidorista",
        img: "./img/SEGUIDOR + SEGUIDORISTA.jpg",
        precio: 82500
    },
    {
        categoria: "iluminacion",
        nombre: "Octobeam Laser RGB",
        img: "./img/octobeam.jpg",
        precio: 25000
    },
    {
        categoria: "iluminacion",
        nombre: "Pixel Patt RGB + H",
        img: "./img/pixel-patt.jpg",
        precio: 40000
    },
    {
        categoria: "iluminacion",
        nombre: "Dimmer 12 Ch / Usina tension",
        img: "./img/dimmer - usina.jpeg",
        precio: 35000
    },{
        categoria: "iluminacion",
        nombre: "Corralito Técnico",
        img: "./img/Corralito.jpg",
        precio: 27500
    },
    {
        categoria: "iluminacion",
        nombre: "Toma Tensión Hasta 10 Amperes",
        img: "./img/toma 10 AMPS.jpeg",
        precio: 8800
    },
    {
        categoria: "iluminacion",
        nombre: "Toma Tensión Hasta 20 Amperes",
        img: "./img/TOMA 20 AMP.jpeg",
        precio: 16500
    },
    {
        categoria: "Sonido",
        nombre: "Sonido 1",
        descipcion: "2 JBL Eon-10 + Consola + Mic",
        img: "./img/SONIDO CEREMIA X 2.jpg",
        precio: 95000
    },
    {
        categoria: "Sonido",
        nombre: "Sonido 2",
        descipcion: "4 JBL Eon-10 + Consola + Mic",
        img: "./img/SONIDO CEREMIA X 2.jpg",
        precio: 130000
    },
    {
        categoria: "Sonido",
        nombre: "Sonido 3",
        descipcion: "Sonido Line Array 6xlado RCF HDL6 + Sub",
        img: "./img/LINE ARRAY 6XLADO .jpg",
        precio: 650000
    },
    {
        categoria: "Sonido",
        nombre: "Sonido 4",
        descipcion: "Sonido DJ En Recepción (2 mid-Hi + 2 Sub + JBL/RCF)",
        img: "./img/SONIDO DJ RECEPCION.jpg",
        precio: 175000
    },
    {
        categoria: "Sonido",
        nombre: "Perimetrales (JBL / RCF)",
        descipcion: "Perimetrales (JBL / RCF)",
        img: "./img/PERIMETRALES .jpg",
        precio: 35000
    },
    {
        categoria: "Sonido",
        nombre: "Sonido K-array (kr-202)",
        descipcion: "Sonido K-array (kr-202)",
        img: "./img/SISTEMA K ARRAY.jpg",
        precio: 220000
    },
    {
        categoria: "Sonido",
        nombre: "Rider Banda chica",
        descipcion: "Rider Banda chica",
        img: "./img/RIDER BANDA CHICA.jpg",
        precio: 275000
    },
    {
        categoria: "Sonido",
        nombre: "Mic Inalambrico Sennheiser G3",
        descipcion: "Mic Inalámbrico Sennheiser G3",
        img: "./img/MIC SENNHEISER.jpg",
        precio: 27500
    },
    {
        categoria: "rigging",
        nombre: "Truss Prolyte H30V x Metro",
        img: "./img/tramos.jpg",
        precio: 4500
    },
    {
        categoria: "rigging",
        nombre: "Corner Box Prolyte ",
        img: "./img/cubos.jpg",
        precio: 20000
    },
    {
        categoria: "rigging",
        nombre: "Aparejo x 1Tn (Ganmar-Yale)",
        img: "./img/APAREJO .jpg",
        precio: 8500
    },
    {
        categoria: "rigging",
        nombre: "Patas Malakate (6 Metros x 250 Kg)",
        img: "./img/PATA MALAKATE.jpg",
        precio: 35000
    },
    {
        categoria: "rigging",
        nombre: "Totem Truss",
        img: "./img/TOTEM TRUSS.jpg",
        precio: 20000
    },
    {
        categoria: "rigging",
        nombre: "Totem Telescópico",
        img: "./img/TOTEM TELESCOPICOS.jpg",
        precio: 20000
    },
    {
        categoria: "rigging",
        nombre: "Circular Truss x 6 metros",
        img: "./img/CIRCULO 6 METROS .jpg",
        precio: 130000
    },
    {
        categoria: "rigging",
        nombre: "Circular Truss x 8 metros",
        img: "./img/CIRCULO 8 METROS .jpg",
        precio: 200000
    },
    {
        categoria: "rigging",
        nombre: "Cabina de DJ con Truss 3030 (3x1x1)",
        img: "./img/CABINA DJ TRUSS.jpg",
        precio: 100000
    }
]
const costosFijos = [
    {
        nombre: "Máquina de Humo Cloudy",
        img: "./img/MAQUINA DE HUMO.jpg",
        precio: 25000
    },
    {
        categoria: "fijo",
        nombre: "Consola AVOLITES + Operador",
        precio: 0
    },
    {
        categoria: "fijo",
        nombre: "Corralito negro para control",
        precio: 0
    },
    {
        categoria: "fijo",
        nombre: "Dimmer 12 ch / Usina De Tensión",
        precio: 162500 //consola +corralito + dimmer
    }    
]
let carrito = []
let carritoParaEnviar = []

const validacionOk ={
    inputsOk : true, 
    carritoOk : true,
    tramosOk : true,
    gruposOk : true,
    envioOk : true
}

window.addEventListener("load", () => {
    generarId(articulos)
    renderizarArticulos(articulos)
    ocultarSeciones()
})

window.addEventListener("change", () => {
    const dePie = document.getElementById("pie")
    const cantPatas = document.querySelector(".patas")
    const masDias = document.querySelector("#diaOtro")
    const cantDias = document.querySelector(".dias")
    const codigo = document.querySelector("#checkCodigo")
    const inputCodigo = document.querySelector("#divCodigo")  

    if (dePie.checked) {
        cantPatas.setAttribute("style", "display:block")
    } else {
        cantPatas.setAttribute("style", "display:none")
    }

    if (masDias.checked) {
        cantDias.setAttribute("style", "display:block")
    } else {
        cantDias.setAttribute("style", "display:none")
    }
    if (codigo.checked) {
        inputCodigo.setAttribute("style", "display:flex")
    } else {
        inputCodigo.setAttribute("style", "display:none")
    }
  
    
})
function ocultarSeciones(){
    const btnLuces = document.querySelector(".btnIluminacion");
    const btnSonido = document.querySelector(".btnSonido");
    const btnRigging = document.querySelector(".btnRigging");
    const btnGrupo = document.querySelector(".btnGrupo");
    const btnTransporte = document.querySelector(".btnTransporte");

    const secciones = {
        "btnIluminacion": document.getElementById("sectionLuces"),
        "btnSonido": document.getElementById("sectionSonido"),
        "btnRigging": document.querySelector(".sectionRigging"),
        "btnGrupo": document.getElementById("sectionGrupo"),
        "btnTransporte": document.getElementById("sectionTransporte")
    };

    [btnLuces, btnSonido, btnRigging, btnGrupo, btnTransporte].forEach(function(btn) {
        btn.addEventListener("click", function() {
            const seccion = secciones[btn.classList[0]];

            if (seccion.style.display === "none") {
                seccion.style.display = "flex";
                if (btn.classList.contains("btnRigging")) {
                    document.querySelector(".sectionRiggingCuadrilatero").style.display = "block";
                }
                if (btn.classList.contains("btnGrupo")) {
                    document.getElementById("sectionGrupo").style.display = "block";
                }
            }else {
                seccion.style.display = "none";
                if (btn.classList.contains("btnRigging")) {
                    document.querySelector(".sectionRiggingCuadrilatero").style.display = "none";
                }
                if (btn.classList.contains("btnGrupo")) {
                    document.getElementById("sectionGrupo").style.display = "none";
                }
            };
        });
    })
}
function decrement(event) {
    event.preventDefault()
    const input = event.target.parentNode.querySelector('.valorInputs');
    if (input.value == "") {
        input.value = 0
    }
    input.value = parseInt(input.value) - 1;
}
function increment(event) {
    event.preventDefault()
    const input = event.target.parentNode.querySelector('.valorInputs');
    if (input.value == "") {
        input.value = 0
    }
    input.value = parseInt(input.value) + 1;
}
function generarId(lista) {
    let id = 1
    for (let i = 0; i < lista.length; i++) {
        lista[i].id = id
        id++
    }
    return lista
}
const fechaActual = () => {
    const today = new Date()

    const day = today.getDate()
    const month = today.getMonth() + 1
    const year = today.getFullYear()

    const formattedDay = day < 10 ? `0${day}` : day
    const formattedMonth = month < 10 ? `0${month}` : month

    const formattedDate = `${formattedDay}/${formattedMonth}/${year.toString().slice(-2)}`

    return formattedDate
}
function renderizarArticulos(lista) {
    const sectionLuces = document.querySelector(".luces")
    const sectionSonido = document.querySelector(".sonido")
    const sectionRigging = document.querySelector(".rigging")

    let category = Array.from(
        new Set(lista.map((item) => item.categoria))
    )

    let cat = category.map((cat) => cat)
    const categorias = {
        ILUMINACION: cat[0],
        SONIDO: cat[1],
        RIGGING: cat[2]
    }

    lista.forEach(({ categoria, nombre, id, descipcion, img }) => {
        const { SONIDO, ILUMINACION, RIGGING } = categorias

        if (categoria == ILUMINACION) {
            sectionLuces.innerHTML +=
            `<article class="box">
                <img src="${img}" alt="" class="imgBox">
                <h4 class="text-box">${nombre}</h4>
                <div class="divBox">
                    <div class="divBtn">
                    <button onclick="decrement(event)" class="btnMas">-</button>
                    <input id="${id}" class="styleInput valorInputs" placeholder="Cant." type="number">
                    <button onclick="increment(event)" class="btnMas">+</button>
                    </div>
                </div>
            </article>`
        } if (categoria == SONIDO) {
            sectionSonido.innerHTML +=
                `<article class="box descripcion">
                    <p class="text-box text-desc">${descipcion}</p>
                    <img src="${img}" alt="" class="imgBox">
                    <h4 class="sonidoText text-box">${nombre}</h4>
                    <div class="divBox">
                        <div class="divBtn">
                            <button onclick="decrement(event)" class="btnMas">-</button>
                            <input id="${id}" class="styleInput valorInputs" placeholder="Cant." type="number">
                            <button onclick="increment(event)" class="btnMas">+</button>
                        </div>
                    </div>
                </article>`

        } if (categoria == RIGGING) {
            sectionRigging.innerHTML +=
                `<article class="box">
                <img src="${img}" alt="" class="imgBox">
                <h4 class="text-box">${nombre}</h4>
                <div class="divBox">
                    <div class="divBtn">
                        <button onclick="decrement(event)" class="btnMas">-</button>
                        <input id="${id}" class="styleInput valorInputs" placeholder="Cant." type="number">
                        <button onclick="increment(event)" class="btnMas">+</button>
                    </div>
                </div>
    </article>`
        }
    })
}
function validarDatos(datos) {            //De los inputs de productos
    const regex = /^([1-9]|[0-9]*)$/; //permite solamente numeros enteros y positivos
    let esValido = true;
    datos.forEach(input => {
        if (!regex.test(input.value)) {
            input.style.border = "4px solid red";
            esValido = false;
        } else {
            input.style.border = "1px solid black";
        }
    })
    return esValido;
}
function agregarAlCarrito(lista) {
    const inputs = document.querySelectorAll(".valorInputs");
    const validacion = validarDatos(inputs)
    if(!validacion){
        let txt = "Los campos sólo pueden contener números enteros y positivos. Por favor, corrija los campos resaltados en rojo antes de continuar."
        formError(txt, mensaje)
        validacionOk.inputsOk = false
    }else{
        carrito = lista.map(articulo => {
            const input = document.getElementById(articulo.id)
            if (input.value != 0) {
                return {
                    categoria: articulo.categoria,
                    nombre: articulo.nombre,
                    id: articulo.id,
                    precio: articulo.precio,
                    cantidad: parseInt(input.value),
                    total: (articulo.precio * parseInt(input.value))
                };
            }
        }).filter(input => input !== undefined);
        validacionOk.inputsOk = true
        console.log(carrito);
        return carrito;
    }
}
const artSonido = document.querySelectorAll(".artSonido")
    

const tramosLargo = document.querySelector(".largo")
const tramosAncho = document.querySelector(".ancho")
const tramosAlto = document.querySelector(".alto")
const tramosColgado = document.querySelector("#colgado")
const tramosDePie = document.querySelector("#pie")
const tramosCantPatas = document.querySelectorAll('input[name="cantPatas"]')
const checkCostilla = document.getElementById("costilla")
let nodoConCheck = null;
let valorSeleccionado = null;
function validarTramos() {
    let inputLargo = tramosLargo.value
    let inputAncho = tramosAncho.value
    let inputAlto =  tramosAlto.value
    let colgado = tramosColgado.checked
    let dePie = tramosDePie.checked
    
    let patas = tramosCantPatas
    let validacion = false
    
    for (let i = 0; i < patas.length; i++) {
        if (patas[i].checked) {
            nodoConCheck = patas[i];
            valorSeleccionado = patas[i].value;
        }
    }

    if (((inputLargo || inputAncho || inputAlto)) && ((!inputLargo || !inputAncho || !inputAlto) || (inputLargo == 0 || inputAncho == 0 || inputAlto == 0) )) {
        let txt ="Todos los campos de largo, ancho y alto son obligatorios";
        formError(txt, mensaje)
        validacionOk.tramosOk = false
    }else if ((inputLargo || inputAncho || inputAlto)&&(!colgado && !dePie)) {
        let txt ="Debe seleccionar la opción de colgado o de pie";
        formError(txt, mensaje)
        validacionOk.tramosOk = false
    }else if (dePie && nodoConCheck == null){
        let txt ="Debe seleccionar la cantidad de patas";
        formError(txt, mensaje)
        validacionOk.tramosOk = false
    }else if ((colgado|| dePie)&&(!inputLargo || !inputAncho || !inputAlto)) {
        let txt = "Debe ingresar las medidas del cuadrilátero"
        formError(txt, mensaje)
        validacionOk.tramosOk = false
    }else{
        validacionOk.tramosOk = true
        validacion = true
    }
    return validacion
}
function agregarTramos() {  
    let valido = validarTramos()
    let inputLargo = tramosLargo.value
    let inputAncho = tramosAncho.value
    let inputAlto =  tramosAlto.value
    let colgado = tramosColgado.checked
    let dePie = tramosDePie.checked
    let patas = tramosCantPatas
    let costilla = checkCostilla
    let mtsLineales = (parseInt(inputLargo) + parseInt(inputAncho)) * 2
    if (valido && !costilla.checked) {
        if (colgado) {
            console.log(colgado);
            if (inputLargo <= 10 && inputAncho <= 10) {
                carrito.push({  //Cuadrilatero Hasta 10 x 10
                    categoria: 'rigging',
                    nombre : "Cuadrilátero de " + mtsLineales + "Mts Truss." + "("+ inputLargo+"X" + inputAncho+")" + " Altura: " + inputAlto+ "Mts. Instalación: Colgado. Incluye: 4 Aparejo x 1Tn y 4 Corner Box Prolyte ",
                    cantidad: 1,
                    total : mtsLineales*4500+80000+32000 //Precio mts lineales + 4 Aparejos + 4 cubos
                })
            }else{
                carrito.push({ //Cuadrilatero Superiores
                    categoria: 'rigging',
                    nombre: "Cuadriláteros superiores a 10 Mts se cotizarán por separado.",
                    cantidad : 1,
                    total : 0
                })
            }
        }
        if (dePie) {
            if (valorSeleccionado == 4) {
                mtsLineales += parseInt(inputAlto) * 4 //agrego a los mts lineales las patas
                carrito.push({  
                    categoria: 'rigging',
                    nombre : "Cuadrilátero de " + mtsLineales + "Mts Truss." + "("+ inputLargo+"X" + inputAncho+")" + " Altura: " + inputAlto+ "Mts. Cant Patas: 4 Incluye: 4 Patas Malakate y 4 Corner Box Prolyte",
                    cantidad: 1,
                    total : mtsLineales*4500 + 80000 + 140000 // mts lineales + 4 cubos + 4 patas malakates 
                })
            }else if (valorSeleccionado == 6) {
                mtsLineales += parseInt(inputAlto) * 6
                carrito.push({
                    categoria: 'rigging',
                    nombre : "Cuadrilátero de " + mtsLineales + "Mts Truss." + "("+ inputLargo+"X" + inputAncho+")" + " Altura: " + inputAlto+ "Mts. Cant Patas: 6 Incluye: 6 Patas Malakate y 6 Corner Box Prolyte",
                    cantidad: 1,
                    total : mtsLineales*4500 + 120000 + 210000 // mts lineales + 6 cubos + 6 patas malacates
                })                           
            }else if (valorSeleccionado == 8) {
                mtsLineales += parseInt(inputAlto) * 8
                carrito.push({
                    categoria: 'rigging',
                    nombre : "Cuadrilátero de " + mtsLineales + "Mts Truss." + "("+ inputLargo+"X" + inputAncho+")" + " Altura: " + inputAlto+ "Mts. Cant Patas: 8 Incluye: 8 Patas Malakate y 8 Corner Box Prolyte",
                    cantidad: 1,
                    total : mtsLineales*4500 + 160000 + 280000 // mts lineales + 8 cubos + 8 patas malacates
                })
            }
            // }else if (valorSeleccionado == "otro") {
            //     carrito.push({
            //         categoria: 'rigging',
            //         nombre : "Este Cuadrilátero se cotiza por separado",
            //         cantidad: 1,
            //         total : 0 
            //     })
            // }
        }
    }
    if (valido && costilla.checked) {
        if (colgado) {
            if (inputLargo <= 10 && inputAncho <= 10) {
                mtsLineales += parseInt(inputLargo) //Suma los mismos mts que el largo
                carrito.push({  //Cuadrilatero Hasta 10 x 10
                    categoria: 'rigging',
                    nombre : "Cuadrilátero de " + mtsLineales + "Mts Truss." + "("+ inputLargo+"X" + inputAncho+")" + " Altura: " + inputAlto+ "Mts. Instalación: Colgado. Incluye Costilla, 4 Aparejo x 1Tn y 4 Corner Box Prolyte",
                    cantidad: 1,
                    total : mtsLineales*4500+80000+32000 //Precio mts lineales + 4 cubos + 4  Aparejos
                })
            }else{
                carrito.push({ //Cuadrilatero Superiores
                    categoria: 'rigging',
                    nombre: "Cuadriláteros superiores a 10 Mts se cotizarán por separado.",
                    cantidad : 1,
                    total : 0
                })
            }
        }
        if (dePie) {
            if (valorSeleccionado == 4) {
                mtsLineales += parseInt(inputAlto) * 4 //agrego a los mts lineales las patas
                mtsLineales += parseInt(inputLargo) //Suma los mismos mts que el largo
                carrito.push({
                    categoria: 'rigging',
                    nombre : "Cuadrilátero de " + mtsLineales + "Mts Truss." + "("+ inputLargo+"X" + inputAncho+")" + " Altura: " + inputAlto+ "Mts. Cant Patas: 4. Incluye Costilla, 4 Patas Malakate y 4 Corner Box Prolyte",
                    cantidad: 1,
                    total : mtsLineales*4500 + 80000 +  140000// + 4 cubos + 4 patas malacates 
                })
            }else if (valorSeleccionado == 6) {
                mtsLineales += parseInt(inputAlto) * 6
                mtsLineales += parseInt(inputLargo) //Suma los mismos mts que el largo
                carrito.push({  
                    categoria: 'rigging',
                    nombre : "Cuadrilátero de " + mtsLineales + "Mts Truss." + "("+ inputLargo+"X" + inputAncho+")" + " Altura: " + inputAlto+ "Mts. Cant Patas: 6. Incluye Costilla, 6 Patas Malakate y 6 Corner Box Prolyte",
                    cantidad: 1,
                    total : mtsLineales*4500 + 120000 + 210000// + 6 cubos + 6 patas malacates 
                })                           
            }else if (valorSeleccionado == 8) {
                mtsLineales += parseInt(inputAlto) * 8
                mtsLineales += parseInt(inputLargo) //Suma los mismos mts que el largo
                carrito.push({
                    categoria: 'rigging',
                    nombre : "Cuadrilátero de " + mtsLineales + "Mts Truss." + "("+ inputLargo+"X" + inputAncho+")" + " Altura: " + inputAlto+ "Mts. Cant Patas: 8. Incluye Costilla, 8 Patas Malakate y 8 Corner Box Prolyte",
                    cantidad: 1,
                    total : mtsLineales*4500 + 160000 + 280000 //+ 8 cubos + 8 patas malacates ???
                })
            }
            // else if (valorSeleccionado == "otro") {
            //     carrito.push({
            //         categoria: 'rigging',
            //         nombre : "Consulte cotización de este cuadrilátero por separado",
            //         cantidad: 1,
            //         total : 0 
            //     })
            // }
        }
        // validacionOk.tramosOk = true
    }
}

let cantDeGrupos = 0                    //declaro un contador para saber cuantos grupos estoy alquilando
let tengoGrupo = false
function agregarGrupo() {
    cantDeGrupos = 0
    tengoGrupo = false
    const operativo = document.querySelector("#operativo").checked
    const backUp = document.querySelector("#back").checked
    const cable = document.querySelector("#distancia").value
        if (operativo) {
            cantDeGrupos++
            tengoGrupo = true
            carrito.push({
                categoria:"grupo",
                nombre : "Grupo CETEC 130 KVA Operativo (10 Hs de uso) ",
                cantidad: 1,
                total : 270000                      //precio grupo operativo
            })
        }
        if (backUp) {
            cantDeGrupos++
            tengoGrupo = true
            carrito.push({
                categoria: "grupo",
                nombre : "Grupo CETEC 130 KVA Backup",
                cantidad: 1,
                total : 150000                      //precio grupo back 
            })
        }
        if (cable >25) {
            carrito.push({
                categoria: "grupo",
                nombre: "Mts Tendido Eléctrico",
                cantidad: parseInt(cable),
                total : parseInt(cable) * 2000                            //Precio cable
            })
        }
        validacionOk.gruposOk = true;
    }
function agregarEnvio() {
    const zonaEnvio = document.querySelector('input[name="zona"]:checked')
    const duracion = document.querySelector('input[name="duracion"]:checked')
    const masDias = document.getElementById("masDias").value
    const armado = document.querySelector('input[name="armado"]:checked')

    if ((!zonaEnvio || !armado || !duracion)|| (duracion.id == "diaOtro" && masDias == "")){
        let txt ="Todos los campos de la sección transporte son obligatorios"
        formError(txt, mensaje)
        validacionOk.envioOk = false
    }else{
        if (zonaEnvio) {
            carrito.push({
                nombre: zonaEnvio.value,
                cantidad : 1,
                total : 0
            })
        }
        if (duracion.value == "1") {
            carrito.push({
                nombre: "Día de duración",
                cantidad : duracion.value,
                total  : 0
            })
        }else if (duracion.value == "2") {
            carrito.push({
                nombre: "Días de duración",
                cantidad : duracion.value,
                total  : 0
            })
        }else if (duracion.value == "on") {
            carrito.push({
                nombre: "Días de duración",
                cantidad : masDias,
                total  : 0
            })
        }
        if (armado) {
            carrito.push({
                nombre: armado.value,
                cantidad : 1,
                total : 0
            })
        }
        validacionOk.envioOk = true
    }
}
function validarCarrito(){
    if (carrito.length == 0) {
        let txt = "No se puede generar presupuesto si no hay artículos agregados"
        formError(txt, mensaje)
        validacionOk.carritoOk = false        
    }else{
        validacionOk.carritoOk = true
    }
}
function evaluarCarrito(){//si carrito tiene solo grupo o mas
    agregarAlCarrito(articulos)
    agregarTramos()
    agregarGrupo()
    let tamañoDelCarrito = {}
    carrito.forEach(art =>{
        if(art.categoria == "iluminacion"){
            tamañoDelCarrito.iluminacion = true
        };
        if(art.categoria == "Sonido"){
            tamañoDelCarrito.sonido = true
        };
        if(art.categoria == "rigging"){
            tamañoDelCarrito.rigging = true
        };
        if(art.categoria == "grupo"){
            tamañoDelCarrito.grupo = true
        };
    })
    return tamañoDelCarrito 
}
function agregarCostosFijos(){
    costosFijos.forEach(articulo=>{
    carrito.push(
        {
            nombre: articulo.nombre,
            id: articulo.id,
            precio: articulo.precio,
            cantidad: 1,
            total: articulo.precio 
        })
    })    
}
function renderizarPresupuesto(lista) {
    const titulo = document.querySelector("#list")
    const presupuesto = document.querySelector(".listaArticulos")
    const precio = document.querySelector(".precio")
    const total = calcularTotal()
    let totalFormateado = total.toLocaleString()

    titulo.setAttribute("style", "display:flex")

    presupuesto.innerHTML = ""

    lista.forEach(articulo => {
        presupuesto.innerHTML +=
            `<li> ${articulo.cantidad}&nbsp;&nbsp;${articulo.nombre}</li>`
    })
    precio.innerText = `Total: $ ${totalFormateado} `
}

let soloGrupo = false
function calcularTotal(){
    let acumulador = carrito.reduce((total, articulo) => total + articulo.total, 0);

    const zonaEnvio = document.querySelector('input[name="zona"]:checked')
    const duracion = document.querySelector('input[name="duracion"]:checked').value
    const masDias = document.getElementById("masDias").value
    const armado = document.querySelector('input[name="armado"]:checked')
    const codigo = document.querySelector("#checkCodigo")
    const inputCodigo = document.querySelector("#textCodigo")

    //Armado
    if (armado.checked && armado.id == "armadoPrevio"){
        acumulador *=  1.3 // suma 30%
    }
    //Duracion
    if (duracion == 2) {
        acumulador *= 1.5
        }else if (duracion == "on") {
            if (masDias >= "3" && masDias <= "7") {
                switch (masDias) {
                    case "3":
                        acumulador *=  2;
                        break;
                    case "4":
                        acumulador *= 2.5;
                        break;
                    case "5":
                        acumulador *= 3;
                        break;
                    case "6":
                        acumulador *= 3.5;
                        break;
                    case "7":
                        acumulador *= 4;
                        break;
                }
            } else if (masDias >= "8" && masDias <= "9999") {
                const factor = 4 + (parseInt(masDias) - 7) * 0.25;
                console.log(factor);
                acumulador *= factor;
            }
    }
    //Envios
    if (!soloGrupo) {               //MUCHOS PRODUCTOS
        if (zonaEnvio.checked && zonaEnvio.id == "zona1") {
            acumulador += 110000  // precio de envio  
        }
        if (zonaEnvio.checked && zonaEnvio.id == "zona2") {
            acumulador += 150000    // precio de envio  
        }
        if (tengoGrupo) {
            if (zonaEnvio.checked && zonaEnvio.id == "zona2" && cantDeGrupos == 1) {
                acumulador += 30000 // precio de envio x 1 Grupo  
            }else{
                acumulador += 60000 // precio de envio x 2 Grupo
            }
        }
    }else{                          //SOLO GRUPO
        if (zonaEnvio.checked && zonaEnvio.id == "zona1" || zonaEnvio.checked && zonaEnvio.id == "zona3") {
            acumulador += 0 // precio de envio  
            }else if (zonaEnvio.checked && zonaEnvio.id == "zona2" && cantDeGrupos == 1) {
                acumulador += 30000     // precio de envio x 1 Grupo  
            }else{
                acumulador += 60000     // precio de envio x 2 Grupo
            }
    }

    if (codigo.checked) {
        switch (inputCodigo.value){
            case "BONUS30" :
                acumulador *= 0.7
                carrito.push({
                    nombre: "Descuento 30%",
                    cantidad : 1,
                    total  : 0
                })
                break;
            case "BONUS20" :
                acumulador *= 0.8
                carrito.push({
                    nombre: "Descuento 20%",
                    cantidad : 1,
                    total  : 0
                })
                break;
            case "BONUS10" :
                acumulador *= 0.9
                carrito.push({
                    nombre: "Descuento 10%",
                    cantidad : 1,
                    total  : 0
                })
                break;
        }
        
    }
    return Math.round(acumulador) 
}
function formatearCarrito() {
    let nuevoCarrito = carrito.filter(({ nombre, cantidad }) => nombre && cantidad) || [] //DEVUELVE UN ARRAY CON LOS DATOS FILTRADOS, SINO ENCUENTRA NADA DEVUELVE UN ARRAY VACIO (CONTROL DE POSIBLE ERROR EN CASO DE QUE DICHA PROPIEDAD SEA NULL)
    nuevoCarrito = nuevoCarrito.map(({ nombre, cantidad }) => `${cantidad}  ${nombre}`) //SE CREA UN ARRAY CON LOS DATOS FILTRADOS
    return nuevoCarrito;
}

const mensaje = document.getElementById("mensajePresupuesto")
const formError = (mensaje, HTMLElement) => {
    const titulo = document.querySelector("#list")
    HTMLElement.classList.add(`err`)
    HTMLElement.innerHTML += `${mensaje}<br>` 
    titulo.setAttribute("style", "display:none")
    carrito = []
    setTimeout(() => {
        HTMLElement.classList.remove(`err`)
        HTMLElement.innerText = ''
    }, 5000)
}
function validarTodo() {
    agregarAlCarrito(articulos)
    agregarTramos()
    agregarGrupo()
    validarCarrito()
    agregarEnvio()
    if (validacionOk.inputsOk && validacionOk.carritoOk && validacionOk.tramosOk && validacionOk.gruposOk && validacionOk.envioOk){
        return true
    }else{
        return false
    } 
}
function tiraTuMagia(){
    let validacion = validarTodo()
    if (validacion) {
        let muchosProductos = evaluarCarrito()
        carrito = []
        agregarAlCarrito(articulos)
        agregarTramos()
        if(carrito.length == 0){
            agregarGrupo()
            soloGrupo = true
        }else{
            agregarGrupo()
        }
        if (muchosProductos.iluminacion) {
            agregarCostosFijos()
        }
        agregarEnvio()
        carritoParaEnviar = formatearCarrito()
        renderizarPresupuesto(carrito)
    }
}
const btnPresupuesto = document.querySelector(".btnPresupuesto")
btnPresupuesto.addEventListener("click", function (e) {
    e.preventDefault()
    tiraTuMagia()
})

// Generar pdf
const generarPDF = () => {
    let nuevoCarrito = carrito.filter(({ nombre, cantidad }) => nombre && cantidad) || []
    
    const formDatos = document.getElementById('formData')
    let formData = {
        nombre: '',
        apellido: '',
        telefono: 0,
        correo: '',
        fecha: null,
    }
    formData.nombre = formDatos.elements.Nombre.value.trim()
    formData.apellido = formDatos.elements.Apellido.value.trim()
    formData.telefono = formDatos.elements.Telefono.value.trim()
    formData.correo = formDatos.elements.Email.value.trim()
    formData.fecha = formDatos.elements.Date.value.trim()
    
    console.log(formData.nombre);

    let fecha = fechaActual()
    
    const total = calcularTotal()
    const totalFormateado = total.toLocaleString()

    let props = {
        outputType: jsPDFInvoiceTemplate.OutputType.Save,
        returnJsPDFDocObject: true,
        fileName: `Presupuesto-Stoessel-${fecha}`,
        orientationLandscape: false,
        compress: true,
        logo: {
            src: '../img/logoStoesel.png',
            type: 'PNG', //optional, when src= data:uri (nodejs case)
            width: 70, //aspect ratio = width/height
            height: 26.66,
            margin: {
                top: 0, //negative or positive num, from the current position
                left: 0 //negative or positive num, from the current position
            }
        },
        stamp: {
            inAllPages: true, //by default = false, just in the last page
            src: "https://raw.githubusercontent.com/edisonneza/jspdf-invoice-template/demo/images/qr_code.jpg",
            type: 'JPG', //optional, when src= data:uri (nodejs case)
            width: 20, //aspect ratio = width/height
            height: 20,
            margin: {
                top: 0, //negative or positive num, from the current position
                left: 0 //negative or positive num, from the current position
            }
        },
        business: {
            name: "",//Stoessel - Ingenieria en eventos SRL
            address: "CUIT: 30-71626156-1",//
            phone: "+549 115 226 7233",
            email: "info@stoessel-events.com",
            website: "www.stoessel-eventos.com.ar",
        },
        contact: {
            label: "Cliente:",
            name: `${formData.nombre} ${formData.apellido}`,
            phone: `Teléfono: ${formData.telefono}`,
            email: `Email: ${formData.correo}`
        },
        invoice: {
            // label: "Invoice #: ",
            // num: 19,
            invGenDate: `Fecha de presupuesto: ${fecha}`,
            invDate: `Fecha del Evento: ${formData.fecha}`,
            headerBorder: true,
            tableBodyBorder: true,
            header: [
                {
                    title: "#",
                    style: {
                        width: 10
                    }
                },
                {
                    title: "Cantidad",
                    style: {
                        width: 30
                    }
                },
                {
                    title: "Description",
                    style: {
                        width: 150
                    }
                },
                // { title: "Price" },
                // { title: "Total" }
            ],
            table: Array.from(nuevoCarrito, (i, index) => ([
                index + 1,
                i.cantidad,
                i.nombre,
                // i.precio,
                // i.total
            ])),
            invTotalLabel: "Total:",
            invTotal: `$${totalFormateado}`,
            // invCurrency: "ALL",
            row3: {
                col1: 'Total:',
                col2: `'$'${totalFormateado}`,
                // col3: 'ALL',
                style: {
                    fontSize: 14 //optional, default 12
                }
            },
            invDescLabel: "\n CONFIRMADO EL PRESENTE PRESUPUESTO \n QUEDA EXPRESAMENTE ACEPTADAS LAS CONDICIONES GENERALES. \n Este presupuesto queda pendiente de aprobación y sujeto a disponibilidad."
            // invDescLabelStyle: {
            //     fontSize: 10,
            //     textColor: [0, 0, 0],
            //     fillColor: [255, 255, 0] // amarillo
            // },
            // invDesc: rules,
        },
        pageEnable: true,
        pageLabel: "Page ",
    }

    const pdfObject = jsPDFInvoiceTemplate.default(props)
    return pdfObject

}

// Formulario y envio de email
const formDatos = document.getElementById('formData')
const btnEmail = document.getElementById('btn-email')
const btnTerminos = document.getElementById('btn-terminos')
const btnOcultar = document.getElementById('btn-ocultar')
const btnAplicar = document.getElementById('btn-aplicar')
const terminosYcondiciones = document.querySelector('.terminosYcondiciones')
const msg = document.getElementById('message')

const sendEmail = async (formData) => {
    const service_id2 = 'service_19qxvla'
    const template_id = 'template_o0iwl0e'
    const user_id = '3cwMkpzcGYMOKF7Uf'

    try {
        await emailjs.init(user_id);
        await emailjs.send(service_id2, template_id, formData)
            .then((res) => {
                console.log('Formulario enviado!', res.status, res.text)
            }, (err) => {
                console.log('Error al enviar...', err)
            })
    } catch (e) {
        console.log(e)
    }
}

const msgAction = (msg, style, HTMLElement) => {
    HTMLElement.classList.add(`${style}`)
    HTMLElement.innerText = msg
    setTimeout(() => {
        HTMLElement.classList.remove(`${style}`)
        HTMLElement.innerText = ''
    }, 3000)
}

const validateForm = () => {
    const name = formDatos.elements.Nombre.value.trim()
    const surname = formDatos.elements.Apellido.value.trim()
    const tel = formDatos.elements.Telefono.value.trim()
    const email = formDatos.elements.Email.value.trim()
    const date = formDatos.elements.Date.value.trim()
    const terminosYcondiciones = formDatos.elements.Terminos.checked

    if (!name || !surname || !tel || !email || !date ) {
        let txt = 'Por favor, completa todos los campos'
        msgAction(txt, 'err', msg)
        return false
    }

    // const regexTel = /^\d{10}$/
    // if (!regexTel.test(tel)) {
    //     let txt = 'Por favor, ingresa un número de teléfono válido de 10 dígitos (sin guiones ni espacios)'
    //     msgAction(txt, 'err', msg)
    //     return false
    // }

    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if (!regexEmail.test(email)) {
        let txt = 'Por favor, ingresa un correo electrónico válido'
        msgAction(txt, 'err', msg)
        return false
    }

    const fechaHoy = new Date()
    const fechaIngresada = new Date(date)
    if (fechaIngresada < fechaHoy) {
        let txt = 'Por favor, ingresa una fecha a partir de mañana'
        msgAction(txt, 'err', msg)
        return false
    }

    if (!terminosYcondiciones) {
        let txt = "Debe aceptar los términos y condiciones"
        msgAction(txt, 'err', msg)
        return false
    }

    return true
}
btnAplicar.addEventListener('click',(e)=>{
    e.preventDefault()
    const inputCodigo = document.querySelector("#textCodigo")
    let codigosValidos= ["BONUS10", "BONUS20", "BONUS30"]
    if (!codigosValidos.includes(inputCodigo.value)) {
        let txt = 'Código Inválido'
        msgAction(txt, 'err', msg)
    }else{
        let txt = 'Descuento Aplicado'
        msgAction(txt, 'success', msg)
    }
    tiraTuMagia()
    
})
btnTerminos.addEventListener('click', (e)=>{
    e.preventDefault()
    if (terminosYcondiciones.style.display === 'none') {
        terminosYcondiciones.style.display = 'block'
    } else {
        terminosYcondiciones.style.display = 'none'
    }
})
btnOcultar.addEventListener('click', ()=>{
    terminosYcondiciones.style.display = 'none'
})

btnEmail.addEventListener('click', (e) => {
    const formProduct = document.querySelector("#formProduct")
    e.preventDefault()

    if (!validateForm()) {
        return
    }

    let formData = {
        nombre: '',
        apellido: '',
        telefono: 0,
        correo: '',
        fecha: null,
        hora: null,
        presupuesto: [],
    }

    let pdf = generarPDF()
    console.log(pdf);
    // let blob = new Blob([JSON.stringify(pdf)], { type: 'application/json' });

    formData.nombre = formDatos.elements.Nombre.value.trim()
    formData.apellido = formDatos.elements.Apellido.value.trim()
    formData.telefono = formDatos.elements.Telefono.value.trim()
    formData.correo = formDatos.elements.Email.value.trim()
    formData.fecha = formDatos.elements.Date.value.trim()
    formData.presupuesto = carritoParaEnviar
    // formData.append('pdfFile', blob, 'archivo.pdf');

    let txt = 'Formulario enviado!'
    msgAction(txt, 'success', msg)
    sendEmail(formData)
    generarPDF()
    formDatos.reset()
    formProduct.reset()
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // agrega desplazamiento suave
        });
        const titulo = document.querySelector("#list")
        titulo.setAttribute("style", "display: none")
    }, 3000)
    
})

