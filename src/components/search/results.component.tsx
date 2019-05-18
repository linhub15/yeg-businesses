import React from 'react';
import { Business } from '../../core/data.service';

interface ResultProps {
  searchValue: string;
  results: Business[];
}

class Results extends React.Component<ResultProps> {
  render() {
    return (
      <div>
        <div>
          {this.props.results.map((business, index) => (
            <div key={index}>
              {business.trade_name} {business.business_category}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Results;
