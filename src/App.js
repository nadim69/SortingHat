import React, { Component } from 'react';
import './App.css';


//redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Result from './Containers/Result';


const  houses = [
  'Serpentard',
  'Griffondor',
  'Serdaigle',
  'Pouffsoufle',
];
const  reducer = (state, action) => ({
  houses,
  selectedHouses:  houses[Math.floor(Math.random() * 4)]
})
const  store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider  store={store}>
        <div className="App">
        <Result/>
        </div>
      </Provider>
    );
  }
}

export default App;
