import { REQUEST_FOODS, CANCEL_FOODS_REQUEST } from '../actions';

const initialState =  {
  foods: [],
  searchValue: '',
  showRemoveIcon: false
};

export default function(state = initialState, action) {
  switch (action.type){
    case REQUEST_FOODS:
      return {
        ...state, searchValue: action.term, showRemoveIcon: true, foods: [
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
    case CANCEL_FOODS_REQUEST:
      return {
        ...state, searchValue: '', showRemoveIcon: false, foods: []
      }
    default:
      return state;
  }
}
