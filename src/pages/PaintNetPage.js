import React, { Component, useEffect, useState } from 'react';
import '../index.css';
import { CopyBlock, dracula } from "react-code-blocks";
//import Images from '../images/index';


function PaintNetPage(props) {
    let [renderedJSX, setData] = useState([]);

    useEffect(() => {
        console.log("useEffect ")
        setData(topicSelected());
    }, [props]);


    function topicSelected() {
        console.log("topicSelected called, topic = " + props.selectedTopic);
        renderedJSX = '';
        if (props.selectedTopic === "Intro") { renderedJSX = getIntroJSX(); }
        else if (props.selectedTopic === "Remove Image Alpha Channels") { renderedJSX = getRemoveAlphaJSX(); }


        console.log("topicSelected renderedJSX = " + JSON.stringify(renderedJSX));
        //this.setState({ renderedJSX: jsxText });
        return renderedJSX;
    }

    function getIntroJSX() {
        return (
            <div>
                Paint.NET is a software program similar to Paint provides with Windows OS.<br />
                It offers more tools geared towards programming developers.
            </div>
        );
    }

    function getRemoveAlphaJSX() {
        var code1 = '';
        return (
            <div>
                Steps to remove all alpha channels from an image: <br />
                <ol>
                    <li>Create a layer under main layer</li>
                    <li>In top right corner click layers icon</li>
                    <li>check it and uncheck main layer in lower right corner box to view it</li>
                    <li>Paint buck it all white with opacity 255.</li>
                    <li>Check main layer, uncheck other layer(in lower right box)</li>
                    <li>Do Layer{'->'}Merge Layer down</li>
                    <li>Save as .png and replace old file....DONE</li>
                </ol>
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

export default PaintNetPage;



