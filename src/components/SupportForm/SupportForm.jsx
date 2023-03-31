import { useDispatch} from 'react-redux';
import {useState} from "react";
import {useHistory} from "react-router-dom";

function SupportForm(){
    // instantiate history
    const history = useHistory();
    // instantiate dispatch
    const dispatch = useDispatch();
    // support state
    const [support, setSupport] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        
        dispatch({
            type: 'SET_SUPPORT',
            payload: support
        })
        history.push('/comments');
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