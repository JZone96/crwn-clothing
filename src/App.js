/*
	We need to build a clothing website.
	in this file, we will create the homepage, with a header and a directory menu.

	FOLDER STRUCTURE

	PAGES = Component that we will not use more than once, like homepage
  --------------------------------------------------------------------
  ROUTING
  in "index.js" import {BrowserRouter} from 'react-router-dom'. place our app between the new tag.
  it gives us routing functionality.

  "Route" is a tag with 3 arguments
  -exact => (boolean) if true the path MUST be exactly the string in the path propriety
  else it have to inclueds the string in the path propriety
  -path => a string = to the path of the current place of our app (homepage === localhost:3000/)
  -component => component to render

  "Switch" => if a rout insite of it finds a match in path string, it will render only the component in that route
-----------------------------------------------------------
  every component passed in the "Route" gets 3 proprieties:
  -history
    _push=> is a function that takes as argument a path, and brings us there
  -location
    _pathname => full pathname of where we are currently in the browser
  -match =>
    _isExact => path in our code perfectly matches the path in our browser
    _params => obj of url paramethers (eg. :topicID)
    _path => path propriety from above
    _url =>the url of our component rendered from the "Route" (if no exact, even if we go to absurd urls, "url" value would still be the first Route that matches)

  in this application, when you click on our "menu-item", the user go the the varius sections of our website
  to do this, we use the history propriety, but only the first component inside the "Route" tag gets this prop,
  NOT THE CHILDREN.

  We could pass this prop in to our "directory", and then into "menu-item", but this is bad practice 
  because the children between "HomePage" and "menu-item" dowsn't need this prop(prop tunnelling)

  Instead we use withRouter(), wich takes as argument a component, and returns that same component, but with 
  "Route" props
  ----------------------------------------
  HEADER COMPONENT

  always on top of the page, made of logo, shop, contact, and cart(component)


*/
import React, {Component} from 'react';
import {Switch,Route} from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import {auth} from './firebase/firebase.utils';

class App extends Component {
  constructor(){
    super();
    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user=>{//persistant user session
      /*this function will create a message channel between our app and firebase. when a user signout, 
      this information will be send here, otherwise, it will assume that the user is still signed in*/
      this.setState({currentUser:user})
      console.log(user)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
      return (
        /*HEADER will always be on top of the page, no matter what*/
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={ShopPage}/>
          <Route path = '/signin' component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
  }
  
}

export default App;
