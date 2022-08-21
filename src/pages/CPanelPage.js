import React, { Component, useEffect, useState } from 'react';
import '../index.css';
//import Images from '../images/index';


function CPanelPage(props) {
    let [renderedJSX, setData] = useState([]);

    useEffect(() => {
        console.log("useEffect ")
        setData(topicSelected());
    }, [props]);


    function topicSelected() {
        console.log("topicSelected called, topic = " + props.selectedTopic);
        renderedJSX = '';
        if (props.selectedTopic === "Intro") { renderedJSX = getIntroJSX(); }
        if (props.selectedTopic === "Clear Disk Space") { renderedJSX = getClearDiskSpaceJSX(); }
        console.log("topicSelected renderedJSX = " + JSON.stringify(renderedJSX));
        //this.setState({ renderedJSX: jsxText });
        return renderedJSX;
    }

    function getIntroJSX() {
        return (
            <div>
                Cpanel backend software that most host servers come with.<br />
                It usually includes MySQL and PHP and SSL support.
            </div>
        );
    }

    function getClearDiskSpaceJSX(){
        return (
            <div>
                To clear disk space:<br />
                Delete all files inside '.trash' folder of root directory.<br />
                You may need to access it using an FTP tool like FileZilla.
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

export default CPanelPage;



