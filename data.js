
let data = [];
var init = async function () {
	let response = await fetch("https://api.github.com/users/theadambyrne/repos?sort=created");
	if (response.ok) { // if HTTP-status is 200-299
		// get the response body (the method explained below)
		data = await response.json();

		for (let i = 0; i < 9; i++) {
			let name = data[i].name;
			let url = data[i].url;
			let desc = data[i].description;

			let container = document.getElementById("dataPool");
			let div = document.createElement("div");

			let heading = document.createElement("h6");
			heading.innerHTML = name + "   --   <a href=" + url + ">See Project</a>"
			div.appendChild(heading);

			let detail = document.createElement("p");
			detail.innerHTML = "<i>" + desc + "</i><hr/>";
			div.appendChild(detail);

			container.appendChild(div);

		}
	} else {
		alert("HTTP-Error: " + response.status);
	}


}
init();

