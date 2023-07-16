import React, { Component, useEffect, useState } from 'react';
import '../index.css';
import { CopyBlock, dracula } from "react-code-blocks";
//import Images from '../images/index';


function FastlanePage(props) {
    let [renderedJSX, setData] = useState([]);

    useEffect(() => {
        console.log("useEffect ")
        setData(topicSelected());
    }, [props]);


    function topicSelected() {
        console.log("topicSelected called, topic = " + props.selectedTopic);
        renderedJSX = '';
        if (props.selectedTopic === "Intro") { renderedJSX = getIntroJSX(); }
        else if (props.selectedTopic === "Install") { renderedJSX = getInstallJSX(); }        
        console.log("topicSelected renderedJSX = " + JSON.stringify(renderedJSX));
        //this.setState({ renderedJSX: jsxText });
        return renderedJSX;
    }

    function getIntroJSX() {
        return (
            <div>
                Fastlane is a continuous integration tool.
            </div>
        );
    }

    function getInstallJSX() {
        return (
            <div>
                To install fastlane:<br />                
                <CopyBlock
                    text={'[sudo] gem install fastlane -NV'}
                    language='shell'
                    theme={dracula}
                />
                **If you don't have ruby:<br />
                On Windows, go to<br />
                <a href="https://www.ruby-lang.org/en/downloads/">https://www.ruby-lang.org/en/downloads/</a>
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

export default FastlanePage;



