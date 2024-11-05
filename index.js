// code your solution here
function superbowlWin(record){
    const win = record.find(function(game){
        return game.result === "W";
    })
    return win ? win.year : undefined;
}
console.log(superbowlWin(record));

