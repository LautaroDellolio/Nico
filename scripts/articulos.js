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

    lista.forEach(({ categoria, nombre, id, descipcion }) => {
        const { SONIDO, ILUMINACION, RIGGING } = categorias

        if (categoria == ILUMINACION) {
            sectionLuces.innerHTML +=
                `<article class="box">
                    <i class="fa-regular fa-lightbulb"></i>
                    <div>
                        <h4 class="text-box">${nombre}</h4>
                        <input id="${id}" class="styleInput valorInputs" placeholder="Cant." type="number">
                    </div>
            </article>`
        } if (categoria == SONIDO) {
            sectionSonido.innerHTML +=
                `<article class="box descripcion">
                    <p>${descipcion}</p>
                    <i class="fa-regular fa-lightbulb"></i>
                    <div>
                        <h4 class="sonidoText">${nombre}</h4>
                        <input id="${id}" class="styleInput valorInputs" placeholder="Cant." type="number">
                    </div>
            </article>`

        } if (categoria == RIGGING) {
            sectionRigging.innerHTML +=
                `<article class="box">
            <i class="fa-regular fa-lightbulb"></i>
            <div>
                <h4 class="text-box">${nombre}</h4>
                <input id="${id}" class="styleInput valorInputs" placeholder="Cant." type="number">
            </div>
    </article>`
        }
    })
}
function validarDatos(datos) {
    const regex = /^([1-9]|[0-9]*)$/; //permite solamente numeros enteros y positivos
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
    
    if (operativo.checked) {
        carrito.push({
            nombre : "Grupo CETEC 130 KVA Operativo (10 Hs de uso) ",
            cantidad: 1,
            total : 100
        })
    }
    if (backUp.checked) {
        carrito.push({
            nombre : "Grupo CETEC 130 KVA Backup",
            cantidad: 1,
            total : 150
        })
        
    }
    if (cable.value) {
        carrito.push({
            nombre: "Mts Linea Trifasica",
            cantidad: parseInt(cable.value),
            total : parseInt(cable.value) * 150

        })
        
    }
}
function agregarEnvio() {
    const zonaEnvio = document.querySelector('input[name="zona"]:checked')
    const duracion = document.querySelector('input[name="duracion"]:checked')
    const masDias = document.getElementById("masDias")
    const armado = document.querySelector('input[name="armado"]:checked')
    let envio = []
    if (zonaEnvio) {
        carrito.push({

            nombre: zonaEnvio.value,
            cantidad : 1,
            total : 0
        })
    };
    //Falta duracion
    if (armado) {
        carrito.push({

            nombre: armado.value,
            cantidad : 1,
            total : 0
        })
    }
}

function renderizarPresupuesto(lista) {
    const titulo = document.querySelector("#list")
    const presupuesto = document.querySelector(".listaArticulos")
    const precio = document.querySelector(".precio")
    const total = calcularTotal()

    const cuadrilatero = agregarTramos()
    // const grupoElectrogeno = agregarGrupo()
    // const envio = agregarEnvio()

    titulo.setAttribute("style", "display:flex")

    presupuesto.innerHTML = ""

    lista.forEach(articulo => {
        presupuesto.innerHTML +=
            `<li> ${articulo.cantidad}&nbsp;&nbsp;${articulo.nombre}</li>`
    })//luces, sonido, grupo Electrogeno

    if (cuadrilatero.length != 0) {
        presupuesto.innerHTML +=
            `<li> ${cuadrilatero} </li>`
    }//cuadrilatero

    precio.innerText = `Total: $ ${total}` 

}
function calcularTotal(){
    let acumulador = carrito.reduce((total, articulo) => total + articulo.total, 0)

    try {
        const zonaEnvio = document.querySelector('input[name="zona"]:checked')
        const duracion = document.querySelector('input[name="duracion"]:checked')
        const masDias = document.getElementById("masDias")
        const armado = document.querySelector('input[name="armado"]:checked')

        if (!zonaEnvio || !armado){
            throw new Error("Los campos de la seccion transporte son obligatorios")
        }
        if (zonaEnvio.checked && zonaEnvio.id == "zona1") {
            acumulador += 150 // precio de envio        
        }
        if (zonaEnvio.checked && zonaEnvio.id == "zona2") {
            acumulador += 200 // precio de envio        
        }
        //falta duracion
        if (armado.checked && armado.id == "armadoDia") {
            acumulador += acumulador * 0.1// suma 10%   
        }
    
        if (armado.checked && armado.id == "armadoPrevio") {
            acumulador += acumulador * 0.2 // suma 20%
        }
        return acumulador
        console.log(acumulador);;
    } catch (error){
        alert(error.message)
    }

    
}


//formater carrito
function formatearCarrito() {
    let nuevoCarrito = carrito.filter(({ nombre, cantidad }) => nombre && cantidad) || [] //DEVUELVE UN ARRAY CON LOS DATOS FILTRADOS, SINO ENCUENTRA NADA DEVUELVE UN ARRAY VACIO (CONTROL DE POSIBLE ERROR EN CASO DE QUE DICHA PROPIEDAD SEA NULL)
    nuevoCarrito = nuevoCarrito.map(({ nombre, cantidad }) => `${cantidad}  ${nombre}`) //SE CREA UN ARRAY CON LOS DATOS FILTRADOS
    return nuevoCarrito;
}

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
        calcularTotal()
        
        carritoParaEnviar = formatearCarrito()

        if (carritoParaEnviar.length > 2) {
            return renderizarPresupuesto(carrito)
        }

        return alert('No se puede generar presupuesto si no hay articulos agregados')
    }

    alert("Los campos solo pueden contener números enteros y positivos. Por favor, corrija los campos resaltados en rojo antes de continuar.")
    inputs.forEach(articulo => {
        articulo.addEventListener("change", () => {
            validarDatos(inputs)
        })
    })
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

    const rules = `\n \n   
    • Los precios no incluyen IVA (21%) el presente presupuesto tiene una validez de 30 días. 
    • en caso de confirmar el presupuesto y de no abonarlo dentro de los 15 dias, el mismo sufrirá un incremento mensual según indice ipc. 	
    • el pago total deberá estar saldado 48 hs antes del evento.
    • El cliente será responsable: total y parcialmente por los equipos locados, por roturas ajenas al buen uso, robo, hurto o deterioro del equipamiento como así también daños ocasionados a terceros que pudieran surgir por caso fortuito y/o motivos ajenos a nuestra empresa, desde el momento de su ingreso al predio hasta el retiro de los mismos.
    • El lugar donde se desarrollará el evento deberá contar con personal de seguridad durante todo el período de contratación del servicio, incluyendo la instalación, el evento, y la desinstalación del mismo para el cuidado de todo el equipamiento.
    • Los precios detallados incluyen gastos de transportes, y de personal. 
    • Los precios son por un día de evento. Por más de un día se realizará otra cotización.
    • En caso de que el evento se suspenda por condiciones climáticas desfavorables, o por cualquier otra cancelación, habiendo sido instalado el equipamiento, el cliente se hará cargo del cien por cien del precio convenido.
    • Los equipos presupuestados estarán sujetos a su disponibilidad al momento de la reserva.
    • Si se contratan grupos electrógenos y el mismo es esencial para el desarrollo del evento, recomendamos la contratación de equipos de backup que aseguren la prestación del servicio en caso de una eventual falla en alguno de los mismos.
        En ningún caso Stoessel SRL será responsable por eventuales perjuicios al cliente o a terceros derivados de la paralización del equipo, cualquiera fuere la causa de tal efecto. Tampoco existirá indemnización alguna por lucro cesante, ganancia esperada, aptitudes implícitas o daño emergente por el no o mal funcionamiento del equipamiento alquilado. 
    • Para locaciones en donde la altura de trabajo sea superior a 4 metros el cliente deberá proveer al menos un elevador hidráulico. 
    • Están incluidos los seguros del personal contra accidentes de trabajo y seguro por responsabilidad civil.`
    
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
            name: "Soessel Company",
            address: "Desconocido",
            phone: "(+54) 069 11 11 111",
            email: "stoessel@outlook.com",
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
            invDescLabel: "\n CONFIRMADO EL PRESENTE PRESUPUESTO \n QUEDA EXPRESAMENTE ACEPTADAS LAS SIGUIENTES CONDICIONES GENERALES:",
            // invDescLabelStyle: {
            //     fontSize: 10,
            //     textColor: [0, 0, 0],
            //     fillColor: [255, 255, 0] // amarillo
            // },
            invDesc: rules,
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
    // const time = formDatos.elements.Time.value.trim()



    if (!name || !surname || !tel || !email || !date) {
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

    // if (!validateForm()) {
    //     return
    // }

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
    console.log(formData);
    formDatos.reset()
    formProduct.reset()
    let txt = 'Formulario enviado!'
    msgAction(txt, 'success', msg)
})

