function displayList() {
  const fruitsListWrap = document.getElementById("fruits");
  const fruitsList = fruitsListWrap.childNodes;

  var replaceListItem = "";

  for (const fruits of fruitsList) {
    if (fruits.tagName === "P") {
      replaceListItem += "<li>" + fruits.textContent + "</li>";
    }
  }
  fruitsListWrap.innerHTML = "<ul>" + replaceListItem + "</ul>";
}
