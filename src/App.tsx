import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Blog from './components/Blog';

//PAGES TO IMPORT:
import AndroidStudioPage from './pages/AndroidStudioPage';
import AngularJsPage from './pages/AngularJsPage';
import AwsGatewayPage from './pages/AwsGatewayPage';
import AwsLambdaPage from './pages/AwsLambdaPage';
import AwsS3Page from './pages/AwsS3Page';
import BashPage from './pages/BashPage';
import CasperJsPage from './pages/CasperJsPage';
import CPanelPage from './pages/CPanelPage';
import ChromePage from './pages/ChromePage';
import ClojurePage from './pages/ClojurePage';
import CssPage from './pages/CssPage';
import DockerPage from './pages/DockerPage';
import EclipsePage from './pages/EclipsePage';
import FastlanePage from './pages/FastlanePage';
import GitPage from './pages/GitPage';
import GulpPage from './pages/GulpPage';
import HtmlPage from './pages/HtmlPage';
import IonicPage from './pages/IonicPage';
import JavascriptPage from './pages/JavascriptPage';
import JenkinsPage from './pages/JenkinsPage';
import LeiningenPage from './pages/LeiningenPage';
import LiquibasePage from './pages/LiquibasePage';
import LinuxPage from './pages/LinuxPage';
import MacPage from './pages/MacPage';
import MySqlPage from './pages/MySqlPage';
import NetBeansPage from './pages/NetBeansPage';
import ObjectiveCPage from './pages/ObjectiveCPage';
import PaintNetPage from './pages/PaintNetPage';
import PhpPage from './pages/PhpPage';
import PostgresPage from './pages/PostgresPage';
import ProtractorPage from './pages/ProtractorPage';
import ReactJsPage from './pages/ReactJsPage';
import ReactNativePage from './pages/ReactNativePage';
import SafariPage from './pages/SafariPage';
import ShellPage from './pages/ShellPage';
import SqlLitePage from './pages/SqlLitePage';
import SwiftPage from './pages/SwiftPage';
import TypeScriptPage from './pages/TypeScriptPage';
import WindowsPage from './pages/WindowsPage';
import VisualStudioCodePage from './pages/VisualStudioCodePage';
import XamarinPage from './pages/XamarinPage';
import XamppPage from './pages/XamppPage';
import XcodePage from './pages/XcodePage';
import VmWarePage from './pages/VmWarePage';

export default class App extends Component<{}, { selectedGroup: string, selectedTopic: string, blogList: Array<string> }> {

  constructor(props: any) {
    super(props);
    this.state = {
      selectedGroup: "Javascript",
      selectedTopic: "Be Careful",
      blogList: ["Be Careful", "Callbacks", "Promises", "Recursion"]
    };
    //this.selectProgram = this.selectProgram.bind(this);
  }

  componentDidMount() {
    document.title = "LFQ Programming Notes";
  }

  handleResultChange(selectedGroup: string) {
    console.log("App.handleResultChange called, selectedGroup = " + selectedGroup);
    let blogList: Array<string> = [];
    if (selectedGroup === "Android Studio") {
      blogList = ["Intro"]
    } else if (selectedGroup === "AngularJS") {
      blogList = ["HTML Not Updating", "Structure", "Useful Directives"]
    } else if (selectedGroup === "AWS Gateway") {
      blogList = ["Intro"];
    } else if (selectedGroup === "AWS Lambda") {
      blogList = ["Intro", "Make Function as HTTP Request"]
    } else if (selectedGroup === "AWS S3") {
      blogList = ["Intro"];
    } else if (selectedGroup === "Bash") {
      blogList = ["Intro", "Conditionals", "Commands"];
    } else if (selectedGroup === "Casper JS") {
      blogList = ["Intro", "Installation", "Running", "Quirks", "Docs"];
    } else if (selectedGroup === "Chrome") {
      blogList = ["Intro", "Refresh with Clean Cache"];
    } else if (selectedGroup === "Clojure") {
      blogList = ["Intro", "Reload File", "Switch Namespace"];
    } else if (selectedGroup === "CPanel") {
      blogList = ["Intro", "Clear Disk Space"];
    } else if (selectedGroup === "CSS") {
      blogList = ["Intro"];
    } else if (selectedGroup === "Docker") {
      blogList = ["Intro"];
    } else if (selectedGroup === "Eclipse") {
      blogList = ["Intro"];
    } else if (selectedGroup === "Fastlane") {
      blogList = ["Intro", "Install"];
    } else if (selectedGroup === "Git") {
      blogList = ["Intro", "Git Ignore File", "Revert to Old Commit", "Hard Merge to Master", "Use Old Commit as New Branch"];
    } else if (selectedGroup === "Gulp") {
      blogList = ["Intro"];
    } else if (selectedGroup === "HTML") {
      blogList = ["Intro", "List of Tags"]
    } else if (selectedGroup === "Ionic") {
      blogList = ["Building", "CORS Issues", "Useful Commands", "Useful HTML"];
    } else if (selectedGroup === "Javascript") {
      blogList = ["Be Careful", "Notes", "Callbacks", "Promises", "Recursion", "Array Functions"];
    } else if (selectedGroup === "Jenkins") {
      blogList = ["Intro"];
    } else if (selectedGroup === "Leiningen") {
      blogList = ["Intro", "Install on Mac", "Install on Linux"];
    } else if (selectedGroup === "Linux") {
      blogList = [];
    } else if (selectedGroup === "Liquibase") {
      blogList = ["Intro", "Commands"];
    } else if (selectedGroup === "Mac") {
      blogList = [];
    } else if (selectedGroup === "MySQL") {
      blogList = ["Intro"];
    } else if (selectedGroup === "Netbeans") {
      blogList = ["Intro"];
    } else if (selectedGroup === "Objective C") {
      blogList = ["Intro"];
    } else if (selectedGroup === "Paint.NET") {
      blogList = ["Intro", "Remove Image Alpha Channels"];
    } else if (selectedGroup === "PHP") {
      blogList = ["Intro"]
    } else if (selectedGroup === "Postgres") {
      blogList = ["Intro", "Configure pg_hba.conf", "Installing on  Mac", "JSON Functions", "Setup Empty Password", "Remove Postgres"]
    } else if (selectedGroup === "Protractor") {
      blogList = ["Intro", "Installation", "Notes", "Loops", "Update chromedriver.exe"];
    } else if (selectedGroup === "ReactJS") {
      blogList = ["Intro"];
    } else if (selectedGroup === "React Native") {
      blogList = ["Intro"];
    } else if (selectedGroup === "Safari") {
      blogList = ["Intro", "Enable Development Console", "Empty Cache"];
    }  else if (selectedGroup === "AWS S3") {
      blogList = ["Intro"];
    }else if (selectedGroup === "Shell") {
      blogList = ["Intro", "Conditionals", "Commands"];
    } else if (selectedGroup === "Swift") {
      blogList = ["Intro"];
    } else if (selectedGroup === "Typescript") {
      blogList = ["Intro"];
    } else if (selectedGroup === "Visual Studio Code") {
      blogList = ["Intro", "Auto Formatting"];
    } else if (selectedGroup === "VM Ware") {
      blogList = ["Intro"];
    } else if (selectedGroup === "Xamarin") {
      blogList = ["Intro"];
    } else if (selectedGroup === "XAMPP") {
      blogList = ["Intro", "Start and Stop on Mac", "Start and Stop on Linux"];
    } else if (selectedGroup === "Xcode") {
      blogList = ["Intro", "Upload App", "Cleanup Storage", "Install Command Line Tools"];
    } else if (selectedGroup === "Windows") {
      blogList = ["Change Permissions PEM File"];
    }
    var stateToSet = {
      selectedGroup: selectedGroup,
      selectedTopic: blogList[0],
      blogList: blogList
    };
    console.log("App.handleResultChange stateToSet = " + JSON.stringify(stateToSet));
    this.setState(stateToSet);
  }

  topicSelected(topic: string) {
    console.log("topicSelected called, topic = " + topic);
    this.setState({ selectedTopic: topic });
  }


  render() {
    console.log("App render, this.state = " + JSON.stringify(this.state));
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <NavBar selectedGroup={this.state.selectedGroup} onDataFetched={this.handleResultChange.bind(this)} />
        <div className="blogContent">
          <SideBar onTopicSelected={this.topicSelected.bind(this)} selectedGroup={this.state.selectedGroup} selectedTopic={this.state.selectedTopic} blogList={this.state.blogList} />
          <div className="blogDiv">
            {this.state.selectedGroup === 'Android Studio' && <AndroidStudioPage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'AngularJS' && <AngularJsPage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'AWS Gateway' && <AwsGatewayPage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'AWS Lambda' && <AwsLambdaPage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'AWS S3' && <AwsS3Page selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'Bash' && <BashPage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'Casper JS' && <CasperJsPage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'Chrome' && <ChromePage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'Clojure' && <ClojurePage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'CPanel' && <CPanelPage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'CSS' && <CssPage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'Docker' && <DockerPage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'Eclipse' && <EclipsePage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'Fastlane' && <FastlanePage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'Git' && <GitPage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'Gulp' && <GulpPage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'HTML' && <HtmlPage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'Ionic' && <IonicPage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'Javascript' && <JavascriptPage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'Jenkins' && <JenkinsPage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'Leiningen' && <LeiningenPage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'Linux' && <LinuxPage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'Liquibase' && <LiquibasePage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'Mac' && <MacPage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'MySQL' && <MySqlPage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'Netbeans' && <NetBeansPage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'Objective C' && <ObjectiveCPage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'Paint.NET' && <PaintNetPage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'PHP' && <PhpPage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'Postgres' && <PostgresPage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'Protractor' && <ProtractorPage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'ReactJS' && <ReactJsPage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'React Native' && <ReactNativePage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'Safari' && <SafariPage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'Shell' && <ShellPage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'SQLite' && <SqlLitePage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'Swift' && <SwiftPage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'Typescript' && <TypeScriptPage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'Visual Studio Code' && <VisualStudioCodePage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'VM Ware' && <VmWarePage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'Windows' && <WindowsPage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'Xamarin' && <XamarinPage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'XAMPP' && <XamppPage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'Xcode' && <XcodePage selectedTopic={this.state.selectedTopic} />}
          </div>
        </div>
        {false &&
          <div className="blogAdDiv">

          </div>
        }
        <Footer />
      </div>
    );
  }




}
