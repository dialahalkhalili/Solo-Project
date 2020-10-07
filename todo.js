console.log('Connected')

var todoInput = document.getElementById('todo-input');
var addButton = document.getElementById('todo-submit');
var list = document.getElementById('todo-list');

//store tasks in an array
var tasksArray = [];

addButton.onclick = function appendTask(){

	//create div in ul for each task
	var todoDiv = document.createElement('div');
	//add class to div
	todoDiv.setAttribute('id','todo-Div')
	//create li into div
	var todoTasks = document.createElement('li');
	//add class to li
	todoTasks.setAttribute('id','todo-li')
	//assign value of li to todoInput
	todoTasks.innerText = todoInput.value;
	//append li to div
	todoDiv.appendChild(todoTasks);
	//add check button next to text
	var doneTaskBtn = document.createElement('button');
	//add name to button
	doneTaskBtn.innerText = 'Done';
	//set attribute to button
	doneTaskBtn.setAttribute('id','taskDone')
	//add button to div
	todoDiv.appendChild(doneTaskBtn);
	//add delete button next to task
	var deleteTaskBtn = document.createElement('button');
	//add name to button
	deleteTaskBtn.innerText = 'Delete';
	//set attribute to button
	deleteTaskBtn.setAttribute('id','taskDelete')
	//add button to div
	todoDiv.appendChild(deleteTaskBtn);
	//append div to existing ul
	list.appendChild(todoDiv);
	//push tasks to array
	tasksArray.push(todoTasks.innerHTML);
	//clear input value
	todoInput.value = '';
}

list.onclick = function doneDelButtons(){
	console.log(event.target.nodeName)
}




