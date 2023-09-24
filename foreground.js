window.onload = () => {
    setTimeout(() => {
    console.log("Injecting Auto-Login");
    if (document.getElementsByClassName("spa-auth-row").length > 0) {
        console.log("Logging In");
        document.getElementsByClassName("spa-auth-row")[1].children[0].children[0].click()
    }
}, 500)
}


