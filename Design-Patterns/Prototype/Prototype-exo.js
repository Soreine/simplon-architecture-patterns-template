class CalendarEvent {
  // name: string
  // date: { day: number, month: number }
  // participants: Array<string>

  constructor(name, date, participants) {
    this.name = name;
    this.date = date;
    this.participants = participants;
  }

  // Log a description of the event
  log() {
    const {
      name,
      date: { day, month },
      participants
    } = this;

    console.log(`${name}, on ${day}/${month}, with ${participants.join(", ")}`);
  }

  // Returns a deep clone of this event
  // clone() {}

  // Return a clone of this event with a participant added
  // addParticipant(name) {}
}

// Creates an array of initial Events
function initializeCalendar() {
  const event1 = new CalendarEvent("Gardening", { day: 1, month: 3 }, [
    "Steve",
    "Hilary"
  ]);

  // const event2 = ...

  // const event3 = ...

  return [event1, event2, event3];
}

const calendar = initializeCalendar();
calendar.forEach(event => event.log());
/*
 Should log:

Gardening Preparation, on 1/3, with Steve, Hilary
Gardening Work, on 1/3, with Steve, Hilary, Samantha
Gardening Work, on 2/3, with Steve, Hilary, Samantha

*/
