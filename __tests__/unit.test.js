// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
//isPhoneNumber ------------
describe('isPhoneNumber', () => {
  //true
  test('valid phone 1', () => {
    expect(isPhoneNumber('123-456-7890')).toBe(true);
  });

  test('valid phone 2', () => {
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
  });

  //false
  test('invalid phone 1', () => {
    expect(isPhoneNumber('1234567890')).toBe(false);
  });

  test('invalid phone 2', () => {
    expect(isPhoneNumber('12-34-567')).toBe(false);
  });
});

//isEmail ------------
describe('isEmail', () => {
  //true
  test('valid email 1', () => {
    expect(isEmail('test@example.com')).toBe(true);
  });

  test('valid email 2', () => {
    expect(isEmail('john_doe@domain.org')).toBe(true);
  });

  //false
  test('invalid email 1', () => {
    expect(isEmail('test@com')).toBe(false);
  });

  test('invalid email 2', () => {
    expect(isEmail('not-an-email')).toBe(false);
  });
});

//isStrongPassword ------------
describe('isStrongPassword', () => {
  //true
  test('valid password 1', () => {
    expect(isStrongPassword('a1234')).toBe(true);
  });

  test('valid password 2', () => {
    expect(isStrongPassword('Zabc1234')).toBe(true);
  });

  //false
  test('invalid password 1 (too short)', () => {
    expect(isStrongPassword('a12')).toBe(false);
  });

  test('invalid password 2 (invalid char)', () => {
    expect(isStrongPassword('a12!!')).toBe(false);
  });
});

//isDate ------------
describe('isDate', () => {
  //true
  test('valid date 1', () => {
    expect(isDate('1/1/2024')).toBe(true);
  });

  test('valid date 2', () => {
    expect(isDate('12/31/1999')).toBe(true);
  });

  //false
  test('invalid date 1', () => {
    expect(isDate('123/1/2024')).toBe(false);
  });

  test('invalid date 2', () => {
    expect(isDate('01-01-2024')).toBe(false);
  });
});


//isHexColor ------------
describe('isHexColor', () => {
  //true
  test('valid hex 1', () => {
    expect(isHexColor('#fff')).toBe(true);
  });

  test('valid hex 2', () => {
    expect(isHexColor('#a1b2c3')).toBe(true);
  });

  //false
  test('invalid hex 1', () => {
    expect(isHexColor('#ff')).toBe(false);
  });

  test('invalid hex 2', () => {
    expect(isHexColor('ggg')).toBe(false);
  });
});

