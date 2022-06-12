let superbowlWin = (arr)=> {

    let winner = arr.find(sb=>sb.result === 'W');
    if(winner != undefined) {
     return winner.year;
    }
    else return winner;
 }   

 