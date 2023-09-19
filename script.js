const tongueTwisters = [
    { text: "How can a clam cram in a clean cream can?", level: "Easy" },
    { text: "Fuzzy Wuzzy was a bear. Fuzzy Wuzzy had no hair.", level: "Moderate" },
    { text: "She sells seashells by the seashore. The shells she sells are surely seashells.", level: "Challenging" },
    { text: "Peter Piper picked a peck of pickled peppers.", level: "Difficult" }
];

let currentIndex = 0;
const twisterElement = document.getElementById("tongueTwister");


function displayTwister(index) {
    const twister = tongueTwisters[index];
    if (twister) {
        twisterElement.textContent = `${twister.text} (Difficulty: ${twister.level})`;
    }
}


displayTwister(currentIndex);


document.getElementById("nextButton").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % tongueTwisters.length;
    displayTwister(currentIndex);
});

document.getElementById("prevButton").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + tongueTwisters.length) % tongueTwisters.length;
    displayTwister(currentIndex);
});