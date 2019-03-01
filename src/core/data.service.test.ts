import { DataService } from './data.service';


describe('DataService', () => {

  const dataService = new DataService();

  test('creates', () => { 
    expect(dataService).toBeTruthy();
  });

  describe('fetchBusinesses()', () => {

    it('returns businesses', ()=> {
      const businesses = dataService.fetchBusinesses();
      expect(businesses).toBeTruthy();
    });

  });

});


