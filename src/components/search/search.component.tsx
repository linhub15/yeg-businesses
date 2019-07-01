import React from 'react';
import SearchBox from './search-box.component';
import Results from './results.component';
import { DataService, Business } from '../../core/data.service';
import Fuse from 'fuse.js';

interface SearchState {
  value: string;
  businesses: Business[];
  searchResults: Business[];
}

class Search extends React.Component<{}, SearchState> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: '',
      businesses: [],
      searchResults: [],
    };
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  async componentDidMount() {
    const businessServiceData = new DataService();
    this.setState({
      value: '',
      businesses: await businessServiceData.fetchBusinesses(),
      searchResults: [],
    });
  }

  handleValueChange(value: string) {
    this.setState({
      value: value,
      searchResults: this.getResults(value, this.state.businesses),
    });
  }

  getResults(value: string, businesses: Business[]): Business[] {
    const options: Fuse.FuseOptions<Business> = {
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 60,
      maxPatternLength: 30,
      minMatchCharLength: 1,
      keys: ['trade_name'],
    };
    const fuse = new Fuse(businesses, options);
    const results = fuse.search(value);
    return results.slice(0, 5);
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Search Edmonton Business Directory</h1>
        <p className="text-center">
          Data is retrieved from City of Edmonton Open data.
        </p>
        <SearchBox
          value={this.state.value}
          onValueChange={this.handleValueChange}
        />
        <Results
          searchValue={this.state.value}
          results={this.state.searchResults}
        />
      </div>
    );
  }
}
export default Search;
