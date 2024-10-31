let tareas = [];
let contador = 0;

//visulaizar todas las tareas
const verTareas = () => {
    tareas.forEach((tarea) => {
        console.log(tarea);
    })
}

//agrega una tarea
let agregarTarea = (tareaNombre, fechaLImite = null, completada = false, numero) => {
    tareas.push({nombre : tareaNombre, fechaLimite : fechaLImite, estado : completada, numero : contador})
    contador++;
}
agregarTarea("Estudiar", "12-04-24")
agregarTarea("Lavar el auto" , "12-04-24")
agregarTarea("cocinar" , "12-04-24")

//console.log(tareas);

//BORRAR UNA TAREA

const borrarTarea = (nombreTarea) => {
    tareas = tareas.filter(tarea => tarea.nombre !== nombreTarea);
    return tareas;
}

//borrarTarea("Estudiar");
//verTareas()

//ACTUALIZAR UNA TAREA

const actualizarTarea = (indice, nuevoNombreTarea, nuevaFechaLImite = null, nuevoCompletada = null ) => {

    const tarea = tareas.find(tarea => tarea.numero === indice);

    if( tarea.nombre !== null || tarea.fechaLimite !== null || tarea.estado !== null){
        tarea.nombre = nuevoNombreTarea;
        tarea.fechaLimite = nuevaFechaLImite;
        tarea.estado = nuevoCompletada;
    }
}

actualizarTarea(0, "efewgvewgv", "12-555-66666", true)
actualizarTarea(1, "e", "wcwdc")
verTareas();