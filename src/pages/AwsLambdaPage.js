import React, { Component, useEffect, useState } from 'react';
import '../index.css';
//import Images from '../images/index';


function AwsLambdaPage(props) {
    let [renderedJSX, setData] = useState([]);

    useEffect(() => {
        console.log("useEffect ")
        setData(topicSelected());
    }, [props]);


    function topicSelected() {
        console.log("topicSelected called, topic = " + props.selectedTopic);
        renderedJSX = '';
        if (props.selectedTopic === "Intro") { renderedJSX = getIntroJSX(); }
        else if (props.selectedTopic === "Make Function as HTTP Request") { renderedJSX = getMakeHttpRqJSX(); }

        console.log("topicSelected renderedJSX = " + JSON.stringify(renderedJSX));
        //this.setState({ renderedJSX: jsxText });
        return renderedJSX;
    }

    function getIntroJSX() {
        return (
            <div>
                AWS Lambda is an Amazon Web Service which allows you to create functions to aid in processing data from other AWS Services.<br />
                It provides an ability to test your function without modifying data in other services.<br /><br />
                It can be used in conjunction with AWS Gateway as the function to be called when your app calls an HTTPS request.
            </div>
        );
    }

    function getMakeHttpRqJSX() {
        return (
            <div>
                The steps to make function into HTTPS request:<br />
                <p>1) Create a version(Don't need to name it).</p>
                <p>2) Create a trigger.</p>
                <p>3) Create a route.</p>
                <p>4) Test the route.</p>
                <p>5) If fails, delete version, create new version, add trigger and test again.</p>
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

const styles = {
    callback_header: {
        height: '50px'
    }
}

export default AwsLambdaPage;



