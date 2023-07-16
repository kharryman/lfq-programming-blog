import React, { Component, useEffect, useState } from 'react';
import '../index.css';
//import Images from '../images/index';
import { CopyBlock, dracula } from "react-code-blocks";


function ShellPage(props) {
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
                Shell scripts have '.sh' extension and used on Linux or Mac machine terminals.
            </div>
        );
    }

    function getConditionalsJSX() {
        let code1 = 'if [ "$cond1" == "true" ] && [ "$cond2" == "true" ] && [ "$cond3" == "true" ] then\n';
        code1 += '  #do something1\n';
        code1 += 'elif [ "$cond1" == "false" ] || [ "$cond2" == "false" ] || [ "$cond3" == "false" ] then\n';
        code1 += '  #do something2\n';
        code1 += 'then\n';
        code1 += '  #do something3\n';
        code1 += 'fi';
        return (
            <div>
                To use if, else if, then follow this format:<br /><br />
                <CopyBlock
                    text={code1}
                    language='shell'
                    theme={dracula}
                />
            </div>
        );
    }

    function getCommandsJSX() {
        let code1 = './myShell.sh var1 var2 var3\nvar1=$1\nvar1=$1\nvar1=$3';
        let code2 = 'var2=$(var1)';
        return (
            <div>
                List of Commands (Linux, Mac):<br /><br />
                <ul>
                    <li><a href="#ass-cmd">Assigning Variables</a></li>
                    <li><a href="#cd-cmd">Change Directory</a></li>
                    <li><a href="#cp-cmd">Copy</a></li>
                    <li><a href="#mkdir-cmd">Make Directory</a></li>
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
                        <li>
                            Assign variables from other variables in your shell script:<br />
                            <CopyBlock
                                text={code2}
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
                        text={'cp path_from path_to'}
                        language='shell'
                        theme={dracula}
                    />
                </div>
                <div id="mkdir-cmd">
                    <h3>Make Directory:</h3>
                    <CopyBlock
                        text={'mkdir folder_path'}
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

export default ShellPage;



