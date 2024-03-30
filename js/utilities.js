// Reusable Input Value getter

function getInputValue(elementId) {
  // get triangle base value
  const Field = document.getElementById(elementId);
  const FieldText = Field.value;
  const FieldValue = parseFloat(FieldText);

  return FieldValue;
}

// Reusable set span, p , div, etc text
function setElementInnerText(elementId, Area) {
  const element = document.getElementById(elementId);
  element.innerText = Area;
}

