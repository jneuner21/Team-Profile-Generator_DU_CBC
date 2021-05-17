const Manager = require('../library/Manager')

test('is a Manager?', () => {
    let e = new Manager()
      expect(typeof e).toBe('object');
  });