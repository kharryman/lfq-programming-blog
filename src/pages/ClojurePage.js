import React, { Component, useEffect, useState } from 'react';
import '../index.css';
//import Images from '../images/index';


function ClojurePage(props) {
    let [renderedJSX, setData] = useState([]);

    useEffect(() => {
        console.log("useEffect ")
        setData(topicSelected());
    }, [props]);


    function topicSelected() {
        console.log("topicSelected called, topic = " + props.selectedTopic);
        renderedJSX = '';
        //"Reload File", "Switch Namespace"];
        if (props.selectedTopic === "Intro") { renderedJSX = getIntroJSX(); }
        else if (props.selectedTopic === "Reload File") { renderedJSX = getReloadFileJSX(); }
        else if (props.selectedTopic === "Switch Namespace") { renderedJSX = getSwitchNamespaceJSX(); }
        console.log("topicSelected renderedJSX = " + JSON.stringify(renderedJSX));
        //this.setState({ renderedJSX: jsxText });
        return renderedJSX;
    }

    function getIntroJSX() {
        return (
            <div>
                Clojure is a LISP like functional programming language, which uses functions inside nested parenthesis.<br />
                It uses the JAVA programming language, and is used in conjunction with Leiningen(see 'Leiningen' below) to compile, run and build.
            </div>
        );
    }

    function getReloadFileJSX() {
        return (
            <div>
                To reload a file in REPL, do this:<br />
                <ol>
                    <li><code>(load-file "path/to/file.clj")</code></li>
                    <li><code>(use 'path-to.clojure.file)</code></li>
                </ol>
            </div>
        );
    }

    function getSwitchNamespaceJSX() {
        let step1 = "user=> (load \"path/to/namespace\")";
        let step2 = "user=> (in-ns 'path.to.namespace)";
        return (
            <div>
                To switch namespace do this:<br />
                <ol>
                    <li><code>{step1}</code></li>
                    <li><code>{step2}</code></li>
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

export default ClojurePage;



