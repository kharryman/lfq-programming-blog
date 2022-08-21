import React, { Component, useEffect, useState } from 'react';
import '../index.css';
import { CopyBlock, dracula } from "react-code-blocks";
import { getTab } from '../helpers'


//import Images from '../images/index';


function JavascriptPage(props) {
    let [renderedJSX, setData] = useState([]);

    useEffect(() => {
        console.log("useEffect ")
        setData(topicSelected());
    }, [props]);


    function topicSelected() {
        console.log("topicSelected called, topic = " + props.selectedTopic);
        if (props.selectedTopic === "Be Careful") { renderedJSX = getBeCarefulJSX(); }
        else if (props.selectedTopic === "Notes") { renderedJSX = getNotesJSX(); }
        else if (props.selectedTopic === "Callbacks") { renderedJSX = getCallbacksJSX(); }
        else if (props.selectedTopic === "Promises") { renderedJSX = getPromisesJSX(); }
        else if (props.selectedTopic === "Recursion") { renderedJSX = getRecursionJSX(); }
        else if (props.selectedTopic === "Array Functions") { renderedJSX = getArrayFunctionsJSX(); }

        //this.setState({ renderedJSX: jsxText });
        return renderedJSX;
    }

    function getBeCarefulJSX() {
        var code1 = 'var newVar = Object.assign({}, oldVar);';
        var code2 = 'var newVar = oldVar.slice();';
        return (
            <div key="callbacks">
                <ul>
                    <li>
                        Javascript arrays are pass by reference, so changes to copies will affect originals, unless assigned to different vaiable.<br />
                        To avoid this, use the Object class to assign it to new variable: <br /><br />
                        <CopyBlock
                            text={code1}
                            language='javascript'
                            theme={dracula}
                        />
                        <br />
                        <span style={{ marginLeft: '5px' }}>or another way: ...</span><br /><br />
                        <CopyBlock
                            text={code2}
                            language='javascript'
                            theme={dracula}
                        />
                    </li>
                </ul>
            </div>
        );
    }

    function getNotesJSX() {
        return (
            <div>
                Here are some notes to observe:<br />
                <ul>
                    <li>
                        Adding an undefined item to an object, returns array without the item:                        
                    </li>
                </ul>
            </div>
        );
    }

    function getCallbacksJSX() {
        let t = getTab();
        let code1 = '\nmyFunction(param1, param2, function(){\n';
        code1 += t + '\\\\Handle response\n';
        code1 += '});\n';
        return (
            <div key="callbacks">
                <p className="myParagraph">Callbacks are functions passed to functions that get called when all the work of a function is done. They are similar to promisses but are much stronger.</p>
                <span>Here is how they are used:</span><br />
                <CopyBlock
                    text={code1}
                    language='javascript'
                    theme={dracula}
                />
            </div>
        );
    }

    function getPromisesJSX() {
        let t = getTab();
        let code1 = '\nreturn new Promise(function(resolve, reject){\n';
        code1 += t + 'if (!error) {\n';
        code1 += t + t + 'resolve();\n';
        code1 += t + '}else{\n';
        code1 += t + t + 'reject();\n';
        code1 += t + '}\n';
        code1 += '});\n';
        return (
            <div key="promises">
                <p className="myParagraph">Promises are functions that must be completed first before continuing the program. They continue(resolve) if successful, or stop(reject) if failed.</p>
                <span>Here is how they are used:</span><br /><br />
                <CopyBlock
                    text={code1}
                    language='javascript'
                    theme={dracula}
                />
                <br />
                <span>**Notice that the third or last parameter is actually a function, called the callback function, to be called then 'myFunction' is finished.</span>
            </div>
        );
    }

    function getRecursionJSX() {
        return (
            <div key="recursion">
                <p className="myParagraph">Recusion is when you call the same function until completed.</p>
            </div>
        );
    }

    function getArrayFunctionsJSX() {
        return (
            <div key="array_actions">
                Arrays have useful common functions that can be applied to them:
                <ul>
                    <li>
                        Looping through an array:
                        <CopyBlock
                            text={'arr.forEach(function(ele){handleElement(ele);}'}
                            language='javascript'
                            theme={dracula}
                        />
                    </li>
                    <li>
                        Mapping or reprocessing each element of an array:
                        <CopyBlock
                            text={'arr.map(function(ele){return getSomething(ele);}'}
                            language='javascript'
                            theme={dracula}
                        />
                    </li>
                    <li>
                        Filtering an array:
                        <CopyBlock
                            text={'arr.filter(function(ele){return checkCondition(ele)===true;}'}
                            language='javascript'
                            theme={dracula}
                        />
                    </li>
                    <li>
                        Sorting an array:
                        <CopyBlock
                            text={'arr.sort(function(a, b){\n  if(a>b){return 1;}\n  else if(b>a){return -1;}\n  else{return 0;}\n});'}
                            language='javascript'
                            theme={dracula}
                        />
                    </li>                    
                </ul>
            </div>
        );
    }

    return (
        <div className="topicWrapper">
            <div className="topicHeaderWrapper">
                <h2 className="topicHeader">{props.selectedTopic}</h2>
            </div>
            {renderedJSX}
        </div>
    );
}

export default JavascriptPage;

const styles = {
    callback_header: {
        height: '50px'
    }
}



