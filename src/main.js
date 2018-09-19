import { el } from './dom.js'
import { businessApi } from './businessApi.js'

const countBusinessByCategory = 'https://data.edmonton.ca/resource/3trf-izgx.json?$select=business_category,count(*)&$group=business_category';

const data = new businessApi();



data.single(11465).then(val => console.log(val));
data.listCategories().then(val => displayCategories(val));
data.businessesByCategory('Public Market Organizer').then(val => console.log(val));
data.businessesByName('ON THE SPOT POP UP').then(val => {console.log(val)});

function displayCategories(categoryCounts) {
let categoryCards = el('div',{class:'card-deck'}); 
for (let c of categoryCounts) {
    let card = el('div',{class:'card'}, 
        el('p',{"class":"count"}, c.count_1),
        el('div',{"class":"category"}, c.business_category));
    categoryCards.appendChild(card);
}
document.querySelector('#search').appendChild(categoryCards);
}