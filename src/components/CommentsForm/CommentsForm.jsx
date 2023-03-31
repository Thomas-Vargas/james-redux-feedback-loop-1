import { useDispatch} from 'react-redux';
import {useState} from "react";
import {useHistory} from "react-router-dom";

function CommentsForm(){
    // instantiate history
    const history = useHistory();
    // instantiate dispatch
    const dispatch = useDispatch();
    // comments state
    const [comments, setComments] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        
        dispatch({
            type: 'SET_COMMENTS',
            payload: comments
        })
        history.push('/review');
    }

    const handleComments = event => {
        setComments(event.target.value);
        
    }
        
    return (
        <div>
            <h1>Any comments you want to leave?</h1>
            <form onSubmit={handleSubmit} type="submit">
                <input type="text"
                        placeholder="comments"
                        value={comments}
                        onChange={handleComments}
                        />
                <button type="submit">Next</button>
            </form>
        </div>
    );
}

export default CommentsForm;