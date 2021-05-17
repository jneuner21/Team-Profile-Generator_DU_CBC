const Intern = require('../library/Intern')

test('is Intern?', () => {
    let e = new Intern()
      expect(typeof e).toBe('object');
  });