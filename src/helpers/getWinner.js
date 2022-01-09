import Swal from "sweetalert2";

export const getWinner = (rounds, arrayRounds) => {

    if(rounds !== arrayRounds.length/2){
        Swal.fire({ icon: 'error', title: 'Oops...', text: "The number of rounds ins't correct", buttonsStyling: false, background: '#282c34' });
        return;
    }else if(rounds < 0 || rounds > 10000){
        Swal.fire({ icon: 'error', title: 'Oops...', text: "The number of round needs to be between 0 and 10000", buttonsStyling: false, background: '#282c34' });
        return;
    }

    const playerOne = [];
    const playerTwo = [];
    let winner = 0;
    let actualValuePlayerOne = 0;
    let arrayDiff = [];
    let diff = 0;

    arrayRounds.map( (value, i) => {
        if(i%2 === 0){
            playerOne.push(value);
            actualValuePlayerOne = value;
        }else {
            playerTwo.push(value);
            arrayDiff.push(Math.abs(actualValuePlayerOne - value));
        }
    })

    diff = Math.max(...arrayDiff);

    for(let i=0; i<=playerOne.length - 1; i++){
        if(Math.abs(playerOne[i] - playerTwo[i]) === diff){
            (playerOne[i] > playerTwo[i]) ? winner = 1 : winner = 2;
        }
    }

    return winner +' '+ diff;
    
}