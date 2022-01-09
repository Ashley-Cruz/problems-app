import Swal from "sweetalert2";

export const decryptMessage = (arrayNumbers, instructionOne, instructionTwo, message) => {
    
    //Validations
    if(arrayNumbers[0] !== instructionOne.length){
        Swal.fire({ icon: 'error', title: 'Oops...', text: `The number of characters of the first instruction: ${instructionOne} isn't correct.`, buttonsStyling: false, background: '#282c34' });
        return;
    }else if(arrayNumbers[0] < 2 || arrayNumbers[0] > 50){
        Swal.fire({ icon: 'error', title: 'Oops...', text: `The number: ${arrayNumbers[0]} (line 1, position 1) needs to be between 2 and 50.`, buttonsStyling: false, background: '#282c34' });
        return;
    }else if(arrayNumbers[1] !== instructionTwo.length){
        Swal.fire({ icon: 'error', title: 'Oops...', text: `The number of characters of the second instruction: ${instructionTwo} isn't correct.`, buttonsStyling: false, background: '#282c34' });
        return;
    }else if(arrayNumbers[1] < 2 || arrayNumbers[1] > 50){
        Swal.fire({ icon: 'error', title: 'Oops...', text: `The number: ${arrayNumbers[1]} (line 1, position 2) needs to be between 2 and 50.`, buttonsStyling: false, background: '#282c34' });
        return;
    }else if(arrayNumbers[2] !== message.length){
        Swal.fire({ icon: 'error', title: 'Oops...', text: `The number of characters of the message: ${message} isn't correct.`, buttonsStyling: false, background: '#282c34' });
        return;
    }else if(arrayNumbers[2] < 3 || arrayNumbers[2] > 5000){
        Swal.fire({ icon: 'error', title: 'Oops...', text: `The number: ${arrayNumbers[2]} (line 1, position 3) needs to be between 3 and 5000.`, buttonsStyling: false, background: '#282c34' });
        return;
    }else if ( /[^A-Za-z\d]/.test(message)){
        Swal.fire({ icon: 'error', title: 'Oops...', text: 'Please enter only letter and numeric characters', buttonsStyling: false, background: '#282c34' });
        return;
    }
    const firstLine = getResult(message, instructionOne);
    const secondLine = getResult(message, instructionTwo);
    return firstLine + '\n' + secondLine;
}

const getResult = (mainMessage, instruction) => {
    let result = 'NO';
    let encryptedMessage = '';
    let instructionCopy = instruction;

    for(let i=0; i<=instruction.length - 1; i++){
        const c = instruction[i];
        const resp = mainMessage.indexOf(c);
        if(resp !== -1){
            encryptedMessage += c;
            mainMessage = mainMessage.replace(c, '-');
            instruction = instruction.replace(c, '-');
        }
    }

    if(encryptedMessage === instructionCopy) result = 'SI';

    return result;
}