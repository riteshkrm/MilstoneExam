// Get elements from DOM
const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo-btn');
const todoList = document.getElementById('todo-list');

// Create an array to store todos
let todos = [];

// Add event listener to the button
addTodoBtn.addEventListener('click', () => {
  // Get the todo text from the input
  const todoText = todoInput.value.trim();
  
  // Add the todo to the array if the text is not empty
  if (todoText) {
    todos.push(todoText);
    
    // Clear the input field
    todoInput.value = '';
    
    // Render the todo list
    renderTodoList();
  }
});

// Function to render the todo list
function renderTodoList() {
  // Clear the existing list
  todoList.innerHTML = '';
  
  // Render the todos in the array
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.textContent = `${index + 1}. ${todo}`;
    todoList.appendChild(li);
  });
}

