const articulos = [
    {
        categoria: "iluminacion",
        nombre: "Cabezal Movil Mad-Tec",
        precio: 10,
    },
    {
        categoria: "iluminacion",
        nombre: "Cabezal Móvil PLS 3en1 7R",
        precio: 10
    },
    {
        categoria: "iluminacion",
        nombre: "Proton / Nebula (Rgbwuv)",
        precio: 10
    },
    {
        categoria: "iluminacion",
        nombre: "Proton Big Par 180",
        precio: 10
    },
    {
        categoria: "iluminacion",
        nombre: "Proton Inalámbrico",
        precio: 10
    },
    {
        categoria: "iluminacion",
        nombre: "Par 36 - Pin",
        precio: 10
    },
    {
        categoria: "iluminacion",
        nombre: "Par64 - 1000 Watts",
        precio: 10
    },
    {
        categoria: "iluminacion",
        nombre : "Fresnel 1 Kw",
        precio: 10
    },
    {
        categoria: "iluminacion",
        nombre : "Fresnel 2 Kw",
        precio: 10
    },
    {
        categoria: "iluminacion",
        nombre : "Par56 - 300 Watts",
        precio: 10
    },
    {
        categoria: "iluminacion",
        nombre : "Barra de Led",
        precio: 10
    },
    {
        categoria: "iluminacion",
        nombre : "Bañador NovaLed Outdoor", 
        precio: 10
    },
    {
        categoria: "iluminacion",
        nombre : "Atomix 3000",
        precio: 10
    },
    {
        categoria: "iluminacion",
        nombre : "Elipsoidal 750 Watts (Zoom 25 - 50º)", 
        precio: 10
    },
    {
        categoria: "iluminacion",
        nombre : "Minibrut x 4 Lamps",
        precio: 10
    },
    {
        categoria: "iluminacion",
        nombre : "Minibrut x 8 Lamps",
        precio: 10
    },
    {
        categoria: "iluminacion",
        nombre : "HQI - 400 / Reflector Led 100 Watts",
        precio: 10
    },
    {

        categoria: "iluminacion",
        nombre : "Seguidor 1200 c/ Seguidorista",
        precio: 10
    },
    {
        categoria: "iluminacion",
        nombre : "Octobeam Laser RGB x 3 watts c/u", 
        precio: 10
    },
    {
        categoria: "iluminacion",
        nombre : "Máquina de Humo Cloudy",
        precio: 10
    },
    {
        categoria: "iluminacion",
        nombre : "Toma tensión Hasta 10 Amperes",
        precio: 10
    },
    {
        categoria: "iluminacion",
        nombre : "Toma tensión Hasta 20 Amperes",
        precio: 10
    },
    {
        categoria: "Sonido",
        nombre: "Sonido 1",
        descipcion : "Sonido Ceremonia/conferencia 2 JBL Eon-10 + Consola + Mic",
        precio: 10
    },
    {
        categoria: "Sonido",
        nombre:"Sonido 2",
        descipcion : "Sonido Ceremonia/conferencia 4 JBL Eon-10 + consola + Mic",
        precio: 10
    },
    {
        categoria: "Sonido",
        nombre:"Sonido 3",
        descipcion : "Sonido pista JBL / RCF (2 Mid-Hi + 2 Sub)",
        precio: 10
    },
    {
        categoria: "Sonido",
        nombre:"Sonido 4",
        descipcion : "Sonido Line Array 4xlado RCF HDL6 + Sub",
        precio: 10
    },
    {
        categoria: "Sonido",
        nombre:"Sonido 5",
        descipcion : "Sonido DJ en recepcion (2 mid-Hi + 2 Sub + JBL/RCF)",
        precio: 10
    },
    {
        categoria: "Sonido",
        nombre : "Perimetrales (JBL / RCF)",
        precio: 10
    },
    {
        categoria: "Sonido",
        nombre : "Sonido K-array (kr-202)",
        precio: 10
    },
    {
        categoria: "Sonido",
        nombre : "Rider Banda chica",
        precio: 10
    },
    {
        categoria: "Sonido",
        nombre : "Mic Inalambrico Sennheiser G3",
        precio: 10
    } 
]
const costosFijos = [
    {
        categoria: "fijo",
        nombre : "Consola AVOLITES + Operador",
        precio: 10
    },
    {
        categoria: "fijo",
        nombre : "Corralito negro para control",
        precio: 10
    },
    {
        categoria: "fijo",
        nombre : "Dimmer 12 ch / Usina de tension", 
        precio: 10
    }
]
let carrito=[]

window.addEventListener("load", ()=>{
    generarId(articulos)
    renderizarArticulos(articulos)    
})

window.addEventListener("change",()=>{
    const dePie = document.getElementById("pie")
    const cantPatas = document.querySelector(".patas")
    const masDias = document.querySelector("#diaOtro")
    const cantDias = document.querySelector(".dias")

    if(dePie.checked){
        cantPatas.setAttribute("style", "display:block")
    }else{
        cantPatas.setAttribute("style", "display:none")
    }

    if (masDias.checked) {
        cantDias.setAttribute("style","display:block")        
    }else{
        cantDias.setAttribute("style", "display:none")
    }
})

const btnPresupuesto = document.querySelector(".btnPresupuesto")
btnPresupuesto.addEventListener("click",function(e){
    const inputs = document.querySelectorAll(".valorInputs");
    const validacion = validarDatos(inputs)
    
    e.preventDefault()
    if (validacion) {
        agregarAlCarrito(articulos)
        agregarTramos()
        agregarGrupo()
        renderizarPresupuesto(carrito)
        console.log(carrito);
    }else{
        alert("Los campos solo pueden contener números enteros. Por favor, corrija los campos resaltados en rojo antes de continuar.")
        inputs.forEach(articulo=>{
            articulo.addEventListener("change",()=>{
                validarDatos(inputs)
            })
        })
    }
})


function generarId(lista){
    let id=1
    for (let i = 0; i < lista.length; i++) {
        lista[i].id = id
        id++        
    }
    return lista
}
function renderizarArticulos(lista){
const sectionLuces = document.querySelector(".luces")
const sectionSonido = document.querySelector(".sonido")

lista.forEach(articulo=>{
    if (articulo.categoria == "iluminacion") {
        sectionLuces.innerHTML +=
            `<article class="box">
                    <i class="fa-regular fa-lightbulb"></i>
                    <div>
                        <h4 class="text-box">${articulo.nombre}</h4>
                        <input id="${articulo.id}" class="styleInput valorInputs" placeholder="Cant." type="number">
                    </div>
            </article>`
        } if (articulo.categoria == "Sonido") {
            sectionSonido.innerHTML +=
            `<article class="box">
                    <i class="fa-regular fa-lightbulb"></i>
                    <div>
                        <h4 class="text-box">${articulo.nombre}</h4>
                        <input id="${articulo.id}" class="styleInput valorInputs" placeholder="Cant." type="number">
                    </div>
            </article>`
            
        }
    })
}
function validarDatos(datos) {
    const regex = /^$|^[0-9]+$/;
    let esValido = true;
    datos.forEach(input => {
        if (!regex.test(input.value)) {
            input.style.border = "2px solid red";
            esValido = false;
        } else {
            input.style.border = "1px solid black";
        }
    })
    return esValido;
}
function agregarAlCarrito(lista) {
    carrito = lista.map(articulo => {
        const input = document.getElementById(articulo.id)
        if (input.value) {
            return {
                nombre: articulo.nombre,
                id: articulo.id,
                precio: articulo.precio,
                cantidad: parseInt(input.value),
                total: (articulo.precio * parseInt(input.value))
                };
            }
    }).filter(input => input !== undefined);
    return carrito; 
}
function agregarTramos(){
    const inputLargo = document.querySelector(".largo").value
    const inputAncho = document.querySelector(".ancho").value
    const inputAlto = document.querySelector(".alto").value
    const colgado = document.querySelector("#colgado")
    const dePie = document.querySelector("#pie")
    const patas = document.querySelector("#cantPatas").value

    let tramos = []
    let mtsLineales = (parseInt(inputLargo) + parseInt(inputAncho)) * 2

    if(colgado.checked){
        if(inputLargo<=10 && inputAncho<=10){
            tramos.push("Un cuadrilatero de: "+ inputLargo+ " Mts de largo X "+ inputAncho+ " Mts de Ancho. A una altura de "+inputAlto +" Mts. "+ "Tiene "+ mtsLineales+ " Mts lineales." +" Va colgado y necesita 4 Aparejos y 4 Cubos")
        }// y si tiene mas de 10?
    }
    if(dePie.checked){
        if (patas <= 4) {
            tramos.push("Un cuadrilatero de: "+ inputLargo+ " Mts de largo X "+ inputAncho+ " Mts de Ancho. A una altura de "+inputAlto +" Mts. "+ "Tiene "+ mtsLineales+ " Mts lineales." +" Va de Pie y necesita 4 Cubos")
        } else if(patas ==6){
            tramos.push("Un Cuadrilatero de: "+ inputLargo+ " Mts de largo X "+ inputAncho+ " Mts de Ancho. A una altura de "+inputAlto +" Mts. "+ "Tiene "+ mtsLineales+ " Mts lineales." +" Va de Pie y necesita 6 Cubos")
        }
    }
    return(tramos);
}
function agregarGrupo(){
    const operativo = document.querySelector("#operativo")
    const backUp = document.querySelector("#back")
    const cable = document.querySelector("#distancia")
    let grupoElectrogeno= []

    if (operativo.checked) {
        grupoElectrogeno.push({
                descipcion: operativo.value
            })
    }
    if (backUp.checked) {
        grupoElectrogeno.push({
                descipcion: backUp.value
            })
    }
    grupoElectrogeno.push({
        descipcion : cable.value +" Mts de Cable"
    })
    return grupoElectrogeno;
}


function renderizarPresupuesto(lista) {
    const titulo = document.querySelector(".listado")
    const presupuesto = document.querySelector(".listaArticulos")

    const cuadrilatero = agregarTramos()
    const grupoElectrogeno = agregarGrupo()

    titulo.setAttribute("style","display:block")
    
    presupuesto.innerHTML = ""
    
    lista.forEach(articulo=>{
        presupuesto.innerHTML+=
        `<li> ${articulo.cantidad}&nbsp;&nbsp;${articulo.nombre}</li>`
    })
    
    if (cuadrilatero.length != 0) {
        presupuesto.innerHTML +=
            `<li> ${cuadrilatero} </li>`
    }

    grupoElectrogeno.forEach(articulo=>{
        presupuesto.innerHTML +=
        `<li>${articulo.descipcion} </li>`
    })

    
    
}

