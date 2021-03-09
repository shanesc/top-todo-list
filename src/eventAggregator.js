class Event {
  constructor(name) {
    this.name = name;
    this._handlers = [];
  }

  addHandler(handler) {
    this._handlers.push(handler);
  }

  fire(eventArgs) {
    this._handlers.forEach((handler) => {
      handler(eventArgs);
    });
  }
}

function eventAggregator() {
  const events = [];

  function getEvent(eventName) {
    return events.filter((event) => {
      return event.name === eventName;
    })[0];
  }

  return {
    publish(eventName, eventArgs) {
      let event = getEvent(eventName);

      if (!event) {
        event = new Event(eventName);
        events.push(event);
      }

      event.fire(eventArgs);
    },
    subscribe(eventName, handler) {
      let event = getEvent(eventName);

      if (!event) {
        event = new Event(eventName);
        events.push(event);
      }

      event.addHandler(handler);
    },
  };
}

export default eventAggregator();
