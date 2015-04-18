function confirmation() {
	var answer = confirm("Ready for the next step?")
	if (answer){
		alert("Let's go!")
		window.location = "book3.html";
	}
	else{
		alert("Take your time...")
	}
}