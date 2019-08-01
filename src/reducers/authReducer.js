import { UPDATE_USER} from '../actions/actions';
import initialState from '../reducers/initialState';

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_USER : {
      return {
        ...state,
        user: action.payload,
        signedin: true
      }
    }
    default: 
      return state;
  }
};

export default authReducer;