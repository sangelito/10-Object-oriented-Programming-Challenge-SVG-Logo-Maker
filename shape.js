// Shape class utilizes constructor to define shape
class Shape {
    constructor() {
      this.color = "";
    }
    // set shape color 
    setColor(colorVar) {
      this.color = colorVar;
    }
  }

  // Triangle class inherits properties defined in Shape class
class Triangle extends Shape {
    render() {
      // Returns triangle with color input
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  