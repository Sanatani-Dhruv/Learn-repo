function route(str) {
	xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById('body').innerHTML = this.responseText;
			window.history.pushState({page: ""}, "another page", str);
		}
	};
	xhr.open("GET", str, true);
	xhr.send();
}
