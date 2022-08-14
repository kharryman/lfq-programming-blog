import React, { Component, useEffect, useState } from 'react';
import '../index.css';
//import Images from '../images/index';


function GulpPage(props) {
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
                Gulp is a Node JS(Javascript) tool which primarily helps in conjunction with running bash(.bat) or shell scripts(.sh).<br />
                Your function can be declared in one gulpfile.js file, and called either in the bash/shell scripts or directly on the terminal:<br />
                <code>gulp myTask --param1 --param2 ... </code>
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

export default GulpPage;



