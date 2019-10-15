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
  clone() {
    return new CalendarEvent(
      this.name,
      { ...this.date },
      [].concat(this.participants)
    );
  }

  // Return a clone of this event with a participant added
  addParticipant(name) {
    const clone = this.clone();
    clone.participants.push(name);
    return clone;
  }

  setName(name) {
    const clone = this.clone();
    clone.name = name;
    return clone;
  }

  setDay(day) {
    const clone = this.clone();
    clone.date.day = day;
    return clone;
  }
}

// const event1 = new CalendarEvent(
//   "Gardening preparation",
//   { day: 1, month: 3 },
//   ["Steve", "Hilary"]
// );

// const event2 = event1.clone();
// event2.name = "Work";
// event2.participants.push("Samantha");
// event1.name == "Gardening preparation"

// Creates an array of initial Events
function initializeCalendar() {
  const event1 = new CalendarEvent(
    "Gardening preparation",
    { day: 1, month: 3 },
    ["Steve", "Hilary"]
  );

  // const event2 = event1.clone();
  // event2.name = "Gardening work";
  // event2.participants.push("Samantha");

  // const event3 = event2.clone();
  // event2.date.day = 2;

  const event2 = event1.setName("Gardening Work").addParticipant("Samantha");
  const event3 = event2.setDay(2);

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
