import React, { Component } from 'react';
import '../index.css';

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
            <button className='navBarButton' style={(selectedGroup === "ANDROID_STUDIO") ? styles.buttonSelected : styles.buttonNotSelected} onClick={this.selectProgram.bind(this, "ANDROID_STUDIO")}>Android Studio</button>
            <button className='navBarButton' style={(selectedGroup === "ANGULAR_JS") ? styles.buttonSelected : styles.buttonNotSelected} onClick={this.selectProgram.bind(this, "ANGULAR_JS")}>AngularJS</button>
            <button className='navBarButton' style={(selectedGroup === "AWS_GATEWAY") ? styles.buttonSelected : styles.buttonNotSelected} onClick={this.selectProgram.bind(this, "AWS_GATEWAY")}>AWS Gateway</button>
            <button className='navBarButton' style={(selectedGroup === "AWS_LAMBDA") ? styles.buttonSelected : styles.buttonNotSelected} onClick={this.selectProgram.bind(this, "AWS_LAMBDA")}>AWS Lambda</button>
            <button className='navBarButton' style={(selectedGroup === "AWS_S3") ? styles.buttonSelected : styles.buttonNotSelected} onClick={this.selectProgram.bind(this, "AWS_S3")}>AWS S3</button>
            <button className='navBarButton' style={(selectedGroup === "CASPER_JS") ? styles.buttonSelected : styles.buttonNotSelected} onClick={this.selectProgram.bind(this, "CASPER_JS")}>Casper JS</button>
            <button className='navBarButton' style={(selectedGroup === "CSS") ? styles.buttonSelected : styles.buttonNotSelected} onClick={this.selectProgram.bind(this, "CSS")}>CSS</button>
            <button className='navBarButton' style={(selectedGroup === "ECLIPSE") ? styles.buttonSelected : styles.buttonNotSelected} onClick={this.selectProgram.bind(this, "ECLIPSE")}>Eclipse</button>
            <button className='navBarButton' style={(selectedGroup === "CLOJURE") ? styles.buttonSelected : styles.buttonNotSelected} onClick={this.selectProgram.bind(this, "CLOJURE")}>Clojure</button>
            <button className='navBarButton' style={(selectedGroup === "GULP") ? styles.buttonSelected : styles.buttonNotSelected} onClick={this.selectProgram.bind(this, "GULP")}>Gulp</button>
            <button className='navBarButton' style={(selectedGroup === "HTML") ? styles.buttonSelected : styles.buttonNotSelected} onClick={this.selectProgram.bind(this, "HTML")}>HTML</button>
            <button className='navBarButton' style={(selectedGroup === "IONIC") ? styles.buttonSelected : styles.buttonNotSelected} onClick={this.selectProgram.bind(this, "IONIC")}>Ionic</button>
            <button className='navBarButton' style={(selectedGroup === "JAVASCRIPT") ? styles.buttonSelected : styles.buttonNotSelected} onClick={this.selectProgram.bind(this, "JAVASCRIPT")}>Javascript</button>                        
            <button className='navBarButton' style={(selectedGroup === "LEININGEN") ? styles.buttonSelected : styles.buttonNotSelected} onClick={this.selectProgram.bind(this, "LEININGEN")}>Leiningen</button>                        
            <button className='navBarButton' style={(selectedGroup === "MYSQL") ? styles.buttonSelected : styles.buttonNotSelected} onClick={this.selectProgram.bind(this, "MYSQL")}>MySQL</button>
            <button className='navBarButton' style={(selectedGroup === "NETBEANS") ? styles.buttonSelected : styles.buttonNotSelected} onClick={this.selectProgram.bind(this, "NETBEANS")}>Netbeans</button>
            <button className='navBarButton' style={(selectedGroup === "OBJECTIVE_C") ? styles.buttonSelected : styles.buttonNotSelected} onClick={this.selectProgram.bind(this, "OBJECTIVE_C")}>Objective C</button>                        
            <button className='navBarButton' style={(selectedGroup === "PAINT_NET") ? styles.buttonSelected : styles.buttonNotSelected} onClick={this.selectProgram.bind(this, "PAINT_NET")}>Paint.NET</button>
            <button className='navBarButton' style={(selectedGroup === "PHP") ? styles.buttonSelected : styles.buttonNotSelected} onClick={this.selectProgram.bind(this, "PHP")}>PHP</button>
            <button className='navBarButton' style={(selectedGroup === "POSTGRES") ? styles.buttonSelected : styles.buttonNotSelected} onClick={this.selectProgram.bind(this, "POSTGRES")}>Postgres</button>                        
            <button className='navBarButton' style={(selectedGroup === "PROTRACTOR") ? styles.buttonSelected : styles.buttonNotSelected} onClick={this.selectProgram.bind(this, "PROTRACTOR")}>Protractor</button>                        
            <button className='navBarButton' style={(selectedGroup === "SAFARI") ? styles.buttonSelected : styles.buttonNotSelected} onClick={this.selectProgram.bind(this, "SAFARI")}>Safari</button>                        
            <button className='navBarButton' style={(selectedGroup === "SQL_LITE") ? styles.buttonSelected : styles.buttonNotSelected} onClick={this.selectProgram.bind(this, "SQL_LITE")}>SqlLite</button>
            <button className='navBarButton' style={(selectedGroup === "VS_CODE") ? styles.buttonSelected : styles.buttonNotSelected} onClick={this.selectProgram.bind(this, "VS_CODE")}>VS Code</button>
            <button className='navBarButton' style={(selectedGroup === "VS_CODE") ? styles.buttonSelected : styles.buttonNotSelected} onClick={this.selectProgram.bind(this, "VM_WARE")}>VM Ware</button>
            <button className='navBarButton' style={(selectedGroup === "VM_WARE") ? styles.buttonSelected : styles.buttonNotSelected} onClick={this.selectProgram.bind(this, "XAMPP")}>Xampp</button>                        
            <button className='navBarButton' style={(selectedGroup === "XCODE") ? styles.buttonSelected : styles.buttonNotSelected} onClick={this.selectProgram.bind(this, "XCODE")}>Xcode</button>                        
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
