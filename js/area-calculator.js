function calculateTriangleArea() {
  const Base = getInputValue("triangle-base");
  const Height = getInputValue("triangle-height");

  //   console.log(Base);
  //   console.log(Height);

  const Area = 0.5 * Base * Height;
  console.log(Area);

  // Show Triangle Area
  const areaSpan = document.getElementById("triangle-area");
  areaSpan.innerText = Area;
}

function calculateRectangleArea() {
  // get rectangle width
  const Width = getInputValue("rectangle-width");
  const Length = getInputValue("rectangle-length");

  // console.log(Width);
  // console.log(Length);

  // calculate area
  const Area = Width * Length;

  const areaSpan = document.getElementById('rectangle-area');
  areaSpan.innerText = Area;
}
