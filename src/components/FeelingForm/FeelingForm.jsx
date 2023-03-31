import { useDispatch} from 'react-redux';
import {useState} from "react";
import {useHistory} from "react-router-dom";

function FeelingForm(){
    // instantiate history
    const history = useHistory();
    // instantiate dispatch
    const dispatch = useDispatch();
    // feelings state
    const [feeling, setFeeling] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        
        dispatch({
            type: 'SET_FEELING',
            payload: feeling
        })
        history.push('/understanding');
    }

    const handleFeelings = event => {
        setFeeling(event.target.value);
        
    }
        
    return (
        <div>
            <h1>How are you feeling today?</h1>
            <form onSubmit={handleSubmit} type="submit">
                <input type="number"
                        placeholder="rating"
                        value={feeling}
                        onChange={handleFeelings}
                        />
                <button type="submit">Next</button>
            </form>
        </div>
    );
}

export default FeelingForm;