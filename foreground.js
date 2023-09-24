window.onload = () => {
    console.log("Injecting Auto-Login");
    if (document.getElementsByClassName("spa-auth-row") != null) {
        console.log("Logging In");
        document.getElementsByClassName("spa-auth-row")[1].children[0].children[0].click()
    }
}


