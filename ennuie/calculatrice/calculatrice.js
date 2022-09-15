// le DOM(document modele object) c'est la ou est enregristrer tout les modele que la page web contien qui est representation de la page HTML du site web
const touches = [...document.querySelectorAll('.bouton')];//cette ligne signifie que l'on recupere tout les elements de class bouton du DOM
const listeKeycode = touches.map(touche => touche.dataset.key);//cette ligne permet de recupere chaque element de notre tableau touche et de recuperer la valeur de data-key
const ecran = document.querySelector('.ecran');//on recupere la div ecran du DOM

document.addEventListener('keydown', (e) => {//on recupere l'evenement quand une touche est presser et recupere la KEY
    const valeur = e.keyCode.toString();//on convertir le type "nombre" en type "string" qui est le type que l'on utulise par defaut de la key
    calculer(valeur)//on appelle notre fonction pour quelle s'initialise avec la valeur du keycode recupere

})

document.addEventListener('click', (e) => {//on recupere l'evenement quand il y a un clique sur la page
    const valeur = e.target.dataset.key;//on recupere le dataset de la touche qui cibler l'evenement target
    calculer(valeur)//on appelle notre fonction pour quelle s'initialise avec la valeur du keycode recupere

})

const calculer = (valeur) => {// on crée la fonction qui nous permet de calculer et elle prend la valeur du keycode que l'on recupere au dessus
    if (listeKeycode.includes(valeur)) {//on verifie que le keycode qui est recupere est include dans les touches de notre calculatrice
        switch (valeur) {//on isole deux cas spécifiquue
            case '8'://si la veleur du keycode=8
                ecran.textContent = "";//alors on recupere le contenu de l'écran et on le remplace par une phrase vide pour enlever tout le contenue du text
                break;
            case '13'://si la veleur du keycode=8
                const calcul = eval(ecran.textContent);//on créée une variable qui evalue le contenue de l'ecran/la fonction eval regarde le contenue et le calcule avant de le renvoyait
                ecran.textContent = calcul;//on met dans l'écran le resultat que renvoit la fonction eval
                break;
            default://si la veleur du keycode est differente de 8 et 13
                const indexKeycode = listeKeycode.indexOf(valeur);//la variable va recgarder l'index du keycode/ elle va regarder le kaycode qui se trouve dans la variable calculer et regarder l'index de cette valeur dans le tableau de listkeycode
                const touche = touches[indexKeycode];//on recupere la valeur de la touche sur la quelle on appuyer ce qui correspond au tableau touches a la valeur indexkeycode que l'on determiner au dessus
                ecran.textContent += touche.innerHTML;//on ajoute la valeur a l'ecran
        }
    }
}

window.addEventListener('error', (e) => {//on previent l'utulisateur qu'il y a une erreur
    alert('Une erreur est survenue dans votre calcul : ' + e.message)// on indique a l'utulisateur en utulisantl'erreur que la page nous renvoie 
})