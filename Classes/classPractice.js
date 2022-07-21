/**
Exercise 1   
You are a college student and you want to stream a movie over one of the campuses Wi-Fi networks. 
Based on the number of users, some networks won’t have the data to stream a movie.
Use the following Network class to track how much total data and how many users each network has:
The properties of the Network class are:
data: Total units of data supplied by the network
users: Total numbers of users currently on the network
Each user on average deducts 5 units from the network’s total data. 
To watch a movie you must connect to a network that has at least 10 remaining units of data.
Add a method movieTime() to the Network class that returns true if there is enough data available to watch a movie, false if there isn’t.
*/
class Network {
  constructor(data, users) {
    this.data = data;
    this.users = users;
  }
  // Insert code below
  movieTime() {
    let currentData = this.data;
    // we multiply the number of users by five to get the average of how much stress there is on the network
    let currentUsers = this.users * 5;
    // we get the remaining net data left.
    let dataLeft = currentData - currentUsers;
    // we check if there is enough data left to watch a movie.
    if (dataLeft >= 10) {
      return true;
    } else {
      return false;
    }
  }
}

// const network = new Network(35, 5);
//console.log(network.movieTime());

/* Exercise 2 


*/

class Player {
  constructor(name, hitsPerMinute) {
    this.name = name;
    this.hitsPerMinute = hitsPerMinute;
    this.balloonCount = 100;
  }

  status() {
    console.log(`Player: ${this.name} -- Balloons Left: ${this.balloonCount}`);
  }
}

// Write function below
const balloonAttack = (p1, p2) => {
  let p1HitRate = p1.hitsPerMinute * 10;
  let p2HitRate = p2.hitsPerMinute * 10;

  if (p1HitRate === p2HitRate) {
    return "Tie";
  } else if (p1HitRate > p2HitRate) {
    return p1.name;
  } else {
    return p2.name;
  }
};

// const p1 = new Player('p1', 5);
// const p2 = new Player('p2', 50);
//console.log(balloonAttack(p1, p2));

/* Exercise 3 

*/

class ShiftCipher {
  constructor(number) {
    this.number = number;
  }
  
  containsSpecialChars(str) {
    const specialChars = `\`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~123456789`;
  
    const result = specialChars.split('').some(specialChar => {
      if (str.includes(specialChar)) {
        return true;
      }
  
      return false;
    });
  
    return result;
  }

  encrypt(message) {
    const lowCaseMessage = message.toLowerCase();
    let newMessage = "";
    // Loop  
    for (let i = 0; i < lowCaseMessage.length; i++) {
      if(this.containsSpecialChars(lowCaseMessage[i]) || lowCaseMessage[i] === ' '){ // Checks for special characters
        newMessage = newMessage + lowCaseMessage[i]
        continue;
      }
      // console.log(message[i])
      let characterCode = lowCaseMessage[i].charCodeAt(); // Produces the string number code 
      //console.log(`The value of ${lowCaseMessage[i]} before the conditionals is ${characterCode}`);       

      if ((characterCode + this.number) <= 122) {
          characterCode = characterCode + this.number; //
        } else if (characterCode === 122) {
          characterCode = 97
        } else if ((characterCode + this.number) >= 122){
          characterCode = (characterCode + this.number) - 26;
        }
      //console.log(`The value of ${lowCaseMessage[i]} after the conditionals is ${characterCode}`);

      let newCharacter = String.fromCharCode(characterCode);

      newMessage = newMessage + newCharacter;
    }
    
    return newMessage.toLocaleUpperCase();
  }

  decrypt(message) {
    const upperCaseMessage = message.toLocaleUpperCase()

    let newMessage = "";
    for (let i = 0; i < upperCaseMessage.length; i++) {
      if(this.containsSpecialChars(upperCaseMessage[i]) || upperCaseMessage[i] === ' '){ // Checks for special characters
        newMessage = newMessage + upperCaseMessage[i]
        continue;
      }
      // console.log(message[i])
      let characterCode = upperCaseMessage[i].charCodeAt(); // Produces the string number code 
      //console.log(`The value of ${upperCaseMessage[i]} before the conditionals is ${characterCode}`);       

      if ((characterCode - this.number) >= 65) {
          characterCode = characterCode - this.number; //
        } else if (characterCode === 90) {
          characterCode = 65
        } else if((characterCode - this.number) <= 90) {
          characterCode = (characterCode - this.number) + 26; //
        }
      //console.log(`The value of ${upperCaseMessage[i]} after the conditionals is ${characterCode}`);

      let newCharacter = String.fromCharCode(characterCode);

      newMessage = newMessage + newCharacter;
    }
    
    return newMessage.toLowerCase();

  }
}

const cipher = new ShiftCipher(2);

console.log(cipher.encrypt('Z'));
