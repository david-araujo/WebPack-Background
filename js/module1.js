/**
 *@name: module1
 *
 *@description: First module to be imported into
 *scripts.js (JQuery Library Testing)
 *
 */

var $ = require ('JQuery');

$('h3').html('Changing content via require JQuery');
console.log("Loaded module 1");
