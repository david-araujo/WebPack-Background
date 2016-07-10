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
    { user: 'jonathan', age: '26', languages: [ 'php', 'nodejs', 'ruby on rails', 'asp' ] },
    { user: 'kevin', age: '24', languages: [ 'nodejs', 'asp', 'java' ] },
    { user: 'louis', age: '26', languages: [ 'java', 'python', 'nodejs', 'php' ] }
  ],

  getData: (programmer) => {

    console.log('Programmer\'s Report: ');

    PROGRAMMERS.frontend.forEach((programmer, index) => {

      console.log(index + ' - ' +
          ' Programmer: ' + programmer.user + ' - ' +
          ' Age: ' + programmer.age + ' - ' +
          ' Languages: ' + ' [ ' + programmer.languages + ' ] '
        );

      let arr = [];

      let data = arr.push({programmer});

      return data;

    });

    return {
      obj: _.filter(PROGRAMMERS, {})
    };

  },

  getProgrammer: (programmer) => {

    let obj = _.filter(PROGRAMMERS.frontend, {user: 'james'});

    return { obj };

  }
};

console.log(PROGRAMMERS.getData());
console.log(PROGRAMMERS.getProgrammer());

console.log('Lodash testing dummy data: ', PROGRAMMERS + ' ' + _);
