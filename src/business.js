import { el } from './core.js'
import { Business } from './open-data-api.js'
const api = new Business();

function init() {
    let id = new URLSearchParams(window.location.search).get('id');
    api.single(id).then(r => {
        console.log(r[0]);
        displayBusiness('#business', r[0]);
    });
}

function displayBusiness(selector, business) {
    let dataList = el('dl');
    for (let key of Object.keys(business)) {
        dataList.appendChild(el('dt',null, key));
        dataList.appendChild(el('dd',null,business[key]));
    }
    document.querySelector(selector).appendChild(dataList);
}
init();