// 1. Dessinez le modèle par arborescence du DOM (Document Object Model) de index.html


// Éxecuter le Javascript après la création du DOM
window.onload = () => {
  // 2. Remplacez le texte du titre par "DOMaine des Arbres"
  let nouveauTitre = "DOMaine des Arbres"
  document.title = nouveauTitre;

  
  // 3. Changez l'ordre de présentation des images avec flex

  let element = document.getElementsByClassName("container")[0];
  element.style.flexDirection = "column-reverse";

  // 4. Ajoutez le point "Terre" à la liste d'éléments

  let nouveauPoint = "Terre";
  let lePoint = document.createElement("li");
  let laListe = document.getElementsByTagName("ul")[0];
  lePoint.innerHTML = nouveauPoint;
  laListe.appendChild(lePoint);

  // 5. Ajoutez l'attribut href manquant à la balise lien de l'image d'arbre.
  // avec la valeur  href="https://www.gardeningknowhow.com/wp-content/uploads/2017/07/hardwood-tree.jpg"
  // Avec le sélecteur suivant, utilisez un "accès par relation" pour faire votre modification.
  const imageSansLien = document.querySelectorAll(
    'img[src="https://www.gardeningknowhow.com/wp-content/uploads/2017/07/hardwood-tree.jpg"]'
  )[0];
  // code ici

    

  // 6. Modifiez la police du texte pour toutes les éléments de la liste



};
