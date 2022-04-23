// Fichier JS servant à implémenter le mode nuit

let state = localStorage.lightState; // au chargement de la page d'accueil

// variables globales
var logo = document.getElementById("logo-icon");
var magGlassIcon = document.getElementById("mag-glass-icon");
var path = window.location.pathname;
var page = path.split("/").pop();
var links = document.getElementsByTagName("a");
var paragraphs = document.getElementsByTagName("p"); 
var checkbox = document.getElementById("night-mode-checkbox");
var articles = document.getElementsByTagName("article"); 

if(state == undefined) { // if state does not exist yet, local storage value will be undefined and let us first switch to night-mode
  state = 0;
}

resetMode(); // set light theme from local storage's value

function resetMode() {
  if(state == 1) { // reset night mode

    document.body.style = "background-color: black;";
    checkbox.checked = true; // slider must be pushed

    if(page == "index.html") {
      logo.src = "icons/monblogdata2-night.png";
      magGlassIcon.src = "icons/loupe-night.png";
    }
    else {
      logo.src = "../icons/monblogdata2-night.png";
      magGlassIcon.src = "../icons/loupe-night.png";
    }
    for (var i = 0; i < links.length; i++) { // put all links to white color
      var link = links[i];
      link.style.color = "white";
    }
    for (var i = 0; i < paragraphs.length; i++) { // put all paragraphs to white color
      var paragraph = paragraphs[i];
      paragraph.style.color = "white";
    }
    for (var i = 0; i < articles.length; i++) { // put all articles to white color
      var article = articles[i];
      article.style.color = "white";
    }
  }
  else { // reset day mode

    document.body.style = "background-color: white;";
    checkbox.checked = false; // slider must be left

    if(page == "index.html") {
      logo.src = "icons/monblogdata2.png";
      magGlassIcon.src = "icons/loupe.png";
    }
    else {
      logo.src = "../icons/monblogdata2.png";
      magGlassIcon.src = "../icons/loupe.png";
    }

    for (var i = 0; i < links.length; i++) { // put all links to black color
      var link = links[i];
      link.style.color = "black";
    }
    for (var i = 0; i < paragraphs.length; i++) { // put all paragraphs to black color
      var paragraph = paragraphs[i];
      paragraph.style.color = "black";
    }
    for (var i = 0; i < articles.length; i++) { // put all articles to black color
      var article = articles[i];
      article.style.color = "black";
    }
  }
}

function nightMode() {

  if(state == 0) { // switch from day mode to night mode

    document.body.style = "background-color: black;";

    if(page == "index.html") {
      logo.src = "icons/monblogdata2-night.png";
      magGlassIcon.src = "icons/loupe-night.png";
    }
    else {
      logo.src = "../icons/monblogdata2-night.png";
      magGlassIcon.src = "../icons/loupe-night.png";
    }
    for (var i = 0; i < links.length; i++) { // put all links to white color
      var link = links[i];
      link.style.color = "white";
    }
    for (var i = 0; i < paragraphs.length; i++) { // put all paragraphs to white color
      var paragraph = paragraphs[i];
      paragraph.style.color = "white";
    }
    
    state = 1;
  }
  else { // switch from night mode to day mode

    document.body.style = "background-color: white;";

    if(page == "index.html") {
      logo.src = "icons/monblogdata2.png";
      magGlassIcon.src = "icons/loupe.png";
    }
    else {
      logo.src = "../icons/monblogdata2.png";
      magGlassIcon.src = "../icons/loupe.png";
    }

    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      link.style.color = "black";
    }
    for (var i = 0; i < paragraphs.length; i++) {
      var paragraph = paragraphs[i];
      paragraph.style.color = "black";
    }

    state = 0;
  }

  localStorage.lightState = state;
}