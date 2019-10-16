// Example;

class Service {
  operation() {}
}

class ServiceProxy {
  constructor(service) {
    this.service = service;
    this.logger = new Logger();
  }

  operation() {
    this.logger("operation");

    if (this.checkAvailability()) {
      // Call the real Service.operation
      this.service.operation();
    } else {
      this.delayOperation();
    }
  }
}
