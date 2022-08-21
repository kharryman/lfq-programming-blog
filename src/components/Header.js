import React, { Component } from 'react';
import lfq_logo from '../lfq_logo.jpg';
import '../index.css';

//import Images from '../images/index';

export default class Header extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isRendered: false
      };
   }

   componentDidMount() {
      //BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
   }

   componentWillUnmount() {
      //BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
   }


   render() {
      //this.setState({cheatListView:this.state.cheatListView});
      return (
         <div className="headerDiv">
            <img src={lfq_logo} className="logoImage" alt="logo" />
            <div className="headerBoard">
               <div className="headerAd">
               </div>
               <div className="headerTitle">
                  LFQ Programming Blog
               </div>
            </div>
         </div>
      );
   }
}

