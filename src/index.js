import { el } from './app-components.js'
import { Business } from './open-data-api.js'
const api = new Business();

function init() {
    api.listCategories()
        .then(r => displayCategories('#search', r));
}

function displayCategories(selector, categories) {
    let categoryCards = el('div',{class:'card-deck'}); 
    for (let c of categories) {
        let card = el('div',{class:'card'}, 
            el('p',{"class":"count"}, c.count_1),
            el('div',{"class":"category"}, c.business_category));
        categoryCards.appendChild(card);
    }
    document.querySelector(selector).appendChild(categoryCards);
}
init();