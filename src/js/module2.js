/* @Name: lodash class */

const _ = require('lodash');

const PROGRAMMERS = {

  /** @description: Array of Objects Collections */

  frontend: [
    { user: 'james', age: '25', languages: [ 'java script', 'php', 'python' ] },
    { user: 'robert', age: '24', languages: [ 'asp', 'css', 'html5' ] },
    { user: 'john', age: '29', languages: [ 'css', 'java script', 'sass' ] }
  ],
  backend: [
    { user: 'robert', age: '26', languages: [ 'php', 'nodejs', 'ruby on rails', 'asp' ] },
    { user: 'eric', age: '22', languages: [ 'nodejs', 'php', 'java' ] },
    { user: 'johnson', age: '20', languages: [ 'ruby on rails', 'aspnet', 'php' ] }
  ],
  fullstack: [
    { user: 'jonathan', age: '26', languages: [ 'php', 'nodejs', 'ruby on rails', 'asp' ] },
    { user: 'kevin', age: '24', languages: [ 'nodejs', 'asp', 'java' ] },
    { user: 'louis', age: '26', languages: [ 'java', 'python', 'nodejs', 'php' ] }
  ],

  getData: (programmer) => {

    let obj = PROGRAMMERS.frontend.forEach((programmer, index) => {

      console.log(index + ' - ' +
          ' Programmer: ' + programmer.user + ' - ' +
          ' Age: ' + programmer.age + ' - ' +
          ' Languages: ' + ' [ ' + programmer.languages + ' ] '
        );
    });

    return {
      _obj: obj
    };

  }
};

console.log('Lodash result: ', _.filter(PROGRAMMERS.frontend, { user:'james' }));
PROGRAMMERS.getData();

console.log('Lodash testing dummy data: ', PROGRAMMERS + ' ' + _);
