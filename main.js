
function computerPlay(){
    switch(Math.floor((Math.random()*3)+1)){
        case 1:
            return "Rock"
        case 2:
            return "Paper"
        case 3:
            return "Scissors"
    }
}