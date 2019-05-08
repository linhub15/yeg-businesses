import React from 'react';
import SearchBox from './search-box.component';
import Results from './results.component';

class Search extends React.Component<{}, { value: string }> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleValueChange(value: string) {
    this.setState({ value: value });
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
        <Results searchValue={this.state.value} />
      </div>
    );
  }
}
export default Search;
