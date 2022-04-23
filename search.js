

/*
	Fichier search.js
	Ce fichier est uniquement importé par search.html
	Ce fichier contient les 4 fonctions nécessaires au fonctionnement de la page de recherche du blog.
	La fonction principale est search(). Elle appelle toutes les autres fonctions.

*/

function get_input () {

	// Cette fonction récupère les mots de la recherche de l'utilisateur.

	const input = document.getElementById("search-input").value.toLowerCase().split(" "); /* liste de mot-clés */
	return input;
}

function get_titles() {
  // Cette fonction récupère tous les titres des articles publiés sur le blog et préalablement stockés localement au chargement de index.html.
  const cond_articles_titles = new Array(localStorage.article_titles);
  return cond_articles_titles;
}

function get_links() {
  const cond_articles_links = new Array(localStorage.article_link);
  return cond_articles_links;
}

function get_descs() {
  const cond_articles_descs = new Array(localStorage.article_desc);
  return cond_articles_descs;
}

function get_ims() {
  const cond_articles_ims = new Array(localStorage.article_im);
  return cond_articles_ims;
}

function display_response(indexes) {

  // Cette fonction affiche les résultats de la recherche de l'utilisateur sous le formulaire. Les résultats redirigent vers les articles trouvés.

  let indexes_to_display = indexes;
  let articles_titles = get_titles().toString().split(",");
  let articles_descs = get_descs().toString().split(",");
  let articles_links = get_links().toString().split(",");
  let articles_ims = get_ims().toString().split(",");

  let phrase_resultat = document.createElement("p");
  phrase_resultat.innerHTML = "Ces articles peuvent correspondre à votre recherche : <br><br>";
  phrase_resultat.style = "text-align: center;";
  document.getElementById("search_results_area").appendChild(phrase_resultat);


  for (i = 0; i < indexes_to_display.length; i++) {

    let index = indexes_to_display[i];

    let article = document.createElement("article");
    article.id = "article" + index.toString();

    let result_title = document.createElement("p");
    result_title.innerHTML = articles_titles[index];
    result_title.className = "article-home-title";

    let result_desc = document.createElement("p");
    result_desc.innerHTML = articles_descs[index];
	  result_desc.className = "article-home-desc";

    let result_im = document.createElement("img");
    result_im.src = "../pictures/" + articles_ims[index].split("/").pop();

    let result_link = document.createElement("a");
    result_link.href = articles_links[index].split("/").pop();
    result_link.id = "anchor" + index.toString();
   
    document.getElementById("search_results_area").appendChild(article);
    document.getElementById("article" + index.toString()).appendChild(result_link);
    document.getElementById("anchor" + index.toString()).appendChild(result_im);
    document.getElementById("article" + index.toString()).appendChild(result_title);
    document.getElementById("article" + index.toString()).appendChild(result_desc);
  }
  resetMode();
}

               
function search() {

  document.getElementById("search_results_area").innerHTML = ""; /* on vide le champ d'affichage */
  if (event.keyCode == 13) { /* enter key press */
    let input = get_input();
    let articles_lowercase_titles = get_titles().toString().split(","); /* utilisé pour la recherche" */
    let indexes_to_display = []; /* indices dans les listes enregistrées localement des articles à retourner */
    for (i = 0; i < input.length; i++) {
      const word = input[i];
      for (j = 0; j < articles_lowercase_titles.length; j++) {
        var article_title = articles_lowercase_titles[j];
        if (article_title.includes(word)) {
          if (!indexes_to_display.includes(j)) {
            indexes_to_display.push(j);
          }
        }
      }
    }
    display_response(indexes_to_display);
  }
}