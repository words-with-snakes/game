import { combineReducers } from 'redux';
import { ADD_USER } from '../actions/actions.js';

function users(state = [], action) {
  switch(action.type) {
    case ADD_USER:
      return [
        ...state,
        {
          user_id: action.user_id,
          display_name: action.display_name
        }
      ];
    default:
      return state;
  }
};

// TODO: reducer for handling starting the game

const startApp = combineReducers({
  users
});

export default startApp;