class PairingMockInterview {
  constructor() {
    this.allParticipants = [];
    this.pairings = [];
  }

  addParticipant(person) {
    this.allParticipants.push(person);
  }

  choosePerson() {
    let totalPeople = this.allParticipants.length;
    const index = Math.floor(Math.random() * totalPeople);
    const person = this.allParticipants[index];
    // change position of person to the back to remove with pop for O1 time
    [[this.allParticipants[index]], [this.allParticipants[totalPeople - 1]]] = [
      [this.allParticipants[totalPeople - 1]],
      [this.allParticipants[index]],
    ];
    // remove person
    this.allParticipants.pop();
    return person;
  }

  generatePairings() {
    // can check length up here if mod 2
    // for odd people - give heads up

    while (this.allParticipants.length) {
      const person1 = this.choosePerson();
      // in case there are an odd number of participants
      let person2 = null;
      if (this.allParticipants.length) {
        person2 = this.choosePerson();
      }

      this.pairings.push([person1, person2]);
      // add alert if person2 is null
    }
    return this.pairings;
  }
}

// this week March 13th 2023 Monday
// Cat, Ji, Philip, Tina, Kevin, Na

const march132023 = new PairingMockInterview();
march132023.addParticipant('Cat');
march132023.addParticipant('Ji');
march132023.addParticipant('Kevin');
march132023.addParticipant('Philip');
march132023.addParticipant('Na');
march132023.addParticipant('Tina');
console.log('class is: ', march132023);

const thisWeekPairing = march132023.generatePairings();
console.log("this week's pairings: ", thisWeekPairing);
