import React, { Component } from 'react';
import logo from './logo.svg';
import '../App.css';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';
import '../core/data.service';
import { Business, BusinessCategory, DataService } from '../core/data.service';

class Category extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      error: null,
      isLoaded: true,
      items: [],
    };
  }

  showBusinesses = (business_category: String) => {
    location.href = '/businesslistview?business_category=' + business_category;
  };

  async componentDidMount() {
    const businessServiceData = new DataService();
    const businessCategories = await businessServiceData.fetchBusinessCategories();
    this.setState({ items: businessCategories });
  }

  render() {
    var { error, isLoaded, items } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return items.map((item: any) => (
        <div
          key={item.business_category}
          className="category-container"
          onClick={() => this.showBusinesses(item.business_category)}
        >
          <div className="category">{item.business_category}</div>
        </div>
      ));
    }
  }
}

export default Category;
