import React, { Component, useEffect, useState } from 'react';
import '../index.css';
//import Images from '../images/index';


function JavascriptPage(props) {
    let [renderedJSX, setData] = useState([]);

    useEffect(() => {
        console.log("useEffect ")
        setData(topicSelected());
    }, [props]);


    function topicSelected() {
        console.log("topicSelected called, topic = " + props.selectedTopic);
        if (props.selectedTopic === "Be Careful") { renderedJSX = getBeCarefulJSX(); }
        else if (props.selectedTopic === "Callbacks") { renderedJSX = getCallbacksJSX(); }
        else if (props.selectedTopic === "Promises") { renderedJSX = getPromisesJSX(); }
        else if (props.selectedTopic === "Recursion") { renderedJSX = getRecursionJSX(); }

        //this.setState({ renderedJSX: jsxText });
        return renderedJSX;
    }

    function getBeCarefulJSX() {
        return (
            <div key="callbacks">
                <ul>
                    <li>
                        Javascript arrays are pass by reference, so changes to copies will affect originals, unless assigned to different vaiable.<br />
                        To avoid this, use the Object class to assign it to new variable: <br />
                        <code>var newVar = Object.assign(&#123;&#125;, oldVar);</code>
                    </li>
                </ul>
            </div>
        );
    }

    function getCallbacksJSX() {
        return (
            <div key="callbacks">
                <p className="myParagraph">Callbacks are functions passed to functions that get called when all the work of a function is done. They are similar to promisses but are much stronger.</p>
            </div>
        );
    }

    function getPromisesJSX() {
        return (
            <div key="promises">
                <p className="myParagraph">Promises are functions that must be completed first before continuing the program. They continue(resolve) if successful, or stop(reject) if failed.</p>
            </div>
        );
    }

    function getRecursionJSX() {
        return (
            <div key="recursion">
                <p className="myParagraph">Recusion is when you call the same function until completed.</p>
            </div>
        );
    }

    return (
        <div className="topicWrapper">
            <div className="topicHeaderWrapper">
                <h2 className="topicHeader">{props.selectedTopic}</h2>
            </div>
            {renderedJSX}
        </div>
    );
}

export default JavascriptPage;

const styles = {
    callback_header: {
        height: '50px'
    }
}



