// First, get the PDF.js library version
const pdfjsVersion = pdfjsLib.version;

// Next, create the URL for the worker using the library version
const workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsVersion}/pdf.worker.min.js`;

// Then, initialize the worker using the workerSrc URL
pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc;
// Define the URL of the PDF file and the page numbers to render
const pdfUrl = "../file.pdf";
const firstPageNumber = 1;
const secondPageNumber = 2;

// Create canvas elements to render the PDF pages
const canvas1 = document.createElement("canvas");
const canvas2 = document.createElement("canvas");

// Get the contexts of the canvas elements
const context1 = canvas1.getContext("2d");
const context2 = canvas2.getContext("2d");

// Load the PDF file and render the first page on canvas1
pdfjsLib.getDocument(pdfUrl).promise.then(function (pdf) {
  pdf.getPage(firstPageNumber).then(function (page) {
    const viewport = page.getViewport({ scale: 1 });
    canvas1.height = viewport.height;
    canvas1.width = viewport.width;

    const renderContext = {
      canvasContext: context1,
      viewport: viewport,
    };
    page.render(renderContext);
  });
});

// Load the PDF file and render the second page on canvas2
pdfjsLib.getDocument(pdfUrl).promise.then(function (pdf) {
  pdf.getPage(secondPageNumber).then(function (page) {
    const viewport = page.getViewport({ scale: 1 });
    canvas2.height = viewport.height;
    canvas2.width = viewport.width;

    const renderContext = {
      canvasContext: context2,
      viewport: viewport,
    };
    page.render(renderContext);
  });
});

let custom = document.querySelector(".custom_pdf");
// Append the canvas elements to the DOM
custom.appendChild(canvas1);
custom.appendChild(canvas2);
