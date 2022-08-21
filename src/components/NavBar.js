import React, { Component } from 'react';
import '../index.css';
import { Dropdown } from './Dropdown';

//import Images from '../images/index';

export default class NavBar extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isRendered: false,
         selectedGroup: props.selectedGroup
      };
      //this.selectProgram("JAVASCRIPT");
      //this.selectProgram = this.selectProgram.bind(this);
   }

   selectProgram(which) {
      this.setState({ selectedGroup: which });
      console.log("selectProgram this.state.selectedGroup = " + this.state.selectedGroup);
      this.props.onDataFetched(which);
   }

   render() {
      var { selectedGroup, blogLinks } = this.state;
      console.log("render selectedGroup = " + selectedGroup);
      return (
         <div className="navBar">
            <Dropdown onSelectDropdown={this.selectProgram.bind(this)} title="Amazon Web Services" children={["AWS Gateway", "AWS Lambda", "AWS S3"]}></Dropdown>
            <Dropdown onSelectDropdown={this.selectProgram.bind(this)} title="Browsers" children={["Chrome", "Safari"]}></Dropdown>
            <Dropdown onSelectDropdown={this.selectProgram.bind(this)} title="Database" children={["MySQL", "Postgres", "SQLite", "Liquibase"]}></Dropdown>
            <Dropdown onSelectDropdown={this.selectProgram.bind(this)} title="IDEs" children={["Android Studio", "Eclipse", "Netbeans", "Visual Studio Code", "Xcode"]}></Dropdown>
            <Dropdown onSelectDropdown={this.selectProgram.bind(this)} title="iOS" children={["Objective C", "Swift"]}></Dropdown>
            <Dropdown onSelectDropdown={this.selectProgram.bind(this)} title="Javascript" children={["AngularJS", "Casper JS", "Gulp", "Javascript", "Protractor", "ReactJS", "Typescript"]}></Dropdown>                        
            <Dropdown onSelectDropdown={this.selectProgram.bind(this)} title="Mobile Frameworks" children={["Ionic", "React Native", "Xamarin"]}></Dropdown>
            <Dropdown onSelectDropdown={this.selectProgram.bind(this)} title="Continuous Integration" children={["Docker", "Fastlane", "Jenkins"]}></Dropdown>
            <Dropdown onSelectDropdown={this.selectProgram.bind(this)} title="User Interface" children={["CSS", "HTML", "Paint.NET"]}></Dropdown>
            <Dropdown onSelectDropdown={this.selectProgram.bind(this)} title="Version Control" children={["Git"]}></Dropdown>
            <Dropdown onSelectDropdown={this.selectProgram.bind(this)} title="Operating Systems" children={["Linux", "Mac", "Windows"]}></Dropdown>
            <Dropdown onSelectDropdown={this.selectProgram.bind(this)} title="Terminal Scripts" children={["Bash", "Shell"]}></Dropdown>
            <Dropdown onSelectDropdown={this.selectProgram.bind(this)} title="Other" children={["Clojure", "CPanel", "Leiningen", "PHP", "VM Ware", "XAMPP"]}></Dropdown>            
         </div>
      );
   }
}

const styles = {
   buttonSelected: {
      backgroundColor: 'rgb(210, 225, 225)',
      margin: 1
   },
   buttonNotSelected: {
      backgroundColor: 'rgb(230, 245, 245)',
      margin: 1
   }
}
