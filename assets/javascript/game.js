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
  let score = 0;
  let cardvalue1;
  let cardvalue2;
  let cardvalue3;
  let cardvalue4;
  let randomnumber;
  
 
  /* This is the function that sets things up  on load.  */
  
  
  function onLoad() {
  winline.hide();
  loseline.hide();
  playagain.hide();
  scoreval.hide();
  setRandomNumber();
  setCardValue();
  }

  /* This is the reload function. Right now it is separated so that the win/lose shouw up w/o a click prompt in subsequent games. TO DO: Refactor this code to make more DRY */ 

  function onReload() {
    winline.show();
    loseline.show();
    playagain.hide();
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
  
    cardvalue1 =  Math.floor(Math.random()*11+1)
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
    clickcount ++;  // Counts click for sake of first click. TO DO: Implement attempts feature in game. 
    console.log(clickcount);
    onFirstClick();

    if (!didWin) {
    score = score + parseInt($(this).val()); 
    scoreval.text(score);
    console.log(score);
    checkWin();
    }
  }
  );

  function onFirstClick() {
    if (clickcount > 0 ) {
    scoreval.show();
    winline.show();
    loseline.show();
    } else {
      console.log("No clicks yet");
    }

  }

  /* This checks win  */
     function checkWin() {
      if (randomnumber === score) {
        winRound();
         
          
      } else if (score > randomnumber ) {
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
      playagain.show();
      winStars();
      
      
     }
     function loseRound() {
      console.log("lost");
      scoreval.text("🤯");
      playagain.show();
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
         gems.on("click");
         $(".blank-gem").attr("src","assets/images/blankgem.jpg");
         playagain.text("Play Again");
         wintext.text("");
         losetext.text("");
         onReload();
       }
   
  /* This sets the action for play again */

  function playAgain() {
      onReload();
      score = 0;
      didWin = false;
      
      
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
  

    







