/**
 *@name: module3
 *
 *@description: First module to be imported into
 *scripts.js (module name goes here)
 *
 */


const $ = require('JQuery');

const arr = ['New York', 'Sao Paulo', 'Toquio'];
const listWrap = $('<ul></ul>');

const section = {

    citiesWrapper: $('.carsList')

};

let builder = (listItem, options) => {
    for (var i = 0; i < arr.length; i++) {

        let listItem = $('<li></li>');
        listItem.text(arr[i]);
        listWrap.append(listItem);

    }

    section.citiesWrapper.append(listWrap);

};

builder();

$('h3').html('Changing content via require JQuery');
