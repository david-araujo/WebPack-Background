/**
 *@name: module1
 *
 *@description: First module to be imported into
 *scripts.js (ECMA Script 6)
 *
 */


const CARS = {

  /**
   *@description: Array of Objects Collections
   *dummy data is created just to make sure we 
   *can loop through and print results. 
   */

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
    { model: 'AMD', year: '2006', color: ['purple', 'white', 'red', 'blue'] },
    { model: 'F1', year: '2016', color: ['black', 'white', 'red', 'blue'] }
  ],

  /**
   * @description: Objects being looped in scope
   */

  printAudi: () => {
    console.log("Audi Cars Models:");

    try {

      CARS.audi.forEach((element, index) => {
        console.log(index + " - " +
          " Model: " + element.model + " - " +
          " Year: " + element.year + " - " +
          " Colors Available: " + " [ " + element.color + " ] "
        );
      });

    } catch (err) {

      document.querySelector('.err').innerHTML = err;
      console.log("An error accured on loop Audi Array: ", err);
      
    }
  },
  printFerrari: () => {
    console.log("Ferrari Cars Models:");

    CARS.ferrari.forEach((element, index) => {
      console.log(index + " - " +
        " Model: " + element.model + " - " +
        " Year: " + element.year + " - " +
        " Colors Available: " + " [ " + element.color + " ] "
      );
    });
  },
  printMercedes: () => {
    console.log("Mercedes Cars Models:");

    CARS.mercedes.forEach((element, index) => {
      console.log(index + " - " +
        " Model: " + element.model + " - " +
        " Year: " + element.year + " - " +
        " Colors Available: " + " [ " + element.color + " ] "
      );
    });
  },

  /**
   * @description: Printing filtered objects
   */

  printFilterAudi: () => {
    console.log("Audi cars newer than 2009:");

    CARS.audi.filter(car => car.year > "2009").forEach((element, index) => {
      console.log(index + " - " +
        " Model: " + element.model + " - " +
        " Year: " + element.year + " - " +
        " Colors Available: " + " [ " + element.color + " ] "
      );
    });
  },
  printFilterFerrari: () => {
    console.log("Ferrari cars matching Spider:");

    CARS.ferrari.filter(car => car.model === "Spider" || car.model === "F50")
      .forEach((element, index) => {
        console.log(index + " - " +
          " Model: " + element.model + " - " +
          " Year: " + element.year + " - " +
          " Colors Available: " + " [ " + element.color + " ] "
        );
      });
  },
  printFilterMercedes: () => {
    console.log("Mercedes cars newer or equal 2004 and color black:");

    CARS.mercedes.filter(car => car.year >= "2004" && car.color[0] !== "purple")
      .forEach((element, index) => {
        console.log(index + " - " +
          " Model: " + element.model + " - " +
          " Year: " + element.year + " - " +
          " Colors Available: " + " [ " + element.color + " ] "
        );
      });
  },

  /**
   * @description: Creating filtered objects
   */

  audiFilterObject: (object) => {

    object = CARS.audi.filter(car => car.year > "2009");

    console.log("Audi\'s Cars " + " (" + "After The Year Of 2009" + ") " + " Objects:");
    console.log(object);

  },
  ferrariFilterObject: (object) => {

    object = CARS.ferrari.filter(car => car.model === "Spider" || car.model === "F50");

    console.log("Ferrari\'s Cars " + " (" + "Matching Spider and F50 Models" + ") " + " Objects:");
    console.log(object);

  },
  mercedesFilterObject: (object) => {

    object = CARS.mercedes.filter(car => car.year >= "2004" && car.color[0] !== "purple");

    console.log("Mercedes\'s Cars " + " (" + "Matching newer or equal 2004 and color black:" + ") " + " Objects:");
    console.log(object);

  },
  carsObject: (object) => {
    console.log("Car\'s Collection:");
    for (const i in CARS) {
      object = console.log(CARS[i]);
    }
    return object;
  },

  /**
   * @description: Initializing the functions
   * they're called into an array collection.
   */

  init: (start) => {
    start = [
      CARS.printAudi(),
      CARS.printFerrari(),
      CARS.printMercedes(),
      CARS.carsObject(),
      CARS.printFilterAudi(),
      CARS.audiFilterObject(),
      CARS.printFilterFerrari(),
      CARS.ferrariFilterObject(),
      CARS.printFilterMercedes(),
      CARS.mercedesFilterObject()
    ];
    return start;
  }
};

CARS.init(this.start);
