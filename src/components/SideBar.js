import React, { Component } from 'react';
import '../index.css';
import { formatName } from '../helpers';

//import Images from '../images/index';

export default class SideBar extends Component {
   styles = {
      linkStyle: {
         color: "blue",
         textDecoration: "underline",
         margin: 'auto'
      },
      linkStyleSelected: {
         color: "purple",
         textDecoration: "underline",
         margi: 'auto'
      }
   }   

   constructor(props) {
      super(props);
      this.state = {
         isRendered: false
      };
   }

   selectTopic(topic){
      console.log("selectTopic called, topic = " + topic);
      this.props.onTopicSelected(topic);
   }

   render() {
      var formattedGroup = this.props.selectedGroup;
      return (
         <div className="sideBar">
            <strong>{formattedGroup}</strong>
            <ul>
               {this.props.blogList.map(topic => {
                  return (
                     <li key={topic}><a style={this.props.selectedTopic===topic? this.styles.linkStyleSelected : this.styles.linkStyle} onClick={this.selectTopic.bind(this, topic)}>{topic}</a></li>
                  );
               })}
            </ul>
         </div>
      );
   }

}

