// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//console.log(returnRandBase());
//console.log(mockUpStrand());

/* FACTORY Function */

const pAequorFactory = (number, bases) => {
  return {
    specimenNum: number,
    dna: bases,
    // ==== mutate() ===
    mutate() {
      let randomBaseInstance = Math.floor(Math.random() * this.dna.length); // Returns a number
      // console.log('The Random Base instace is: ' + randomBaseInstance);

      let newBase = returnRandBase();
      // console.log('The new base is: ' + newBase)

      // console.log('The Base of the mutation is: ' + this.dna[randomBaseInstance]);

      // The while loop calls returnRandBase() as long as it is no longer equal to this.dna[randomBaseInstance]
      while (this.dna[randomBaseInstance] === newBase) {
        newBase = returnRandBase();
      }

      this.dna[randomBaseInstance] = newBase; // Replaces this.dna[randomBaseInstance] with newBase (which thanks to the while loop will never be equal)

      return this.dna;
    }, // End mutate() method
    // ===== compareDNA() =====

    compareDNA(organism) {
      let thisDNA = this.dna;
      let organismDNA = organism.dna;
      // console.log(/* 'The dna in this organism is: ' + */thisDNA)
      // console.log(/* 'The dna in the comparable organis is: ' +*/organismDNA)
      let identicalBases = 0;
      for (let i = 0; i < thisDNA.length; i++) {
        //console.log('Outter loop: ' + i + '' + thisDNA[i])
        for (let j = 0; j < organismDNA.length; j++) {
          //console.log('Inner loop: ' + j + '' + organismDNA[j])
          if (thisDNA[i] === organismDNA[j] && i === j) {
            identicalBases++;
          }
        } // end inner for loop
      } // end outter for loop */

      let percentage = ((100 * identicalBases) / thisDNA.length).toFixed();
      console.log(
        "Specimen" +
          this.specimenNum +
          " and Specimen" +
          organism.specimenNum +
          " have " +
          percentage +
          "% DNA in common."
      );
    }, // End compareDNA() method

    /* ===== willLikelySurvive() ====== */
    willLikelySurvive() {
      let countSurvivalBases = 0;
      for (let i in this.dna) {
        //console.log(this.dna[i])
        if (this.dna[i] === "C") {
          countSurvivalBases++;
        } else if (this.dna[i] === "G") {
          countSurvivalBases++;
        } // End if statement
      } // End for...of loop

      let percentage = ((100 * countSurvivalBases) / this.dna.length).toFixed();

      /* console.log(
        "This organism is made up of " +
          percentage +
          "% of 'C' and 'G' bases. Is it likely to survive?"
      ); */

      if (percentage >= 60) {
        return true;
      } else {
        return false;
      }
    }, // End willLikelySurvive()
  }; // End object
}; // End factory function

const sampleOrganism1 = {
  specimenNum: 1,
  dna: [
    "C",
    "C",
    "T",
    "T",
    "G",
    "G",
    "A",
    "A",
    "A",
    "G",
    "A",
    "C",
    "G",
    "G",
    "T",
  ],
  // ==== mutate() ===
  mutate() {
    let randomBaseInstance = Math.floor(Math.random() * this.dna.length); // Returns a number
    let newBase = returnRandBase();
    // The while loop calls returnRandBase() as long as it is no longer equal to this.dna[randomBaseInstance]
    while (this.dna[randomBaseInstance] === newBase) {
      newBase = returnRandBase();
    }
    this.dna[randomBaseInstance] = newBase; // Replaces this.dna[randomBaseInstance] with newBase (which thanks to the while loop will never be equal)
    return this.dna;
  }, // End mutate() method
  // ===== compareDNA() =====

  compareDNA(organism) {
    let thisDNA = this.dna;
    let organismDNA = organism.dna;
    let identicalBases = 0;
    for (let i = 0; i < thisDNA.length; i++) {
      for (let j = 0; j < organismDNA.length; j++) {
        if (thisDNA[i] === organismDNA[j] && i === j) {
          identicalBases++;
        }
      } // end inner for loop
    } // end outter for loop */
    let percentage = ((100 * identicalBases) / thisDNA.length).toFixed();
    console.log(
      "Specimen" +
      this.specimenNum +
      " and Specimen" +
      organism.specimenNum +
      " have " +
      percentage +
      "% DNA in common."
    );
  }, // End compareDNA() method

  /* ===== willLikelySurvive() ====== */
  willLikelySurvive() {
    let countSurvivalBases = 0;
    for (let i in this.dna) {
      if (this.dna[i] === "C") {
        countSurvivalBases++;
      } else if (this.dna[i] === "G") {
        countSurvivalBases++;
      } // End if statement
    } // End for...of loop
    let percentage = ((100 * countSurvivalBases) / this.dna.length).toFixed();
    if (percentage >= 60) {
      return true;
    } else {
      return false;
    }
  }, // End willLikelySurvive()
}; // End sampleOrganism1

// console.log(sampleOrganism1.mutate());

const sampleOrganism2 = {
  specimenNum: 2,
  dna: [
    "C",
    "A",
    "C",
    "C",
    "C",
    "A",
    "A",
    "A",
    "A",
    "T",
    "G",
    "G",
    "G",
    "G",
    "G",
  ],
  // ===== mutate() =====
  mutate() {
    let randomBaseInstance = Math.floor(Math.random() * this.dna.length); // Returns a number
    let newBase = returnRandBase();
    // The while loop calls returnRandBase() as long as it is no longer equal to this.dna[randomBaseInstance]
    while (this.dna[randomBaseInstance] === newBase) {
      newBase = returnRandBase();
    }
    this.dna[randomBaseInstance] = newBase; // Replaces this.dna[randomBaseInstance] with newBase (which thanks to the while loop will never be equal)
    return this.dna;
  }, // End mutate() method
  // ===== compareDNA() =====

  compareDNA(organism) {
    let thisDNA = this.dna;
    let organismDNA = organism.dna;
    let identicalBases = 0;
    for (let i = 0; i < thisDNA.length; i++) {
      for (let j = 0; j < organismDNA.length; j++) {
        if (thisDNA[i] === organismDNA[j] && i === j) {
          identicalBases++;
        }
      } // end inner for loop
    } // end outter for loop */
    let percentage = ((100 * identicalBases) / thisDNA.length).toFixed();
    console.log(
      "Specimen" +
      this.specimenNum +
      " and Specimen" +
      organism.specimenNum +
      " have " +
      percentage +
      "% DNA in common."
    );
  }, // End compareDNA() method

  /* ===== willLikelySurvive() ====== */
  willLikelySurvive() {
    let countSurvivalBases = 0;
    for (let i in this.dna) {
      if (this.dna[i] === "C") {
        countSurvivalBases++;
      } else if (this.dna[i] === "G") {
        countSurvivalBases++;
      } // End if statement
    } // End for...of loop
    let percentage = ((100 * countSurvivalBases) / this.dna.length).toFixed();
    if (percentage >= 60) {
      return true;
    } else {
      return false;
    }
  }, // End willLikelySurvive()
}; // End sampleOrganism2

/* const improveSurvivalChances = (array) => {

}; // End improveSurvivalChances() */

//console.log(mockUpStrand());
// console.log(sampleOrganism2.willLikelySurvive());
//console.log(sampleOrganism2.dna);
//console.log(sampleOrganism2.compareDNA(sampleOrganism1));

let pAequorOrganisms = [];

const pushOrganisms = (object) => {
  if (object.willLikelySurvive()) {
    pAequorOrganisms.push(object);
  }
};  // End pushOrganisms

let specimenNum = 1;

while (pAequorOrganisms.length < 30) {
  pushOrganisms(pAequorFactory(specimenNum, mockUpStrand()));
  specimenNum++
}; // End while loop */

console.log(pAequorOrganisms)
