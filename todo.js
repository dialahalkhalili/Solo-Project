console.log('Connected')

var todoInput = document.getElementById('todo-input');
// var addButton = document.getElementById('todo-submit');
var list = document.getElementById('todo-list');

//store tasks in an array
// var tasksArray = [];

function appendTask(){
	//create div in ul for each task
	// var todoDiv = document.createElement('div');
	//add class to div
	// todoDiv.setAttribute('id','todo-Div')
	//create li into div
	var todoTasks = document.createElement('li');
	//add class to li
	todoTasks.setAttribute('id','todo-li')
	//assign value of li to todoInput
	todoTasks.innerHTML = todoInput.value;
	//append li to div
	list.appendChild(todoTasks);
	//append div to existing ul
	// ul.appendChild(todoDiv);
	//push tasks to array
	// tasksArray.push(todoTasks.innerHTML);
	console.log('new task added')
}

