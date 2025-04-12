const { setWorldConstructor } = require('@cucumber/cucumber');

class CustomWorld {
  constructor() {
    this.page = null;  // Initialize page as null
  }
}

setWorldConstructor(CustomWorld);
