const lyrics =
    ["I wrote a note",
        "Addressed to my mother, short and sweet",
        "And it reads, \"I've got to go\"",
        "There's so much of life I haven't seen",
        "I swear there's a planet out there, a heavenly home",
        "Where I'll carve my name in the stone",
        "Where I can breathe in clean air",
        "There's no need for a show",
        "There's no wars fought for diamonds and gold",
        "So I'll be gone when you wake up tomorrow",
        "I'll be just another blip amongst the stars",
        "Had to pack light or I would bring you along",
        "Wish mе luck on my long flight to Mars",
        "Wish me luck on my long flight to Mars",
        "Time will move slow",
        "Slow in this quiеt empty sea",
        "A bird's eye view",
        "My younger brother turning thirty-three",
        "Now he's older than me",
        "But I know there's somewhere out there",
        "Where I'll feel at home",
        "A place where the bluejays roam",
        "Yes, I know there's somewhere out there",
        "This world is so cold, I get tired of layin' here alone",
        "So I'll be gone when you wake up tomorrow",
        "I'll be just another blip amongst the stars",
        "Had to pack light or I would bring you along",
        "Wish me luck on my long flight to Mars",
        "Wish me luck on my long flight to Mars",
        "Wish me luck on my long flight to Mars"];
const delay = (ms) => new Promise((resolve, _) => setTimeout(resolve, ms));

displayLyrics();
async function displayLyrics() {
    const container = document.getElementById("lyrics-container");
    let elems = "";
    for (const line of lyrics) {
        const words = line.split(" ");
        for (const word of words) {
            elems += `<span class="word">${word}</span>`;
        }
        container.innerHTML += `<div class="line">${elems}<div/>`;
        elems = "";
    }

    const divElements = container.querySelectorAll('.line');

    for (const div of divElements) {
        const spanElements = div.querySelectorAll('.word');
        for (const span of spanElements) {
            span.classList.add("visible");
            await delay(600);
        }
        div.classList.add("invisible");
        await delay(700);
        div.classList.add("hide");
    }

}