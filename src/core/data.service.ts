export interface Business {
  business_category: string,
  count: string | number,
  date_of_issue: string | Date,
  expiry_date: string | Date,
  externalid: string, // 299917282-002
  neighbourhood: string,
  neighbourhood_id: string | number,
  status: string, // ISSUED
  trade_name: string, // 2052392 ALBERTA CORP.
  ward: string
}

interface BusinessCategory {
  business_category: string,
  count: string | number
}
export class DataService {

  async fetchBusinesses(): Promise<Business[]> {
    const url = 'https://data.edmonton.ca/resource/3trf-izgx.json';
    return await fetch(url).then(response => { return response.json(); });
  }

  async fetchBusinessCategories(): Promise<BusinessCategory[]> {
    const url = 'https://data.edmonton.ca/resource/3trf-izgx.json?$select=business_category,count(*)&$group=business_category';
    return await fetch(url).then(response => { return response.json(); });
  }

  async fetchBusiness(id: string): Promise<Business> {
    const url = `https://data.edmonton.ca/resource/3trf-izgx.json?externalid=${id}`;
    return await fetch(url).then(response => { return response.json(); })
  }

}