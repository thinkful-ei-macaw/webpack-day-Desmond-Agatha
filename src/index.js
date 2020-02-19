import shoppingList from './shopping-list.js';
import $ from 'jquery';

function main() {
  console.log('DOM is loaded');

  const startMsg = $('<p>Webpack is working!</p>');
  $('#root').append(startMsg);
}

$(main);

const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
