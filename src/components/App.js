import React, { Component } from 'react';
import { connect } from 'react-redux'

import '../index.css'
import { _getPhones } from '../utils/_DATA'
import { receivePhones } from '../actions/phones'
import Container from './Container'
import 'semantic-ui-css/semantic.min.css'



class App extends Component {
 
  componentDidMount(){
    //Update Store whit phones
    _getPhones()
      .then((phones) =>{
        this.props.dispatch(receivePhones(phones))
      })
  }
  render(){
    const { phones } = this.props
  
    return (
      //All phones
      <Container phones={phones} />
    );
  }
}



export default connect()(App);