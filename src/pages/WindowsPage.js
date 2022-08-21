import React, { Component, useEffect, useState } from 'react';
import '../index.css';
//import Images from '../images/index';
import { CopyBlock, dracula } from "react-code-blocks";


function WindowsPage(props) {
    let [renderedJSX, setData] = useState([]);

    useEffect(() => {
        console.log("useEffect ")
        setData(topicSelected());
    }, [props]);


    function topicSelected() {
        console.log("topicSelected called, topic = " + props.selectedTopic);
        renderedJSX = '';
        if (props.selectedTopic === "Change Permissions PEM File") { renderedJSX = getPermissionsPemFileJSX(); }
        console.log("topicSelected renderedJSX = " + JSON.stringify(renderedJSX));
        //this.setState({ renderedJSX: jsxText });
        return renderedJSX;
    }

    function getPermissionsPemFileJSX() {
        let code1 = 'icacls.exe cvat-controller.pem /reset\nicacls.exe cvat-controller.pem /grant:r %username%:(R)\nicacls.exe cvat-controller.pem /inheritance:r';
        return (
            <div>
                The equivalent of <code>chmod 400 {'<yourPemFile>'}</code> on Windows is this:<br />
                <CopyBlock
                    text={code1}
                    language='shell'
                    theme={dracula}
                />
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

export default WindowsPage;



