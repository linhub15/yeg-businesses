import { Business, DataService } from './data.service';


describe('DataService', () => {

  const dataService = new DataService();

  test('creates', () => { 
    expect(dataService).toBeTruthy();
  });

  describe('fetchBusinesses()', () => {

    it('returns businesses', async () => {
      const businesses = await dataService.fetchBusinesses()
        .then(result => { return result; });
      expect(businesses).toBeTruthy();
    });

  });

  describe('fetch business categories', () => {

    it('returns categories', async () => {
      const categories = await dataService.fetchBusinessCategories()
        .then(result => { return result; });
      expect(categories).toBeTruthy();
    });

  });

  describe('fetch business by id', () => {
    it('returns a single business', async () => {
      const business = await dataService.fetchBusiness('295961277-002')
        .then( (result: Business) => { return result; });
    })
  })
});


