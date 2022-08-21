import React, { Component, useEffect, useState } from 'react';
import '../index.css';
import { CopyBlock, dracula } from "react-code-blocks";
//import Images from '../images/index';


function LiquibasePage(props) {
    let [renderedJSX, setData] = useState([]);

    useEffect(() => {
        console.log("useEffect ")
        setData(topicSelected());
    }, [props]);


    function topicSelected() {
        console.log("topicSelected called, topic = " + props.selectedTopic);
        renderedJSX = '';
        if (props.selectedTopic === "Intro") { renderedJSX = getIntroJSX(); }
        else if (props.selectedTopic === "Commands") { renderedJSX = getCommandsJSX(); }


        console.log("topicSelected renderedJSX = " + JSON.stringify(renderedJSX));
        //this.setState({ renderedJSX: jsxText });
        return renderedJSX;
    }

    function getIntroJSX() {
        return (
            <div>
                Liquibase is a database versioning software.
            </div>
        );
    }

    function getCommandsJSX() {
        let code1 = './liquibase --driver=org.postgresql.Driver --classpath=/usr/share/java/postgresql-jdbc4.jar --changeLogFile=/home/<user>/Desktop/workspace/changelogs/<changlog_file>.xml --url="jdbc:postgresql://localhost:5432/<yourDatabase>" --username=postgres --password= generateChangeLog';
        let code2 = './liquibase --driver=org.postgresql.Driver --classpath=/usr/share/java/postgresql-jdbc4.jar --changeLogFile=/home/<user>/Desktop/workspace/changelogs/<changlog_file>.xml --url="jdbc:postgresql://localhost:5432/<yourDatabase>" --username=postgres --password= update';
        return (
            <div>
                Here are some commands:<br />
                <ul>
                    <li>
                        <h3>Creates entire database change log:</h3>
                        <CopyBlock
                            text={code1}
                            language='shell'
                            theme={dracula}
                        />
                    </li>
                    <li>
                        <h3>Updates the database using one changelog file:</h3>
                        <CopyBlock
                            text={code1}
                            language='shell'
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

export default LiquibasePage;



