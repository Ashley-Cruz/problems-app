import { saveAs } from 'file-saver';
import { decryptMessage } from './../helpers/findMessage';
import Swal from "sweetalert2";

export const ProblemOne = () => {

    const readFile = (e) => {
        const file = e.target.files[0];
        if ( !file ) {
            Swal.fire({ icon: 'error', title: 'Oops...', text: `You haven't selected a file.`, buttonsStyling: false, background: '#282c34' });
            return;
        }
        if(file.type !== "text/plain"){
            Swal.fire({ icon: 'error', title: 'Oops...', text: `The file type is not valid.`, buttonsStyling: false, background: '#282c34' });
            return;
        }

        const fileReader = new FileReader();
        fileReader.readAsText( file );

        fileReader.onload = () => {
            separeValues(fileReader.result);
        }

        fileReader.onerror = () => {
            Swal.fire({ icon: 'error', title: 'Oops...', text: fileReader.error, buttonsStyling: false, background: '#282c34' });
            return;
        }
    };

    const separeValues = (text) => {
        const arrayValues = text.split('\n');
        let arrayNumbers = [];

        for(let i=0; i<=3; i++){
            if(i === 0){
                arrayNumbers = arrayValues[i].split(' ');
                for(let j=0; j<=2; j++){
                    arrayNumbers[j] = parseInt(arrayNumbers[j], 10);
                }
            }
        }

        const instructionOne = arrayValues[1].substring(0, arrayValues[1].length - 1);
        const instructionTwo = arrayValues[2].substring(0, arrayValues[2].length - 1);
        const message = arrayValues[3];
        const result = decryptMessage(arrayNumbers, instructionOne, instructionTwo, message);
        if(!result) {
            return;
        }
        Swal.fire({ icon: 'success', title: 'Great!', text: 'The file was created successfully', buttonsStyling: false, background: '#282c34' });
        createFile(result);
    }

    const createFile = (info) => {
        const blob = new Blob([ info ], { type: 'text/plain;charset=utf-8' });
        saveAs( blob, 'problem2-results.txt' );
    }

    const handleClick = () => {
        const input = document.getElementById('inputFile');
        input.click();
    }

    return (
        <div className='container-problem'>
            <h2>Problem 1</h2>
            <hr />
            <p className='info'>This is an example of how you need to enter the text:</p>
            <div className='example'>
                <p>
                    11 15 38<br />
                    CeseAlFuego<br />
                    CorranACubierto<br />
                    XXcaaamakkCCessseAAllFueeegooDLLKmmNNN
                </p>
            </div>
            <div className='input-button' onClick={handleClick}>
                <p>Select file</p>
            </div>
            <input type="file" onChange={readFile} multiple={false} id='inputFile' />
        </div>
    )
}
