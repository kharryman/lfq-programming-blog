import React, { Component, useEffect, useState } from 'react';
import '../index.css';
//import Images from '../images/index';


function IonicPage(props) {
    let [renderedJSX, setData] = useState([]);

    useEffect(() => {
        console.log("useEffect ")
        setData(topicSelected());
    }, [props]);


    function topicSelected() {
        console.log("topicSelected called, topic = " + props.selectedTopic);
        //Building, Useful HTML, CORS Issues
        if (props.selectedTopic === "Building") { renderedJSX = getBuildingJSX(); }
        else if (props.selectedTopic === "CORS Issues") { renderedJSX = getCorsIssuesJSX(); }
        else if (props.selectedTopic === "Useful HTML") { renderedJSX = getUsefulHtmlJSX(); }
        //this.setState({ renderedJSX: jsxText });
        return renderedJSX;
    }

    function getBuildingJSX() {
        return (
            <div key="ionic_building">
                <strong>For building an Ionic app, first you need to  ...</strong>
            </div>
        );
    }

    function getCorsIssuesJSX() {
        return (
            <div key="cors issues">
                <p>
                    Using an ionic proxy contingency http call does indeed eliminate the need to use Chrome CORS add on.
                </p>
            </div>
        );
    }

    function getUsefulHtmlJSX() {
        const ionScrollTxt = "'<ion-scroll></ion-scroll>'";
        const checkboxTxt = "'<input type=\"checkbox\" />'";
        const ionCheckboxTxt = "<ion-checkbox></ion-checkbox>";
        const radioboxTxt = "'<input type=\"radio\" />'";
        return (
            <div key="useful_html">
                <strong>Useful HTML ionic tags are ...</strong><br />
                <ul>
                    <li><a href={'#ion-checkbox'}>ion-checkbox</a></li>
                    <li><a href={'#ion-item'}>ion-item</a></li>
                    <li><a href={'#ion-radio'}>ion-radio</a></li>
                    <li><a href={'#ion-scroll'}>ion-scroll</a></li>
                </ul>
                <p>
                    These tags can be used as normal HTML tags, however, they need to be closed, ie:<br /><code>{ionScrollTxt}</code>
                </p>
                <div id="ion-checkbox">
                    <h3>ion-checkbox:</h3>
                    This is like the normal HTML tage:<br />
                    <code>{checkboxTxt}</code><br />
                    However, the UI on it is much improved.
                </div>
                <div id="ion-item">
                    <h3>ion-item:</h3>
                    This is used to create a '<code>div</code>' element with improved UI, <br />
                    in which you can include one ionic element like a checkbox:<br />
                    '<code>{ionCheckboxTxt}</code>''
                </div>
                <div id="ion-radio">
                    <h3>ion-radio:</h3>
                    This is like the normal HTML tage:<br />
                    <code>{radioboxTxt}</code><br />
                    However, the UI on it is much improved.                    
                </div>                
                <div id="ion-scroll">
                    <h3>ion-scroll:</h3>
                    Used to create a scroll view element, which can scroll horizontally, vertically.<br />
                    These elements can also be zoomed in or zoomed out, which is useful to embed images/photos/pdfs etc.
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

export default IonicPage;



