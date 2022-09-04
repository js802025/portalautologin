// chrome.extension.sendMessage({}, function(response) {
// 	var readyStateCheckInterval = setInterval(function() {
// 	if (document.readyState === "complete") {
// 		clearInterval(readyStateCheckInterval);

// 		// ----------------------------------------------------------
// 		// This part of the script triggers when page is done loading
// 		console.log("Hello. This message was sent from scripts/inject.js");
// 		// ----------------------------------------------------------

// 	}
// 	}, 10);
// });
console.log("hello")

window.onload=function(){
chrome.runtime.sendMessage({action:"getUsername"}, function(response) {});
chrome.runtime.onMessage.addListener(function(request, sender,   sendResponse) { 
	//Take the fields of user and password from the DOM of facebook log-in page 
	console.log("Hello. This message was sent from scripts/inject.js");
	setTimeout(function(){
	document.getElementById('Username').value=request.user;
	document.getElementById('nextBtn').click();
	}, 750);

});

};