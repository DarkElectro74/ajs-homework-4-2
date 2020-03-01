import findBy from '../app';

const results = [
  { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
  { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
  { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
];

test('search by name', () => {
  const finder = findBy('name', 'заклинание');
  const recieved = results.filter(finder);
  const expected = [
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
  ];
  expect(recieved).toEqual(expected);
});

test('search by type', () => {
  const finder = findBy('type', 'character');
  const recieved = results.filter(finder);
  const expected = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
  ];
  expect(recieved).toEqual(expected);
});

test('search by description', () => {
  const finder = findBy('description', 'Страница описания элемента интерфейса');
  const recieved = results.filter(finder);
  const expected = [
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ];
  expect(recieved).toEqual(expected);
});

test('search by empty fuild', () => {
  const finder = findBy(' ', ' ');
  const recieved = results.filter(finder);
  const expected = [];
  expect(recieved).toEqual(expected);
});

test('search by wrong name', () => {
  const finder = findBy('nickname', 'Гендальф');
  const recieved = results.filter(finder);
  const expected = [];
  expect(recieved).toEqual(expected);
});

test('Search by two parameters', () => {
  const finder = findBy('name', 'маг');
  const newResults = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
    { name: 'маг', type: 'character', description: 'Продвинутый персоонаж' },
  ];
  const recieved = newResults.filter(finder);
  const expected = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'маг', type: 'character', description: 'Продвинутый персоонаж' },
  ];

  expect(recieved).toEqual(expected);
});
