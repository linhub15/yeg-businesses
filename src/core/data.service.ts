interface Business {
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

export class DataService {

  async fetchBusinesses(): Promise<Business> {
    const url = 'https://data.edmonton.ca/resource/3trf-izgx.json';
    return await fetch(url).then(response => { return response.json(); });
  }

}