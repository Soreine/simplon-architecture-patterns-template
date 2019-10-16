// Exemple avec des fonctions

class App {
  setLoggerStrategy(logger) {
    this.logger = logger;
  }

  logState() {
    this.logger("State of the app");
  }
}

const consoleLogger = msg => console.log(msg);
const alertLogger = msg => window.alert(msg);

const app = new App();

app.setLoggerStrategy(consoleLogger);
app.logState(); // console.log('State of the app')

app.setLoggerStrategy(alertLogger);
app.logState(); // window.alert('State of the app')

// Exemple avec des classes

class App {
  setLoggerStrategy(logger) {
    this.logger = logger;
  }

  logState() {
    this.logger.log("State of the app");
  }
}

class ConsoleLogger {
  log(msg) {
    console.log(msg);
  }
}

class AlertLogger {
  log(msg) {
    window.alert(msg);
  }
}

const app = new App();

app.setLoggerStrategy(new ConsoleLogger());
app.logState(); // console.log('State of the app')

app.setLoggerStrategy(new AlertLogger());
app.logState(); // window.alert('State of the app')
