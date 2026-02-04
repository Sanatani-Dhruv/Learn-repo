let task_input = document.getElementById('task_input');
let task_btn = document.getElementById('task_btn');
let reset_btn = document.getElementById('reset_btn');
let ans_box = document.getElementById('ans_box');
let delete_btn = document.querySelectorAll('.delete_btn');
ans_box.innerHTML = window.localStorage.getItem('list');
let latestValue = '';
let id = 0;

function insert_item(id, text) {
	ans_box.innerHTML += "<div class='list_item' id='" + id + "'> <span class='text'>"+ text +"</span><span> <button id='btn_" + id+ "' onclick='deleteElement(this)' class='delete_btn'> Delete </button></span> </div> ";
	task_input.value = '';
	id++;
	window.localStorage.setItem('list', ans_box.innerHTML);
}

task_btn.addEventListener('click', () => {
	if (task_input.value) {
		id++;
		insert_item(id, task_input.value);
	}
})

function deleteElement(element) {
	element.parentNode.parentNode.remove();
	window.localStorage.setItem('list', ans_box.innerHTML);
}

reset_btn.addEventListener('click', () => {
	if (ans_box.innerHTML != '') {
		ans_box.innerHTML = null;
		window.localStorage.setItem('list', ans_box.innerHTML);
	}
})
