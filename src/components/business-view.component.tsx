import React from 'react';
import '../App.css';
import '../core/data.service';
import { Business, DataService } from '../core/data.service';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// reference: https://www.npmjs.com/package/query-string
const _queryString = require('query-string');

const _parsed = _queryString.parse(window.location.search);

// added a ternary conditional operator, so it it will show business: 7267742-001 as default
// this will change in the future once we have the empty component setup.
const _id = _parsed.id != null ? _parsed.id : '7267742-001';

// reference: https://material-ui.com/demos/cards/
class BusinessDetail extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      error: null,
      isLoaded: true,
      items: [],
    };
  }

  async componentDidMount() {
    const businessServiceData = new DataService();
    const businessDetails = await businessServiceData.fetchBusiness(_id);
    this.setState({ items: businessDetails });
  }

  render() {
    const { items } = this.state;

    // inline styles
    const businessMapStyle = {
      margin: '0 auto',
      marginTop: '10px',
      width: '50%',
      border: '1px solid black',
    };

    const businessDetailStyle = {
      width: '48%',
      display: 'inline-block',
      padding: '10px 0',
    };

    return (
      <div>
        {items.map((item: Business) => (
          <div className="business-container" key={_id}>
            <h2>{item.trade_name}</h2>
            <Paper elevation={3} className="paper-container">
              <Typography
                component="div"
                style={businessMapStyle}
                className="App business-map"
              >
                Business Map Placeholder
              </Typography>

              <Typography
                component="span"
                style={businessDetailStyle}
                align="left"
                className="business-detail-container"
              >
                <span className="business-detail-label">
                  Business Category:{' '}
                </span>
                <span>{item.business_category}</span>
              </Typography>

              <Typography
                component="span"
                style={businessDetailStyle}
                align="left"
                className="business-detail-container"
              >
                <span className="business-detail-label">Address: </span>
                <span>{item.address}</span>
              </Typography>

              <Typography
                component="span"
                style={businessDetailStyle}
                align="left"
                className="business-detail-container"
              >
                <span className="business-detail-label">
                  Neighbourhood ID:{' '}
                </span>
                <span>{item.neighbourhood_id}</span>
              </Typography>

              <Typography
                component="span"
                style={businessDetailStyle}
                align="left"
                className="business-detail-container"
              >
                <span className="business-detail-label">Expiry Date: </span>
                <span>{item.expiry_date}</span>
              </Typography>

              <Typography
                component="span"
                style={businessDetailStyle}
                align="left"
                className="business-detail-container"
              >
                <span className="business-detail-label">
                  Improvement Area:{' '}
                </span>
                <span>{item.business_improvement_area}</span>
              </Typography>

              <Typography
                component="span"
                style={businessDetailStyle}
                align="left"
                className="business-detail-container"
              >
                <span className="business-detail-label">Ward: </span>
                <span>{item.ward}</span>
              </Typography>

              <Typography
                component="span"
                style={businessDetailStyle}
                align="left"
                className="business-detail-container"
              >
                <span className="business-detail-label">Date Of Issue: </span>
                <span>{item.date_of_issue}</span>
              </Typography>

              <Typography
                component="span"
                style={businessDetailStyle}
                align="left"
                className="business-detail-container"
              >
                <span className="business-detail-label">Neighbourhood: </span>
                <span>{item.neighbourhood}</span>
              </Typography>
            </Paper>
          </div>
        ))}
      </div>
    );
  }
}

export default BusinessDetail;
