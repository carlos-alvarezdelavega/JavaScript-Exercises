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

    /* Complement Strand Method */
    complementStrand() {
      let originalStrand = this.dna;
      let complementStrand = [];
      for(let i in originalStrand) {
        //console.log(i + strand1[i]);
        switch(originalStrand[i]) {
          case 'T':
            complementStrand.push('A');
            break;
          case 'A':
            complementStrand.push('T')
            break;
          case 'C':
            complementStrand.push('G')
            break;
          case 'G':
            complementStrand.push('C')
            break;
          default:
            console.log('Base does not match the DNA.');
            break;
        } // End Switch statement
      }; // end for loop;
      return complementStrand;
    }, // end complementStrand()
  }; // End object
}; // End factory function

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



console.log(pAequorOrganisms[0].dna);
console.log(pAequorOrganisms[0].complementStrand());
