import React, { Component } from 'react';
import logo from './logo.svg';
import '../App.css';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';
import '../core/data.service';
import { Business, BusinessCategory, DataService } from '../core/data.service';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { URLSearchParams } from 'url';
import GoogleMapReact from 'google-map-react';

// reference: https://www.npmjs.com/package/query-string
const _queryString = require('query-string');

const _parsed = _queryString.parse(window.location.search);

// added a ternary conditional operator, so it it will show business: 7267742-001 as default
// this will change in the future once we have the empty component setup.
const _id = _parsed.id != null ? _parsed.id : '7267742-001';

function Marker(props: any) {
  return <div className="marker">{props.text}</div>;
}

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

    return items.map((item: any) => (
      <div className="business-container" key={_id}>
        <Paper elevation={3} className="paper-container">
          {/* <Typography component="div" style={businessMapStyle} className="App business-map">
              Business Map Placeholder
                </Typography> */}

          <div style={{ height: '100vh', width: '100%' }}>
            {/* reference: https://www.npmjs.com/package/google-map-react
                           https://github.com/google-map-react/old-examples/blob/master/web/flux/components/examples/x_simple/my_great_place.jsx
                           https://github.com/google-map-react/google-map-react */}
            <GoogleMapReact
              bootstrapURLKeys={{
                key: 'AIzaSyBKzknmgwISliuh7-auL_JeZilit1mVYMI',
              }}
              defaultCenter={{ lng: +item.longitude, lat: +item.latitude }}
              defaultZoom={15}
              yesIWantToUseGoogleMapApiInternals
            >
              <Marker
                lng={+item.longitude}
                lat={+item.latitude}
                text={item.trade_name}
              />
            </GoogleMapReact>
          </div>

          <Typography
            component="span"
            style={businessDetailStyle}
            align="left"
            className="business-detail-container"
          >
            <span className="business-detail-label">Business Category: </span>
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
            <span className="business-detail-label">Address: </span>
            <span>{item.address}</span>
          </Typography>

          <Typography
            component="span"
            style={businessDetailStyle}
            align="left"
            className="business-detail-container"
          >
            <span className="business-detail-label">Neighbourhood ID: </span>
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
            <span className="business-detail-label">Improvement Area: </span>
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
            <span className="business-detail-label">Trade Name: </span>
            <span>{item.trade_name}</span>
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
          <Typography>
            Location Coordinates: {item.location.coordinates}
          </Typography>
        </Paper>
      </div>
    ));
  }
}

export default BusinessDetail;
