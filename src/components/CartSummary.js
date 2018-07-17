import React, { Component } from 'react';
import '../App.css';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SHOPPINGCART } from '../App';
import ProductList from './ProductList';

class CartSummary extends Component {
  render() {      
    return (
        <div>
            <Row className="show-grid cartsummary text-right">
                <Col xs={12} >
                    {SHOPPINGCART.length} Cart Item(s) <Link to={{ pathname: '/view-cart' }}><Button bsStyle="warning">View Cart</Button></Link>
                </Col>
            </Row>
        </div>
    );
  }
}

export default CartSummary;
