export class Business {
  constructor() {
    this.apiEndpoint = 'https://data.edmonton.ca/resource/3trf-izgx.json' + '?';
  }
  async single(externalId) {
    let apiQuery = this.apiEndpoint + `externalid=${externalId}`;
    return await fetch(apiQuery).then(res => { return res.json();})
  }
  async listCategories() {
    let apiQuery = this.apiEndpoint + `$select=business_category,count(*)&$group=business_category`;
    return await fetch(apiQuery).then(res => { return res.json();})
  }
  async businessesByCategory(category) {
    let apiQuery = this.apiEndpoint + `business_category=${category}`;
    return await fetch(apiQuery).then(res => { return res.json();})
  }
  async businessesByName(tradeName) {
    let apiQuery = this.apiEndpoint + `$where=trade_name like '${tradeName}%25'`;
    return await fetch(apiQuery).then(res => { return res.json();})
  }
}