import React, { Component, useEffect, useState } from 'react';
import '../index.css';
//import Images from '../images/index';


function LeiningenCPage(props) {
    let [renderedJSX, setData] = useState([]);

    useEffect(() => {
        console.log("useEffect ")
        setData(topicSelected());
    }, [props]);


    function topicSelected() {
        console.log("topicSelected called, topic = " + props.selectedTopic);
        renderedJSX = '';
        if (props.selectedTopic === "Intro") { renderedJSX = getIntroJSX(); }
        else if (props.selectedTopic === "Install on Mac") { renderedJSX = getInstallMaxJSX(); }

        console.log("topicSelected renderedJSX = " + JSON.stringify(renderedJSX));
        //this.setState({ renderedJSX: jsxText });
        return renderedJSX;
    }

    function getIntroJSX() {
        return (
            <div>
                <p>Leiningen or lein, is a script that can be called on the terminal to run, compile and build Clojure code.</p>
            </div>
        );
    }

    function getInstallMaxJSX() {
        return (
            <div>
                <p>1) go to leiningen.org and copy script into /usr/local/bin/lein</p>
                <p>2) change LEIN VERSION to 2.8.0 &amp; comment out(#) the CHECK_SUM export variable!</p>
                <p>3) sudo chmod a+x lein</p>
                <p>4) Make sure you have Java SE JDK 8 (install from oracle)</p>
                <p>5) run it : lein</p>
            </div>
        )
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

export default LeiningenCPage;



