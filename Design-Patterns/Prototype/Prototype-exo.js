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
  // clone() {

  // Return a clone of this event with a participant added
  // addParticipant(name) {}
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
  const event2 = new CalendarEvent("Gardening work", { day: 1, month: 3 }, [
    "Steve",
    "Hilary",
    "Samantha"
  ]);
  const event3 = new CalendarEvent("Gardening work", { day: 2, month: 3 }, [
    "Steve",
    "Hilary",
    "Samantha"
  ]);
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
