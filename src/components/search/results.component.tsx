import React from 'react';

interface ResultProps {
  searchValue: string;
}

class Results extends React.Component<ResultProps> {
  render() {
    return <div>{this.props.searchValue}</div>;
  }
}

export default Results;
