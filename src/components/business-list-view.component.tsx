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


function SingleBusiness(props:any){
    const businessDetailStyle = {
        width: "100%",
        display: "inline-block",
        padding: "10px 0"
    }
    return(
        <div className="business-container" key={props.name}>
              <Paper elevation={3} className="paper-container">
                    <Typography component="span" style={businessDetailStyle} align="left" className="business-detail-container">
                        <span className="business-detail-label">Trade Name: </span>
                        <span>{props.name}</span>
                    </Typography>
                    <Typography component="span" style={businessDetailStyle} align="left" className="business-detail-container">
                        <span className="business-detail-label">Business Category: </span>
                        <span>{props.category != "" ? props.category : "N/A"}</span>
                    </Typography>
                    <Typography component="span" style={businessDetailStyle} align="left" className="business-detail-container">
                        <span className="business-detail-label">Status: </span>
                        <span>{props.status}</span>
                    </Typography>
              </Paper>
        </div>
    )
}

//references: https://reactjs.org/docs/faq-ajax.html
//            https://reactjs.org/docs/components-and-props.html
class BusinessListView extends React.Component<any, any>{
    constructor(props: any){
        super(props);
        this.state = {
            error: null,
            isLoaded: true,
            items: []
        };
    }

    async componentDidMount() {
            fetch("https://data.edmonton.ca/resource/qhi4-bdpu.json?business_category=Firearm/Ammunition%20Dealer")
              .then(res => res.json())
              .then(
                (result) => {
                  this.setState({
                    isLoaded: true,
                    items: result
                  });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                  this.setState({
                    isLoaded: true,
                    error
                  });
                }
              )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        return(
            items.map((business:any) => (
                <SingleBusiness key={business.externalid} name={business.trade_name} category={business.business_category} status={business.status} />
            ))
        )
    }
}

export default BusinessListView;