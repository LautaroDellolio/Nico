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
        img: "./img/movil-pls.jpg",
        precio: 27500,
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
        img: "./img/PROTON INALAMBRICO.jpg",
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
        nombre: "Octobeam Laser RGB x 3 watts c/u",
        img: "./img/octobeam.jpg",
        precio: 25000
    },
    {
        categoria: "iluminacion",
        nombre: "Strobo + Tilt RGB+W",
        img: "./img/strobo.jpg",
        precio: 0
    },
    {
        categoria: "iluminacion",
        nombre: "Pixel Patt RGB + H",
        img: "./img/pixel-patt.jpg",
        precio: 27500
    },
    {
        categoria: "iluminacion",
        nombre: "Cabezal Movil AURA",
        img: "./img/movil-aura.jpg",
        precio: 27500
    },
    {
        categoria: "iluminacion",
        nombre: "Toma Tensión Hasta 10 Amperes",
        img: "./img/TOMA 10A.jpg",
        precio: 8800
    },
    {
        categoria: "iluminacion",
        nombre: "Toma Tensión Hasta 20 Amperes",
        img: "./img/TOMA 20A.jpg",
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
                <div class="divBox">
                    <h4 class="text-box">${nombre}</h4>
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
                    <div class="divBox">
                        <h4 class="sonidoText text-box">${nombre}</h4>
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
                <div class="divBox">
                    <h4 class="text-box">${nombre}</h4>
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
function validarDatos(datos) { //De los inputs de productos
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
                    nombre: articulo.nombre,
                    id: articulo.id,
                    precio: articulo.precio,
                    cantidad: parseInt(input.value),
                    total: (articulo.precio * parseInt(input.value))
                };
            }
        }).filter(input => input !== undefined);
        validacionOk.inputsOk = true
        return carrito;
    }
}
function agregarTramos() {
    const inputLargo = document.querySelector(".largo").value
    const inputAncho = document.querySelector(".ancho").value
    const inputAlto = document.querySelector(".alto").value
    const colgado = document.querySelector("#colgado")
    const dePie = document.querySelector("#pie")
    const patas = document.querySelector('input[name="cantPatas"]:checked')
    if (((inputLargo || inputAncho || inputAlto)) && ((!inputLargo || !inputAncho || !inputAlto) || (inputLargo == 0 || inputAncho == 0 || inputAlto == 0) )) {
        let txt ="Todos los campos de largo, ancho y alto son obligatorios";
        formError(txt, mensaje)
        validacionOk.tramosOk = false
    }else if ((inputLargo || inputAncho || inputAlto)&&(!colgado.checked && !dePie.checked)) {
        let txt ="Debe seleccionar la opción de colgado o de pie";
        formError(txt, mensaje)
        validacionOk.tramosOk = false
    }else if ((inputLargo || inputAncho || inputAlto)&&(!colgado.checked && !dePie.checked) || (dePie.checked && !patas)) {
        let txt ="Debe seleccionar la cantidad de patas";
        formError(txt, mensaje)
        validacionOk.tramosOk = false
    }else if ((colgado.checked|| dePie.checked)&&(!inputLargo || !inputAncho || !inputAlto)) {
        let txt = "Debe ingresar las medidas del cuadrilátero"
        formError(txt, mensaje)
        validacionOk.tramosOk = false
    }else{
        let mtsLineales = (parseInt(inputLargo) + parseInt(inputAncho)) * 2
        if (colgado.checked) {
            if (inputLargo <= 10 && inputAncho <= 10) {
                carrito.push({  //Cuadrilatero Hasta 10 x 10
                    nombre : "Cuadrilátero de " + mtsLineales + "Mts Truss." + "("+ inputLargo+"X" + inputAncho+")" + " Altura: " + inputAlto+ "Mts. Instalación: Colgado.",
                    cantidad: 1,
                    total : mtsLineales*4500+80000+32000 //Precio mts lineales + 4 Aparejos + 4 cubos
                })
            }else{
                carrito.push({ //Cuadrilatero Superiores
                    nombre: "Cuadriláteros superiores a 10 Mts se cotizarán por separado.",
                    cantidad : 1,
                    total : 0
                })
            }
        }
        if (dePie.checked) {
            if (patas.value == 4) {
                mtsLineales += parseInt(inputAlto) * 4 //agrego a los mts lineales las patas
                carrito.push({  
                    nombre : "Cuadrilátero de " + mtsLineales + "Mts Truss." + "("+ inputLargo+"X" + inputAncho+")" + " Altura: " + inputAlto+ "Mts. Cant Patas: 4",
                    cantidad: 1,
                    total : mtsLineales*4500 // + 4 cubos + 4 patas malacates ???
                })
            }else if (patas.value == 6) {
                mtsLineales += parseInt(inputAlto) * 6
                carrito.push({  
                    nombre : "Cuadrilátero de " + mtsLineales + "Mts Truss." + "("+ inputLargo+"X" + inputAncho+")" + " Altura: " + inputAlto+ "Mts. Cant Patas: 6",
                    cantidad: 1,
                    total : mtsLineales*4500 // + 6 cubos + 6 patas malacates ???
                })                           
            }else if (patas.value == 8) {
                mtsLineales += parseInt(inputAlto) * 8
                carrito.push({
                    nombre : "Cuadrilátero de " + mtsLineales + "Mts Truss." + "("+ inputLargo+"X" + inputAncho+")" + " Altura: " + inputAlto+ "Mts. Cant Patas: 8",
                    cantidad: 1,
                    total : mtsLineales*4500 //+ 8 cubos + 8 patas malacates ???
                })
            }else if (patas.value == "otro") {
                carrito.push({
                    nombre : "Este Cuadrilátero se cotiza por separado",
                    cantidad: 1,
                    total : 0 
                })
            }
        }
        validacionOk.tramosOk = true
    }
}
let cantDeGrupos = 0 //declaro un contador para saber cuantos grupos estoy alquilando
let tengoGrupo = false
function agregarGrupo() {
    cantDeGrupos = 0
    tengoGrupo = false
    const operativo = document.querySelector("#operativo").checked
    const backUp = document.querySelector("#back").checked
    const cable = document.querySelector("#distancia").value
    if ((operativo || backUp)&& (!cable || cable == 0)) {   // consultar Nico
        let txt ="Debe ingresar la distancia al punto de tensión";
        formError(txt, mensaje)
        validacionOk.gruposOk = false
    }else{
        if (operativo) {
            cantDeGrupos++
            tengoGrupo = true
            carrito.push({
                nombre : "Grupo CETEC 130 KVA Operativo (10 Hs de uso) ",
                cantidad: 1,
                total : 270000 //precio grupo operativo
            })
        }
        if (backUp) {
            cantDeGrupos++
            tengoGrupo = true
            carrito.push({
                nombre : "Grupo CETEC 130 KVA Backup",
                cantidad: 1,
                total : 150000 //precio grupo back 
            })
        }
        if (cable) {
            carrito.push({
                nombre: "Mts Linea Trifásica",
                cantidad: parseInt(cable),
                total : parseInt(cable) * 0 //Precio cable
            })
        }
        validacionOk.gruposOk = true;
    }
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
function evaluarCarrito(){//si carrito tiene solo grupo un camino sino otro
    agregarAlCarrito(articulos)
    agregarTramos()
    if (carrito.length != 0) {
        carrito = []
        return true      
    }else{
        carrito = []
        return false 
    }
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

    titulo.setAttribute("style", "display:flex")

    presupuesto.innerHTML = ""

    lista.forEach(articulo => {
        presupuesto.innerHTML +=
            `<li> ${articulo.cantidad}&nbsp;&nbsp;${articulo.nombre}</li>`
    })
    precio.innerText = `Total: $ ${total} ` //
}
let soloGrupo = false
function calcularTotal(){
    let acumulador = carrito.reduce((total, articulo) => total + articulo.total, 0)

    const zonaEnvio = document.querySelector('input[name="zona"]:checked')
    const duracion = document.querySelector('input[name="duracion"]:checked').value
    const masDias = document.getElementById("masDias").value
    const armado = document.querySelector('input[name="armado"]:checked')
    
    if (!soloGrupo) {                                           //MUCHOS PRODUCTOS
        //Armado
        if (armado.checked && armado.id == "armadoPrevio") {
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
        if (zonaEnvio.checked && zonaEnvio.id == "zona1") {
            acumulador += 100000 // precio de envio  
        }
        if (zonaEnvio.checked && zonaEnvio.id == "zona2") {
            acumulador += 150000 // precio de envio  
        }
        if (tengoGrupo) {
            //Envios
            if (zonaEnvio.checked && zonaEnvio.id == "zona1" || zonaEnvio.checked && zonaEnvio.id == "zona3") {
                acumulador += 0 // precio de envio  
            }else if (zonaEnvio.checked && zonaEnvio.id == "zona2" && cantDeGrupos == 1) {
                acumulador += 30000 // precio de envio x 1 Grupo  
            }else{
                acumulador += 60000 // precio de envio x 2 Grupo
            }
        }


    }else{                                                      //SOLO GRUPO
        //armado
        if (armado.checked && armado.id == "armadoPrevio") {
            acumulador *=  1.3 // suma 30%
        }
        //duracion
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
        if (zonaEnvio.checked && zonaEnvio.id == "zona1" || zonaEnvio.checked && zonaEnvio.id == "zona3") {
            acumulador += 0 // precio de envio  
        }else if (zonaEnvio.checked && zonaEnvio.id == "zona2" && cantDeGrupos == 1) {
            acumulador += 30000 // precio de envio x 1 Grupo  
        }else{
            acumulador += 60000 // precio de envio x 2 Grupo
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


const btnPresupuesto = document.querySelector(".btnPresupuesto")
btnPresupuesto.addEventListener("click", function (e) {
    e.preventDefault()
    
    let validacion = validarTodo()
    if (validacion) {
        carrito = []
        let muchosProductos = evaluarCarrito()
        agregarAlCarrito(articulos)
        agregarTramos()
        if (muchosProductos) {//cuando hay mas productos ademas del grupo 
            agregarGrupo()
            agregarCostosFijos()
        }else{ //si solo alquila grupo
            agregarGrupo()
            soloGrupo = true
        }
        agregarEnvio()
        // calcularTotal()
        carritoParaEnviar = formatearCarrito()
        renderizarPresupuesto(carrito)
    }
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

    // const rules = `\n \n   
    // • Los precios no incluyen IVA (21%) el presente presupuesto tiene una validez de 30 días. 
    // • en caso de confirmar el presupuesto y de no abonarlo dentro de los 15 dias, el mismo sufrirá un incremento mensual según indice ipc. 	
    // • el pago total deberá estar saldado 48 hs antes del evento.
    // • El cliente será responsable: total y parcialmente por los equipos locados, por roturas ajenas al buen uso, robo, hurto o deterioro del equipamiento como así también daños ocasionados a terceros que pudieran surgir por caso fortuito y/o motivos ajenos a nuestra empresa, desde el momento de su ingreso al predio hasta el retiro de los mismos.
    // • El lugar donde se desarrollará el evento deberá contar con personal de seguridad durante todo el período de contratación del servicio, incluyendo la instalación, el evento, y la desinstalación del mismo para el cuidado de todo el equipamiento.
    // • Los precios detallados incluyen gastos de transportes, y de personal. 
    // • Los precios son por un día de evento. Por más de un día se realizará otra cotización.
    // • En caso de que el evento se suspenda por condiciones climáticas desfavorables, o por cualquier otra cancelación, habiendo sido instalado el equipamiento, el cliente se hará cargo del cien por cien del precio convenido.
    // • Los equipos presupuestados estarán sujetos a su disponibilidad al momento de la reserva.
    // • Si se contratan grupos electrógenos y el mismo es esencial para el desarrollo del evento, recomendamos la contratación de equipos de backup que aseguren la prestación del servicio en caso de una eventual falla en alguno de los mismos.
    // • En ningún caso Stoessel SRL será responsable por eventuales perjuicios al cliente o a terceros derivados de la paralización del equipo, cualquiera fuere la causa de tal efecto. Tampoco existirá indemnización alguna por lucro cesante, ganancia esperada, aptitudes implícitas o daño emergente por el no o mal funcionamiento del equipamiento alquilado. 
    // • Para locaciones en donde la altura de trabajo sea superior a 4 metros el cliente deberá proveer al menos un elevador hidráulico. 
    // • Están incluidos los seguros del personal contra accidentes de trabajo y seguro por responsabilidad civil.`
    
    const total = calcularTotal()

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
            invTotal: `$${total}`,
            // invCurrency: "ALL",
            row3: {
                col1: 'Total:',
                col2: `'$'${total}`,
                // col3: 'ALL',
                style: {
                    fontSize: 14 //optional, default 12
                }
            },
            invDescLabel: "\n CONFIRMADO EL PRESENTE PRESUPUESTO \n QUEDA EXPRESAMENTE ACEPTADAS LAS CONDICIONES GENERALES. \n El presente presupuesto se mantiene vigente abonando el 100% dentro de los proximos 30 dias. \n Pasado este tiempo se aplicará un aumento mensual según el índice IPCBA.  "
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

    console.log(terminosYcondiciones);

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

    // let pdf = generarPDF()

    formData.nombre = formDatos.elements.Nombre.value.trim()
    formData.apellido = formDatos.elements.Apellido.value.trim()
    formData.telefono = formDatos.elements.Telefono.value.trim()
    formData.correo = formDatos.elements.Email.value.trim()
    formData.fecha = formDatos.elements.Date.value.trim()
    // formData.hora = formDatos.elements.Time.value.trim()
    formData.presupuesto = carritoParaEnviar

    // sendEmail(formData)
    generarPDF()
    // setTimeout(function() {
    //     window.location.reload();
    //   }, 5000); // 5000 milisegundos = 5 segundos
    let txt = 'Formulario enviado!'
    msgAction(txt, 'success', msg)
    // formDatos.reset()
    // formProduct.reset()
})

