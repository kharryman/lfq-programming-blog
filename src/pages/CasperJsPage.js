import React, { Component, useEffect, useState } from 'react';
import '../index.css';
import { CopyBlock, dracula } from "react-code-blocks";
//import Images from '../images/index';


function CasperJsPage(props) {
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
        else if (props.selectedTopic === "Running") { renderedJSX = getRunningJSX(); }
        else if (props.selectedTopic === "Quirks") { renderedJSX = getQuirksJSX(); }
        else if (props.selectedTopic === "Docs") { renderedJSX = getDocsJSX(); }

        console.log("topicSelected renderedJSX = " + JSON.stringify(renderedJSX));
        //this.setState({ renderedJSX: jsxText });
        return renderedJSX;
    }

    function getIntroJSX() {
        return (
            <div>
                CasperJS is a Javascript framework, which allows you to be able to scrape data from websites.
            </div>
        );
    }

    function getInstallationJSX() {
        return (
            <div>
                Steps to install CasperJS.<br />
                <ol>
                    <li>
                        Install casperjs and slimer js together.
                    </li>
                    <li>
                        Put casper files into slimer folder..
                    </li>
                    <li>
                        Add CasperJS to your path:<br />
                        <code>Control Panel Advanced Variables:<br />
                            'C:\workspace\casperjs-1.1.4-1\bin'
                        </code>
                    </li>
                    <li>
                        Install old firefox:<br />
                        Go to <a href="https://ftp.mozilla.org/pub/firefox/releases/">https://ftp.mozilla.org/pub/firefox/releases/</a><br />
                        Click a version between 30 and 52(EX ./52.0).<br />
                        Click your platform(win64).<br />
                        Click language(en-US/).<br />
                        Click the setup EXE.
                    </li>
                </ol>
            </div>
        );
    }

    function getRunningJSX() {
        let code1 = '<yourfilename>.js --engine=slimerjs';
        return (
            <div>
                Run CasperJS like this:<br /><br />
                <CopyBlock
                    text={code1}
                    language='shell'
                    theme={dracula}
                />
            </div>
        );
    }

    function getQuirksJSX(){
        let code1 = 'casper.evaluate(function(params){...},params);';
        return (
            <div>
                Some quirks of CasperJS:<br /><br />
                <ul>
                    <li>
                       *Need to use promises, to make sure events happen in order.
                    </li>
                    <li>
                        Need to use:<br />
                        <code>{code1}</code><br />
                        ..to evaluate normal Javascript/Jquery operations.
                    </li>                    
                </ul>
            </div>
        );
    }

    function getDocsJSX(){
        return (
            <div>
                Go to this link to get docs:<br /><br />
                <a href="http://casperjs.readthedocs.io/en/latest/modules/casper.html">http://casperjs.readthedocs.io/en/latest/modules/casper.html</a>
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

export default CasperJsPage;



