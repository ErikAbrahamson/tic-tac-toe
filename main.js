var body = document.getElementsByTagName('body')[0];
var li = document.getElementsByTagName('li');

function createElement(parent, element) {
  var newElement = document.createElement(element);
  parent.appendChild(newElement);

//to create multiple elements, use below for loop
  // for (var i = 0; i < length; i++) {
  //   var createLi = document.createElement('li');
  //   createUl.appendChild(createLi);
  // }
}

function addTextElement(text, node) {
  var textNode = document.createTextNode(text);
  node.appendChild(textNode);
}

function changeElementColor(bgcolor, node) {
  node.style.backgroundColor = bgcolor;
}

function addClick(node) {
  node.addEventListener('click', function() {
    console.log(node.innerText);
  });
}

