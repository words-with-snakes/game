export const ADD_USER = 'ADD_USER';
export const START_GAME = 'START_GAME';

let nextUserID = 0;
export function addUser(display_name) {
  return ({ 
    type: ADD_USER, 
    user_id: nextUserID++,
    display_name
  });
};

export function startGame(is_started) {
  return ({
    type: START_GAME,
    is_started
  });
};