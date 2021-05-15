const index = require("../src/index");

test('Begin game', async () => {
  let event = {request: {}, state: {}}
  let response = await index.handler(event);

  expect(response.user_state_update.arrows).toEqual(['огня']);
  expect(response.user_state_update.enemies).toEqual(['ледяной']);
  expect(response.response.text)
      .toContain("Вы взяли стрелу огня и спустились в подземелье. Впереди ледяной");
});

test('Restart game', async () => {
  let state = {
    user: {
      arrows: ['огня', 'льда'],
      enemies: ['ледяной', 'огненный'],
      active_enemy: 'огненный',
    }
  }
  let request = {
    original_utterance: 'Начать заново'
  }
  let event = {request: request, state: state}
  let response = await index.handler(event);

  expect(response.user_state_update.arrows).toEqual(['огня']);
  expect(response.user_state_update.enemies).toEqual(['ледяной']);
  expect(response.response.text)
      .toContain("Вы взяли стрелу огня и спустились в подземелье. Впереди ледяной");
});

test('Normal enemy. Shoot with wrong arrow', async () => {
  let state = {
    user: {
      arrows: ['огня', 'льда'],
      enemies: ['ледяной', 'огненный'],
      active_enemy: 'огненный орк',
    }
  }
  let request = {
    original_utterance: 'Стрела огня'
  }
  let event = {request: request, state: state}
  let response = await index.handler(event);

  expect(response.user_state_update.arrows).toEqual([]);
  expect(response.user_state_update.enemies).toEqual([]);
  expect(response.response.text).toContain("Вас победил огненный орк. Нужно было использовать стрелу льда");
});

test('Normal enemy. Shoot with correct arrow', async () => {
  let state = {
    user: {
      arrows: ['огня', 'льда'],
      enemies: ['ледяной', 'огненный'],
      active_enemy: 'огненный гоблин',
    }
  }
  let request = {
    original_utterance: 'Стрела льда'
  }
  let event = {request: request, state: state}
  let response = await index.handler(event);

  expect(response.user_state_update.arrows).toEqual(['огня', 'льда']);
  expect(response.user_state_update.enemies).toEqual(['ледяной']);
  expect(response.response.text).toEqual("Враг повержен, впереди - MOB_NAME");
});


// unknown arrow
// guardian. miss
// guardian. hit
// dungeon completed