import { REQUEST_FOODS, CANCEL_FOODS_REQUEST, ADD_SELECTION, REMOVE_SELECTION } from '../actions';

const initialState =  {
  foods: [],
  searchValue: '',
  showRemoveIcon: false,
  selectedFoods: [],
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
      };
    case ADD_SELECTION:
      return {
        ...state,
      };
    case REMOVE_SELECTION:
      return {
        ...state,
      };
    default:
      return state;
  }
}
