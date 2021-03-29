function openNav() {
    let viewportWidth = window.innerWidth;

    if (viewportWidth < 480)
        document.getElementsByTagName("nav")[0].style.width = "100%";
    else if (viewportWidth < 800)
        document.getElementsByTagName("nav")[0].style.width = "50%";
    else
        document.getElementsByTagName("nav")[0].style.width = "25%";
}

function closeNav() {
    document.getElementsByTagName("nav")[0].style.width = "0%";
}