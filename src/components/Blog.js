import React, { Component } from 'react';
import '../index.css';
//import Images from '../images/index';

export default class Blog extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isRendered: false
      };
   }

    componentDidMount(){
      //BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
   }

   componentWillUnmount() {
      //BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
   }

   static async setBlogData(callback) {
      console.log("setBlogData called");
      //callback(staticCheatListView);
   }

   render() {
      //this.setState({cheatListView:this.state.cheatListView});
      return (
        <div class="blogDiv">
        </div>
      );
   }
}


