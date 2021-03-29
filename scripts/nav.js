function openNav() {
    if (navigator.userAgent.indexOf("Mobi") > -1)
        document.getElementsByTagName("nav")[0].style.width = "100%";
    else
        document.getElementsByTagName("nav")[0].style.width = "25%";
}

function closeNav() {
    document.getElementsByTagName("nav")[0].style.width = "0%";
}