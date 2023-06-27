const translateBtn = document.querySelector("#btn");
const inputSentence = document.querySelector("#inputSentence");
const outputSentence = document.querySelector("#outputDiv");

// let serverURL = "https://api.funtranslations.com/translate/navi.json";
let serverURL = "https://api.funtranslations.com/translate/valyrian.json";
function constructURL(text) {
  return serverURL + "?" + "text=" + text;
}

function errorHandler() {
  alert("something went wrong");
}

function clickHandler() {
  let inputText = inputSentence.value;

  fetch(constructURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      let translatedText = json.contents.translated;
      outputSentence.innerText = translatedText;
    })
    .catch(errorHandler);
}

translateBtn.addEventListener("click", clickHandler);
