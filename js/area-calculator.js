function calculateTriangleArea() {
  const Base = getInputValue("triangle-base");
  const Height = getInputValue("triangle-height");

  // Validate input
  if (isNaN(Base && Height)) {
    document.getElementById("triangle-base").value = '';
    document.getElementById("triangle-height").value = '';
    alert('Please insert a number');
   
    return;
  }

  const Area = 0.5 * Base * Height;
  console.log(Area);

  const areaTwoDecimal = Area.toFixed(2);
  // Show Triangle Area
  setElementInnerText("triangle-area", areaTwoDecimal);
}

function calculateRectangleArea() {
  // get rectangle width
  const Width = getInputValue("rectangle-width");
  const Length = getInputValue("rectangle-length");

  // Validate input
  if (isNaN(Width && Length)) {
    document.getElementById("rectangle-width").value = '';
    document.getElementById("rectangle-length").value = '';
    alert('Please insert a number');
    return;
  }

  // calculate area
  const Area = Width * Length;

  const areaTwoDecimal = Area.toFixed(2);
  setElementInnerText("rectangle-area", areaTwoDecimal);
}

function calculateParallelogramArea() {
  const Base = getInputValue("parallelogram-base");
  const Height = getInputValue("parallelogram-height");

 // Validate input
 if (isNaN(Base && Height)) {
    document.getElementById("parallelogram-base").value = '';
    document.getElementById("parallelogram-height").value = '';
    alert('Please insert a number');
    return;
  }

  const Area = Base * Height;

  setElementInnerText("parallelogram-area", Area);
}

function calculateEllipseArea() {
  const majorRadius = getInputValue("ellipse-major-radius");
  const minorRadius = getInputValue("ellipse-minor-radius");

     // Validate input
 if (isNaN(majorRadius && minorRadius)) {
    document.getElementById("ellipse-major-radius").value = '';
    document.getElementById("ellipse-minor-radius").value = '';
    alert('Please insert a number');
    return;
  }

  const Area = 3.1416 * majorRadius * minorRadius;
  const areaTwoDecimal = Area.toFixed(2);
  setElementInnerText("ellipse-area", areaTwoDecimal);
}

function calculateRhombusArea() {
  const firstDiagonal = getInputValue("rhombus-first-diagonal");
  const secondDiagonal = getInputValue("rhombus-second-diagonal");

         // Validate input
 if (isNaN(firstDiagonal && secondDiagonal)) {
    document.getElementById("rhombus-first-diagonal").value = '';
    document.getElementById("rhombus-second-diagonal").value = '';
    alert('Please insert a number');
    return;
  }

  const Area = 0.5 * firstDiagonal * secondDiagonal;
  const areaTwoDecimal = Area.toFixed(2);
  setElementInnerText("rhombus-area", areaTwoDecimal);
}

function calculatePentagonArea() {
  const perimeter = getInputValue("pentagon-perimeter");
  const apothem = getInputValue("pentagon-apothem");

          // Validate input
 if (isNaN(perimeter && apothem)) {
    document.getElementById("pentagon-perimeter").value = '';
    document.getElementById("pentagon-apothem").value = '';
    alert('Please insert a number');
    return;
  }

  const Area = 0.5 * perimeter * apothem;
  areaTwoDecimal = Area.toFixed(2);
  setElementInnerText("pentagon-area", areaTwoDecimal);
}

// Data Validation

// 1. Set the proper type of the input field
// 2. Check type using typeof
// 3. isNaN() function to check if a text is Not a number or not
