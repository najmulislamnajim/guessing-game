// document.write('Guessing Game')


setTimeout(function(){
    var inputNumber=parseInt(prompt("input a number between 1 to 5"))
    var randomNumber=Math.floor(Math.random()*5+1);
    if(inputNumber===randomNumber){
        document.write('Congratulation! you win the game')
    }else{
        document.write('You lost the game')
    }
},2000)
