import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import '../App.css';
import '../core/data.service';

// reference: https://www.npmjs.com/package/query-string
const _queryString = require('query-string');

const _parsed = _queryString.parse(window.location.search);

// added a ternary conditional operator, so it it will show business: 7267742-001 as default
// this will change in the future once we have the empty component setup.
const _category =
  _parsed.business_category != null
    ? '?business_category=' + _parsed.business_category
    : '';

/*
    Functional component that will render each business for BusinessListView component
*/
function BusinessRender(props: any) {
  const businessDetailStyle = {
    width: '100%',
    display: 'inline-block',
    padding: '10px 0',
  };

  return (
    <div
      className="business-container"
      key={props.name}
      onClick={props.onClick}
    >
      <Paper elevation={3} className="paper-container">
        <Typography
          component="span"
          style={businessDetailStyle}
          align="left"
          className="business-detail-container"
        >
          <span className="business-detail-label">Trade Name: </span>
          <span>{props.name}</span>
        </Typography>
        <Typography
          component="span"
          style={businessDetailStyle}
          align="left"
          className="business-detail-container"
        >
          <span className="business-detail-label">Business Category: </span>
          <span>{props.category !== '' ? props.category : 'N/A'}</span>
        </Typography>
        <Typography
          component="span"
          style={businessDetailStyle}
          align="left"
          className="business-detail-container"
        >
          <span className="business-detail-label">Status: </span>
          <span>{props.status}</span>
        </Typography>
      </Paper>
    </div>
  );
}

//references: https://reactjs.org/docs/faq-ajax.html
//            https://reactjs.org/docs/components-and-props.html
class BusinessListView extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      error: null,
      isLoaded: true,
      items: [],
    };
  }

  showBusiness(business_id: any) {
    window.location.href = '/business?id=' + business_id;
  }

  async componentDidMount() {
    fetch('https://data.edmonton.ca/resource/qhi4-bdpu.json' + _category)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { items } = this.state;
    return items.map((business: any) => (
      <BusinessRender
        key={business.externalid}
        name={business.trade_name}
        category={business.business_category}
        status={business.status}
        onClick={() => this.showBusiness(business.externalid)}
      />
    ));
  }
}

export default BusinessListView;
