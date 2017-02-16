import React, { Component } from 'react';
import SelectedFoods from '../components/SelectedFoods';
import FoodSearch from './FoodSearch';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
// import '../styles/app.css';

class App extends Component {
  state = {
    selectedFoods: [],
  }

  removeFoodItem = (itemIndex) => {
    const filteredFoods = this.state.selectedFoods.filter(
      (item, idx) => itemIndex !== idx,
    );
    this.setState({ selectedFoods: filteredFoods });
  }

  addFood = (food) => {
    const newFoods = this.state.selectedFoods.concat(food);
    this.setState({ selectedFoods: newFoods });
  }

  render() {
    const { selectedFoods } = this.state;

    return (
      <div className='App'>
        <div className='ui text container'>
          <SelectedFoods
            foods={selectedFoods}
            onFoodClick={this.removeFoodItem}
          />
          <FoodSearch
            onFoodClick={this.addFood}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    foods: state.foods
  };
}

export default connect(mapStateToProps)(App);
