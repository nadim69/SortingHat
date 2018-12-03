import React, { Component } from 'react';

import { connect } from 'react-redux';
import Message from '../Components/Message';

class Result extends Component {

    constructor(props){
        super(props)
        setInterval(() =>  this.props.dispatch({ type:  '' }), 1000)
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <ul>
                    {this.props.houses.map(house  =>  <li  key={house}>{house}</li>)}
                </ul>
                <Message  message={this.props.selectedHouse}  />
            </div>
)
    }
}

export default connect(store=>store) (Result);