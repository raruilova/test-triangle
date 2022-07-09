class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  scalene() {
    if (this.isosceles() === 'This triangle is isosceles' || this.equilateral() === 'This triangle is equilateral') {
      return 'This is not a triangle scalene';
    }
    return 'This triangle is scalene';
  }

  isosceles() {
    if (this.side1 === this.side2 || this.side2 === this.side3 || this.side3 === this.side1) {
      return 'This triangle is isosceles';
    }
    return 'This triangle is other';
  }

  equilateral() {
    if (this.side1 === this.side2 && this.side2 === this.side3) {
      return 'This triangle is equilateral';
    }
    return 'This is not a triangle equilateral';
  }
}

module.exports = Triangle;
