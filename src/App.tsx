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
import CasperJsPage from './pages/CasperJsPage';
import ClojurePage from './pages/ClojurePage';
import CssPage from './pages/CssPage';
import EclipsePage from './pages/EclipsePage';
import GulpPage from './pages/GulpPage';
import HtmlPage from './pages/HtmlPage';
import IonicPage from './pages/IonicPage';
import JavascriptPage from './pages/JavascriptPage';
import LeiningenPage from './pages/LeiningenPage';
import MySqlPage from './pages/MySqlPage';
import NetBeansPage from './pages/NetBeansPage';
import ObjectiveCPage from './pages/ObjectiveCPage';
import PaintNetPage from './pages/PaintNetPage';
import PhpPage from './pages/PhpPage';
import PostgresPage from './pages/PostgresPage';
import ProtractorPage from './pages/ProtractorPage';
import SafariPage from './pages/SafariPage';
import SqlLitePage from './pages/SqlLitePage';
import VisualStudioCodePage from './pages/VisualStudioCodePage';
import XamppPage from './pages/XamppPage';
import XcodePage from './pages/XcodePage';
import VmWarePage from './pages/VmWarePage';

export default class App extends Component<{}, { selectedGroup: string, selectedTopic: string, blogList: Array<string> }> {

  constructor(props: any) {
    super(props);
    this.state = {
      selectedGroup: "JAVASCRIPT",
      selectedTopic: "Callbacks",
      blogList: [
        "Callbacks",
        "Promises",
        "Recursion"
      ]
    };
    //this.selectProgram = this.selectProgram.bind(this);
  }

  componentDidMount() {
    document.title = "LFQ Programming Notes";
  }

  handleResultChange(selectedGroup: string) {
    console.log("App.handleResultChange called, selectedGroup = " + selectedGroup);
    let blogList: Array<string> = [];
    if (selectedGroup === "ANDROID_STUDIO") {
      blogList = ["Intro"]
    } else if (selectedGroup === "ANGULAR_JS") {
      blogList = ["HTML Not Updating", "Structure", "Useful Directives"]
    } else if (selectedGroup === "AWS_GATEWAY") {
      blogList = ["Intro"];
    } else if (selectedGroup === "AWS_LAMBDA") {
      blogList = ["Intro", "Make Function as HTTP Request"]
    } else if (selectedGroup === "AWS_S3") {
      blogList = ["Intro"];
    } else if (selectedGroup === "CASPER_JS") {
      blogList = ["Intro"];
    } else if (selectedGroup === "CLOJURE") {
      blogList = ["Intro"];
    } else if (selectedGroup === "CSS") {
      blogList = ["Intro"];
    } else if (selectedGroup === "ECLIPSE") {
      blogList = ["Intro"];
    } else if (selectedGroup === "GULP") {
      blogList = ["Intro"];
    } else if (selectedGroup === "HTML") {
      blogList = ["Intro"]
    } else if (selectedGroup === "IONIC") {
      blogList = ["Building", "CORS Issues", "Useful HTML"]
    } else if (selectedGroup === "JAVASCRIPT") {
      blogList = ["Be Careful", "Callbacks", "Promises", "Recursion"]
    } else if (selectedGroup === "LEININGEN") {
      blogList = ["Intro", "Install on Mac"];
    } else if (selectedGroup === "MYSQL") {
      blogList = ["Intro"];
    } else if (selectedGroup === "NETBEANS") {
      blogList = ["Intro"];
    } else if (selectedGroup === "OBJECTIVE_C") {
      blogList = ["Intro"];
    } else if (selectedGroup === "PAINT_NET") {
      blogList = ["Intro"];
    } else if (selectedGroup === "PHP") {
      blogList = ["Intro"]
    } else if (selectedGroup === "POSTGRES") {
      blogList = ["Intro", "Configure pg_hba.conf", "Installing on  Mac", "JSON Functions", "Setup Empty Password"]
    } else if (selectedGroup === "PROTRACTOR") {
      blogList = ["Intro"];
    } else if (selectedGroup === "SAFARI") {
      blogList = ["Intro"];
    } else if (selectedGroup === "SQL_LITE") {
      blogList = ["Intro"];
    } else if (selectedGroup === "VS_CODE") {
      blogList = ["Intro"];
    } else if (selectedGroup === "VM_WARE") {
      blogList = ["Intro"];
    } else if (selectedGroup === "XAMPP") {
      blogList = ["Intro"];
    } else if (selectedGroup === "XCODE") {
      blogList = ["Intro"];
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
            {this.state.selectedGroup === 'ANDROID_STUDIO' && <AndroidStudioPage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'ANGULAR_JS' && <AngularJsPage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'AWS_GATEWAY' && <AwsGatewayPage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'AWS_LAMBDA' && <AwsLambdaPage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'AWS_S3' && <AwsS3Page selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'CASPER_JS' && <CasperJsPage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'CLOJURE' && <ClojurePage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'CSS' && <CssPage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'ECLIPSE' && <EclipsePage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'GULP' && <GulpPage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'HTML' && <HtmlPage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'IONIC' && <IonicPage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'JAVASCRIPT' && <JavascriptPage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'LEININGEN' && <LeiningenPage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'MYSQL' && <MySqlPage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'NETBEANS' && <NetBeansPage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'OBJECTIVE_C' && <ObjectiveCPage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'PAINT_NET' && <PaintNetPage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'PHP' && <PhpPage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'POSTGRES' && <PostgresPage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'PROTRACTOR' && <ProtractorPage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'SAFARI' && <SafariPage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'SQL_LITE' && <SqlLitePage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'VS_CODE' && <VisualStudioCodePage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'VM_WARE' && <VmWarePage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'XAMPP' && <XamppPage selectedTopic={this.state.selectedTopic} />}
            {this.state.selectedGroup === 'XCODE' && <XcodePage selectedTopic={this.state.selectedTopic} />}
          </div>
        </div>
        <Footer />
      </div>
    );
  }




}
