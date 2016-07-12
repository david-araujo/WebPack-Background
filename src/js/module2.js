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

  getData: (user) => {

    console.log('Programmer\'s Main Object: ');

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

  getProgrammer: (user) => {

    console.log('Programmer\'s Array Filter: ');

    let obj = _.filter(PROGRAMMERS.frontend, {user: 'james'});

    let result = obj;

    user = {result};

    return { obj: user };

  },

  init: (start) => {
    start = [
      console.log(PROGRAMMERS.getData()),
      console.log(PROGRAMMERS.getProgrammer())
    ];
  }

};

PROGRAMMERS.init();
