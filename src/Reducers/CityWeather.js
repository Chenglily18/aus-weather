import { ACTIONS } from '../Actions/Types';

const initialState = {
  loading: false,
  data: [],
  error: null,
};

export default function ResultsReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.CITY_WEATHER.FETCH:
      return {
        ...state,
        data: action.payload.data,
      };
    default:
      return state;
  }
}
