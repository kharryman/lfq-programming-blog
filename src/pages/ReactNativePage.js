import React, { Component, useEffect, useState } from 'react';
import '../index.css';
//import Images from '../images/index';


function ReactNativePage(props) {
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
            <div key="callbacks">
                <p style={styles.paragraph}>
                    React-Native is a hybrid mobile app development framework developed by Facebook and uses ReactJS.
                </p>
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

export default ReactNativePage;

const styles = {
    wrapper: {
        margin: '20px'
    },
    callback_header: {
        height: '50px'
    },
    paragraph: {
        fontFamily: 'Arial',
        fontWeigth: 'bold',
        lineHeight: '20px'
    }
}



