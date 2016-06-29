/**
 *@name: module1
 *
 *@description: First module to be imported into
 *scripts.js (ECMA Script 6)
 *
 */


const CARS = {
  audi: [
    { model: 'A3', year: '2015', color: ['black', 'white', 'red'] },
    { model: 'Q5', year: '2014', color: ['black', 'white', 'red'] },
    { model: 'A1', year: '2009', color: ['black', 'white', 'red'] }
  ],
  ferrari: [
    { model: 'Spider', year: '2016', color: ['black', 'white', 'red', 'blue'] },
    { model: 'F50', year: '2012', color: ['black', 'white', 'red', 'blue'] },
    { model: 'F40', year: '2010', color: ['black', 'white', 'red', 'blue'] }
  ],
  mercedes: [
    { model: 'Kompressor', year: '2004', color: ['black', 'white', 'red', 'blue'] },
    { model: 'AMD', year: '2006', color: ['black', 'white', 'red', 'blue'] },
    { model: 'F1', year: '2016', color: ['black', 'white', 'red', 'blue'] }
  ],
  printAudi: () => {
    console.log("Audi Cars Models");

    CARS.audi.forEach((element, index) => {
      console.log(index + " - " +
        " Model: " + element.model + " - " +
        " Year: " + element.year + " - " +
        " Colors Available: " + " [ " + element.color + " ] "
      );
    });
  },
  printFerrari: () => {
    console.log("Ferrari Cars Models");

    CARS.ferrari.forEach((element, index) => {
      console.log(index + " - " +
        " Model: " + element.model + " - " +
        " Year: " + element.year + " - " +
        " Colors Available: " + " [ " + element.color + " ] "
      );
    });
  },
  printMercedes: () => {
    console.log("Mercedes Cars Models");

    CARS.mercedes.forEach((element, index) => {
      console.log(index + " - " +
        " Model: " + element.model + " - " +
        " Year: " + element.year + " - " +
        " Colors Available: " + " [ " + element.color + " ] "
      );
    });
  },
  printFilterAudi: () => {
    console.log("Audi cars newer than 2009");

     CARS.audi.filter(car => car.year > "2009").forEach((element, index) => {
          console.log(index + " - " +
        " Model: " + element.model + " - " +
        " Year: " + element.year + " - " +
        " Colors Available: " + " [ " + element.color + " ] "
       );
    });
  },
  carsObject: (object) => {
    console.log('Car\'s Collection:');
    for (const i in CARS) {
      object = console.log(CARS[i]);
    }
    return object;
  },
  init: (start) => {
    start = [
      CARS.printAudi(),
      CARS.printFerrari(),
      CARS.printMercedes(),
      CARS.carsObject(),
      CARS.printFilterAudi()
    ];
    return start;
  }
};

CARS.init(this.start);
