export const REQUEST_FOODS = 'REQUEST_FOODS';

export function requestFoods(term = null) {
  console.log(term);
  return {
    type: REQUEST_FOODS,
    term
  }
}
