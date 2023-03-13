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
    const index1 = Math.floor(Math.random() * totalPeople);
    const person1 = this.allParticipants[index1];
    // change position of person1 to the back to remove with pop for O1 time
    [[this.allParticipants[index1]], [this.allParticipants[totalPeople - 1]]] =
      [[this.allParticipants[totalPeople - 1]], [this.allParticipants[index1]]];
    // remove person1
    this.allParticipants.pop();
    return person1;
  }

  generatePairings() {
    // let totalPeople = this.allParticipants.length;
    while (this.allParticipants.length) {
      const person1 = this.choosePerson();
      let person2 = null;
      if (this.allParticipants.length) {
        person2 = this.choosePerson();
      }

      this.pairings.push([person1, person2]);
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
