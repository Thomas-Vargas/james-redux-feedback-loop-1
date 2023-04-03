import { useDispatch} from 'react-redux';
import {useState} from "react";
import {useHistory} from "react-router-dom";

function SupportForm(){
    // instantiate history
    const history = useHistory();
    // instantiate dispatch
    const dispatch = useDispatch();
    // support state
    const [support, setSupport] = useState(0);

    const handleSubmit = event => {
        event.preventDefault();
        if(support > 0 && support <= 5){

            dispatch({
                type: 'SET_SUPPORT',
                payload: support
            })
            history.push('/comments');
        }else{
            alert('rating must be in the range of 1-5');
        }
    }

    const handleSupport = event => {
        setSupport(event.target.value);
        
    }
        
    return (
        <div>
            <h1>How are you being supported?</h1>
            <form onSubmit={handleSubmit} type="submit">
                <input type="number"
                        placeholder="rating"
                        value={support}
                        onChange={handleSupport}
                        />
                <button type="submit">Next</button>
            </form>
        </div>
    );
}

export default SupportForm;