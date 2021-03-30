function openNav() {
    //Get the aspect ratio of the viewport
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

    const aspectRatio = vw / vh;

    //If the aspect ratio is less than 1 the device is in portrait mode, so fill the entire screen
    if (aspectRatio < 1)
        document.getElementsByTagName("nav")[0].style.width = "100%";
    //Otherwise the viewport is either perfectly square or in landscape mode, so only fill 25% of the screen
    else
        document.getElementsByTagName("nav")[0].style.width = "25%";
}

function closeNav() {
    document.getElementsByTagName("nav")[0].style.width = "0%";
}