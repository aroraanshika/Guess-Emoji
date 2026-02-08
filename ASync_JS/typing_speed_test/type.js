const sentences = `The quick brown fox jumps over the lazy dog . Sphinx of black quartz, judge my vow . Pack my box with five dozen liquor jugs . How vexingly quick daft zebras jump !`;

const sentenceElement = document.getElementById("sentence");
const inputElement = document.getElementById("input");
const startButton = document.getElementById("start-btn");
const timerElement = document.getElementById("timer");
const speedElement = document.getElementById("speed");
const accuracyElement = document.getElementById("accuracy");
const resultElement = document.getElementById("result");
const retryButton = document.getElementById("retry-btn");

let time = 30;

startButton.addEventListener("click",()=>{
    inputElement.disabled = false;
    inputElement.focus();
    sentenceElement.textContent= sentences;
    startButton.disabled = true;
    timerElement.textContent = time;

    interval = setInterval(() => {
        time--;
        timerElement.textContent = time;

        if (time === 0) {
            clearInterval(interval);

        resultElement.style.display = "block";
        inputElement.disabled = true;
         startButton.disabled = true;
        }
    }, 1000);

});


retryButton.addEventListener("click", () => {
    // Enable start button
    startButton.disabled = false;

    // Hide result div
    resultElement.style.display = "none";

    // Reset input
    inputElement.value = "";
    inputElement.disabled = true;

    // Reset timer
    time = 30;
    timerElement.textContent = "00:30";
});



