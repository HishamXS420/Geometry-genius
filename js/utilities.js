function getInputValue(elementId){
    // get triangle base value
    const Field = document.getElementById(elementId);
    const FieldText = Field.value;
    const FieldValue = parseFloat(FieldText)
    
    return FieldValue;
}