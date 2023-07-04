const ingresar = document.querySelector("#ingresar")
const mostrar = document.querySelector(".tareas")
var tareas = []


function most_tarea() { 
    let result = ""
    for (let index = 0; index < tareas.length; index++) {
        const element = tareas[index];
        result += `<div id="${index}" class="tarea">
            <input type="checkbox" onclick="ele_tarea(${index})">
            <span>${element}</span>
            <button onClick="elimin_tarea(${index})"><img src="images/caneca.svg"></button>
        </div>`
    }
    mostrar.innerHTML = result
}

function añadir_tarea() { 
    if (ingresar.value.replaceAll(" ","") == "") return
    tareas.push(ingresar.value)
    ingresar.value = ""
    most_tarea()
}

function elimin_tarea(index) { 
    if (index >= 0 && index < tareas.length) tareas.splice(index, 1)
    most_tarea()
}

function ele_tarea(index) { 
    const tarea = document.getElementById(index)
    tarea.classList.toggle("-selected")
}