import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Success() {
    // initialize dispatch
    const dispatch = useDispatch();

    // initialize userData to push to allData
    const userData = useSelector(store => store.userData);

    // initialize history
    const history = useHistory();

    const newFeedback = () => {
        const clearForm = {
            feeling: 0,
            understanding: 0,
            support: 0,
            comments: ''
        }

        // Push userData to allData
        dispatch({
            type: 'PUSH_DATA',
            payload: userData
        })

        // Clear userData for new feedback
        dispatch({
            type: 'NEW_FEEDBACK',
            payload: clearForm
        })

        history.push('/');
    }
    return (
        <div>
            <h1>Feedback!</h1>
            <div>
                <h1>Thank You!</h1>
                <button onClick={newFeedback}>Leave New Feedback</button>
            </div>
        </div>
    )
}

export default Success;