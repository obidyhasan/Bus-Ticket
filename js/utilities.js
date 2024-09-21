function getInnerTextById(id) {
  return parseFloat(document.getElementById(id).innerText);
}

function setInnerTextById(id, text) {
  document.getElementById(id).innerText = text;
}
