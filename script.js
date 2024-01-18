// Menubar
function toggleMenu() {
  var mainMenu = document.getElementById("main-menu");
  if (mainMenu.style.display === "none" || mainMenu.style.display === "") {
    mainMenu.style.display = "flex";
  } else {
    mainMenu.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const textContent = document.getElementById("text-content");
  const prevPageBtn = document.getElementById("prevPageBtn");
  const nextPageBtn = document.getElementById("nextPageBtn");
  const pageNumberContainer = document.getElementById("page-number");
  let currentPage = 0;
  let processedText = [];

  // Background color tool
  const bgColorPicker = document.getElementById("bgColorPicker");

  bgColorPicker.addEventListener("input", applyBackgroundColor);

  function applyBackgroundColor() {
    const textContainer = document.querySelector(".text-container");
    textContainer.style.backgroundColor = bgColorPicker.value;
  }

  // Color pickers for each text style
  const titleColorPicker = document.getElementById("titleColorPicker");
  const subtitleColorPicker = document.getElementById("subtitleColorPicker");
  const italicColorPicker = document.getElementById("italicColorPicker");
  const quoteColorPicker = document.getElementById("quoteColorPicker");
  const boldColorPicker = document.getElementById("boldColorPicker");
  const bodyTextColorPicker = document.getElementById("bodyTextColorPicker");

  // Apply color changes for each text style
  titleColorPicker.addEventListener(
    "input",
    handleColorChange.bind(null, ".title")
  );
  subtitleColorPicker.addEventListener(
    "input",
    handleColorChange.bind(null, ".subtitle")
  );
  italicColorPicker.addEventListener(
    "input",
    handleColorChange.bind(null, ".italic")
  );
  quoteColorPicker.addEventListener(
    "input",
    handleColorChange.bind(null, ".quote")
  );
  boldColorPicker.addEventListener(
    "input",
    handleColorChange.bind(null, ".bold")
  );
  bodyTextColorPicker.addEventListener(
    "input",
    handleColorChange.bind(null, ".body-text")
  );

  function handleColorChange(styleClass, event) {
    const colorPicker = event.target;
    const color = colorPicker.value;
    const elements = document.querySelectorAll(styleClass);

    elements.forEach((element) => {
      element.style.color = color;
    });
  }

  // Title size slider
  const titleSizeSlider = document.getElementById("titleSizeSlider");
  titleSizeSlider.addEventListener("input", handleTitleSizeChange);

  function handleTitleSizeChange() {
    const newSize = titleSizeSlider.value + "px";
    const titles = document.querySelectorAll(".title");
    titles.forEach((title) => {
      title.style.fontSize = newSize;
    });
  }

  // Title font change selection
  const titleFontSelect = document.getElementById("titleFontSelect");
  titleFontSelect.addEventListener("change", handleTitleFontChange);

  function handleTitleFontChange() {
    const selectedFont = titleFontSelect.value;
    const titles = document.querySelectorAll(".title");

    titles.forEach((title) => {
      title.style.fontFamily = selectedFont;
    });
  }

  // Title font weight slider
  const titleFontWeightSlider = document.getElementById(
    "titleFontWeightSlider"
  );
  titleFontWeightSlider.addEventListener("input", handleTitleFontWeightChange);

  function handleTitleFontWeightChange() {
    const newWeight = titleFontWeightSlider.value;
    const titles = document.querySelectorAll(".title");
    titles.forEach((title) => {
      title.style.fontWeight = newWeight;
    });
  }

  // Body size slider
  const bodyTextSizeSlider = document.getElementById("bodyTextSizeSlider");
  bodyTextSizeSlider.addEventListener("input", handleBodyTextSizeChange);

  function handleBodyTextSizeChange() {
    const newSize = bodyTextSizeSlider.value + "px";
    const bodyTexts = document.querySelectorAll(".body-text");
    bodyTexts.forEach((bodyText) => {
      bodyText.style.fontSize = newSize;
    });
  }

  // Body font change selection
  const bodyTextFontSelect = document.getElementById("bodyTextFontSelect");
  bodyTextFontSelect.addEventListener("change", handleBodyTextFontChange);

  function handleBodyTextFontChange() {
    const selectedFont = bodyTextFontSelect.value;
    const bodyTexts = document.querySelectorAll(".body-text");

    bodyTexts.forEach((bodyText) => {
      bodyText.style.fontFamily = selectedFont;
    });
  }

  // Body font weight slider
  const bodyFontWeightSlider = document.getElementById("bodyFontWeightSlider");
  bodyFontWeightSlider.addEventListener("input", handleBodyFontWeightChange);

  function handleBodyFontWeightChange() {
    const newWeight = bodyFontWeightSlider.value;
    const bodies = document.querySelectorAll(".body-text");
    bodies.forEach((body) => {
      body.style.fontWeight = newWeight;
    });
  }

  // Subtitle size slider
  const subtitleSizeSlider = document.getElementById("subtitleSizeSlider");
  subtitleSizeSlider.addEventListener("input", handleSubtitleSizeChange);

  function handleSubtitleSizeChange() {
    const newSize = subtitleSizeSlider.value + "px";
    const subtitles = document.querySelectorAll(".subtitle");
    subtitles.forEach((subtitle) => {
      subtitle.style.fontSize = newSize;
    });
  }

  // Subtitle font change selection
  const subtitleFontSelect = document.getElementById("subtitleFontSelect");
  subtitleFontSelect.addEventListener("change", handleSubtitleFontChange);

  function handleSubtitleFontChange() {
    const selectedFont = subtitleFontSelect.value;
    const subtitles = document.querySelectorAll(".subtitle");

    subtitles.forEach((subtitle) => {
      subtitle.style.fontFamily = selectedFont;
    });
  }

  // Subtitle font weight slider
  const subtitleFontWeightSlider = document.getElementById(
    "subtitleFontWeightSlider"
  );
  subtitleFontWeightSlider.addEventListener(
    "input",
    handleSubtitleFontWeightChange
  );

  function handleSubtitleFontWeightChange() {
    const newWeight = subtitleFontWeightSlider.value;
    const subtitles = document.querySelectorAll(".subtitle");
    subtitles.forEach((subtitle) => {
      subtitle.style.fontWeight = newWeight;
    });
  }

  // Italic size slider
  const italicSizeSlider = document.getElementById("italicSizeSlider");
  italicSizeSlider.addEventListener("input", handleItalicSizeChange);

  function handleItalicSizeChange() {
    const newSize = italicSizeSlider.value + "px";
    const italics = document.querySelectorAll(".italic");
    italics.forEach((italic) => {
      italic.style.fontSize = newSize;
    });
  }

  // Italic font change selection
  const italicFontSelect = document.getElementById("italicFontSelect");
  italicFontSelect.addEventListener("change", handleItalicFontChange);

  function handleItalicFontChange() {
    const selectedFont = italicFontSelect.value;
    const italics = document.querySelectorAll(".italic");

    italics.forEach((italic) => {
      italic.style.fontFamily = selectedFont;
    });
  }

  // Italic font weight slider
  const italicFontWeightSlider = document.getElementById(
    "italicFontWeightSlider"
  );
  italicFontWeightSlider.addEventListener(
    "input",
    handleItalicFontWeightChange
  );

  function handleItalicFontWeightChange() {
    const newWeight = italicFontWeightSlider.value;
    const italics = document.querySelectorAll(".italic");
    italics.forEach((italic) => {
      italic.style.fontWeight = newWeight;
    });
  }

  // Quote size slider
  const quoteSizeSlider = document.getElementById("quoteSizeSlider");
  quoteSizeSlider.addEventListener("input", handleQuoteSizeChange);

  function handleQuoteSizeChange() {
    const newSize = quoteSizeSlider.value + "px";
    const quotes = document.querySelectorAll(".quote");
    quotes.forEach((quote) => {
      quote.style.fontSize = newSize;
    });
  }

  // Quote font change selection
  const quoteFontSelect = document.getElementById("quoteFontSelect");
  quoteFontSelect.addEventListener("change", handleQuoteFontChange);

  function handleQuoteFontChange() {
    const selectedFont = quoteFontSelect.value;
    const quotes = document.querySelectorAll(".quote");

    quotes.forEach((quote) => {
      quote.style.fontFamily = selectedFont;
    });
  }

  // Quote font weight slider
  const quoteFontWeightSlider = document.getElementById(
    "quoteFontWeightSlider"
  );
  quoteFontWeightSlider.addEventListener("input", handleQuoteFontWeightChange);

  function handleQuoteFontWeightChange() {
    const newWeight = quoteFontWeightSlider.value;
    const quotes = document.querySelectorAll(".quote");
    quotes.forEach((quote) => {
      quote.style.fontWeight = newWeight;
    });
  }

  // Bold size slider
  const boldSizeSlider = document.getElementById("boldSizeSlider");
  boldSizeSlider.addEventListener("input", handleBoldSizeChange);

  function handleBoldSizeChange() {
    const newSize = boldSizeSlider.value + "px";
    const bolds = document.querySelectorAll(".bold");
    bolds.forEach((bold) => {
      bold.style.fontSize = newSize;
    });
  }

  // Bold font change selection
  const boldFontSelect = document.getElementById("boldFontSelect");
  boldFontSelect.addEventListener("change", handleBoldFontChange);

  function handleBoldFontChange() {
    const selectedFont = boldFontSelect.value;
    const bolds = document.querySelectorAll(".bold");

    bolds.forEach((bold) => {
      bold.style.fontFamily = selectedFont;
    });
  }

  // Bold font weight slider
  const boldFontWeightSlider = document.getElementById("boldFontWeightSlider");
  boldFontWeightSlider.addEventListener("input", handleBoldFontWeightChange);

  function handleBoldFontWeightChange() {
    const newWeight = boldFontWeightSlider.value;
    const bolds = document.querySelectorAll(".bold");
    bolds.forEach((bold) => {
      bold.style.fontWeight = newWeight;
    });
  }

  // Load Text Content
  loadTextFromFile("ShadowBook.txt");

  // Function to process text and split it into pages
  function processText(text) {
    const paragraphs = text.split("\n\n");
    let currentPageContent = "";

    paragraphs.forEach((paragraph) => {
      const lines = paragraph.split("\n");
      lines.forEach((line) => {
        if (line.trim() === "[page-break]") {
          processedText.push(currentPageContent);
          currentPageContent = "";
        } else {
          const styledLine = applyStyles(line);
          currentPageContent += styledLine + "<br>";
        }
      });
      currentPageContent += "<br>";
    });

    if (currentPageContent.trim() !== "") {
      processedText.push(currentPageContent);
    }
  }

  // Function to update text content based on the current page
  function updateTextContent() {
    const pages = processedText.length;
    if (currentPage >= 0 && currentPage < pages) {
      textContent.innerHTML = processedText[currentPage];
      updatePageNumber();
      document.getElementById("pageSlider").value = currentPage;
    }
  }

  // Function to update the displayed page number
  function updatePageNumber() {
    pageNumberContainer.textContent = currentPage + 1;
    console.log(`Page number updated to: ${currentPage + 1}`);
  }

  // Event listener for the previous page button
  prevPageBtn.addEventListener("click", function () {
    currentPage = Math.max(currentPage - 1, 0);
    updateTextContent();
  });

  // Event listener for the next page button
  nextPageBtn.addEventListener("click", function () {
    const pages = processedText.length;
    currentPage = Math.min(currentPage + 1, pages - 1);
    updateTextContent();
  });

  // Function to apply styles to text
  function applyStyles(line) {
    let styledLine = line;
    let styleClass = "";

    if (line.startsWith("[title]")) {
      styleClass = "title";
      styledLine = line.replace("[title]", "");
    } else if (line.startsWith("[subtitle]")) {
      styleClass = "subtitle";
      styledLine = line.replace("[subtitle]", "");
    } else if (line.startsWith("[italic]")) {
      styleClass = "italic";
      styledLine = line.replace("[italic]", "");
    } else if (line.startsWith("[quote]")) {
      styleClass = "quote";
      styledLine = line.replace("[quote]", "");
    } else if (line.startsWith("[bold]")) {
      styleClass = "bold";
      styledLine = line.replace("[bold]", "");
    } else {
      styleClass = "body-text";
    }

    return `<span class="${styleClass}">${styledLine}</span>`;
  }

  // Function to load text from a file
  function loadTextFromFile(filename) {
    fetch(filename)
      .then((response) => response.text())
      .then((text) => {
        processText(text);
        updateTextContent();
      })
      .catch((error) => console.error("Error loading text:", error));
  }

  // Function to handle slider change events
  function handleSliderChange() {
    const sliderValue = document.getElementById("pageSlider").value;
    currentPage = parseInt(sliderValue, 10);
    updateTextContent();
  }

  // Assign the event listener to the input event of the page slider
  document
    .getElementById("pageSlider")
    .addEventListener("input", handleSliderChange);

  // Event listener for the generate PDF button
  document
    .getElementById("generatePdfBtn")
    .addEventListener("click", function () {
      generatePdf(document.getElementById("a4-container"));
    });

  // Event listener for the generate PDF for all pages button
  const generateAllPagesPdfBtn = document.getElementById(
    "generateAllPagesPdfBtn"
  );
  if (generateAllPagesPdfBtn) {
    generateAllPagesPdfBtn.addEventListener("click", function () {
      const allPagesContainer = document.createElement("div");

      // Append content of all pages to the container
      processedText.forEach((pageContent, index) => {
        const pageContainer = document.createElement("div");
        pageContainer.innerHTML = pageContent;
        allPagesContainer.appendChild(pageContainer);
      });

      // Generate PDF for all pages
      generatePdf(allPagesContainer);
    });
  }

  function generatePdf(element) {
    html2pdf(element, {
      margin: 10,
      filename: "personal_page.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    });
  }
});
