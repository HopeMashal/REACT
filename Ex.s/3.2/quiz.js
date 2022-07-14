import './style.css';
import QuizQ1 from './q1';
import QuizQ2 from './q2';

const Quiz = () => {
    return (
        <div className='quiz'>
            <h2>How Do You Like Front End?</h2> 
            <QuizQ1 />
            <QuizQ2 />
        </div>
    );
};

export default Quiz;