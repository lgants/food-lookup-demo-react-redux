import React from 'react';
import Client from './Client';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';

const MATCHING_ITEM_LIMIT = 25;


class FoodSearch extends React.Component {
  handleInputChange(searchTerm){
    this.props.actions.requestFoods(searchTerm);
  }

  render() {

    const { showRemoveIcon, foods } = this.props;
    const removeIconStyle = showRemoveIcon ? {} : { visibility: 'hidden' };

    const foodRows = foods.map((food, idx) => (
      <tr key={idx}>
        <td>{food.description}</td>
        <td className='right aligned'>{food.kcal}</td>
        <td className='right aligned'>{food.protein_g}</td>
        <td className='right aligned'>{food.fat_g}</td>
        <td className='right aligned'>{food.carbohydrate_g}</td>
      </tr>
    ));

    return (
      <div id='food-search'>
        <table className='ui selectable structured large table'>
          <thead>
            <tr>
              <th colSpan='5'>
                <div className='ui fluid search'>
                  <div className='ui icon input'>
                    <input
                      className='prompt'
                      type='text'
                      placeholder='Search foods...'
                      onChange={event => this.handleInputChange(event.target.value)}
                    />
                    <i className='search icon' />
                  </div>
                  <i
                    className='remove icon'
                    onClick={this.props.actions.cancelFoodsRequest}
                    style={removeIconStyle}
                  />
                </div>
              </th>
            </tr>
            <tr>
              <th className='eight wide'>Description</th>
              <th>Kcal</th>
              <th>Protein (g)</th>
              <th>Fat (g)</th>
              <th>Carbs (g)</th>
            </tr>
          </thead>
          <tbody>
            {foodRows}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    foods: state.foods.foods,
    showRemoveIcon: state.foods.showRemoveIcon,
    searchValue: state.foods.searchValue
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodSearch);
