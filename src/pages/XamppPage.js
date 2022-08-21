import React, { Component, useEffect, useState } from 'react';
import '../index.css';
import { CopyBlock, dracula } from "react-code-blocks";
//import Images from '../images/index';


function XamppPage(props) {
    let [renderedJSX, setData] = useState([]);

    useEffect(() => {
        console.log("useEffect ")
        setData(topicSelected());
    }, [props]);


    function topicSelected() {
        console.log("topicSelected called, topic = " + props.selectedTopic);
        renderedJSX = '';
        if (props.selectedTopic === "Intro") { renderedJSX = getIntroJSX(); }
        else if (props.selectedTopic === "Start and Stop on Linux") { renderedJSX = getLinuxStartStopJSX(); }
        else if (props.selectedTopic === "Start and Stop on Mac") { renderedJSX = getMacStartStopJSX(); }

        console.log("topicSelected renderedJSX = " + JSON.stringify(renderedJSX));
        //this.setState({ renderedJSX: jsxText });
        return renderedJSX;
    }

    function getIntroJSX() {
        return (
            <div key="callbacks">
                <p style={styles.paragraph}>
                    Xampp is software which helps to create a local server on your computer.<br />
                    It is supported on most platforms(Windows, Mac, Linux).<br />
                    It usually comes pre-installed with PHP, MySQL, and Cpanel support.
                </p>
            </div>
        );
    }

    function getLinuxStartStopJSX() {
        return (
            <div key="callbacks">
                <p style={styles.paragraph}>
                    To start or stop xampp server on Linux:<br /><br />
                    <CopyBlock
                        text={'sudo /opt/lampp/lampp start'}
                        language='shell'
                        theme={dracula}
                    />
                    <CopyBlock
                        text={'sudo /opt/lampp/lampp stop'}
                        language='shell'
                        theme={dracula}
                    />
                    <br />
                </p>
            </div>
        );
    }

    function getMacStartStopJSX() {
        return (
            <div key="callbacks">
                <p style={styles.paragraph}>
                    To start or stop xampp server on Linux:<br /><br />
                    <CopyBlock
                        text={'sudo /Applications/XAMPP/xamppfiles/xampp start'}
                        language='shell'
                        theme={dracula}
                    />
                    <CopyBlock
                        text={'sudo /Applications/XAMPP/xamppfiles/xampp stop'}
                        language='shell'
                        theme={dracula}
                    />
                    <br />
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

export default XamppPage;

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



