import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

class Category extends React.Component<any, any>{
    constructor(props: any){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    ShowBusinesses = (i: Number) => {
        console.log("Business ID: " + i);
    }

    componentDidMount(){
        fetch("https://data.edmonton.ca/resource/3trf-izgx.json")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            }
        );
    }

    render(){
        const {error, isLoaded, items} = this.state;
        console.log("Items: " + items);
        if(error){
            return <div>Error: {error.message}</div>
        }
        else if(!isLoaded){
            return <div>Loading....</div>
        }
        else{
            return(
                items.map((item:any) => 
                    <div key={item.externalid} className="category-container" onClick={() => this.ShowBusinesses(item.externalid)}>
                        <div className="category">
                            {item.business_category}
                        </div>
                    </div>
                )
            )
        }

        // return(
        //     ['Food Processing', 'Farmers Market', 'Vehical Fueling Station'].map((current, index) =>
        //         <div key={index} className="category-container" onClick={() => this.ShowBusinesses(index)}>
        //             <div className="category">
        //                 {current}
        //             </div>
        //         </div>
        //     ) 
        // )
    }
}


export default Category;