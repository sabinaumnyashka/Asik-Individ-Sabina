
"use strict";


let count = 0;

const counter = document.getElementById("counter");

function updateCounter() {
    counter.textContent = count;
}

document.getElementById("increase").addEventListener("click", function () {
    count++;
    updateCounter();
});

document.getElementById("decrease").addEventListener("click", function () {
    if (count > 0) {
        count--;
    }

    updateCounter();
});

document.getElementById("reset").addEventListener("click", function () {
    count = 0;
    updateCounter();
});



const textInput = document.getElementById("textInput");
const preview = document.getElementById("preview");
const charCount = document.getElementById("charCount");
const clearText = document.getElementById("clearText");

textInput.addEventListener("input", function () {
    if (textInput.value === "") {
        preview.textContent = "Your text will appear here";
    } else {
        preview.textContent = textInput.value;
    }

    charCount.textContent = textInput.value.length;
});

clearText.addEventListener("click", function () {
    textInput.value = "";
    preview.textContent = "Your text will appear here";
    charCount.textContent = 0;
    textInput.focus();
});



const imageSelect = document.getElementById("imageSelect");
const landscapeImage = document.getElementById("landscapeImage");
const imageCaption = document.getElementById("imageCaption");

const landscapes = {
    mountains: {
        src: "images/mountains.jpg",
        alt: "Mountains under the sky",
        caption: "Mountains"
    },

    ocean: {
        src: "images/ocean.jpg",
        alt: "Blue ocean and its waves",
        caption: "Ocean"
    },

    forest: {
        src: "images/forest.jpg",
        alt: "Green trees in a forest",
        caption: "Forest"
    }
};

function updateImage() {
    const selected = landscapes[imageSelect.value];

    landscapeImage.src = selected.src;
    landscapeImage.alt = selected.alt;
    imageCaption.textContent = selected.caption;
}

imageSelect.addEventListener("change", updateImage);



const keyboardInput = document.getElementById("keyboardInput");
const keyStatus = document.getElementById("keyStatus");
const keyResult = document.getElementById("keyResult");

keyboardInput.addEventListener("keydown", function (event) {
    keyStatus.textContent = "Key pressed: " + event.key;

    if (event.key === "Enter") {
        event.preventDefault();
        keyResult.textContent = keyboardInput.value;
    }

    if (event.key === "Escape") {
        keyboardInput.value = "";
        keyResult.textContent = "";
        keyStatus.textContent = "Input and result cleared.";
    }
});



const focusCard = document.getElementById("focusCard");
const focusInstruction = document.getElementById("focusInstruction");

function highlightCard() {
    focusCard.classList.add("highlight");
    focusInstruction.textContent = "The card is highlighted!";
}

function removeHighlight() {
    focusCard.classList.remove("highlight");
    focusInstruction.textContent =
        "Hover over the card or focus it using the keyboard.";
}

focusCard.addEventListener("mouseenter", highlightCard);
focusCard.addEventListener("mouseleave", removeHighlight);

focusCard.addEventListener("focus", highlightCard);
focusCard.addEventListener("blur", removeHighlight);
