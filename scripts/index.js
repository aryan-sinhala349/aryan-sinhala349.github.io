//All the possible taglines
const taglines = 
[
    "Student",
    "Developer"
];

const timeBetweenTypingChars = 60;
const timeBetweenDeletingChars = 30;

const timeBetweenTypingWords = 1000;
const timeBetweenDeletingWords = 2500;

//Current tagline being processed
let currentTagline = 0;

//Index of the character being processed
let currentCharacter = 0;

//Holds the handle returned from setInterval
let intervalValue;

//Element that holds the tagline
const taglineElement = document.querySelector("#tagline");

//Element that holds the cursor
const cursorElement = document.querySelector("#cursor");

//Implements typing effect
function Type()
{
    //Get the substring with 1 character added
    let text = taglines[currentTagline].substring(0, currentCharacter + 1);
    taglineElement.innerHTML = text;
    currentCharacter++;

    //If the full sentence has been displayed then start to delete the sentence after some delay
    if (text === taglines[currentTagline])
    {
        clearInterval(intervalValue);
        setTimeout(() =>
        {
            intervalValue = setInterval(Delete, timeBetweenDeletingChars);
        }, timeBetweenDeletingWords);
    }
}

//Implements deleting effect
function Delete()
{
    //Get substring with 1 character deleted
    var text = taglines[currentTagline].substring(0, currentCharacter - 1);
    taglineElement.innerHTML = text;
    currentCharacter--;

    //If the sentence has been deleted then start to display the next sentence
    if (text === "")
    {
        clearInterval(intervalValue);

        //Display the next sentence
        currentTagline++;
        currentTagline %= taglines.length;

        currentCharacter = 0;

        //Start to display the next sentence
        setTimeout(() => 
        {
            intervalValue = setInterval(Type, timeBetweenTypingChars);
        }, timeBetweenTypingWords);
    }
}

//Start the typing effect on load
intervalValue = setInterval(Type, timeBetweenTypingChars);