import React, { Component } from 'react';
import '../App.css';
import { Grid, Row, Col, Button, Glyphicon } from 'react-bootstrap';
import { PRODUCTS } from '../App';
import { CSSTransitionGroup } from 'react-transition-group';

class ProductList extends Component {
    
  constructor(props){
      super(props);
      this.state = {
        count : 0
      }
  } 
    
  addCartClick(a,b) { 
    if(this.props.shoppingCart.indexOf(a) === -1){
        
        this.setState({
            shoppingCart : this.props.shoppingCart.push(a)
        });
        
        
        //SHOPPINGCART.push(a);
        //alert(SHOPPINGCART.length);
        //this.setState({
        //    count : SHOPPINGCART.length
        //});
        this.props.addCount()
        
    }
  }
    
  render() {
    const rows = [];
      
    PRODUCTS.forEach((product) => {
        if(this.props.shoppingCart.indexOf(product.id) == -1){
            rows.push(
                    <Row className="show-grid productlist">
                        <Col xs={12} md={2}>
                            <img src={product.photo} alt={product.name} />
                        </Col>
                        <Col xs={12} md={10}>
                            <h3>{product.name}</h3>
                            <h5>ID: {product.id}</h5>
                            <h5><strong>PRICE: {product.price.toLocaleString(navigator.language, { minimumFractionDigits: 2 })}</strong></h5>
                            <p>{product.description}</p>
                            <p className="text-right"><Button bsStyle="primary" onClick={this.addCartClick.bind(this, product.id)} ><Glyphicon glyph="shopping-cart" /> Add To Cart</Button></p>

                        </Col>
                    </Row>
            );
        }
    });
      
    return (
        <Grid>
            <CSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={500} transitionEnter={false} transitionLeave={false}>
                {rows}
            </CSSTransitionGroup>
        </Grid>
    );
  }
}

export default ProductList;
