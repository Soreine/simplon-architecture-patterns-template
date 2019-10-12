class IdGenerator {
  constructor() {
    this.nextId = 1;
  }

  /* Provide a single use, and unique ID */
  generateId() {
    const id = this.nextId;
    this.nextId += 1;

    return id;
  }
}

// ---------
// Module 1
// ---------

const userIdGenerator = new IdGenerator();

function createUser(name) {
  return {
    name,
    id: userIdGenerator.generateId()
  };
}

// ---------
// Module 2
// ---------

const teamIdGenerator = new IdGenerator();

function createTeam(name) {
  return {
    name,
    id: teamIdGenerator.generateId()
  };
}

// ---------
// Business code
// ---------

const initialData = [
  createUser("Patrick"),
  createUser("Bob"),
  createTeam("Bikini Bottom")
];

console.log(initialData);
// Le user Patrick et la team Bikini Bottom ont le même ID =(
