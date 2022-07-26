import React, { Component, useEffect, useState } from 'react';
import '../index.css';
//import Images from '../images/index';


function SafariPage(props) {
    let [renderedJSX, setData] = useState([]);

    useEffect(() => {
        console.log("useEffect ")
        setData(topicSelected());
    }, [props]);


    function topicSelected() {
        console.log("topicSelected called, topic = " + props.selectedTopic);
        renderedJSX = '';
        if (props.selectedTopic === "Intro") { renderedJSX = getIntroJSX(); }
        else if (props.selectedTopic === "Enable Development Console") { renderedJSX = getEnableDevJSX(); }
        else if (props.selectedTopic === "Empty Cache") { renderedJSX = getEmptyCacheJSX(); }


        console.log("topicSelected renderedJSX = " + JSON.stringify(renderedJSX));
        //this.setState({ renderedJSX: jsxText });
        return renderedJSX;
    }

    function getIntroJSX() {
        return (
            <div>
                Safari is a browser that usually comes per-installed on Mac personal computers or laptops and mobile devices.
            </div>
        );
    }

    function getEnableDevJSX() {
        const step1 = "Safari => Preferences => Advanced => Click 'Show Develop menu in menu bar'";
        const step2 = "Develop => 'Show Web Inspector'";
        return (
            <div>
                To enable development mode:<br />
                <ol>
                    <li>Go to :<br /><code>{step1}</code></li>
                    <li>Go to :<br /><code>{step2}</code> or...</li>
                    <li>On page to inspect, click: <br /><code>&#8984; + ALT + I</code></li>
                </ol>
            </div>
        );
    }

    function getEmptyCacheJSX(){
        return (
            <div>
                To empty cache:<br />
                <code>&#8984; + OPTION + E</code>
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

export default SafariPage;



