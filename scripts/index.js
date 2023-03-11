const isMobile = () =>
{
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];
    
    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
};

const blobElement = document.getElementById("blob");
const nameElement = document.getElementById("name");
const subtitleElement = document.getElementById("subtitle");

const typingDelay = 100;
const newlineDelay = 500;

const nameText = "Aryan Sinha";
const subtitleText = "Computer Science Student"

let i = 0;

function typeName()
{
    nameElement.innerHTML = nameText.substring(0, i);
    i++;

    while (nameText.charAt(i) == ' ')
        i++;

    if (i <= nameText.length)
        setTimeout(typeName, typingDelay);
    else
    {
        i = 0;
        setTimeout(() =>
        {
            nameElement.classList.remove("typing");
            subtitleElement.classList.add("typing");
            typeSubtitle();
        }, newlineDelay);
    }
}

function typeSubtitle()
{
    subtitleElement.innerHTML = subtitleText.substring(0, i);
    i++;

    while (subtitleText.charAt(i) == ' ')
        i++;

    if (i <= subtitleText.length)
        setTimeout(typeSubtitle, typingDelay);
}

document.onmousemove = (event) =>
{
    if (!isMobile())
    {
        blobElement.animate(
            {
                left: `${event.clientX}px`,
                top: `${event.clientY}px`
            },
            { duration: 250, fill: "forwards" });
    }
};

typeName();