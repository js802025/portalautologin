chrome.storage.local.get(null, function(items) {
    document.getElementById('email').value = items.username;
    document.getElementById('password').value = items.password;
})
document.getElementById('email').onchange = function() {
    chrome.storage.local.set({username: this.value});
};
document.getElementById('password').onchange = function() {
    chrome.storage.local.set({password: this.value});
};