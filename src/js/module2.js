/* @Name: lodash class */

const _ = require('lodash');

const PROGRAMMERS = {

  /** @description: Array of Objects Collections */

  frontend: [
    { user: 'james', age: '25', languages: [ 'java script', 'php', 'python' ],
    frameworks: [ 'sass', 'grunt', 'less' ] },
    { user: 'robert', age: '24', languages: [ 'asp', 'css', 'html5' ],
    frameworks: [ 'less', 'gulp', 'emberjs' ] },
    { user: 'john', age: '29', languages: [ 'css', 'java script', 'sass' ],
    framework: [ 'angular', 'react', 'ember' ] }
  ],
  backend: [
    { user: 'robert', age: '26', languages: [ 'php', 'nodejs', 'ruby on rails', 'asp' ],
    frameworks: [ 'zend', 'spring' ] },
    { user: 'eric', age: '22', languages: [ 'nodejs', 'php', 'java' ],
    frameworks: [ 'express', 'symphony', 'spring' ] },
    { user: 'johnson', age: '20', languages: [ 'ruby on rails', 'aspnet', 'php' ],
    frameworks: [ 'zend', 'framework' ] }
  ],
  fullstack: [
    { user: 'jonathan', age: '26', languages: [ 'php', 'nodejs', 'ruby on rails', 'asp' ],
    frameworks: [ 'zend', 'angular', 'sass' ] },
    { user: 'kevin', age: '24', languages: [ 'nodejs', 'asp', 'java' ],
    frameworks: [ 'zend', 'express', 'react' ] },
    { user: 'louis', age: '26', languages: [ 'java', 'python', 'nodejs', 'php' ],
    frameworks: [ 'symphony', 'express', 'spring' ] }
  ],

  filterData: (user) => {

    console.log('Programmer\'s Filter Data: ');

    let obj = _.filter(PROGRAMMERS.frontend, {});

    let result = obj;

    user = {result};

    return {
      obj: user,
      print: (user) => {
        return console.log(obj);
      }
    };

  },

  filterUser: (user) => {

    console.log('Programmer\'s Array Filter User: ');

    let obj = _.filter(PROGRAMMERS.frontend, {user: 'james'});

    let result = obj;

    user = {result};

    return { obj: user };

  },

  filterEach: (person) => {

    console.log('Programmer\s Array forEach');

    let obj = _.PROGRAMMERS.backend.forEach((element, index) => {

      let result = {
        user: element.user,
        age: element.age
      };

      person = {result};

      return { obj: console.log(person) };

    });

    try {

      obj;

    } catch (err) {

      console.log("The object is null, ES6 Validation doesn\'t allow it to not be started. error: " + err);

    } finally {

      for(let i in PROGRAMMERS.backend) {

        let objContainer = {
          user: PROGRAMMERS.backend[i].user,
          age: PROGRAMMERS.backend[i].age
        };

        console.log({objContainer});

      }

    }

    return {person};

  },

  init: (start) => {
    start = [
      console.log(PROGRAMMERS.filterData()),
      console.log(PROGRAMMERS.filterUser()),
      console.log(PROGRAMMERS.filterEach())
    ];
  }

};

PROGRAMMERS.init();
