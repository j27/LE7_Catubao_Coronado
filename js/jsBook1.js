function validateSignup(){  
	var ln = document.signup.lastname.value;  
	var fn = document.signup.firstname.value;
	var e = document.signup.email.value;
	var p1 = document.signup.passw.value; 
	var p2 = document.signup.confirmpassw.value;
	var atEmail = e.indexOf("@");  
	var dotEmail = e.lastIndexOf("."); 
	
	//VALIDATE NAME AND PASSWORD
	if ((ln == null && fn == null) || (ln == "" && fn == " ")){  
		alert("Name can't be blank.");  
		return false;  
	} else if ((p1.length < 5) && (p2.length < 5)){  
		alert("Password must be at least 5 characters long.");  
		return false;  
	} else {
		open("../html/book2.html");
		alert("Welcome, " + fn + " !\n" + "Thank you for choosing Rent a Ride.");
		return true;
	}
	
	//EMAIL
	if (e == null || e == " "){  
		alert("Email can't be blank.");  
		return false;  
	} else if (atEmail < 1 || dotEmail < atEmail+2 || dotEmail+2 >= e.length){  
		alert("Please enter a valid e-mail address.");  
		return false;  
	} else {
		open("../html/book2.html");
		alert("Welcome, " + fn + " !\n" + "Thank you for choosing Rent a Ride.");
		return true;
	}
	
	//PASSWORD CONFIRMATION
	if (p1 != p2 ) {  
		alert("Password must be the same!");  
		return false;  
	} else {
		open("../html/book2.html");
		alert("Welcome, " + fn + " !\n" + "Thank you for choosing Rent a Ride.");
		return true;
	}
	
}  

function validateLogin(){ 
	var e = document.login.email.value;
	var p = document.login.passw.value;
	var atEmail = e.indexOf("@");  
	var dotEmail = e.lastIndexOf("."); 
	
	//EMAIL
	if (e == null || e == " "){  
		alert("Email can't be blank.");  
		return false;  
	} else if (atEmail < 1 || dotEmail < atEmail+2 || dotEmail+2 >= e.length){  
		alert("Please enter a valid e-mail address.");  
		return false;  
	} else {
		open("../html/book2.html");
		alert("Welcome back! You can now start a new transaction.");
	}
	
	//PASSWORD
	if (p == null || p == " ") {  
		alert("Password can't be blank.");  
		return false;  
	} else if (p1.length < 5){  
		alert("Password must be at least 5 characters long.");  
		return false;  
	} //DATABASE: ELSE IF INVALID PASSWORD
	else {
		open("../html/book2.html");
		alert("Welcome back! You can now start a new transaction.");
	}
}