console.log('Connected')

// var addButton = document.getElementById('addTask') 
// var deleteButton = document.getElementById('deleteTask')

// //declare a new variable for array
// var tasksArray = [];

// addButton.onclick = function appendList() {
// 	//debugger;
// 	//declare a new variable and grab the ul list
// 	var ul= document.getElementsByClassName('list')[0];
// 	//create an li list to append into the ul
// 	var li= document.createElement('li');
// 	//set class to li
// 	li.setAttribute("class", "li");
// 	//get the value of the input task to add to the li
// 	var inputTask= document.getElementById('task').value;
// 	//set value of li to inputTask
// 	li.innerHTML=inputTask;
// 	//store tasks into an array
// 	tasksArray.push(li.innerHTML);
// 	//append li to ul
// 	ul.appendChild(li);
// }



$("#addTask").click(function(){
	//get the value of the input task to add to the li
	var inputTask = $('#task').val()
	//append the input task into an li into the ul
	$(".list").append('<li>' + inputTask + '</li>');
	console.log($('<li>.val()'))
});

// var inputTask = document.getElementById('task').value;
// var addButton = document.getElementById('addButton');
// // var toDoList = document.getElementById('tasksToDo');
// var ul = document.getElementsByClassName('list')[0];

// addButton.onclick = function appendList() {
// 	//create an li list to append into the ul
// 	var li = document.createElement('li');
// 	//set class to li
// 	li.setAttribute("class", "li");
// 	//set value of li to inputTask
// 	var inputTask = document.getElementById('task').value;
// 	li.innerHTML =inputTask;
// 	//store tasks into an array
// 	tasksArray.push(li.innerHTML);
// 	//append li to ul
// 	ul.appendChild(li);
// }


