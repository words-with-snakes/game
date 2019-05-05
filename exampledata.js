// will need to refactor these to classes

const exampleUser1 = {
  user_id: 1,
  display_name: 'doodoodoom',
};

const exampleUser2 = {
  user_id: 2,
  display_name: 'boobooboom',
};

const exampleUser3 = {
  user_id: 3,
  display_name: 'vroovroovroom',
};

const exampleUser4 = {
  user_id: 4,
  display_name: 'plooplooploom',
};

const exampleLobby = {
  lobby_id: 1,
  game_id: 123,
  public: true,
  // population: number of players in lobby
};

// Should we combine Player Objects and Users into a single object?
// If we do, should we just have an entities property in Game as opposed
// to having users and entities?

const examplePlayerObject1 = {
  coord: [233.12384032, 12.32492342],
  angle: 45.22129023,
  score: 542,
  // stage: may replace score..
  // word: array of chars representing letters grabbed by snake.
  // always has at least one char
  // added user_id to help keep track of which snake is which
  user_id: 1,
};

const examplePlayerObject2 = {
  coord: [233.12384032, 12.32492342],
  angle: 19.09128332,
  score: 399,
  // stage: may replace score..
  // word: array of chars representing letters grabbed by snake.
  // always has at least one char
  user_id: 2,
};

const examplePlayerObject3 = {
  coord: [233.12384032, 12.32492342],
  angle: 3.09343240,
  score: 217,
  // stage: may replace score..
  // word: array of chars representing letters grabbed by snake.
  // always has at least one char
  user_id: 3,
};

const examplePlayerObject4 = {
  coord: [233.12384032, 12.32492342],
  angle: 72.29401249,
  score: 1,
  // stage: may replace score..
  // word: array of chars representing letters grabbed by snake.
  // always has at least one char
  user_id: 4,
};

// I think we should differentiate Player objects, Letter objects, and PowerUp objects

const exampleLetterObject1 = {
  coord: [1.39042834, 999.99999999],
  letter: 'X',
  // cooldown: number of seconds until letter can be picked up; if touched,
  // will start from a number; if 0, letter is available
};

// power ups are for later development
const examplePowerUpObject1 = {
  coord: [432.90327529, 12.12401983],
  power_up: 'Any Char',
};

const exampleScoreboard = {
  scores: [['doodoodoom', 542], ['boobooboom', 399], ['vroovroovroom', 217], ['plooplooploom', 1]],
};


const exampleGame = {
  game_id: 123,
  is_started: false,
  is_finished: false,
  // timer: counts up to a certain number of seconds; if number is reached,
  // game ends whether or not stage is reached
  users: [exampleUser1, exampleUser2, exampleUser3, exampleUser4],
  entities: [
    examplePlayerObject1,
    examplePlayerObject2,
    examplePlayerObject3,
    examplePlayerObject4,
    exampleLetterObject1,
    examplePowerUpObject1,
  ],
  scoreboard: exampleScoreboard,
  stage: 14,
  // population: number of players in game
};

module.exports = {
  exampleLobby,
  exampleGame,
  exampleScoreboard,
};
