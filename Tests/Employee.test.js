const Employee = require('../library/Employee')

test('is an employee?', () => {
    let e = new Employee()
      expect(typeof e).toBe('object');
  });