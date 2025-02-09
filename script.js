// Typewriter effect for the intro text with cursor
let i = 0;
let text = "Hi, I'm A Web developer and MCA student....";
let speed = 100;

function typeWriter() {
    // If the text isn't completely typed out, continue typing
    if (i < text.length) {
        document.getElementById("typing").innerHTML = text.substring(0, i) + "<span id='cursor'>|</span>";
        i++;
        setTimeout(typeWriter, speed);
    } else {
        // Once text is fully typed, reset and start typing again
        setTimeout(function() {
            i = 0;
            document.getElementById("typing").innerHTML = "I am a Web Developer<span id='cursor'>|</span>";
            typeWriter();
        }, 1000); // Delay before restarting the typing effect
    }
}

window.onload = typeWriter;
