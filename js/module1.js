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

  printAudi: (object) => {

    console.log("Audi Cars Models:");

    try {

      let object = CARS.audi.forEach((element, index) => {
        console.log(index + " - " +
          " Model: " + element.model + " - " +
          " Year: " + element.year + " - " +
          " Colors Available: " + " [ " + element.color + " ] "
        );
      });

      return object;

    } catch (err) {

      document.querySelector('.err').innerHTML = "An error accured on loop Audi Array: " + err;
      console.log("An error accured on loop Audi Array: ", err);
      return;

    } finally {

      let loaded = document.createElement('span');
      let text = document.createTextNode('Audi is now loaded');
      loaded.appendChild(text);
      document.getElementsByClassName('loadAudi')[0].appendChild(loaded);

    }
  },
  printFerrari: (object) => {

    console.log("Ferrari Cars Models:");

    try {

      let object = CARS.ferrari.forEach((element, index) => {
        console.log(index + " - " +
          " Model: " + element.model + " - " +
          " Year: " + element.year + " - " +
          " Colors Available: " + " [ " + element.color + " ] "
        );
      });

      return object;

    } catch (err) {

      document.querySelector('.err').innerHTML = "An error accured on loop Ferrari Array: " + err;
      console.log("An error accured on loop Ferrari Array: ", err);

    } finally {

      let loaded = document.createElement('span');
      let text = document.createTextNode('Ferrari is now loaded');
      loaded.appendChild(text);
      document.getElementsByClassName('loadFerrari')[0].appendChild(loaded);

    }
  },
  printMercedes: (object) => {

    console.log("Mercedes Cars Models:");

    try {

      let object = CARS.mercedes.forEach((element, index) => {
        console.log(index + " - " +
          " Model: " + element.model + " - " +
          " Year: " + element.year + " - " +
          " Colors Available: " + " [ " + element.color + " ] "
        );
      });

      return object;

    } catch (err) {

      document.querySelector('.err').innerHTML = "An error accured on loop Mercedes Array: " + err;
      console.log("An error accured on loop Mercedes Array: ", err);
      return;

    } finally {

      let loaded = document.createElement('span');
      let text = document.createTextNode('Mercedes is now loaded');
      loaded.appendChild(text);
      document.getElementsByClassName('loadMercedes')[0].appendChild(loaded);

    }
  },

  /**
   * @description: Printing filtered objects
   */

  printFilterAudi: (query) => {

    console.log("Audi cars newer than 2009:");

    try {

      let query = CARS.audi.filter(car => car.year > "2009").forEach((element, index) => {
        console.log(index + " - " +
          " Model: " + element.model + " - " +
          " Year: " + element.year + " - " +
          " Colors Available: " + " [ " + element.color + " ] "
        );
      });

      return query;

    } catch (err) {

      document.querySelector('.err').innerHTML = "An error accured on loop Audi Array: " + err;
      console.log("An error accured on loop Audi Array: ", err);
      return;

    } finally {

      let loaded = document.createElement('span');
      let text = document.createTextNode('Audi query');
      loaded.appendChild(text);
      document.getElementsByClassName('queryAudi')[0].appendChild(loaded);

    }
  },
  printFilterFerrari: (query) => {

    console.log("Ferrari cars matching Spider:");

    try {

      let query = CARS.ferrari.filter(car => car.model === "Spider" || car.model === "F50")
        .forEach((element, index) => {
          console.log(index + " - " +
            " Model: " + element.model + " - " +
            " Year: " + element.year + " - " +
            " Colors Available: " + " [ " + element.color + " ] "
          );
        });

      return query;

    } catch (err) {

      document.querySelector('.err').innerHTML = "An error accured on loop Ferrari Array: " + err;
      console.log("An error accured on loop Audi Array: ", err);
      return;

    } finally {

      let loaded = document.createElement('span');
      let text = document.createTextNode('Ferrari query');
      loaded.appendChild(text);
      document.getElementsByClassName('queryFerrari')[0].appendChild(loaded);

    }
  },
  printFilterMercedes: (query) => {

    console.log("Mercedes cars newer or equal 2004 and color black:");

    try {

      let query = CARS.mercedes.filter(car => car.year >= "2004" && car.color[0] !== "purple")
        .forEach((element, index) => {
          console.log(index + " - " +
            " Model: " + element.model + " - " +
            " Year: " + element.year + " - " +
            " Colors Available: " + " [ " + element.color + " ] "
          );
        });

      return query;

    } catch (err) {

      document.querySelector('.err').innerHTML = "An error accured on loop Mercedes Array: " + err;
      console.log("An error accured on loop Mercedes Array: ", err);
      return;

    } finally {

      let loaded = document.createElement('span');
      let text = document.createTextNode('Mercedes query');
      loaded.appendChild(text);
      document.getElementsByClassName('queryMercedes')[0].appendChild(loaded);

    }
  },

  /**
   * @description: Creating filtered objects
   */

  audiFilterObject: (object) => {

    try {

      let object = CARS.audi.filter(car => car.year > "2009");

      console.log("Audi\'s Cars " + " (" + "After The Year Of 2009" + ") " + " Objects:");
      console.log(object);

      return object;

    } catch (err) {

      document.querySelector('.err').innerHTML = "An error accured on loop Audi Array: " + err;
      console.log("An error accured on loop Audi Array: ", err);
      return;

    } finally {

      let loaded = document.createElement('span');
      let text = document.createTextNode('Audi Object');
      loaded.appendChild(text);
      document.getElementsByClassName('objectAudi')[0].appendChild(loaded);

    }
  },
  ferrariFilterObject: (object) => {

    try {

      let object = CARS.ferrari.filter(car => car.model === "Spider" || car.model === "F50");

      console.log("Ferrari\'s Cars " + " (" + "Matching Spider and F50 Models" + ") " + " Objects:");
      console.log(object);

      return object;

    } catch (err) {

      document.querySelector('.err').innerHTML = "An error accured on loop Ferrari Array: " + err;
      console.log("An error accured on loop Ferrari Array: ", err);
      return;

    } finally {

      let loaded = document.createElement('span');
      let text = document.createTextNode('Ferrari Object');
      loaded.appendChild(text);
      document.getElementsByClassName('objectFerrari')[0].appendChild(loaded);

    }
  },
  mercedesFilterObject: (object) => {

    try {

      let object = CARS.mercedes.filter(car => car.year >= "2004" && car.color[0] !== "purple");

      console.log("Mercedes\'s Cars " + " (" + "Matching newer or equal 2004 and color black:" + ") " + " Objects:");
      console.log(object);

      return object;

    } catch (err) {

      document.querySelector('.err').innerHTML = "An error accured on loop Mercedes Array: " + err;
      console.log("An error accured on loop Mercedes Array: ", err);
      return;

    } finally {

      let loaded = document.createElement('span');
      let text = document.createTextNode('Mercedes Object');
      loaded.appendChild(text);
      document.getElementsByClassName('objectMercedes')[0].appendChild(loaded);

    }
  },

  /**
   * @description: Car's object is built here
   * It loops the array of objects without filter
   */

  carsObject: (object) => {
    console.log("Car\'s Collection:");

    try {

      for (const i in CARS) {
        object = console.log(CARS[i]);
      }
      return object;
    } catch (err) {

      document.querySelector('.err').innerHTML = "Could not create the array of objects : " + err;
      console.log("Could not create the array of objects: ", err);
      return;

    }
  },

  /**
   * @description: Initializing the functions
   * they're called into an array collection.
   */

  init: (start) => {
    start = [
      CARS.printAudi(this.object),
      CARS.printFerrari(this.object),
      CARS.printMercedes(this.object),
      CARS.carsObject(),
      CARS.printFilterAudi(this.query),
      CARS.audiFilterObject(this.object),
      CARS.printFilterFerrari(this.query),
      CARS.ferrariFilterObject(this.object),
      CARS.printFilterMercedes(this.query),
      CARS.mercedesFilterObject(this.query)
    ];
    return start;
  }
};

/**
  * @description: Getting init Array started
  */

CARS.init(this.start);
