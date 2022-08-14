import React, { Component } from 'react';
import '../index.css';

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

   formatName(value){
      value = String(value).replace(/_/g,' ');
      var valueArr = value.split(" ");
      var retArr = [];
      for(var i=0;i<valueArr.length;i++){
         retArr.push(valueArr[i].substring(0,1).toUpperCase() + valueArr[i].substring(1).toLowerCase());
      }
      return retArr.join(" ");
   }

   render() {
      var formattedGroup = this.formatName(this.props.selectedGroup);
      return (
         <div className="sideBar">
            <strong>{formattedGroup}</strong>
            <ul>
               {this.props.blogList.map(topic => {
                  return (
                     <li><a style={this.props.selectedTopic===topic? this.styles.linkStyleSelected : this.styles.linkStyle} onClick={this.selectTopic.bind(this, topic)}>{topic}</a></li>
                  );
               })}
            </ul>
         </div>
      );
   }

}

