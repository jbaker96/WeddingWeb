const NoG = document.getElementsByName("NoG")[0];
const GN = document.getElementsByName("GuestNames")[0];
var currow = GN.rows

NoG.addEventListener("change", function() {
	if (NoG.value == "Number of Guests?"){
		GN.rows = 1;
	} else {
		GN.rows = NoG.value
	}
});
// 	if (NoG.value == 0){
// 		trans1.classList.remove("Transition");
// 		trans2.classList.remove("Transition");
// 		trans1.classList.add("sweep-away");
// 		trans2.classList.add("sweep-away");
// 	} else {
// 		trans1.style.display = "block";
// 		trans2.style.display = "block";
// 		trans1.classList.remove("sweep-away");
// 		trans2.classList.remove("sweep-away");
// 		GN.rows = NoG.value;
// 		trans1.classList.add("Transition");
// 		trans2.classList.add("Transition");
// 	}	
// });

// var observer1 = new IntersectionObserver(function(entries) {
// 	if(entries[0]['isIntersecting'] === true) {
// 		trans1.style.display = "block";
// 	}
// 	else if (NoG.value != 0){
// 		trans1.style.display = "block";
// 	}
// 	else {
// 		trans1.style.display = "none";
// 	}
// }, {});

// var observer2 = new IntersectionObserver(function(entries) {
// 	if(entries[0]['isIntersecting'] === true) {
// 		trans2.style.display = "block"
// 	}
// 	else if (NoG.value != 0){
// 		trans2.style.display = "block";
// 	}
// 	else {
// 		trans2.style.display = "none"
// 	}
// }, {});

// observer1.observe(document.querySelector("#trans1"));
// observer2.observe(document.querySelector("#trans2"));

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