const index = require("../src/index");
const items = require("../src/items");

test('Begin game', async () => {
  let event = {request: {}, state: {}}
  let response = await index.handler(event);

  expect(response.user_state_update.arrows).toEqual(['огня']);
  expect(response.user_state_update.enemies).toEqual(['ледяной']);
  expect(response.user_state_update.active_enemy).toContain('ледяной');
  expect(response.response.text)
      .toContain("Вы взяли стрелу огня и спустились в подземелье. Впереди ледяной");
});

test('Restart game', async () => {
  let state = {
    user: {
      arrows: ['огня', 'льда', 'тьмы'],
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
  expect(response.user_state_update.active_enemy).toContain('ледяной');
  expect(response.response.text)
      .toContain("Вы взяли стрелу огня и спустились в подземелье. Впереди ледяной");
});

test('Normal enemy. Shoot with wrong arrow', async () => {
  let state = {
    user: {
      arrows: ['огня', 'льда', 'тьмы'],
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
  expect(response.user_state_update.active_enemy).toEqual('');
  expect(response.response.text).toContain("Вас победил огненный орк. Нужно было использовать стрелу льда");
});

test('Normal enemy. Shoot with correct arrow', async () => {
  let state = {
    user: {
      arrows: ['огня', 'льда', 'тьмы'],
      enemies: ['ледяной', 'огненный'],
      active_enemy: 'огненный гоблин',
    }
  }
  let request = {
    original_utterance: 'Стрела льда'
  }
  let event = {request: request, state: state}
  let response = await index.handler(event);

  expect(response.user_state_update.arrows).toEqual(['огня', 'льда', 'тьмы']);
  expect(response.user_state_update.enemies).toEqual(['ледяной']);
  expect(response.user_state_update.active_enemy).toContain('ледяной');
  expect(response.response.text).toContain("Враг повержен, впереди ледяной");
});

test('Normal enemy. Unknown arrow', async () => {
  let state = {
    user: {
      arrows: ['огня', 'льда', 'тьмы'],
      enemies: ['ледяной', 'огненный'],
      active_enemy: 'огненный орк',
    }
  }
  let request = {
    original_utterance: 'перекатиться в укрытие'
  }
  let event = {request: request, state: state}
  let response = await index.handler(event);

  expect(response.user_state_update.arrows).toEqual(['огня', 'льда', 'тьмы']);
  expect(response.user_state_update.enemies).toEqual(['ледяной', 'огненный']);
  expect(response.user_state_update.active_enemy).toContain('огненный');
  expect(response.response.text).toContain('Впереди огненный');
  expect(response.response.text).toContain(". Выберите стрелу, например \"Стрела огня\"");
});

test('Complete dungeon', async () => {
  let state = {
    user: {
      arrows: items.getArrowsNames(),
      enemies: ['огненный'],
      active_enemy: 'огненный гоблин',
    }
  }
  let request = {
    original_utterance: 'Стрела льда'
  }
  let event = {request: request, state: state}
  let response = await index.handler(event);

  expect(response.user_state_update.arrows).toEqual([]);
  expect(response.user_state_update.enemies).toEqual([]);
  expect(response.user_state_update.active_enemy).toEqual('');
  expect(response.response.text).toEqual("Отлично сыграно! Подземелье пройдено, все сокровища ваши!");
});

test('Last enemy. Shoot with correct arrow', async () => {
  let state = {
    user: {
      arrows: items.getArrowsNames().slice(0, items.getArrowsNames().length - 1),
      enemies: ['огненный'],
      active_enemy: 'огненный гоблин',
    }
  }
  let request = {
    original_utterance: 'Стрела льда'
  }
  let event = {request: request, state: state}
  let response = await index.handler(event);

  expect(response.user_state_update.arrows).toEqual(items.getArrowsNames());
  expect(response.user_state_update.enemies).toEqual(items.getEnemyTypes());
  expect(response.user_state_update.active_enemy).toContain('умный');
  expect(response.response.text).toContain("Враг повержен, найдена стрела безумия. Впереди страж стрелы - умный ");
});

test('First enemy. Shoot with wrong arrow', async () => {
  let state = {
    user: {
      arrows: ['огня', 'льда', 'тьмы'],
      enemies: ['ледяной', 'огненный', 'светлый'],
      active_enemy: 'светлый гоблин',
    }
  }
  let request = {
    original_utterance: 'Стрела огня'
  }
  let event = {request: request, state: state}
  let response = await index.handler(event);

  expect(response.user_state_update.arrows).toEqual(['огня', 'льда',  'тьмы']);
  expect(response.user_state_update.enemies).toEqual(['ледяной', 'огненный', 'светлый']);
  expect(response.user_state_update.active_enemy).toContain('светлый');
  expect(response.response.text).toContain("Впереди светлый ");
  expect(response.response.text).toContain(", используйте стрелу тьмы");
});

// guardian. miss
// guardian. hit
