const index = require("../src/index");

test('index - begin game', async () => {
  let event = {request: {}, state: {}}
  let response = await index.handler(event);

  expect(['Огня']).toEqual(response.user_state_update.arrows);
  expect("Вы взяли стрелу огня и спустились в подземелье.").toEqual(response.response.text);
  expect(false).toEqual(response.response.end_session);
});

test('index - first level', async () => {
  let state = {
    user: {
      arrows: ['Огня']
    }
  }
  let request = {
    original_utterance: 'Стрела огня'
  }
  let event = {request: request, state: state}
  let response = await index.handler(event);

  expect(['Огня']).toEqual(response.user_state_update.arrows);
  expect("Вы взяли стрелу огня и спустились в подземелье.").toEqual(response.response.text);
  expect(false).toEqual(response.response.end_session);
});