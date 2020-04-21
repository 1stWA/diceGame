
const button = document.querySelector("button");

// on click, do all the things
button.addEventListener("click", function(){
  // clear previous results
  document.querySelector("#player1card").classList.remove("winner");
  document.querySelector("#player2card").classList.remove("winner");
  document.querySelector("#player1card").classList.remove("tie");
  document.querySelector("#player2card").classList.remove("tie");

  // generate number between 1 and 6
  function roll6(){
    return Math.floor(Math.random()*6)+1;
  }

  var player1roll = roll6();
  var player2roll = roll6();

  // display results
  // change img value
  document.querySelector("#player1display").src = "imgs/dice" + player1roll + ".png";
  document.querySelector("#player2display").src = "imgs/dice" + player2roll + ".png";
  // change img alts
  document.querySelector("#player1display").alt = "dice" + player1roll;
  document.querySelector("#player2display").alt = "dice" + player2roll;


  // winner's flair
  if(player1roll > player2roll){
    document.querySelector("#player1card").classList.toggle("winner");
  } else if(player1roll < player2roll){
    document.querySelector("#player2card").classList.toggle("winner");
  } else {
    document.querySelector("#player1card").classList.add("tie");
    document.querySelector("#player2card").classList.add("tie");
  }
});
