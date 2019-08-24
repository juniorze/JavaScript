//------------------- Exercício 1 e 2 -------------------//
function verificaIdade(idade) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      return idade >= 18 ? resolve() : reject();
    }, 2000);
  });
}
verificaIdade(14)
  .then(function() {
    var pElement = document.getElementById("idade");
    var textElement = document.createTextNode("O usuário é maior de idade!");
    pElement.appendChild(textElement);
  })
  .catch(function() {
    var pElement = document.getElementById("idade");
    var textElement = document.createTextNode("O usuário é menor de idade!");
    pElement.appendChild(textElement);
  });
//--------------------- Exercício 3 ---------------------//
var ulElement = document.querySelector("#github ul");
var inputElement = document.querySelector("#github input");

function renderizaRepositorios(repositorios) {
  ulElement.innerHTML = "";
  for (repo of repositorios) {
    var liElement = document.createElement("li");
    var repoElement = document.createTextNode(repo.name);

    liElement.style.color = "#32CD32";
    liElement.style.listStyle = "none";
    liElement.appendChild(repoElement);
    ulElement.appendChild(liElement);
  }
}
function UserNotFound(loading) {
  ulElement.innerHTML = "";
  var textElement = document.createTextNode(
    "Houve um erro, parece que o usuário não existe!"
  );
  var liElement = document.createElement("li");

  liElement.style.color = "#F00000";
  liElement.style.listStyle = "none";
  liElement.appendChild(textElement);
  ulElement.appendChild(liElement);
}

function screenLoading(loading) {
  ulElement.innerHTML = "";
  var textElement = document.createTextNode("Carregando...");
  var loadingElement = document.createElement("li");

  loadingElement.style.color = "#FFA500";
  loadingElement.style.listStyle = "none";
  loadingElement.appendChild(textElement);
  ulElement.appendChild(loadingElement);
}

function userRepositories() {
  ulElement.innerHTML = "";
  var user = inputElement.value;

  if (!user) return;

  screenLoading();

  axios
    .get("https://api.github.com/users/" + user + "/repos")
    .then(function(response) {
      ulElement.innerHTML = "";
      renderizaRepositorios(response.data);
    })
    .catch(function(error) {
      UserNotFound();
    });
}
