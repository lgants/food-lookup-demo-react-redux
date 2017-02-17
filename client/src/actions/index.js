import request from 'superagent';

export const REQUEST_FOODS = 'REQUEST_FOODS';
export const CANCEL_FOODS_REQUEST = 'CANCEL_FOODS_REQUEST';
export const ADD_SELECTION = 'ADD_SELECTION';
export const REMOVE_SELECTION = 'REMOVE_SELECTION';

const API_URL = "api/food?q="



export function requestFoods(term = null) {
  return function(dispatch) {
    request.get(`${API_URL}${term.replace(/\s/g,'+')}`).then(response => {
      dispatch({
        type: REQUEST_FOODS,
        payload: response
      });
    });
  }
}
// export function requestFoods(term = null) {
//   return {
//     type: REQUEST_FOODS,
//     term
//   }
// }

export function cancelFoodsRequest() {
  return {
    type: CANCEL_FOODS_REQUEST,
  }
}

export function addSelection(food) {
  return {
    type: ADD_SELECTION,
    payload: food
  }
}

export function removeSelection(idx) {
  return {
    type: REMOVE_SELECTION,
    payload: idx
  }
}
