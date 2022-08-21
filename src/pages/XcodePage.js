import React, { Component, useEffect, useState } from 'react';
import '../index.css';
//import Images from '../images/index';
import { CopyBlock, dracula } from "react-code-blocks";


function XcodePage(props) {
    let [renderedJSX, setData] = useState([]);

    useEffect(() => {
        console.log("useEffect ")
        setData(topicSelected());
    }, [props]);


    function topicSelected() {
        console.log("topicSelected called, topic = " + props.selectedTopic);
        renderedJSX = '';
        if (props.selectedTopic === "Intro") { renderedJSX = getIntroJSX(); }
        else if (props.selectedTopic === "Upload App") { renderedJSX = getUploadJSX(); }
        else if (props.selectedTopic === "Cleanup Storage") { renderedJSX = getCleanupStorageJSX(); }
        else if (props.selectedTopic === "Install Command Line Tools") { renderedJSX = getInstallCommandToolsJSX(); }


        console.log("topicSelected renderedJSX = " + JSON.stringify(renderedJSX));
        //this.setState({ renderedJSX: jsxText });
        return renderedJSX;
    }

    function getIntroJSX() {
        return (
            <div>
                Xcode is the IDE or Integrated Development Environment used for iOS Development.<br />
                It can be downloaded from:<br />
                <a href="https://developer.apple.com/download/more/">https://developer.apple.com/download/more/</a>
            </div>
        );
    }

    function getUploadJSX() {
        let code1 = "App=>'any iOS device'";
        let code2 = "Poduct=>Archive";
        let code3 = "'Upload'";
        return (
            <div>
                To upload an app:
                <ol>
                    <li>On top click: <code>{code1}</code></li>
                    <li>From menu click: <code>{code2}</code></li>
                    <li>Follow prompts then click <code>{code3}</code></li>
                </ol>
            </div>
        );
    }

    function getCleanupStorageJSX() {
        return (
            <div>
                To clean up storage:
                <ol>
                    <li>To clear derived data: <br />
                        <CopyBlock
                            text={'rm -rf ~/Library/Developer/Xcode/DerivedData'}
                            language='shell'
                            theme={dracula}
                        />
                    </li>
                    <li>To remove archives:<br />
                        <CopyBlock
                            text={'rm -rf /Users/<user>/Library/Developer/Xcode/Archives'}
                            language='shell'
                            theme={dracula}
                        />
                    </li>
                </ol>
            </div>
        );
    }

    function getInstallCommandToolsJSX() {
        return (
            <div>
                To install command-line tools:<br />
                <CopyBlock
                    text={'xcode-select --install'}
                    language='shell'
                    theme={dracula}
                />
            </div>
        );
    }

    return (
        <div className="topicWrapper">
            <div className="topicHeaderWrapper">
                <h2 className="topicHeader">{props.selectedTopic}:</h2>
            </div>
            {renderedJSX}
        </div>
    );
}

const styles = {
    callback_header: {
        height: '50px'
    }
}

export default XcodePage;



