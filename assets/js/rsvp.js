const NoG = document.getElementsByName("NoG")[0];
const GN = document.getElementsByName("GuestNames")[0];
const submit = document.getElementsByName("Submit")[0];
const email = document.getElementsByName("email")[0];
const msg = document.getElementsByName("message")[0];
const trans1 = document.getElementById("trans1");
const trans2 = document.getElementById("trans2");

NoG.addEventListener("change", function() {
	if (NoG.value == 0){
		trans1.classList.remove("Transition");
		trans2.classList.remove("Transition");
		trans1.classList.add("sweep-away");
		trans2.classList.add("sweep-away");
	} else {
		trans1.style.display = "block";
		trans2.style.display = "block";
		trans1.classList.remove("sweep-away");
		trans2.classList.remove("sweep-away");
		GN.rows = NoG.value;
		trans1.classList.add("Transition");
		trans2.classList.add("Transition");
	}	
});

var observer1 = new IntersectionObserver(function(entries) {
	if(entries[0]['isIntersecting'] === true) {
		trans1.style.display = "block";
	}
	else if (NoG.value != 0){
		trans1.style.display = "block";
	}
	else {
		trans1.style.display = "none";
	}
}, {});

var observer2 = new IntersectionObserver(function(entries) {
	if(entries[0]['isIntersecting'] === true) {
		trans2.style.display = "block"
	}
	else if (NoG.value != 0){
		trans2.style.display = "block";
	}
	else {
		trans2.style.display = "none"
	}
}, {});

observer1.observe(document.querySelector("#trans1"));
observer2.observe(document.querySelector("#trans2"));

// submit.addEventListener("click", function() {
// 	var rows = document.querySelector('textarea').value.split("\n").length;
// 	if (NoG.value > 0 && rows == NoG.value) {
// 		console.log("Number of Guests: " + NoG.value);
// 		console.log("Guests:\n" + GN.value);
// 		console.log("Email: " + email.value);
// 		console.log("Message: " + msg.value);
// 		window.alert("Thank you for RSVPing.");
// 		NoG.value = 0;
// 		GN.value = "";
// 		email.value = "";
// 		msg.value = "";
// 		GN.style.display = "none";
// 		GNl.style.display = "none";
// 		window.location.href = "#";
// 	} else {
// 		window.alert("Please enter the correct amount of names for guests you are RSVPing for.");
// 	}
// })