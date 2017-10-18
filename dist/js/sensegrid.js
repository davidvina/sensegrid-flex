// get data from senseGrid framework
function getSenseGridData() {

  var senseGridData = window.getComputedStyle(
      document.querySelector('html'), ':after')   // selector
    .getPropertyValue('content')                  // nombre propiedad Css
    .replace(/^(")|(\\)|(")$/g, '');              // normalize string

  // convert to object
  senseGridData = JSON.parse(senseGridData);

  return senseGridData;
}

// create elements
function showSenseGridData() {

  var senseGridData = getSenseGridData();

  // loop trought senseGridData object
  for (property in senseGridData) {
    if (senseGridData.hasOwnProperty(property)) {
      console.log(property + ' -> ' + senseGridData[property]);
    }
  }

}

// create elements
function createGrid() {

  var senseGridData = getSenseGridData();

  var containerGrid = document.createElement('DIV');

  // add atributes
  containerGrid.setAttribute('id', 'grid_guide');
  containerGrid.setAttribute('class', 'btn_class');

  for (var i = 0; i < senseGridData.grid; i++) {

    // append elements to contaner
    var column = document.createElement('DIV');
    column.setAttribute('id', 'col_' + i + 1);
    column.setAttribute('class', 'col');
    column.appendChild(document.createTextNode(i + 1));

    containerGrid.appendChild(column);

  }

  document.body.appendChild(containerGrid);
}
