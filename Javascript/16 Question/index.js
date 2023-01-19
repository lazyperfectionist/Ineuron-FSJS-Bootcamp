// 16. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer


// Way 1: 

// let month = "DecembEr"
// month = month.toLowerCase()
// if(month == 'september' || month == 'october' || month == 'november'){
//     console.log('Autumn Season');
// }
// else if(month == 'december' || month == 'january' || month == 'february'){
//     console.log('Winter Season');
// }
// else if(month == 'march' || month == 'april' || month == 'may'){
//     console.log('Spring Season');
// }
// else if(month == 'june' || month == 'july' || month == 'august'){
//     console.log('Summer Season');
// }
// else{
//     console.log(`Enter a valid month, ${month} is not a month`);
// }


// Way 2: 
const seasons = {
    Autumn:['september','october','november'],
    Winter:['december','january','february'],
    Spring:['march','april','may'],
    Summer:['june','july','august']
}

let month ="June"
month = month.toLowerCase()
for(obj in seasons){
    for(m of seasons[obj]){
        if(m==month){
            console.log(`Season is ${obj}`);
            break
        }
    }
}
