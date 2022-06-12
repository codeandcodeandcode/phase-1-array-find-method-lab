let superbowlWin = (arr)=> {

    let winner = arr.find(sb=>sb.result === 'W');
    if(winner != undefined) {
     return winner.year;
    }
    else return winner;
 }   

 const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
];

console.log(superbowlWin(record));