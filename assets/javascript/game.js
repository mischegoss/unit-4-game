let randomnumber = /*Math.floor((Math.random() * 101) + 19); */ 20
let cardvalueone = /* Math.floor((Math.random() * 12) + 1); */ 5
let cardvaluetwo =  Math.floor((Math.random() * 12) + 1);
let cardvaluethree =  Math.floor((Math.random() * 12) + 1);
let cardvaluefour =  Math.floor((Math.random() * 12) + 1);
let score = 0
let gem1 =$("#gem1")
let gem2= $("#gem2")
let gem3 = $("#gem3")
let gem4 = $("#gem4")
let scoreval =  $("#score")
let wintext = $("#win")
let playagain =$("#play-again")
let win = 0


$( document ).ready(function() {
    
   playagain.hide()

    $("#random-number").text(randomnumber)
    
    gem1.val(cardvalueone)
    gem2.val(cardvaluetwo)
    gem3.val(cardvaluethree)
    gem4.val(cardvaluefour)
    

    gem1.click(function() {
        score = score + cardvalueone;  
        scoreval.text(score)
        console.log(score)
        checkWin()
      }
    )

    gem2.click(function() {
        score = score + cardvaluetwo;      
        scoreval.text(score)
        console.log(score)
        
      }
    )
    
    gem3.click(function() {
        score = score + cardvaluethree;    
        scoreval.text(score)
        console.log(score)
      }
    )

    gem4.click(function() {
        score = score + cardvaluefour;    
        scoreval.text(score)
        console.log(score)
      }
    )

   function checkWin() {
    if (randomnumber === score) {
        win ++
        wintext.text(win)
        playagain.show()
        $("#win1").attr("src","assets/images/gemblack.jpg");
    }

   }
});

    







