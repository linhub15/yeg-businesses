import { el } from './dom-api.js'

const countBusinessByCategory = 'https://data.edmonton.ca/resource/3trf-izgx.json?$select=business_category,count(*)&$group=business_category';

fetch (countBusinessByCategory)
    .then(function(response) {
        return response.json();
    })
    .then(function(categories) {
        displayCategories(categories);
    });

/**
 * Given a list of categories and their counts display them as cards
 */

 function displayCategories(categoryCounts) {
    let categoryCards = el('div',{class:'card-deck'}); 
    for (let c of categoryCounts) {
        let card = el('div',{class:'card'}, 
            el('p',{"class":"count"}, c.count_1),
            el('div',{"class":"category"}, c.business_category));
        categoryCards.appendChild(card);
    }
    document.querySelector('#byCategory').appendChild(categoryCards);
 }