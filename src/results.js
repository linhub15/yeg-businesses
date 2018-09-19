import { el } from './core.js';
import { Business } from './open-data-api.js';
const api = new Business();

function init() {
    let params = new URLSearchParams(window.location.search)
    let category = params.get('category');
    let q = params.get('q');

    let resultPromise = category
        ? api.businessesByCategory(category)
        : api.businessesByName(q);  //If param not category, param must be q

    resultPromise.then(r => displayBusineses('#results',r));
}

function displayBusineses(selector, data) {
    let row = el('div', {class: 'row'});
    for (let item of data) {
        row.appendChild(el('div', {class: 'list-item'}, item.trade_name));
    }
    let list = el('div', {class: 'list'}, row);
    document.querySelector(selector).appendChild(list);
}
init();