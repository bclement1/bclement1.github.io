
/*
	Fichier script.js
	Ce fichier contient les redirections du header et permet le fonctionnement de la page de recherche en lui stockant des informations localement.
*/

let menuIsOpen = 1;

function to_linkedin() {

	// Cette fonction renvoie sur ma page LinkedIn. Elle est liée à l'événement onclick de l'icône LI.

	window.open("https://www.linkedin.com/in/clementboulay/");
}

function to_github() {

  // Cette fonction renvoie sur ma page LinkedIn. Elle est liée à l'événement onclick de l'icône LI.

  window.open("https://www.github.com/bclement1/");
}

function to_search() {

	// Cette fonction redirige vers la page de recherche (pratique pour la mise en forme CSS) depuis la loupe.
	if(window.location.pathname.includes("static/")) {
		document.location.href = "search.html";
	} else {
    	document.location.href = "static/search.html";
    }
}

function store_articles_data() {

	/*
		Cette fonction stocke les noms de articles de la page principale index.html localement pour que le script de la page de recherche les récupère
		ensuite. De cette façon, il peut faire une recherche des mots-clés d'une recherche dans les noms des articles.
	*/

  let articles = document.getElementsByTagName("article");
  let article_titles = [];
  let article_desc = [];
  let article_link = [];
  let article_im = [];

  for (var i = 0; i < articles.length; i++) {
    let article = articles[i];
    article_titles.push(article.getElementsByTagName("p")[0].innerHTML);
    article_desc.push(article.getElementsByTagName("p")[1].innerHTML);
    article_link.push(article.getElementsByTagName("a")[0].href);
    article_im.push(article.getElementsByTagName("img")[0].src);
  }

  localStorage.setItem("article_titles", article_titles);
  localStorage.setItem("article_desc", article_desc);
  localStorage.setItem("article_link", article_link);
  localStorage.setItem("article_im", article_im);
}

function display_menu_first_part() {

  let linkedinIcon = document.getElementById("linkedin-icon");
  linkedinIcon.style.transition = "opacity 1s";
  linkedinIcon.style.opacity = "1"; 
}

function display_menu_second_part() {

  let githubIcon = document.getElementById("github-icon");
  githubIcon.style.transition = "opacity 1s";
  githubIcon.style.opacity = "1";
}


function display_menu_third_part() {

  let menu = document.getElementById("menu");
  let magGlassIcon = document.getElementById("mag-glass-icon");

  menu.style.transition = "opacity 1s";
  magGlassIcon.style.transition = "opacity 1s";

  menu.style.opacity = "1";
  magGlassIcon.style.opacity = "1"; 
}

function display_menu() {

  let bar1 = document.getElementById("bar1");
  let bar2 = document.getElementById("bar2");
  let bar3 = document.getElementById("bar3");

  bar1.style.transform = "translateY(15.5px) rotate(45deg)";
  bar3.style.transform = "translateY(-16px) rotate(-45deg)";
  bar2.style.opacity = "0";

  setTimeout(display_menu_first_part, 500);
  setTimeout(display_menu_second_part, 1000);
  setTimeout(display_menu_third_part, 1500);
}

function launch_display_menu() {
  setTimeout(display_menu, 1000);
}

function close_menu() {

  let linkedinIcon = document.getElementById("linkedin-icon");
  let githubIcon = document.getElementById("github-icon");
  let menu = document.getElementById("menu");
  let magGlassIcon = document.getElementById("mag-glass-icon");

  linkedinIcon.style.transition = "opacity 1s";
  githubIcon.style.transition = "opacity 1s";
  menu.style.transition = "opacity 1s";
  magGlassIcon.style.transition = "opacity 1s";

  linkedinIcon.style.opacity = "0"; 
  githubIcon.style.opacity = "0";
  menu.style.opacity = "0";
  magGlassIcon.style.opacity = "0"; 

  let bar1 = document.getElementById("bar1");
  let bar2 = document.getElementById("bar2");
  let bar3 = document.getElementById("bar3");

  bar1.style.transform = "translateY(0px) rotate(0deg)";
  bar3.style.transform = "translateY(0px) rotate(0deg)";
  bar2.style.opacity = "1";
}

function change_menu_state() {
  if(menuIsOpen) {
    close_menu();
    menuIsOpen = 0;
  }
  else {
    display_menu();
    menuIsOpen = 1;
  }
}