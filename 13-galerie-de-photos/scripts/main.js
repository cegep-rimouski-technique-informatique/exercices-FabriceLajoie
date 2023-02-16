const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Déclarer une liste avec les chemins des images*/

for(let i=1; i <= 5; i++)
{
    let img = document.createElement("img");
    img.src = 'images/pic' + i + '.jpg';
    thumbBar.appendChild(img);
    img.addEventListener("click", function() {OnClick(img)});
}

/* Déclarer le texte alternative pour chaque image*/

function OnClick(img)
{
    displayedImage.src = img.src;
}

/* traverser les images */

const newImage = document.createElement('img');

/* sombre/clair bouton */

btn.onclick = function() {ChangerOpacite()};

function ChangerOpacite()
{
    if(btn.getAttribute('class') == "dark")
    {
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
        btn.innerHTML = "Lighten";
        btn.setAttribute('class', 'light');
    }
    else {
        overlay.style.backgroundColor = "rgba(0,0,0,0.0)"
        btn.innerHTML = "Darken";
        btn.setAttribute('class', 'dark');
    }
}