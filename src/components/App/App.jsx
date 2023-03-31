import React from 'react';
import axios from 'axios';
import './App.css';
import FeelingForm from '../FeelingForm/FeelingForm';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';
import SupportForm from '../SupportForm/SupportForm';
import CommentsForm from '../CommentsForm/CommentsForm';
import Review from '../Review/Review';
import Success from '../Success/Success';
import {HashRouter as Router, Route, Link} from "react-router-dom";

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      
        <Router>
          <Route exact path="/">
            <FeelingForm />
          </Route>
          <Route exact path="/understanding">
            <UnderstandingForm />
          </Route>
          <Route exact path="/support">
            <SupportForm />
          </Route>
          <Route exact path="/comments">
            <CommentsForm />
          </Route>
          <Route exact path="/review">
            <Review />
          </Route>
          <Route exact path="/success">
            <Success />
          </Route>
        </Router>
      
    </div>
  );
}

export default App;
