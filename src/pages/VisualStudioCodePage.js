import React, { Component, useEffect, useState } from 'react';
import '../index.css';
//import Images from '../images/index';


function VisualStudioCodePage(props) {
    let [renderedJSX, setData] = useState([]);

    useEffect(() => {
        console.log("useEffect ")
        setData(topicSelected());
    }, [props]);


    function topicSelected() {
        console.log("topicSelected called, topic = " + props.selectedTopic);
        renderedJSX = '';
        if (props.selectedTopic === "Intro") { renderedJSX = getIntroJSX(); }
        console.log("topicSelected renderedJSX = " + JSON.stringify(renderedJSX));
        //this.setState({ renderedJSX: jsxText });
        return renderedJSX;
    }

    function getIntroJSX() {
        return (
            <div>
                Visual Studio Code, is a useful editor used for many programming languages, such as <br />
                Javascript, AngularJS, Angular, Typescript, PHP, Clojure, etc...<br />                
                It includes many features like autoformatting and github integration.<br />
                The UI is very colorful and intuitive.<br />
                It allows for open-source plugin integration.
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

export default VisualStudioCodePage;



