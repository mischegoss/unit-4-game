
$( document ).ready(function() {

/*These are the universal variables */

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
let randomnumber;
let cardvalueone;
let cardvaluetwo;
let cardvaluethree;
let cardvaluefour;

/* This is the function that sets things up  on load */


function onLoad() {
  playagain.hide()
   scoreval.hide()
   setRandomNumber()
   setCardValue()
};

function setRandomNumber() {
  randomnumber =/* Math.floor((Math.random() * 101) + 19); */ 20
  $("#random-number").text(randomnumber)
}
    
 
function setCardValue()  {

  cardvalueone = /*Math.floor((Math.random() * 12) + 1); */  5
  cardvaluetwo =  Math.floor((Math.random() * 12) + 1);
  cardvaluethree =  Math.floor((Math.random() * 12) + 1);
  cardvaluefour =  Math.floor((Math.random() * 12) + 1);

gem1.val(cardvalueone)
gem2.val(cardvaluetwo)
console.log(cardvaluetwo)
gem3.val(cardvaluethree)
gem4.val(cardvaluefour)
}
    

    

    gem1.click(function() {
        scoreval.show()
        score = score + cardvalueone;  
        scoreval.text(score)
        console.log(score)
        checkWin()
      }
    )

    gem2.click(function() {
        scoreval.show()
        score = score + cardvaluetwo;      
        scoreval.text(score)
        console.log(score)
        
      }
    )
    
    gem3.click(function() {
      scoreval.show()
        score = score + cardvaluethree;    
        scoreval.text(score)
        console.log(score)
      }
    )

    gem4.click(function() {
       scoreval.show()
        score = score + cardvaluefour;    
        scoreval.text(score)
        console.log(score)
      }
    )

   function checkWin() {
    if (randomnumber === score) {
        win ++
        wintext.text(win)
        scoreval.text("🎉 🎉 ")
        playagain.show()
        $("#win1").attr("src","assets/images/gemblack.jpg");
        

    }

   }

   function getCardValues() {
    let randomnumber =/* Math.floor((Math.random() * 101) + 19); */ 20
    let cardvalueone = /*Math.floor((Math.random() * 12) + 1); */  5
    let cardvaluetwo =  Math.floor((Math.random() * 12) + 1);
    let cardvaluethree =  Math.floor((Math.random() * 12) + 1);
    let cardvaluefour =  Math.floor((Math.random() * 12) + 1);
   }

   playagain.click(function() {
    gem1.val(cardvalueone)
    gem2.val(cardvaluetwo)
    gem3.val(cardvaluethree)
    gem4.val(cardvaluefour)
    
    cardvaluetwo =  Math.floor((Math.random() * 12) + 1);
     
   }
 )
   
onLoad();
});

    







