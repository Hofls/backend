const index = require("../src/index");

test('Begin game', async () => {
  let event = {request: {}, state: {}}
  let response = await index.handler(event);

  expect(response.user_state_update.arrows).toEqual(['Огня']);
  expect(response.user_state_update.enemies).toEqual(['Ледяной']);
  expect(response.response.text)
      .toEqual("Вы взяли стрелу огня и спустились в подземелье. Впереди ледяной");
});

test('Restart game', async () => {
  let state = {
    user: {
      arrows: ['Огня', 'Льда'],
      enemies: ['Ледяной', 'Огненный'],
      active_enemy: 'Огненный',
    }
  }
  let request = {
    original_utterance: 'Начать заново'
  }
  let event = {request: request, state: state}
  let response = await index.handler(event);

  expect(response.user_state_update.arrows).toEqual(['Огня']);
  expect(response.user_state_update.enemies).toEqual(['Ледяной']);
  expect(response.response.text)
      .toEqual("Вы взяли стрелу огня и спустились в подземелье. Впереди ледяной");
});

test('Normal enemy. Shoot with wrong arrow', async () => {
  let state = {
    user: {
      arrows: ['Огня', 'Льда'],
      enemies: ['Ледяной', 'Огненный'],
      active_enemy: 'Огненный',
    }
  }
  let request = {
    original_utterance: 'Стрела огня'
  }
  let event = {request: request, state: state}
  let response = await index.handler(event);

  expect(response.user_state_update.arrows).toEqual([]);
  expect(response.user_state_update.enemies).toEqual([]);
  expect(response.response.text).toEqual("Вас победил MOB_NAME, нужно было использовать ARROW_NAME");
});

test('Normal enemy. Shoot with correct arrow', async () => {
  let state = {
    user: {
      arrows: ['Огня', 'Льда'],
      enemies: ['Ледяной', 'Огненный'],
      active_enemy: 'Огненный',
    }
  }
  let request = {
    original_utterance: 'Стрела льда'
  }
  let event = {request: request, state: state}
  let response = await index.handler(event);

  expect(response.user_state_update.arrows).toEqual(['Огня', 'Льда']);
  expect(response.user_state_update.enemies).toEqual(['Ледяной']);
  expect(response.response.text).toEqual("Враг повержен, впереди - MOB_NAME");
});
