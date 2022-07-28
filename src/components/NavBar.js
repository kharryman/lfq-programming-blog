import React, { Component} from 'react';
import '../index.css';

//import Images from '../images/index';

export default class NavBar extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isRendered: false
      };
   }

   render() {
      return (
        <div className="navBar">
             <button className='navBarButton'>Javascript</button>
             <button className='navBarButton'>AngularJS</button>
             <button className='navBarButton'>Ionic</button>
        </div>
      );
   }
}

