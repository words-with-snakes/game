export const ADD_USER = 'ADD_USER';
export const START_GAME = 'START_GAME';

let nextUserID = 0;
export function addUser(displayName) {
  nextUserID += 1;

  return ({
    type: ADD_USER,
    user_id: nextUserID,
    display_name: displayName,
  });
}

export function startGame(isStarted) {
  return ({
    type: START_GAME,
    isStarted,
  });
}
