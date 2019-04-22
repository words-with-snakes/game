# Project Snakes

#### Getting Started
To launch the project:
1. Run `npm install`
2. Run `npm run build`
3. Run `npm start`

#### Example Objects

The below are example objects for the entities in the game. These will be converted to Classes later,
as we introduce methods for our game logic. Further notes can be found in the exampledata.js file.

```javascript
const exampleUser = {
  user_id: 1,
  display_name: 'doodoodoom'
};

const exampleLobby = {
  lobby_id: 1,
  game_id: 123,
  public: true
};

const exampleGame = {
  game_id: 123,
  is_started: false,
  is_finished: false,
  users: [exampleUser, someOtherExampleUser, yetAnotherExampleUser],
  entities: [examplePlayerObject, someOtherPlayerObject, yetAnotherPlayerObject, exampleLetterObject, examplePowerUpObject],
  scoreboard: exampleScoreboard,
  stage: 14
};

const examplePlayerObject = {
  coord: [233.12384032, 12.32492342],
  angle: 45.22129023,
  score: 542,
  user_id: 1
};

const exampleLetterObject = {
  coord: [1.39042834, 999.99999999],
  letter: 'X'
};

const examplePowerUpObject = {
  coord: [432.90327529, 12.12401983],
  power_up: 'Any Char'
};

const exampleScoreboard = {
  scores: [['doodoodoom', 542], ['boobooboom', 399], ['vroovroovroom', 217], ['plooplooploom', 1]]
};
```