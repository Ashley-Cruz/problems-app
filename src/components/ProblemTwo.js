import { saveAs } from 'file-saver';
import Swal from "sweetalert2";
import { getWinner } from './../helpers/getWinner';

export const ProblemTwo = () => {

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
        let arrayValues = text.split('\n').join(' ').split(' ');
        let newArrayValues = [];
        for(let i=0; i <= arrayValues.length - 1; i++){
            newArrayValues.push(parseInt(arrayValues[i], 10))
        }

        const result = getWinner(newArrayValues[0], newArrayValues.slice(1))
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
        const input = document.getElementById('inputFile2');
        input.click();
    }

    return (
        <div className='container-problem'>
            <h2>Problem 2</h2>
            <hr />
            <p className='info'>This is an example of how you need to enter the text:</p>
            <div className='example'>
                <p>
                    5<br />
                    140 82<br />
                    89 134<br />
                    90 110<br />
                    112 106<br />
                    88 90<br />
                </p>
            </div>
            <div className='input-button' onClick={handleClick}>
                <p>Select file</p>
            </div>
            <input type="file" onChange={readFile} multiple={false} id='inputFile2' />
        </div>
    )
}
