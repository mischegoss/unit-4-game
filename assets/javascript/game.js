
$( document ).ready(function() {
   
    let randomnumber = Math.floor((Math.random() * 120) + 19);
    let cardvalueone =  Math.floor((Math.random() * 12) + 1);
    let cardvaluetwo =  Math.floor((Math.random() * 12) + 1);
    let cardvaluethree =  Math.floor((Math.random() * 12) + 1);
    let cardvaluefour =  Math.floor((Math.random() * 12) + 1);
    let score = 0

  
    $("#score").text(" ")

    $("#random-number").text(randomnumber)
    console.log(randomnumber)
    $("#gem1").val(cardvalueone)

    console.log(cardvalueone)
    $("#gem2").val(cardvaluetwo)
    console.log(cardvaluetwo)
  
    $("#gem3").val(cardvaluethree)
    console.log(cardvaluethree)
  
    $("#gem4").val(cardvaluefour)
    console.log(cardvaluefour)

    $( "#gem1" ).click(function() {
        score = score + cardvalueone;
        
        $("#score").text(score)
        console.log(score)
      }
    )
    
});







