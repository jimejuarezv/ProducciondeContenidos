// Función para mostrar el panel principal y ocultar el panel de inicio de sesión
function showMainPanel() {
    document.querySelector('#login-panel').classList.add('hidden');
    document.querySelector('#main-panel').classList.remove('hidden');
}

// Función para iniciar sesión
function login(event) {
    event.preventDefault();
    showMainPanel();
}

// Obtener los elementos del DOM
const addTaskButton = document.querySelector('#add-task-button');
const taskForm = document.querySelector('#task-form');
const taskList = document.querySelector('#tasks');
const newTaskForm = document.querySelector('#new-task-form');

// Mostrar el formulario para agregar una nueva tarea
addTaskButton.addEventListener('click', () => {
    taskForm.classList.toggle('hidden');
});

// Manejar la creación de una nueva tarea
newTaskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    // Obtener los valores del formulario
    const title = document.querySelector('#task-title').value;
    const description = document.querySelector('#task-description').value;
    const deadline = document.querySelector('#task-deadline').value;
    const status = document.querySelector('#task-status').value;

    // Crear un nuevo elemento de tarea
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <p><strong>Fecha Límite:</strong> ${deadline}</p>
        <p><strong>Estado:</strong> ${status}</p>
    `;

    // Agregar la nueva tarea a la lista de tareas
    taskList.appendChild(taskItem);

    // Limpiar el formulario y ocultarlo
    newTaskForm.reset();
    taskForm.classList.add('hidden');
});
