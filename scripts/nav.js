function openNav() {
    let viewportWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;

    if (viewportWidth < 480)
        document.getElementsByTagName("nav")[0].style.width = "100%";
    else if (viewportWidth < 800)
        document.getElementsByTagName("nav")[0].style.width = "75%";
    else if (viewportWidth < 1200)
        document.getElementsByTagName("nav")[0].style.width = "50%";
    else
        document.getElementsByTagName("nav")[0].style.width = "25%";
}

function closeNav() {
    document.getElementsByTagName("nav")[0].style.width = "0%";
}