
$( document ).ready(function() {

/*These are the universal variables */
const gems = $(".gems");
const gem1 =$("#gem1");
const gem2= $("#gem2");
const gem3 = $("#gem3");
const gem4 = $("#gem4");
const scoreval =  $("#score");
const wintext = $("#win");
const playagain =$("#play-again");
let win = 0;
let didWin = false;
let score = 0;
let attempts = 0;
let randomnumber;
let cardvalueone;
let cardvaluetwo;
let cardvaluethree;
let cardvaluefour;

/* This is the function that sets things up  on load.  It is also re-used  when player clicks play again  */


function onLoad() {
  playagain.hide()
   scoreval.hide()
   setRandomNumber()
   setCardValue()
};

/* This picks a random number and pushes it to the screen  */
function setRandomNumber() {
  randomnumber =/* Math.floor((Math.random() * 101) + 19); */ 20
  $("#random-number").text(randomnumber)
}
    
/*This sets card value on click. It does not print to screen */ 
function setCardValue()  {

  cardvalue1 = /*Math.floor((Math.random() * 12) + 1); */  1
  cardvalue2 =  Math.floor((Math.random() * 12) + 1);
  cardvalue3 =  Math.floor((Math.random() * 12) + 1);
  cardvalue4 =  Math.floor((Math.random() * 12) + 1);

gem1.val(cardvalue1)
console.log(cardvalue1)
gem2.val(cardvalue2)
console.log(cardvalue2)
gem3.val(cardvalue3)
console.log(cardvalue3)
gem4.val(cardvalue4)
console.log(cardvalue4)
}
    
gems.click(function() {
  scoreval.show()
  score = score + parseInt($(this).val()); 
  attempts ++
  scoreval.text(score)
  console.log(score)
  checkWin()
}
)
    

    /* This checks win  */
   function checkWin() {
    if (randomnumber === score  && attempts < 10) {
        win ++
        wintext.text(win)
        scoreval.text("🎉 🎉 ")
        playagain.show()
        $("#win1").attr("src","assets/images/gemblack.jpg");
    } else if (score > randomnumber || attempts === 10) {
      console.log("lost")
      scoreval.text("🤯")
    }
   else {
      console.log("Still Playing")
    }
   }

  /* This sets action when player clicks play again.  The score should reset but win-lose tallies should stay the same */

   playagain.click(function() {
    onLoad()
    score = 0;
    console.log(cardvalue4,cardvalue3)
     
   }
 )
   
onLoad();
});

    







