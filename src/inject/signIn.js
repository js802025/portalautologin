window.onload=function(){
    chrome.runtime.sendMessage({action:"signIn"}, function(response) {});
    chrome.runtime.onMessage.addListener(function(request, sender,   sendResponse) { 
        //Take the fields of user and password from the DOM of facebook log-in page 
        document.getElementById('passwordInput').value=request.pass;
        document.getElementById('submitButton').click();
        // setTimeout(function(){
        //     return Login.submitLoginRequest();
        // }, 100);
    
    });
    
    };