import { REQUEST_FOODS, CANCEL_FOODS_REQUEST } from '../actions';

const initialState =  {
  foods: [],
  showRemoveIcon: false
};

export default function(state = initialState, action) {
  switch (action.type){
    case REQUEST_FOODS:
      return {
        ...state, showRemoveIcon: true, foods: [
          {
            carbohydrate_g: 1.23,
            description: "Lettuce, butterhead (incl boston  bibb types), raw",
            fat_g:0.15,
            kcal:13,
            protein_g:1.35
          },
          {
            carbohydrate_g: 2.23,
            description: "Lettuce, butterhead (incl boston  bibb types), raw",
            fat_g:0.15,
            kcal:13,
            protein_g:1.35
          },
          {
            carbohydrate_g: 3.23,
            description: "Lettuce, butterhead (incl boston  bibb types), raw",
            fat_g:0.15,
            kcal:13,
            protein_g:1.35
          },
        ]
      };
    case REQUEST_FOODS:
      return {
        ...state, showRemoveIcon: false, foods: []
      }
    default:
      return state;
  }
}
