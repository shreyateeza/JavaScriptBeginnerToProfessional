const items = ['Rock', 'Paper', 'Scissors']
let computer = Math.floor(Math.random()*3)
let player = Math.floor(Math.random()*3)
let message = 'Player ' + items[player] + ' vs Computer ' + items[computer] + ' \n';

if(player === computer){
    message += 'It\'s a tie';
}
else if(player > computer){
    if(computer == 0 && player == 2){
        message += 'Computer wins'
    }
    else{
        message += 'Player wins'
    }
}
else{
    if(computer == 2 && player == 0){
        message += 'Player wins'
    }
    else {
        message += 'Computer wins'
    }
}

console.log(message)