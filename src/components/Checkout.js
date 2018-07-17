import React, { Component } from 'react';
import '../App.css';
import { Grid, Row, Col, Button, FormGroup, FormControl, ControlLabel, ButtonGroup, ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class Checkout extends Component {
 
  constructor(props, context) {
    super(props, context);

    this.state = {
      name: '',
      email: '',
      phone: '',
      company: '',
      address: '',
      city: '',
      state: '',
      country: ''
    };
  }  
     
  render() {      
    return (
        <Grid>
            <Row className="show-grid checkout">
                <Col xs={12} >
                    
                    <form>
                        <FormGroup controlId="formBasicText"  >
                          <Row className="show-grid form-field">
                              <Col xs={12} md={12}>
                                <ControlLabel>Personal Information</ControlLabel>
                              </Col>
                          </Row>
                          <Row className="show-grid form-field">
                              <Col xs={12} md={6} className="field-margin-bot">
                                <FormControl type="text" value={this.state.name} placeholder="Name" name="name"  />
                              </Col>
                              <Col xs={12} md={6} className="field-margin-bot">
                                <FormControl type="text" value={this.state.email} placeholder="Email Address" name="name"  />
                              </Col>
                              <Col xs={12} md={6} className="field-margin-bot">
                                <FormControl type="text" value={this.state.phone} placeholder="Phone Number" name="name"  />
                              </Col>
                              <Col xs={12} md={6} className="field-margin-bot">
                                <FormControl type="text" value={this.state.company} placeholder="Company" name="name"  />
                              </Col>
                          </Row>
                                
                          <Row className="show-grid form-field">
                              <Col xs={12} md={12}>
                                <ControlLabel>Billing Address</ControlLabel>
                              </Col>
                          </Row>
                          <Row className="show-grid form-field">
                              <Col xs={12} md={6} className="field-margin-bot">
                                <FormControl type="text" value={this.state.address} placeholder="Address" name="name"  />
                              </Col>
                              <Col xs={12} md={6} className="field-margin-bot">
                                <FormControl type="text" value={this.state.city} placeholder="City" name="name"  />
                              </Col>
                              <Col xs={12} md={6} className="field-margin-bot">
                                <FormControl type="text" value={this.state.state} placeholder="State" name="name"  />
                              </Col>
                              <Col xs={12} md={6} className="field-margin-bot">
                                <FormControl type="text" value={this.state.country} placeholder="Country" name="name"  />
                              </Col>
                          </Row>
        
                          <Row className="show-grid form-field">
                              <Col xs={12} md={12}>
                                <ControlLabel>Payment Details</ControlLabel>
                              </Col>
                          </Row>
                          <Row className="show-grid form-field">
                              <Col xs={12} md={12} className="field-margin-bot">
                                <ButtonToolbar>
                                    <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                                      <ToggleButton value={1}>Credit Card</ToggleButton>
                                      <ToggleButton value={2}>Paypal</ToggleButton>
                                      <ToggleButton value={3}>Cash On Delivery</ToggleButton>
                                      <ToggleButton value={4}>EFT</ToggleButton>
                                    </ToggleButtonGroup>
                                  </ButtonToolbar>
                              </Col>
                            
                          </Row>
        
                          <Row className="show-grid form-field text-center">
                              <Col xs={12} md={12}>
                                <Button type="submit" bsStyle="success">Submit</Button>
                              </Col>
                          </Row>
                          
                            
                        </FormGroup>
                      </form>
        
                </Col>
            </Row>
        
            <Row className="show-grid text-center backtohome">
                <Col xs={12} >
                    <Link to={{ pathname: '/' }}><Button>Back to Home</Button></Link>
                </Col>
            </Row>
        </Grid>
    );
  }
}

export default Checkout;
