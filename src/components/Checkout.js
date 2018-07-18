import React, { Component } from 'react';
import '../App.css';
import { Alert, Grid, Row, Col, Button, FormGroup, FormControl, ControlLabel, ButtonGroup, ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';

class Checkout extends Component {
 
  constructor(props, context) {
    super(props, context);
      

    this.state = {
      fields: {},
      errors: {},
      formValid: false,
      displayBoxError : ''
    };
  }  
    
  handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if(!fields["name"]){
           formIsValid = false;
           errors["name"] = "field-error";
        }
        if(typeof fields["name"] !== "undefined"){
           if(!fields["name"].match(/^[a-zA-Z]+$/)){
              formIsValid = false;
              errors["name"] = "field-error";
           }        
        }

        //Email
        if(!fields["email"]){
           formIsValid = false;
           errors["email"] = "field-error";
        }
        if(typeof fields["email"] !== "undefined"){
           let lastAtPos = fields["email"].lastIndexOf('@');
           let lastDotPos = fields["email"].lastIndexOf('.');
           if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
              formIsValid = false;
              errors["email"] = "field-error";
            }
       }  
      
       //Phone Number
        if(!fields["phone"]){
           formIsValid = false;
           errors["phone"] = "field-error";
        }
        if(typeof fields["phone"] !== "undefined"){
           if(!fields["phone"].match(/^\d+$/)){
              formIsValid = false;
              errors["phone"] = "field-error";
           }        
        }
      
        //Company
        if(!fields["company"]){
           formIsValid = false;
           errors["company"] = "field-error";
        }
      
        //Address
        if(!fields["address"]){
           formIsValid = false;
           errors["address"] = "field-error";
        }
      
        //City
        if(!fields["city"]){
           formIsValid = false;
           errors["city"] = "field-error";
        }
      
        //State
        if(!fields["state"]){
           formIsValid = false;
           errors["state"] = "field-error";
        }


       this.setState({errors: errors});
       return formIsValid;
   }

   contactSubmit(e){
        e.preventDefault();

        if(this.handleValidation()){
           //alert("Form submitted");
            this.setState({
                displayBoxError : 'box-success'
            })
        }else{
           //alert("Form has errors.")
           this.setState({
                displayBoxError : 'box-error'
            })
        }

    }

    handleChange(field, e){         
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
    }
     
  render() {      
    return (
        <Grid>
            <CSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={500} transitionEnter={false} transitionLeave={false}>
                <Row className="show-grid checkout">
                    <Col xs={12} >
        
                    {this.state.displayBoxError === 'box-success' &&
                        <Alert bsStyle="success">
                          <strong>Form submitted! </strong> You're good to go.
                        </Alert>
                    }
                    {this.state.displayBoxError === 'box-error' &&
                        <Alert bsStyle="warning">
                          <strong>Form has errors! </strong> Best check yo self, you're not looking too good.
                        </Alert>
                    }

                        <form onSubmit= {this.contactSubmit.bind(this)}>
                            <FormGroup controlId="formBasicText" >
                              <Row className="show-grid form-field">
                                  <Col xs={12} md={12}>
                                    <ControlLabel>Personal Information</ControlLabel>
                                  </Col>
                              </Row>
                              <Row className="show-grid form-field">
                                  <Col xs={12} md={6} className={'field-margin-bot ' + this.state.errors["name"]}>
                                    <FormControl type="text" placeholder="Name" ref="name" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]}   />
                                  </Col>
                                  <Col xs={12} md={6} className={'field-margin-bot ' + this.state.errors["email"]}>
                                    <FormControl type="text" placeholder="Email Address" ref="email" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]} />
                                  </Col>
                                  <Col xs={12} md={6} className={'field-margin-bot ' + this.state.errors["phone"]}>
                                    <FormControl type="text" placeholder="Phone Number" ref="phone" onChange={this.handleChange.bind(this, "phone")} value={this.state.fields["phone"]}  />
                                  </Col>
                                  <Col xs={12} md={6} className={'field-margin-bot ' + this.state.errors["company"]}>
                                    <FormControl type="text" placeholder="Company" ref="company" onChange={this.handleChange.bind(this, "company")} value={this.state.fields["company"]}  />
                                  </Col>
                              </Row>

                              <Row className="show-grid form-field">
                                  <Col xs={12} md={12}>
                                    <ControlLabel>Billing Address</ControlLabel>
                                  </Col>
                              </Row>
                              <Row className="show-grid form-field">
                                  <Col xs={12} md={6} className={'field-margin-bot ' + this.state.errors["address"]}>
                                    <FormControl type="text" placeholder="Address" ref="address" onChange={this.handleChange.bind(this, "address")} value={this.state.fields["address"]} />
                                  </Col>
                                  <Col xs={12} md={6} className={'field-margin-bot ' + this.state.errors["city"]}>
                                    <FormControl type="text" placeholder="City" ref="city" onChange={this.handleChange.bind(this, "city")} value={this.state.fields["city"]} />
                                  </Col>
                                  <Col xs={12} md={6} className={'field-margin-bot ' + this.state.errors["state"]}>
                                    <FormControl type="text" placeholder="State" ref="state" onChange={this.handleChange.bind(this, "state")} value={this.state.fields["state"]}  />
                                  </Col>
                                  <Col xs={12} md={6} className="field-margin-bot">
                                    <FormControl componentClass="select" name="country">
                                        <option value=" ">Country</option>
                                        <option value="US">US</option>
                                        <option value="PH" selected="selected">PH</option>
                                      </FormControl>
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
                                    <Button type="submit" bsStyle="success" >Submit</Button>
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
            </CSSTransitionGroup>
        </Grid>
    );
  }
}

export default Checkout;
