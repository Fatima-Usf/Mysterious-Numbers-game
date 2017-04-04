//cette fonction est faite pour que toute les variable soient locale et protégé
(function() {

  'use strict';
    var playBtn = document.getElementById('btn');
    
  //création d'une fonction qui retien un nombre aléatoire et la stoqué dans une variable
    var getRandom = function(){
    return Math.round(Math.random()*99) + 1;
  }
  var nombreMyst = getRandom(); 



  /* cette variable va compter le nombre d'essai du joueur 
   jusqu'a ce qu'il gagane dans ce cas il pourra tweeter sa réuisste, un statut lui sera
   affiché indiquant qu'il a gagné dans nb fois d'essai, la fonction qui fera ça est à
   la fin du code */
  var nbFois = 0;

  function test()
  {
    var valeur = document.getElementById('valeur');
    var result = document.getElementById("result");
    var img = document.getElementById('myImg');
    var twittBtn = document.getElementById('tw');
    nbFois++;

    //cette condition est faite au cas ou le joueur gagne et veut rejouer  
    if (playBtn.value === "Play again"){
        playBtn.value = "Test it!";
        valeur.value = "";
        nbFois = 0;
        nombreMyst = getRandom();
        result.innerHTML = "";
        twittBtn.style.display="none";
        img.src='img/smile.png';


        return ;
    }

    // verification de la valeur entrer par le joeur 
    if (valeur.value < nombreMyst){
      result.innerHTML = "Too small!";
      img.src='img/peti.ico';
      result.style.color="#FF8C00";

      return ;
    }


    if (valeur.value > nombreMyst){
      result.innerHTML = "Too big!";
      img.src='img/grand.png';
      result.style.color="red";
      return ;
    }

    if (valeur.value ==nombreMyst) {
      result.innerHTML = "That's it!! Congratulations!";
      twittBtn.style.display="inline-block";
      img.src='img/gagne.png';
      result.style.color="green";
      playBtn.value = "Play again";
      return;
    }


  }

  //une fois on clique sur le boutton (test it / play again) ça va appeler la fonction test
  playBtn.addEventListener('click',test);
  //la meme chose mais ici ça va appeler la fonction twitter
  document.getElementById('tw').addEventListener('click',twitter);

  
 //si le jouer veut tweeter sa réuissite
  function twitter() {
    window.location.href = "https://twitter.com/intent/tweet?text=I won my game at my " + nbFois + " try ! " + "https://github.com/Fatima-YF/Mysterious-Numbers-game";
  }

}());
