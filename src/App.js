import React, { Component } from 'react';
import { connect } from 'react-redux'

import './App.css';
import { loadData } from './actions';
import List from './component/List';

class App extends Component {
  componentDidMount =()=>{
    this.props.loadData()
  }
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <h1>React session learning application</h1>
        {this.props.isLoading ? (<div>loading...</div>) : ("")}
        <div>
          <List data={this.props.data} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  const {list} = state
  return {
    ...list    
  } 
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadData : (params)=>{ dispatch(loadData(params))}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
