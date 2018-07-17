import React, { Component } from 'react';
import '../App.css';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class CartSummary extends Component {
    
  viewCartLink(a) { 
    alert('0 Cart Item')
  }    
    
  render() {      
    return (
        <div>
            <Row className="show-grid cartsummary text-right">
                <Col xs={12} >
                    {this.props.shoppingCartCount} Cart Item(s) 
    
                    {this.props.shoppingCartCount > 0 ? (
                        <Link to={{ pathname: '/view-cart' }}><Button bsStyle="warning">View Cart</Button></Link>
                    ) : (
                        <Button bsStyle="warning" onClick={this.viewCartLink.bind(this)} >View Cart</Button>
                    )}
                </Col>
            </Row>
        </div>
    );
  }
}

export default CartSummary;
