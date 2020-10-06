console.log('Connected')

var addButton = document.getElementById('addTask') 

$("#addTask").click(function(){
	//get the value of the input task to add to the li
	var inputTask = $('#task').val()
	$(".list").append('<li>' + inputTask + '</li>');
});