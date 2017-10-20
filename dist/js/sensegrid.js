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
function showGrid() {

  var senseGridData = getSenseGridData();

  var wrapperGrid = document.createElement('DIV');
  wrapperGrid.setAttribute('class', 'show-grid-wrapper');
  wrapperGrid.setAttribute('id', 'show-grid');

  var containerGrid = document.createElement('DIV');
  containerGrid.setAttribute('class', 'show-grid-container');
  wrapperGrid.appendChild(containerGrid);

  for (var i = 0; i < senseGridData.grid; i++) {

    // append elements to contaner
    var column = document.createElement('DIV');

    //column.setAttribute('id', 'col_' + (i + 1));
    column.setAttribute('class', 'show-col');
    column.appendChild(document.createTextNode(i + 1));

    containerGrid.appendChild(column);

  }

  document.body.appendChild(wrapperGrid);
}

function showMediaQueries() {
  var body = document.body;
  if (!body.classList.contains('show-media-queries')) {
    body.className = 'show-media-queries';
    return 'Show media query breackpoints';
  } else {
    body.classList.remove('show-media-queries');
    return 'Hide media query breackpoints';
  }
};
