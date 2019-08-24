//var linkElement = document.createElement("a");
//linkElement.setAttribute("href", "http://rocketseat.com.br");
//linkElement.setAttribute("title", "Site da RocketSeat");

//var textElement = document.createTextNode("Acessar o Site da RocketSeat");
//linkElement.appendChild(textElement);

//var containerElement = document.querySelector("#app");
//containerElement.appendChild(linkElement);
// ----------------------------- //
var boxElement = document.querySelector("#box");
var buttonElement = document.querySelector("#addBox");

buttonElement.onclick = function() {
  var createBox = document.createElement("div");
  createBox.style.width = "100px";
  createBox.style.height = "100px";
  createBox.style.backgroundColor = "#f00";
  createBox.style.margin = "3px";
  createBox.style.display = "inline-block";
  createBox.onmouseover = function() {
    createBox.style.backgroundColor = getRandomColor();
  };
  boxElement.appendChild(createBox);
};
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
//---------------- Exercicio 3 e 4 ----------------//
var listElement = document.querySelector("#name ul");
var inputElement = document.querySelector("#name input");
var buttonNameElement = document.querySelector("#name input");

var nomes = ["Diego", "Gabriel", "Lucas"];

function renderizaNomes() {
  listElement.innerHTML = "";
  for (nome of nomes) {
    var cadaNomes = document.createElement("li");
    var nomeText = document.createTextNode(nome);

    cadaNomes.appendChild(nomeText);
    listElement.appendChild(cadaNomes);
  }
}
renderizaNomes();

function addNome() {
  var nomeText = inputElement.value;

  nomes.push(nomeText);
  inputElement.value = "";
  renderizaNomes();
}
