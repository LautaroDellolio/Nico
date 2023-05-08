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
        nombre: "Fresnel 1 Kw",
        precio: 10
    },
    {
        categoria: "iluminacion",
        nombre: "Fresnel 2 Kw",
        precio: 10
    },
    {
        categoria: "iluminacion",
        nombre: "Par56 - 300 Watts",
        precio: 10
    },
    {
        categoria: "iluminacion",
        nombre: "Barra de Led",
        precio: 10
    },
    {
        categoria: "iluminacion",
        nombre: "Bañador NovaLed Outdoor",
        precio: 10
    },
    {
        categoria: "iluminacion",
        nombre: "Atomix 3000",
        precio: 10
    },
    {
        categoria: "iluminacion",
        nombre: "Elipsoidal 750 Watts (Zoom 25 - 50º)",
        precio: 10
    },
    {
        categoria: "iluminacion",
        nombre: "Minibrut x 4 Lamps",
        precio: 10
    },
    {
        categoria: "iluminacion",
        nombre: "Minibrut x 8 Lamps",
        precio: 10
    },
    {
        categoria: "iluminacion",
        nombre: "HQI - 400 / Reflector Led 100 Watts",
        precio: 10
    },
    {
        categoria: "iluminacion",
        nombre: "Seguidor 1200 c/ Seguidorista",
        precio: 10
    },
    {
        categoria: "iluminacion",
        nombre: "Octobeam Laser RGB x 3 watts c/u",
        precio: 10
    },
    {
        categoria: "iluminacion",
        nombre: "Máquina de Humo Cloudy",
        precio: 10
    },
    {
        categoria: "iluminacion",
        nombre: "Toma tensión Hasta 10 Amperes",
        precio: 10
    },
    {
        categoria: "iluminacion",
        nombre: "Toma tensión Hasta 20 Amperes",
        precio: 10
    },
    {
        categoria: "Sonido",
        nombre: "Sonido 1",
        descipcion: "2 JBL Eon-10 + Consola + Mic",
        precio: 10
    },
    {
        categoria: "Sonido",
        nombre: "Sonido 2",
        descipcion: "4 JBL Eon-10 + consola + Mic",
        precio: 10
    },
    {
        categoria: "Sonido",
        nombre: "Sonido 3",
        descipcion: "Sonido pista JBL / RCF (2 Mid-Hi + 2 Sub)",
        precio: 10
    },
    {
        categoria: "Sonido",
        nombre: "Sonido 4",
        descipcion: "Sonido Line Array 4xlado RCF HDL6 + Sub",
        precio: 10
    },
    {
        categoria: "Sonido",
        nombre: "Sonido 5",
        descipcion: "Sonido DJ en recepcion (2 mid-Hi + 2 Sub + JBL/RCF)",
        precio: 10
    },
    {
        categoria: "Sonido",
        nombre: "Perimetrales (JBL / RCF)",
        descipcion: "Perimetrales (JBL / RCF)",
        precio: 10
    },
    {
        categoria: "Sonido",
        nombre: "Sonido K-array (kr-202)",
        descipcion: "Sonido K-array (kr-202)",
        precio: 10
    },
    {
        categoria: "Sonido",
        nombre: "Rider Banda chica",
        descipcion: "Rider Banda chica",
        precio: 10
    },
    {
        categoria: "Sonido",
        nombre: "Mic Inalambrico Sennheiser G3",
        descipcion: "Mic Inalambrico Sennheiser G3",
        precio: 10
    },
    {
        categoria: "rigging",
        nombre: "Truss Prolyte H30V x Metro",
        precio: 10
    },
    {
        categoria: "rigging",
        nombre: "Corner box Prolyte ",
        precio: 10
    },
    {
        categoria: "rigging",
        nombre: "Aparejo x 1Tn (Ganmar-Yale)",
        precio: 10
    },
    {
        categoria: "rigging",
        nombre: "Patas Malakate (6 Metros x 250 Kg)",
        precio: 10
    },
    {
        categoria: "rigging",
        nombre: "Totem Truss",
        precio: 10
    },
    {
        categoria: "rigging",
        nombre: "Totem telescópico",
        precio: 10
    },
    {
        categoria: "rigging",
        nombre: "Circular Truss x 6 metros",
        precio: 10
    },
    {
        categoria: "rigging",
        nombre: "Circular Truss x 8 metros",
        precio: 10
    },
    {
        categoria: "rigging",
        nombre: "Cabina de DJ con Truss 3030 (3x1x1)",
        precio: 10
    }
]

const costosFijos = [
    {
        categoria: "fijo",
        nombre: "Consola AVOLITES + Operador",
        precio: 10
    },
    {
        categoria: "fijo",
        nombre: "Corralito negro para control",
        precio: 10
    },
    {
        categoria: "fijo",
        nombre: "Dimmer 12 ch / Usina de tension",
        precio: 10
    }
]
let carrito = []
let carritoParaEnviar = []


window.addEventListener("load", () => {
    generarId(articulos)
    renderizarArticulos(articulos)
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

const btnPresupuesto = document.querySelector(".btnPresupuesto")
btnPresupuesto.addEventListener("click", function (e) {
    const inputs = document.querySelectorAll(".valorInputs");
    const validacion = validarDatos(inputs)

    e.preventDefault()
    if (validacion) {
        agregarAlCarrito(articulos)
        // validarTramos()
        agregarTramos()
        agregarGrupo()
        agregarEnvio()
        renderizarPresupuesto(carrito)
        carritoParaEnviar = formatearCarrito()
    } else {
        alert("Los campos solo pueden contener números enteros. Por favor, corrija los campos resaltados en rojo antes de continuar.")
        inputs.forEach(articulo => {
            articulo.addEventListener("change", () => {
                validarDatos(inputs)
            })
        })
    }
})


function generarId(lista) {
    let id = 1
    for (let i = 0; i < lista.length; i++) {
        lista[i].id = id
        id++
    }
    return lista
}
function renderizarArticulos(lista) {
    const sectionLuces = document.querySelector(".luces")
    const sectionSonido = document.querySelector(".sonido")
    const sectionRigging = document.querySelector(".rigging")

    lista.forEach(articulo => {
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
                `<article class="box descripcion">
                    <p>${articulo.descipcion}</p>
                    <i class="fa-regular fa-lightbulb"></i>
                    <div>
                        <h4 class="sonidoText">${articulo.nombre}</h4>
                        <input id="${articulo.id}" class="styleInput valorInputs" placeholder="Cant." type="number">
                    </div>
            </article>`

        } if (articulo.categoria == "rigging") {
            sectionRigging.innerHTML +=
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
    console.log(carrito);
}
function agregarTramos() {
    const inputLargo = document.querySelector(".largo").value
    const inputAncho = document.querySelector(".ancho").value
    const inputAlto = document.querySelector(".alto").value
    const colgado = document.querySelector("#colgado")
    const dePie = document.querySelector("#pie")
    const patas = document.querySelector("#cantPatas").value

    let tramos = []
    let mtsLineales = (parseInt(inputLargo) + parseInt(inputAncho)) * 2

    if (colgado.checked) {
        if (inputLargo <= 10 && inputAncho <= 10) {
            tramos.push("Un cuadrilatero de: " + inputLargo + " Mts de largo X " + inputAncho + " Mts de Ancho. A una altura de " + inputAlto + " Mts. " + "Tiene " + mtsLineales + " Mts lineales." + " Va colgado y necesita 4 Aparejos y 4 Cubos")
        }// y si tiene mas de 10?
    }
    if (dePie.checked) {
        if (patas <= 4) {
            tramos.push("Un cuadrilatero de: " + inputLargo + " Mts de largo X " + inputAncho + " Mts de Ancho. A una altura de " + inputAlto + " Mts. " + "Tiene " + mtsLineales + " Mts lineales." + " Va de Pie y necesita 4 Cubos")
        } else if (patas == 6) {
            tramos.push("Un Cuadrilatero de: " + inputLargo + " Mts de largo X " + inputAncho + " Mts de Ancho. A una altura de " + inputAlto + " Mts. " + "Tiene " + mtsLineales + " Mts lineales." + " Va de Pie y necesita 6 Cubos")
        }
    }
    return (tramos);
}
// function validarTramos(){
//     const inputLargo = document.querySelector(".largo").value
//     const inputAncho = document.querySelector(".ancho").value
//     const inputAlto = document.querySelector(".alto").value
//     const colgado = document.querySelector("#colgado")
//     const dePie = document.querySelector("#pie")
//     const patas = document.querySelector("#cantPatas").value
//     let camposCompletos = false
    
//     if (inputLargo && inputAncho && inputAlto && (colgado.checked || (dePie.checked && patas))) {
//         camposCompletos = true
//     }
    
//     if (!camposCompletos) {
//         alert("Todos los campos son obligatorios")
//     }
// }
function agregarGrupo() {
    const operativo = document.querySelector("#operativo")
    const backUp = document.querySelector("#back")
    const cable = document.querySelector("#distancia")
    let grupoElectrogeno = []

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
    if (cable.value) {
        grupoElectrogeno.push({
            descipcion: cable.value + " Mts de Cable"
        })
    }
    return grupoElectrogeno;
}
function agregarEnvio() {
    const zonaEnvio = document.querySelector('input[name="zona"]:checked')
    const duracion = document.querySelector('input[name="duracion"]:checked')
    const masDias = document.getElementById("masDias")
    const armado = document.querySelector('input[name="armado"]:checked')
    let envio = []
    if (zonaEnvio) {
        envio.push({
            descripcion: "Envio a " + zonaEnvio.value
        })
        // console.log(zonaEnvio.value)
    };

    if (duracion) {
        if (duracion.value == "unDia" || duracion.value == "dosDias") {
            envio.push({
                descripcion: "Duracion " + duracion.value
            })
            // console.log(duracion.value);
        } else {
            envio.push({
                descripcion: "Duracion " + masDias.value + " días"
            })
            // console.log(masDias.value);
        }
    }

    if (armado) {
        envio.push({
            descripcion: "Dia de Armado " + armado.value
        })
        // console.log(armado.value);
    }
    return envio
    console.log(envio);
}
function renderizarPresupuesto(lista) {
    const titulo = document.querySelector("#list")
    const presupuesto = document.querySelector(".listaArticulos")

    const cuadrilatero = agregarTramos()
    const grupoElectrogeno = agregarGrupo()
    const envio = agregarEnvio()

    titulo.setAttribute("style", "display:flex")

    presupuesto.innerHTML = ""

    lista.forEach(articulo => {
        presupuesto.innerHTML +=
            `<li> ${articulo.cantidad}&nbsp;&nbsp;${articulo.nombre}</li>`
    })//luces y sonido

    if (cuadrilatero.length != 0) {
        presupuesto.innerHTML +=
            `<li> ${cuadrilatero} </li>`
    }//cuadrilatero

    grupoElectrogeno.forEach(articulo => {
        presupuesto.innerHTML +=
            `<li>${articulo.descipcion} </li>`
    })//grupo electrogeno

    envio.forEach(articulo => {
        presupuesto.innerHTML +=
            `<li>${articulo.descripcion}</li>`
    })

}


//formater carrito
function formatearCarrito() {
    //en el evento del click guardo en el array carritoParaEnviar que declare en las primeras lineas el resultado de esta funcion
    let copiaCarrito = carrito //hice una copia de carrito para tunearla
    copiaCarrito =copiaCarrito.map(item=>({nombre : item.nombre, cantidad : item.cantidad})) //aca guardo el array de objetos pero solo con las propiedades nombre y cantidad
    const nuevoArray = copiaCarrito.map(item => `${item.cantidad}  ${item.nombre}`);// y aca transformo ese array de objetos en un array de strings para poder guardar esto en el formData
    return nuevoArray;
}


// Formulario y envio de email
const formDatos = document.getElementById('formData')
const btnEmail = document.getElementById('btn-email')
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
    }, 8000)
}

const validateForm = () => {
    const name = formDatos.elements.Nombre.value.trim()
    const surname = formDatos.elements.Apellido.value.trim()
    const tel = formDatos.elements.Telefono.value.trim()
    const email = formDatos.elements.Email.value.trim()
    const date = formDatos.elements.Date.value.trim()
    const time = formDatos.elements.Time.value.trim()



    if (!name || !surname || !tel || !email || !date || !time) {
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

    return true
}

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

    formData.nombre = formDatos.elements.Nombre.value.trim()
    formData.apellido = formDatos.elements.Apellido.value.trim()
    formData.telefono = formDatos.elements.Telefono.value.trim()
    formData.correo = formDatos.elements.Email.value.trim()
    formData.fecha = formDatos.elements.Date.value.trim()
    formData.hora = formDatos.elements.Time.value.trim()
    formData.presupuesto = carritoParaEnviar

    sendEmail(formData)
    console.log(formData);
    formDatos.reset()
    formProduct.reset()    
    let txt = 'Formulario enviado!'
    msgAction(txt, 'success', msg)
})