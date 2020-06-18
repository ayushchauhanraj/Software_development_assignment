//for animal ids
let id = 0;

//Base class getSound require a sound paramter
class Animal {
  constructor(name, age, weight) {
    (this.name = name),
      (this.age = age),
      (this.weight = weight),
      (this.id = ++id);
  }
  getSound(sound) {
    return sound;
  }
}

//categories of Animals  add extra type as its categories & extends Animal class

class Mammels extends Animal {
  constructor(name, age, weight) {
    super(name, age, weight);
    this.type = "mammels";
  }
}
class Reptile extends Animal {
  constructor(name, age, weight) {
    super(name, age, weight);
    this.type = "Reptile";
  }
}
class Bird extends Animal {
  constructor(name, age, weight) {
    super(name, age, weight);
    this.type = "Bird";
  }
}
class Ampibions extends Animal {
  constructor(name, age, weight) {
    super(name, age, weight);
    this.type = "Ampibions";
  }
}

//sub-class of categories of Lion ,Crocodile , peocock etc

class Lion extends Mammels {
  constructor(name, age, weight) {
    super(name, age, weight);
    this.family = "Lion";
  }
  Sound() {
    return this.getSound("roar");
  }
}

class Crocodile extends Reptile {
  constructor(name, age, weight) {
    super(name, age, weight);
    this.family = "Crocodile";
  }
  Sound() {
    return this.getSound("qtrqtr");
  }
}

class Peacock extends Reptile {
  constructor(name, age, weight) {
    super(name, age, weight);
    this.family = "Peocock";
  }
  Sound() {
    return this.getSound("Peopeo");
  }
}

//Cage class two functions addAnimal to cage and remove animal from cage on death
//@params type,limit and animalArray represents animal in that perticular cage,

class Cage {
  constructor(type, limit) {
    (this.type = type), (this.limit = limit), (this.animalArray = []);
  }
  addAnimal(animal) {
    if (this.limit != this.animalArray.length) {
      this.animalArray.push(animal);
    }
  }
  removeAnimal(id) {
    this.animalArray = this.animalArray.filter((animal) => animal.id != id);
  }
}

//Mammel zones in zoo
//@params cagesCap, hasPark, hasCanteen, zoneOf represent categories
/* @meathod _addToCage 
require: animal object 
effect: add animal to the cage first and then into the zone based into the categories ,
if cage is full then create a new cage
if capacity is full of zone the return message of No capacity 

@meathod _removeToCage 
require : id and type of animal 
effect : remove the animal from zone and cage also

@meathod _showZoneAnimals
return zone cages in which it has animals
*/
class Zones {
  constructor(cagesCap, hasPark, hasCanteen, zoneOf) {
    (this.cagesCap = cagesCap),
      (this.hasCanteen = hasCanteen),
      (this.hasPark = hasPark);
    this.zoneOf = zoneOf;
    this.cages = [];
  }
  addToCage(data) {
    if (this.cages.length <= this.cagesCap) {
      let i = 0;
      let cage = undefined;
      for (i = 0; i < this.cages.length; i++) {
        if (
          this.cages[i].type == data.family &&
          this.cages.limit != this.cages[i].animalArray.length
        ) {
          cage = this.cages[i];
        }
      }
      if (cage == undefined) {
        if (this.cages.length == this.cagesCap) {
          return "No capacity";
        }
        const obj = new Cage(data.family, 5);
        obj.addAnimal(data);
        this.cages.push(obj);
      } else {
        cage.addAnimal(data);
      }
    } else {
      return "No capacity ";
    }
  }

  removeToCage(id, type) {
    this.cages = this.cages.filter((cage) => {
      if (cage.type === type) {
        cage.removeAnimal(id);
      }
      return cage;
    });
  }

  showZoneAnimals() {
    let zoneAnimals = this.cages;
    return zoneAnimals;
  }
}

//zoo class create object of different zones
class Zoo {
  diffZone(cagesCap, hasPark, hasCanteen, zoneOf) {
    if ((zoneOf = "Mammels")) {
      return new Zones(cagesCap, hasPark, hasCanteen, zoneOf);
    }
    if ((zoneOf = "Reptile")) {
      return new Zones(cagesCap, hasPark, hasCanteen, zoneOf);
    }
    if ((zoneOf = "Bird")) {
      return new Zones(cagesCap, hasPark, hasCanteen, zoneOf);
    }
    if ((zoneOf = "Amphibions")) {
      return new Zones(cagesCap, hasPark, hasCanteen, zoneOf);
    }
    return new Error("unknown zone");
  }
}

const zooObj = new Zoo();
const mammelZone = zooObj.diffZone(10, true, true, "Mammels");
const reptileZone = zooObj.diffZone(11, true, false, "Reptile");
const birdZone = zooObj.diffZone(12, false, true, "Bird");
const amphibionsZone = zooObj.diffZone(9, false, false, "Amphibions");

//calling classes @params name,age,weight

//lion add
let lion = new Lion("lion_1", 23, 45);
mammelZone.addToCage(lion);

lion = new Lion("lion_1", 23, 45);
mammelZone.addToCage(lion);

lion = new Lion("lion_1", 23, 45);
mammelZone.addToCage(lion);

//crococile add
let crocodile = new Crocodile("crock_1", 13, 50);
reptileZone.addToCage(crocodile);

crocodile = new Crocodile("crock_1", 13, 50);
reptileZone.addToCage(crocodile);

//peacock add
let peacock = new Peacock("pea_1", 3, 15);
birdZone.addToCage(peacock);

peacock = new Peacock("pea_1", 3, 15);
birdZone.addToCage(peacock);

// see the data zonewise
console.log(mammelZone.showZoneAnimals());
console.log(reptileZone.showZoneAnimals());
console.log(birdZone.showZoneAnimals());
console.log(amphibionsZone.showZoneAnimals());

// deleteing animals on death

mammelZone.removeToCage(2, "Lion");
birdZone.removeToCage(7, "Peocock");

//again showing updated data

console.log(mammelZone.showZoneAnimals()[0].animalArray);
console.log(reptileZone.showZoneAnimals());
console.log(birdZone.showZoneAnimals());
console.log(amphibionsZone.showZoneAnimals());
