export const REQUEST_FOODS = 'REQUEST_FOODS';
export const CANCEL_FOODS_REQUEST = 'CANCEL_FOODS_REQUEST';

export function requestFoods(term = null) {
  console.log("term");
  return {
    type: REQUEST_FOODS,
    term
  }
}

export function cancelFoodsRequest(term = null) {
  console.log("term");
  return {
    type: CANCEL_FOODS_REQUEST,
    term
  }
}
