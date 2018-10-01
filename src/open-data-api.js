export class Business {
  constructor() {
    this.apiEndpoint = 'https://data.edmonton.ca/resource/3trf-izgx.json?';
  }
  async single(externalId) {
    let url = this.apiEndpoint + `externalid=${externalId}`;
    return await fetch(url)
        .then(res => { return res.json() })
        .then(res => { return res[0] })
  }
  async listCategories() {
    let url = this.apiEndpoint
        + '$select=business_category,count(*)'
        + '&$group=business_category';
    return await fetch(url)
        .then(res => { return res.json() })
  }
  async businessesByCategory(category) {
    let url = this.apiEndpoint + `business_category=${category}`;
    return await fetch(url)
        .then(res => { return res.json(); })
  }
  async businessesByName(tradeName) {
    let url = this.apiEndpoint + `$q=${tradeName}`;
    return await fetch(url)
        .then(res => { return res.json() })
  }
}