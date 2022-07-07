class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  // === Getters ===
  get name() {
    return this._name;
  }
  //
  get level() {
    return this._level;
  }
  //
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  // === Setters ===
  set numberOfStudents(newNumber) {
    if (typeof newNumber === "number") {
      this._numberOfStudents = newNumber;
    } else {
      console.log("Invalid input: numberOfStudents must be set to a Number.");
    }
  }
  // === Methods ===
  quickFacts() {
    console.log(
      `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`
    );
  }

  static pickSubstituteTeacher(substituteTeachers) {
    let randomIndex = Math.floor(
      Math.random() * (substituteTeachers.length - 1)
    );
    return substituteTeachers[randomIndex];
  }
} // End School Class

/* === Test School === 
  
  const london = new School('London');
  
  console.log(london.pickSubstituteTeacher(['Harry', 'Michelle', 'Debbie', 'Kara', 'Jose', 'Tom']));
  
  */

/* === PrimarySchool Subclass ===*/
class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickUpPolicy) {
    super(name);
    this._level = "primary";
    this._numberOfStudents = numberOfStudents;
    this._pickUpPolicy = pickUpPolicy;
  }
  //
  get pickUpPolicy() {
    return this._pickUpPolicy;
  }
}
/* === MiddleSchool Subclass ===*/
class MiddleSchool extends School {
  constructor(name, numberOfStudent) {
    super(name, numberOfStudents);
    this._level = "middle";
  }
}
/* === HighSchool Subclass ===*/
class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name);
    this._level = "high";
    this._numberOfStudents = numberOfStudents;
    this._sportsTeams = sportsTeams;
  }
  //
  get sportsTeams() {
    return this._sportsTeams;
  }
  //
}

const lorraineHansbury = new PrimarySchool(
  "Lorraine Hansbury",
  512,
  "Students must be picked up by a parent, guardian, or a family member over the age of 13."
);

//console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

const alSmith = new HighSchool("Al E. Smith", 415, [
  "Baseball",
  "Basketball",
  "Volleyball",
  "Track and Field",
]);

console.log(alSmith.sportsTeams);
