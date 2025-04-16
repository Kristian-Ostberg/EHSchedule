function changeTheme() {
    
    document.getElementById("nav").classList.toggle("navbar-default");
    document.getElementById("nav").classList.toggle("navbar-inverse");
    
    if(document.getElementById("html").getAttribute("data-theme") == "light") {
        document.getElementById("html").setAttribute("data-theme", "dark");
        document.getElementById("themeIcon").innerHTML = "brightness_5";
        localStorage.setItem("themeChoice", "dark");
    }
    else {
        document.getElementById("html").setAttribute("data-theme", "light");
        document.getElementById("themeIcon").innerHTML = "brightness_4";
        localStorage.setItem("themeChoice", "light");
    }
}

if(localStorage.getItem("themeChoice") == "dark") {
    changeTheme();
}