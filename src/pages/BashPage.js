import React, { Component, useEffect, useState } from 'react';
import '../index.css';
import { CopyBlock, dracula } from "react-code-blocks";
//import Images from '../images/index';


function BashPage(props) {
    let [renderedJSX, setData] = useState([]);

    useEffect(() => {
        console.log("useEffect ")
        setData(topicSelected());
    }, [props]);


    function topicSelected() {
        console.log("topicSelected called, topic = " + props.selectedTopic);
        renderedJSX = '';
        if (props.selectedTopic === "Intro") { renderedJSX = getIntroJSX(); }
        else if (props.selectedTopic === "Conditionals") { renderedJSX = getConditionalsJSX(); }
        else if (props.selectedTopic === "Commands") { renderedJSX = getCommandsJSX(); }        
        console.log("topicSelected renderedJSX = " + JSON.stringify(renderedJSX));
        //this.setState({ renderedJSX: jsxText });
        return renderedJSX;
    }

    function getIntroJSX() {
        return (
            <div>
                Bash scripts have '.bat' extension and used on Windows machine terminals.
            </div>
        );
    }

    function getConditionalsJSX() {
        let code1 = 'IF "%var1%" == "cond1" (\n)';
        return (
            <div>
                To if, statement, follow this format (*currently unknown how to do 'else if' or 'else'):<br /><br />
                <CopyBlock
                    text={code1}
                    language='shell'
                    theme={dracula}
                />
            </div>
        );
    }

    function getCommandsJSX() {
        let code1 = 'myBatch var1 var2 var3\nSET "var1=%1"\nSET "var2=%2"\nSET "var3=%3"';
        let code2 = 'var2=$(var1)';
        return (
            <div>
                List of Commands (Windows):<br /><br />
                <ul>
                    <li><a href="#ass-cmd">Assigning Variables</a></li>
                    <li><a href="#cd-cmd">Change Directory</a></li>
                    <li><a href="#cp-cmd">Copy</a></li>
                    <li><a href="#echo-cmd">Print to Terminal</a></li>
                </ul>
                <div id="ass-cmd">
                    <h3>Assigning Variables:</h3>
                    <ul>
                        <li>
                            Assign variables passed from your shell script:<br />
                            <CopyBlock
                                text={code1}
                                language='shell'
                                theme={dracula}
                            />
                        </li>               
                    </ul>
                </div>
                <div id="cd-cmd">
                    <h3>Change Directory:</h3>
                    <CopyBlock
                        text={'cd folder_path'}
                        language='shell'
                        theme={dracula}
                    />
                </div>
                <div id="cp-cmd">
                    <h3>Copy:</h3>
                    <CopyBlock
                        text={'copy path_from path_to'}
                        language='shell'
                        theme={dracula}
                    />
                </div>
                <div id="echo-cmd">
                    <h3>Print to Terminal:</h3>
                    <CopyBlock
                        text={'echo "your statement"'}
                        language='shell'
                        theme={dracula}
                    />
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

export default BashPage;

