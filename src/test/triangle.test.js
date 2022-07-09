const Triangle = require('../triangle');

describe('Test for Triangle', () => {
  let triangle;
  beforeEach(() => {
    triangle = new Triangle(1, 1, 1);
  });
  describe('Test for escalene triangle', () => {
    test('should return escalene', () => {
      triangle.side1 = 2;
      triangle.side2 = 2;
      triangle.side3 = 2;
      const equilateral = triangle.equilateral();
      expect(equilateral).toBe('This triangle is equilateral');
    });
  });
  describe('Test for isosceles triangle', () => {
    test('should return isosceles', () => {
      triangle.side1 = 3;
      triangle.side2 = 3;
      triangle.side3 = 1;
      const equilateral = triangle.isosceles();
      expect(equilateral).toBe('This triangle is isosceles');
    });
  });
  describe('Test for scalene triangle', () => {
    test('should return scalene', () => {
      triangle.side1 = 3;
      triangle.side2 = 0;
      triangle.side3 = 2;
      const equilateral = triangle.scalene();
      expect(equilateral).toBe('This triangle is scalene');
    });
  });
});
