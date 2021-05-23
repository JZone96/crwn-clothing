/*
	We need to build a clothing website.
	in this file, we will create the homepage, with a header and a directory menu.

	FOLDER STRUCTURE

	PAGES = Component that we will not use more than once, like homepage

*/
import React, {Component} from 'react';
import './App.css';

import HomePage from './pages/homepage/homepage.component';

class App extends Component {
  render(){
    return (
    <div>
      <HomePage/>
    </div>
  );
  }
  
}

export default App;
