import React, { Component } from 'react';
import './App.css';
import { Navbar, Grid } from 'react-bootstrap';
import ProductList from './components/ProductList';
import CartSummary from './components/CartSummary';
import ViewCart from './components/ViewCart';
import Checkout from './components/Checkout';


import {
  Link,
  Route,
  Switch,
} from 'react-router-dom';
    
export const SHOPPINGCART = [];

export const PRODUCTS = [
                {
                    photo: "https://fakeimg.pl/165x165/?text=Image",
    				name: "Apple Iphone X",
                    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.",
                    id: "APPLE-123-3216",
    				price: 70000
    			}, {
                    photo: "https://fakeimg.pl/165x165/?text=Image",
    				name: "Apple Iphone 8 Plus",
                    description: "Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.",
                    id: "APPLE-123-7531",
    				price: 63000
    			}, {
                    photo: "https://fakeimg.pl/165x165/?text=Image",
    				name: "Apple Iphone 8",
                    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.",
                    id: "APPLE-123-9874",
    				price: 55000
    			}, {
                    photo: "https://fakeimg.pl/165x165/?text=Image",
    				name: "Apple Iphone 7 Plus",
                    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla posuere.",
                    id: "APPLE-123-4567",
    				price: 45000
    			}, {
                    photo: "https://fakeimg.pl/165x165/?text=Image",
    				name: "Apple Iphone 7",
                    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.",
                    id: "APPLE-123-1478",
    				price: 25000
    			}, {
                    photo: "https://fakeimg.pl/165x165/?text=Image",
    				name: "Apple Iphone 6s Plus",
                    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.",
                    id: "APPLE-123-4689",
    				price: 30000
    			}, {
                    photo: "https://fakeimg.pl/165x165/?text=Image",
    				name: "Apple Iphone 6s",
                    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget.",
                    id: "APPLE-123-1472",
    				price: 20000
    			}

];


class App extends Component {
    
  constructor(props){
      super(props);
      this.state = {
        shoppingCartCount : 0,
        SHOPPINGCART : []
      }
  } 
    
  incrementCount = () => {
        this.setState({ 
          shoppingCartCount: this.state.shoppingCartCount + 1 
        })
        
  }
    
  clearCount = () => {
      this.setState({ 
          shoppingCartCount: 0,
          SHOPPINGCART: []
      })
  }
  
  
  
    
  render() {
    return (
        <div>
            <Navbar>
              <Navbar.Header>
                <Navbar.Brand>
                  <Link to={{ pathname: '/' }}>My Shopping Cart</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Navbar.Text>
                  Author: <Navbar.Link target="_blank" href="https://alfecaesar.com">Alfe Caesar Lagas</Navbar.Link>
                </Navbar.Text>
                <Navbar.Text pullRight>A React-Redux Project</Navbar.Text>
              </Navbar.Collapse>
            </Navbar>
        
            <Grid>
                <CartSummary carts={this.state.SHOPPINGCART} shoppingCartCount={this.state.shoppingCartCount} />
            </Grid>
            

            <Switch>
                
                    <Route exact path="/" render={() => <ProductList shoppingCart={this.state.SHOPPINGCART} addCount={this.incrementCount}  minusCount={this.decrementCount}/>} />
        
                    <Route path="/view-cart" render={() => <ViewCart clearCount={this.clearCount} shoppingCart={this.state.SHOPPINGCART} />} />
        
                    <Route path="/checkout" component={Checkout} />
                
                
            </Switch>
        </div>
    );
  }
}

export default App;
