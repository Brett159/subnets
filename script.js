function generateNumbers(event) {
    event.preventDefault();
  
    var routerDropdown = document.getElementById("router");
    var devicesDropdown = document.getElementById("devices");
    var resultDiv = document.getElementById("result");
  
    var routerValue = parseInt(routerDropdown.value);
    var devicesValue = parseInt(devicesDropdown.value);
  
    var routers = Array.from({ length: routerValue }, () => 2);
    var devices = [];
  
    var totalSum = 0;
    var remainingSum = 255 - routerValue * 2;
  
    while (devices.length < devicesValue && remainingSum > 0) {
      var randomNumber = Math.floor(Math.random() * Math.min(remainingSum, 128)) + 1;
      devices.push(randomNumber);
      totalSum += randomNumber;
      remainingSum -= randomNumber;
    }
  
    if (devices.length < devicesValue) {
      resultDiv.textContent = "Unable to generate numbers within the limit. Please select fewer devices or routers.";
    } else {
      var resultHTML = "Routers: ";
      routers.forEach(function (router) {
        resultHTML += '<div class="box">' + router + '</div>';
      });
      resultHTML += "<br>Devices: ";
      devices.forEach(function (device) {
        resultHTML += '<div class="box">' + device + '</div>';
      });
      resultDiv.innerHTML = resultHTML;
    }
  }

  
  // JavaScript code for generating numbers

// ...

// Add event listeners for table cells
var tableCells = document.querySelectorAll("#inputTable td[contenteditable='true']");
tableCells.forEach(function(cell) {
  cell.addEventListener("mousedown", handleCellMouseDown);
  cell.addEventListener("mouseenter", handleCellMouseEnter);
});

// Variables to track the selection
var isMouseDown = false;
var selectedCells = [];

// Function to handle cell mousedown event
function handleCellMouseDown(event) {
  isMouseDown = true;
  toggleCellSelection(this);
  event.preventDefault();
}

// Function to handle cell mouseenter event
function handleCellMouseEnter(event) {
  if (isMouseDown) {
    toggleCellSelection(this);
  }
}

// Function to toggle cell selection
function toggleCellSelection(cell) {
  if (selectedCells.includes(cell)) {
    // Remove from selection
    selectedCells = selectedCells.filter(function(selectedCell) {
      return selectedCell !== cell;
    });
    cell.classList.remove("selected");
  } else {
    // Add to selection
    selectedCells.push(cell);
    cell.classList.add("selected");
  }
}

// Function to clear the selected cells
function clearSelectedCells() {
  selectedCells.forEach(function(cell) {
    cell.textContent = "";
  });
}

// Add event listener to the document for mouseup event
document.addEventListener("mouseup", function() {
  isMouseDown = false;
});

// Add event listener to the document for keydown event
document.addEventListener("keydown", function(event) {
  if (event.key === "Delete" || event.key === "Backspace") {
    clearSelectedCells();
  }
});
