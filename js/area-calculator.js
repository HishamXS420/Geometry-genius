function calculateTriangleArea() {
  const Base = getInputValue("triangle-base");
  const Height = getInputValue("triangle-height");

  //   console.log(Base);
  //   console.log(Height);

  const Area = 0.5 * Base * Height;
  console.log(Area);

  // Show Triangle Area
  setElementInnerText("triangle-area", Area);
}

function calculateRectangleArea() {
  // get rectangle width
  const Width = getInputValue("rectangle-width");
  const Length = getInputValue("rectangle-length");

  // console.log(Width);
  // console.log(Length);

  // calculate area
  const Area = Width * Length;

  setElementInnerText("rectangle-area", Area);
}

function calculateParallelogramArea() {
  const Base = getInputValue("parallelogram-base");
  const Height = getInputValue("parallelogram-height");

  //    console.log(Base);
  //     console.log(Height);

  const Area = Base * Height;

  setElementInnerText("parallelogram-area", Area);
}

function calculateEllipseArea() {
  const majorRadius = getInputValue("ellipse-major-radius");
  const minorRadius = getInputValue("ellipse-minor-radius");

  const Area = 3.1416 * majorRadius * minorRadius;

  setElementInnerText('ellipse-area', Area)
}

function calculateRhombusArea(){
    const firstDiagonal = getInputValue("rhombus-first-diagonal");
  const secondDiagonal = getInputValue("rhombus-second-diagonal");

  const Area = 0.5 * firstDiagonal * secondDiagonal;
  setElementInnerText('rhombus-area', Area);

}

function calculatePentagonArea(){
    const perimeter = getInputValue("pentagon-perimeter");
    const apothem = getInputValue("pentagon-apothem");

    const Area = 0.5 * perimeter * apothem;
  setElementInnerText('pentagon-area', Area);

}