/* Updated to include refactoring so objects meant to be hidden don't briefly appear during load */


$( document ).ready(function() {

  /*These are the universal variables */
  const gems = $(".gems");
  const gem1 =$("#gem1");
  const gem2= $("#gem2");
  const gem3 = $("#gem3");
  const gem4 = $("#gem4");
  const scoreval =  $("#score");
  const wintext = $("#win");
  const losetext = $("#lose");
  const playagain =$("#play-again");
  const title = $("#title-wrapper");
  const winline = $("#win-line");
  const loseline = $("#lose-line");
  let clickcount = 0;
  let win = 0;
  let loss = 0;
  let didWin = false;
  let didLose = false;
  let score = 0;
  let cardvalue1;
  let cardvalue2;
  let cardvalue3;
  let cardvalue4;
  let randomnumber;
  
 
  /* This is the function that sets things up  on load. It is  re-used for subsequent rounds of play. */
  
  function onLoad() {
  scoreval.hide();
  setRandomNumber();
  setCardValue();
  }
 
  /* This picks a random number and pushes it to the screen  */
  function setRandomNumber() {
    randomnumber = Math.floor(Math.random()*101+19);
    $("#random-number").text(randomnumber);
  }
      
  /*This sets card value on click. It does not print to screen */ 
  function setCardValue()  {
  
    cardvalue1 =  Math.floor(Math.random()*11+1);
    cardvalue2 =  Math.floor(Math.random()*11+1);
    cardvalue3 =  Math.floor(Math.random()*11+1);
    cardvalue4 =  Math.floor(Math.random()*11+1);
  
  gem1.val(cardvalue1);
  console.log(cardvalue1); //Left the console.logs in code for easy debugging
  gem2.val(cardvalue2);
  console.log(cardvalue2);
  gem3.val(cardvalue3);
  console.log(cardvalue3);
  gem4.val(cardvalue4);
  console.log(cardvalue4);
  }
  /* This sets the click event for the gem buttoms */  
  gems.click(function() {
    clickcount ++;  // Counts click for sake of first click. 
    console.log(clickcount); 
    onFirstClick();

    if (!didWin  && !didLose) {
    score = score + parseInt($(this).val()); 
    scoreval.text(score);
    console.log(score);
    checkWin();
    }
  }
  );

  /*Sets up action so on first click the win/losses and score appear on screen. */

  function onFirstClick() {
    if (clickcount > 0 ) {
    scoreval.show();
    winline.removeClass("hide");
    loseline.removeClass("hide");
    } else {
      console.log("No clicks yet");
    }

  }

  /* This checks win  */
     function checkWin() {
      if (randomnumber === score && !didWin) {
        winRound();
         
          
      } else if (score > randomnumber &&!didLose ) {
        loseRound();
      }
     else {
        console.log("Still Playing");
      }
     }
     function winRound() {
      didWin = true;
      win ++;
      wintext.text(win);
      scoreval.text("🎉 🎉 ");
      playagain.toggleClass("hide");
      winStars();
      
      
     }
     function loseRound() {
      didLose = true;
      console.log("lost");
      scoreval.text("🤯");
      playagain.toggleClass("hide");
      loss ++;
      losetext.text(loss);
      
     }
  
     /* This sets the win gems */
     function winStars() {
      switch(win) {
        case win = 1 :
        $("#win1").attr("src","assets/images/win1.jpg");
          break;
        case win = 2:
        $("#win2").attr("src","assets/images/win2.jpg");
        console.log("Win 2");
          break;
        case win = 3:
          $("#win3").attr("src","assets/images/win3.jpg");
            break;
        case win = 4:
        $("#win4").attr("src","assets/images/win4.jpg");
          break;
      case win = 5:
        $("#win5").attr("src","assets/images/win5.jpg");
          break;
        case win = 6:
        $("#win6").attr("src","assets/images/win6.jpg");
        playagain.text("Start New Game");
          break;
        default:
          console.log("No gem added");
      }
     }
  /* This function resets the game completely when six gems are collected */
     function resetWinGame(){
         score = 0;
         win = 0;
         loss = 0;
         didWin = false;
         didLose = false;
         gems.on("click");
         $(".blank-gem").attr("src","assets/images/blankgem.jpg");
         playagain.text("Play Again");
         wintext.text("");
         losetext.text("");
         playagain.toggleClass("hide");
         onLoad();
       }
   
  /* This sets the action for play again */

  function playAgain() {
      playagain.toggleClass("hide");
      onLoad();
      score = 0;
      didWin = false;
      didLose = false;
      
      
  }
  
    /* This sets action when player clicks play again.  The score should reset but win-lose tallies should stay the same */
  
     playagain.click(function() {
       if (win === 6)  {
         resetWinGame();
       } else {
      playAgain();
       }
      
       
     }
   );
     
  onLoad();

    });
  

    







