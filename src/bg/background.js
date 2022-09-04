


chrome.storage.local.get(['store'], function(data) {
    console.log(data);
})

window.onload=function(){
  chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    var result = settings.toObject();
          if (request.action == "getUsername"){
       chrome.tabs.sendMessage(sender.tab.id, {user :result.username}, function(response) {
             });
            } else if (request.action == "signIn"){
              chrome.tabs.sendMessage(sender.tab.id, {pass : result.password}, function(response) {
             });
            }
          })

 
  }