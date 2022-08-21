import React, { Component, useEffect, useState } from 'react';
import '../index.css';
import { CopyBlock, dracula } from "react-code-blocks";
//import Images from '../images/index';


function ProtractorPage(props) {
    let [renderedJSX, setData] = useState([]);

    useEffect(() => {
        console.log("useEffect ")
        setData(topicSelected());
    }, [props]);


    function topicSelected() {
        console.log("topicSelected called, topic = " + props.selectedTopic);
        renderedJSX = '';
        if (props.selectedTopic === "Intro") { renderedJSX = getIntroJSX(); }
        else if (props.selectedTopic === "Installation") { renderedJSX = getInstallationJSX(); }
        else if (props.selectedTopic === "Notes") { renderedJSX = getNotesJSX(); }
        else if (props.selectedTopic === "Loops") { renderedJSX = getLoopsJSX(); }
        else if (props.selectedTopic === "Update chromedriver.exe") { renderedJSX = getUpdateChromedriverJSX(); }


        console.log("topicSelected renderedJSX = " + JSON.stringify(renderedJSX));
        //this.setState({ renderedJSX: jsxText });
        return renderedJSX;
    }

    function getIntroJSX() {
        return (
            <div>
                Protractor is a javascript tool used in conjunction with Angular to create mock tests.
            </div>
        );
    }

    function getInstallationJSX() {
        return (
            <div>
                To install try these commands in a terminal:<br />
                <ul>
                    <li>
                        <CopyBlock
                            text={'npm install -g protractor'}
                            language='shell'
                            theme={dracula}
                        />
                    </li>
                    <li>
                        <CopyBlock
                            text={'webdriver-manager update <--ignore-ssl>'}
                            language='shell'
                            theme={dracula}
                        />
                    </li>
                    <li>
                        <CopyBlock
                            text={'npm install protractor'}
                            language='shell'
                            theme={dracula}
                        />
                    </li>
                </ul>
            </div>
        );
    }

    function getNotesJSX() {
        return (
            <div>
                Some notes:<br />
                <ul>
                    <li>
                        Use:
                        <CopyBlock
                            text={'<element>.all(by..)'}
                            language='javascript'
                            theme={dracula}
                        />
                    </li>
                    <li>
                        Use:
                        <CopyBlock
                            text={'browser.ignoreSynchronization = true;'}
                            language='javascript'
                            theme={dracula}
                        />
                        ..to bypass protractor's waiting technology which can be very slow.
                    </li>
                    <li>
                        Use:
                        <CopyBlock
                            text={'browser.wait();'}
                            language='javascript'
                            theme={dracula}
                        />
                        after await in async calls.
                    </li>
                </ul>
            </div>
        );
    }

    function getLoopsJSX() {
        return (
            <div>
                How to do loops:<br />
                <CopyBlock
                    text={'for(var i...){(function (<parameter>){ })(<parameter>) }'}
                    language='javascript'
                    theme={dracula}
                />
                In 'it()', use done, and call done() when 'it()' finishes.<br />
                Use '<code>browser.sleep().then</code>' in loop.<br />
                Make sure functions called in loop use '<code>browser.sleep().then</code>' too.
            </div>
        );
    }

    function getUpdateChromedriverJSX() {
        return (
            <div>
                Steps:<br />
                <ol>
                    <li>
                        Go to webmanager folder: `C:\Program Files\nodejs\node_modules\protractor\node_modules\webdriver-manager\built`
                    </li>
                    <li>
                        Update `maxChromedriver` to current Chrome version(ie `77`)
                    </li>
                </ol>
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

export default ProtractorPage;



