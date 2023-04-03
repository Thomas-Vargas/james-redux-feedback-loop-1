import { useDispatch} from 'react-redux';
import {useState} from "react";
import {useHistory} from "react-router-dom";

function UnderstandingForm(){
    // instantiate history
    const history = useHistory();
    // instantiate dispatch
    const dispatch = useDispatch();
    // understanding state
    const [understanding, setunderstanding] = useState(0);

    
    const handleSubmit = event => {
        event.preventDefault();
        if(understanding > 0 && understanding <= 5){

            dispatch({
                type: 'SET_UNDERSTANDING',
                payload: understanding
            })
            history.push('/support');
        }
        else{
            alert('rating must be in the range of 1-5');
        }
    }

    const handleUnderstanding = event => {
        setunderstanding(event.target.value);
        
    }
        
    return (
        <div>
            <h1>How well are you understanding the content?</h1>
            <form onSubmit={handleSubmit} type="submit">
                <input type="number"
                        placeholder="rating"
                        value={understanding}
                        onChange={handleUnderstanding}
                        />
                <button type="submit">Next</button>
            </form>
        </div>
    );
}

export default UnderstandingForm;