import React from 'react';
import Button from '@material-ui/core/Button';

import { DataService, BusinessCategory } from '../core/data.service';

class Category extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      error: null,
      items: [],
    };
  }

  async componentDidMount() {
    const businessServiceData = new DataService();
    const businessCategories = await businessServiceData.fetchBusinessCategories();
    this.setState({ items: businessCategories });
  }

  render() {
    const { error, items } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return (
      <div>
        <h2 className="text-center">Categories</h2>
        {items.map((item: BusinessCategory, index: number) => (
          <Button
            key={index}
            href={`/businesslistview?business_category=${
              item.business_category
            }`}
          >
            {item.business_category}
          </Button>
        ))}
      </div>
    );
  }
}

export default Category;