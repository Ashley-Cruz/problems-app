import { ProblemOne } from './ProblemOne';
import { ProblemTwo } from './ProblemTwo';

export const Problems = () => {

    return (
        <div className='container'>
            <h1>Challenge Code</h1>
            <div className='container-problems'>
                <ProblemOne />
                <ProblemTwo />
            </div>
        </div>
    )
}
