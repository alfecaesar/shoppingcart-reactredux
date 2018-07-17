import React, { Component } from 'react';
import '../App.css';
import { Grid, Row, Col, Button, Glyphicon } from 'react-bootstrap';
import { PRODUCTS } from '../App';
import { SHOPPINGCART } from '../App';


class ProductList extends Component {
    
  constructor(props){
      super(props);
      this.state = {
        count : 0
      }
  } 
    
  addCartClick(a,b) {
    if(SHOPPINGCART.indexOf(a) == -1){
        SHOPPINGCART.push(a);
        //alert(SHOPPINGCART.length);
        this.setState({
            count : SHOPPINGCART.length
        });
    }
  }
    
  render() {
    const rows = [];
      
    PRODUCTS.forEach((product) => {
        rows.push(
            <Row className="show-grid productlist">
                <Col xs={12} md={2}>
                    <img src={product.photo} />
                </Col>
                <Col xs={12} md={10}>
                    <h3>{product.name}</h3>
                    <h5>ID: {product.id}</h5>
                    <h5><strong>PRICE: {product.price.toLocaleString(navigator.language, { minimumFractionDigits: 2 })}</strong></h5>
                    <p>{product.description}</p>
                    <p class="text-right"><Button bsStyle="primary" onClick={this.addCartClick.bind(this, product.id)} ><Glyphicon glyph="shopping-cart" /> Add To Cart</Button></p>
                    
                </Col>
            </Row>
        );
    });
      
    return (
        <Grid>
            {rows}
        </Grid>
    );
  }
}

export default ProductList;
