import logo from './logo.svg';

import React from 'react';
import Count from './components/Count';
import Button from './components/Button';

import { BrowserRouter, Route, Link, Router } from 'react-router-dom';

import Home from 'view/home.js';
import Test from 'view/test.js';

import { connect } from 'react-redux';
import { actionIncrement, actionDecrement } from './redux/actions';

const  App = (props) => {
  return (
    <div style={{textAlign: 'center'}}>

      <BrowserRouter>
        <Route path="/home" component={Home} />
        <Route path="/test" component={Test} />

        <div>
          <Link to="/home">HOME</Link> &nbsp;
          <Link to="/test">TEST</Link>
      </div>

      </BrowserRouter>




      <Count value = {props.value} />
      <Button onClickIncrease={props.onClickIncrease}
              onClickDecrease={props.onClickDecrease}/>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    value: state.reducerCount.value,
  }
}

const mapDispatchToProps = (dispatch) => ({
  onClickIncrease: () => { dispatch(actionIncrement())},
  onClickDecrease: () => { dispatch(actionDecrement())}
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
