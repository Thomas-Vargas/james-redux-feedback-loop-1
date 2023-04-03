import { useDispatch} from 'react-redux';
import {useState} from "react";
import {useHistory} from "react-router-dom";

function FeelingForm(){
    // instantiate history
    const history = useHistory();
    // instantiate dispatch
    const dispatch = useDispatch();
    // feelings state
    const [feeling, setFeeling] = useState(0);

    const handleSubmit = event => {
        event.preventDefault();
        
        if(feeling > 0 && feeling <= 5){
            dispatch({
                type: 'SET_FEELING',
                payload: feeling
            })
            history.push('/understanding');
        }else{
            alert('rating must be in the range of 1-5');
        }
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