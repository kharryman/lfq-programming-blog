import React, { Component } from 'react';
import '../index.css';
import { formatName } from '../helpers';

//import Images from '../images/index';

export default class SideBar extends Component {

   constructor(props) {
      super(props);
      this.state = {
         isRendered: false
      };
   }

   selectTopic(topic) {
      console.log("selectTopic called, topic = " + topic);
      this.props.onTopicSelected(topic);
   }

   render() {
      var formattedGroup = this.props.selectedGroup;
      return (
         <div className="sideBar">
            <div className="sideBarTopic">{formattedGroup}</div>
            {this.props.blogList.map(topic => {
               return (
                  <div className={this.props.selectedTopic === topic ? "linkStyleSelected" : "linkStyleUnselected"} key={topic} onClick={this.selectTopic.bind(this, topic)}>
                     <div className="sidebarTopic">{topic}</div>
                  </div>
               );
            })}
         </div>
      );
   }

}

