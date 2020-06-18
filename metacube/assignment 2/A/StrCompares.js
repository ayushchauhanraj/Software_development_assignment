class StrCompare {
  constructor(str1, str2) {
    (this.str1 = str1 || ""), (this.str2 = str2 || "");
  }

  //require: input string not null
  // effect: return largest word length if same then print the last one

  wordLength() {
    let newString = "",
      word = "";
    let count = 0,
      max = -1;
    for (let i = 0; i < this.str1.length; i++) {
      if (this.str1[i] != " ") {
        count++;
        newString += this.str1[i];
      } else {
        if (max <= count) {
          word = newString;
          max = count;
        }
        newString = "";
        count = 0;
      }
    }
    console.log("longest word", word);
  }

  //require: input string contain lower and upper case character
  // effect: convert lowercase to upperCase and viceVersa and Print

  changeStr() {
    let newString = "";
    for (let i = this.str1.length - 1; i >= 0; i--) {
      if (this.str1[i] == this.str1[i].toUpperCase()) {
        newString += this.str1[i].toLowerCase();
      }
      if (this.str1[i] == this.str1[i].toLowerCase()) {
        newString += this.str1[i].toUpperCase();
      }
    }
    console.log(`Old string ${this.str1} New string ${newString}`);
  }

  //require: input string not null
  // effect: return reverse of the string
  reverse() {
    let newString = "";
    for (let i = this.str1.length - 1; i >= 0; i--) {
      newString += this.str1[i];
    }
    console.log(`Old string ${this.str1} New string ${newString}`);
  }

  //   require: contain two  string from class not null
  //  effect:  return 1 if same else 0

  compare() {
    let flag = 0;
    if (this.str1.length !== this.str2.length) {
      flag = 1;
      console.log(0);
    } else {
      for (let i = 0; i < this.str1.length; i++) {
        if (this.str1[i] !== this.str2[i]) {
          console.log(0);
          flag = 1;
          break;
        }
      }
    }
    if (flag === 0) {
      console.log(1);
    }
  }
}
let obj = new StrCompare(
  "Hello this is Ayush chauhan and i am writing the assignment  ",
  "Hello i am second string of compare fucntion "
);
obj.compare();
obj.reverse();
obj.changeStr();
obj.wordLength();
