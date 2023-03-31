import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from "react-router-dom";

function Review(){
    // set dispatch
    const dispatch = useDispatch();
    // set history
    const history = useHistory();
    
    // set userData from store
    const userData = useSelector(store => {
        return {
            feeling: store.feeling,
            understanding: store.understanding,
            support: store.support,
            comments: store.comments
        }
    })

    const handleSubmit = () => {
        dispatch({
            type: 'SUBMIT_DATA',
            payload: userData
        })

        history.push('/success');
    }
    return(
        <form type="submit" onSubmit={handleSubmit}>
            {/* Feelings */}
            <label>Feelings: {userData.feeling}</label>
            {/* Understanding */}
            <label>Understanding: {userData.understanding}</label>
            {/* Support */}
            <label>Support: {userData.support}</label>
            {/* Comments */}
            <label>Comments: {userData.comments}</label>
            <button type="submit">Submit</button>
        </form>
    )


}

export default Review;