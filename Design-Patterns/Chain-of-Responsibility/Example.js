// interface Handler {

//     setNext(handler)

//     handle(request)
// }

class BaseHandler {
  constructor() {
    this.next = null;
  }

  setNext(nextHandler) {
    this.next = nextHandler;
  }

  handle(request) {
    if (this.next) {
      return this.next.handle(request);
    }
    throw new Error("Missing next handler");
  }
}

class AuthentificationHandler extends BaseHandler {
  isAuthentified(request) {
    /// ....
  }

  handle(request) {
    // Check the request headers, that the user is authentified
    const isAuthentified = this.isAuthentified(request);

    if (!isAuthentified) {
      return new Error("Not authentified");
    }

    super.handle(request);
  }
}

const authentification = new AuthentificationHandler();
const loggerHandler = new LogHandler();
const dashboard = new DashboardHandler();
const route404 = new Error404Handler();

authentification.setNext(loggerHandler);
loggerHandler.setNext(dashboard);
dashboard.setNext(route404);

const app = authentification;

function onRequest(request) {
  return app.handle(request);
}
