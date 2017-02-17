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
        ...state,
        searchValue: action.term,
        showRemoveIcon: true,
        foods: action.payload.body
      };
    case CANCEL_FOODS_REQUEST:
      return {
        ...state,
        searchValue: '',
        showRemoveIcon: false,
        foods: []
      }
    default:
      return state;
  }
}
