import { expect } from 'chai'
import getYears from '../index'

describe('Select Year with Offset module', () => {

  it('should handle not numeric inputs', () => {
    let actual = getYears('4', 2);
    const  expected = new Error('Invalid input data.');
    expect(actual.toString()).to.equal(expected.toString());
    actual = getYears(18, '100');
    expect(actual.toString()).to.equal(expected.toString());
  });

  it('should handle undefined inputs', () => {
    let actual = getYears('', 2);
    const  expected = new Error('Invalid input data.');
    expect(actual.toString()).to.equal(expected.toString());
    actual = getYears(18, undefined);
    expect(actual.toString()).to.equal(expected.toString());
  });

  it('should return an array', () => {
    const actual = typeof getYears(18, 100);
    const expected = 'object';
    expect(actual).to.equal(expected);
  });

  it('should return an array with given length depending on how many years want to show', () => {
    let actual = getYears(18, 100).length;
    let expected = 101;
    expect(actual).to.equal(expected);
    actual = getYears(1, 50).length;
    expected = 51;
    expect(actual).to.equal(expected);
  });

  it('should set the correct offset in the form of number of years', () => {
    let actual = getYears(18, 100)[0];
    let expected = 1999;
    expect(actual).to.equal(expected);
    actual = getYears(10, 100)[0];
    expected = 2007;
    expect(actual).to.equal(expected);

    actual = getYears(5, 100)[0];
    expected = 2012;
    expect(actual).to.equal(expected);

    actual = getYears(101, 100)[0];
    expected = 1916;
    expect(actual).to.equal(expected);
  });

});