import React, { Component, useEffect, useState } from 'react';
import '../index.css';
//import Images from '../images/index';


function HtmlPage(props) {
    let [renderedJSX, setData] = useState([]);

    useEffect(() => {
        console.log("useEffect ")
        setData(topicSelected());
    }, [props]);


    function topicSelected() {
        console.log("topicSelected called, topic = " + props.selectedTopic);
        renderedJSX = '';
        if (props.selectedTopic === "Intro") { renderedJSX = getIntroJSX(); }
        else if (props.selectedTopic === "List of Tags") { renderedJSX = getListTagsJSX(); }
        
        console.log("topicSelected renderedJSX = " + JSON.stringify(renderedJSX));
        //this.setState({ renderedJSX: jsxText });
        return renderedJSX;
    }

    function getIntroJSX() {
        return (
            <div>
                HTML or Hyper Text Markup Language, is a language browser's use to render the views of web pages.
            </div>
        );
    }

    function getListTagsJSX(){
        return (
            <div key="tag_list">
                <strong>The main tags of HTML are:</strong>
                <ul>
                    <li><a href={'#<a>'}>&lt;a&gt;</a></li>
                    <li><a href={'#<b>'}>&lt;b&gt;</a></li>
                    <li><a href={'#<p>'}>&lt;p&gt;</a></li>
                </ul>
                <p>
                    Here is a list of tags:<br />
                </p>
                <div id="<a>">
                    <h3>&lt;a&gt;</h3>
                    <p>A link tag, the 'href' attribute defines the HTTP url or page anchor to point to</p>
                </div>
                <div id="<b>">
                    <h3>&lt;b&gt;</h3>
                    <p>This is the bold text tag.</p>
                </div>
                <div id="<p>">
                    <h3>&lt;p&gt;</h3>
                    <p>This is the paragraph tag.</p>
                </div>                
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

export default HtmlPage;



