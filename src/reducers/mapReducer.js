import { /*TOGGLE_INFOWINDOW, CURRENT_MARKER,*/ LOAD_PARKS, LOAD_STORES, /*CURRENT_WINDOW*/ } from '../actions/actions';
import initialState from './initialState';

const mapReducer = (state = initialState, action) => {
  switch(action.type){
    case LOAD_PARKS : {
      return {
        ...state,
        parks: action.payload
      }
    }
    case LOAD_STORES : {
      return {
        ...state,
        stores: action.payload
      }
    }
    /*case TOGGLE_INFOWINDOW: {
      return {
        ...state,
        showinfowindow: action.payload
      }
    }
    case CURRENT_MARKER : {
      return {
        ...state,
        selectedmarker: action.payload
      }
    }
    case CURRENT_WINDOW : {
      return {
        ...state,
        currentwindow: action.payload
      }
    }*/
    default:
      return state
  }
}

export default mapReducer;