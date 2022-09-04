




  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    chrome.storage.local.get(null, function(items) {
      console.log(items);
    
    //var result = settings.toObject();
          if (request.action == "getUsername"){
       chrome.tabs.sendMessage(sender.tab.id, {user :items.username}, function(response) {
             });
            } else if (request.action == "signIn"){
              chrome.tabs.sendMessage(sender.tab.id, {pass : items.password}, function(response) {
             });
            }
          })
        })

 
  