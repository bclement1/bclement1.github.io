
/*
	Fichier script.js
	Ce fichier contient les redirections du header et permet le fonctionnement de la page de recherche en lui stockant des informations localement.
*/

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