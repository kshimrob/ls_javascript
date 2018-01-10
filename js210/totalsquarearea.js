// Find the area of each rectangle => returns new array (map)
// Add each of the areas together => returns single value (reduce)

function calculateRecAreas(rectangles) {
  var rectangleAreas = rectangles.map(function (dimensions){
    return dimensions[0] * dimensions[1];
  })
  return rectangleAreas;
}

function add(previousValue, element) {
  return previousValue + element;
}

function totalArea(shapes) {
  var squares = shapes.filter(function (rectangle){
    return rectangle[0] === rectangle[1];
  });
  var areas = calculateRecAreas(squares);
  return areas.reduce(add);
}

var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

totalArea(rectangles);  