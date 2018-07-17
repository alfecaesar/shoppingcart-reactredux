import React, { Component } from 'react';
import '../App.css';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PRODUCTS, SHOPPINGCART } from '../App';

const reducer = (accumulator, currentValue) => accumulator + currentValue;

class ViewCart extends Component {
    
  render() {
      
    const totalAmountArr = [];  
      
    const totalAmount = 0;
      
    const rows = [];
      
    SHOPPINGCART.forEach((scItem) => {
        PRODUCTS.forEach((product) => {
            if(scItem === product.id){ 
                
                totalAmountArr.push(parseInt(product.price));
                
                this.totalAmount =  totalAmountArr.reduce(reducer); 
                
                rows.push(
                    <Row className="show-grid padding-top-s padding-bot-s">
                        <Col xs={4} >
                            {product.id}
                        </Col>
                        <Col xs={5} >
                            {product.name}
                        </Col>
                        <Col xs={3} className="text-right">
                            {product.price.toLocaleString(navigator.language, { minimumFractionDigits: 2 })}
                        </Col>
                    </Row>
                
                );
            }
        });
    });
      
    
      
    return (
        <Grid>
            <Row className="show-grid row-border-bottom padding-top-m">
                <Col xs={4} >
                    <strong>ID</strong>
                </Col>
                <Col xs={5} >
                    <strong>Name</strong>
                </Col>
                <Col xs={3} className="text-right">
                    <strong>Amount</strong>
                </Col>
            </Row>
            {rows}
        
            <Row className="show-grid row-border-top row-border-top">
                <Col xs={12} className="text-right grandTotalTxt">
                    <strong>Grand Total</strong>
                </Col>
            </Row>
        
            <Row className="show-grid row-border-bottom">
                <Col xs={12} className="text-right grandTotalTxt">
                    <strong>{this.totalAmount.toLocaleString(navigator.language, { minimumFractionDigits: 2 })}</strong>
                </Col>
            </Row>
        
            <Row className="show-grid text-center backtohome">
                <Col xs={12} >
                    <Link to={{ pathname: '/' }}><Button>Back to Home</Button></Link>
                        
                    <Button bsStyle="danger">Clear Cart</Button>
                        
                    <Link to={{ pathname: '/checkout' }}><Button bsStyle="success">Checkout</Button></Link>
                </Col>
            </Row>
        </Grid>
    );
  }
}

export default ViewCart;
