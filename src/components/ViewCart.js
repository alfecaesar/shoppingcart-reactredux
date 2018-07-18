import React, { Component } from 'react';
import '../App.css';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../App';
import { CSSTransitionGroup } from 'react-transition-group';

const reducer = (accumulator, currentValue) => accumulator + currentValue;

class ViewCart extends Component {
    
  clearCartClick(a) { 
    
    this.totalAmount = 0;
    this.props.clearCount()
    
  }
    
  render() {
      
    const totalAmountArr = [];  
      
    const rows = [];
      
    this.props.shoppingCart.forEach((scItem) => {
        PRODUCTS.forEach((product) => {
            if(scItem === product.id){ 
                
                totalAmountArr.push(parseInt(product.price,10)); 
                
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
            <CSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={500} transitionEnter={false} transitionLeave={false}>
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

                        <Button bsStyle="danger" onClick={this.clearCartClick.bind(this)}>Clear Cart</Button>

                        <Link to={{ pathname: '/checkout' }}><Button bsStyle="success">Checkout</Button></Link>
                    </Col>
                </Row>
            </CSSTransitionGroup>
        </Grid>
    );
  }
}

export default ViewCart;
