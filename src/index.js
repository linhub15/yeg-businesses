import { el, makeRoute } from './core.js'
import { Business } from './open-data-api.js'
const api = new Business();

async function init() {
    document.querySelector('#businessSearch')
        .addEventListener('click', businessSearch);
    document.querySelector('#businessQueryString').addEventListener('keyup', (event) => {
        if (event.keyCode === 13) {
            document.querySelector('#businessSearch').click();
        }
    })
    displayCategories('#index', await api.listCategories());
}

function businessSearch() {
    let searchValue = document.querySelector('#businessQueryString').value;
    window.location.assign(makeRoute('results','q',searchValue));
}

function displayCategories(selector, categories) {
    let categoryCards = el('div',{class:'card-deck'}); 
    for (let c of categories) {
        let card = el('a',{class:'card', href: makeRoute('results','category',c.business_category) }, 
            el('p',{"class":"count"}, c.count_1),
            el('div',{"class":"category"}, c.business_category));
        categoryCards.appendChild(card);
    }
    document.querySelector(selector).appendChild(el('h2',null,'Categories'));
    document.querySelector(selector).appendChild(categoryCards);
}
init();