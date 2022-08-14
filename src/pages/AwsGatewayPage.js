import React, { Component, useEffect, useState } from 'react';
import '../index.css';
//import Images from '../images/index';


function AwsGatewayPage(props) {
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
                AWS Gateway is an Amazon Web Service which allows you to create our own API or Application Programming Interface,<br />
                which your app can access using HTTPS calls to it. You can give it your own name and names routes for various methods your app uses.<br />
                A common way of using it, is in conjunction with AWS Lambda, another AWS Service(see 'AWS Lamda' below), which allows you to create your own function to access other resources/services in AWS<br />
                to collect data and return to your app.<br /><br />
                This is great, because it is possible to create an app without a server, however, you need to set up an AWS account.
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

export default AwsGatewayPage;



