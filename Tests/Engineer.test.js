const Engineer = require('../library/Engineer')

test('is an Engineer?', () => {
    let e = new Engineer()
      expect(typeof e).toBe('object');
  });