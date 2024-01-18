// menubar
function toggleMenu() {
  var menu = document.getElementById("main-menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// function to change font every 2 seconds
function changeFontPeriodically() {
  var h1Element = document.getElementById("changingText");

  setInterval(function () {
    // List of font-family options to cycle through
    var fontOptions = [
      "'Courier New', monospace",
      "'Georgia', serif",
      "'Impact', sans-serif",
      "'Lucida Console', monospace",
      "'Trebuchet MS', sans-serif",
    ];

    // Randomly select a font from the list
    var randomFont =
      fontOptions[Math.floor(Math.random() * fontOptions.length)];

    // Apply the selected font to the h1 element
    h1Element.style.fontFamily = randomFont;
  }, 2000); // Change font every 2 seconds (2000 milliseconds)
}

// Call the function to start changing fonts
changeFontPeriodically();
