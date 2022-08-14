import React, { Component, useEffect, useState } from 'react';
import '../index.css';
//import Images from '../images/index';


function PostgresPage(props) {
    let [renderedJSX, setData] = useState([]);

    useEffect(() => {
        console.log("useEffect ")
        setData(topicSelected());
    }, [props]);


    function topicSelected() {
        console.log("topicSelected called, topic = " + props.selectedTopic);
        renderedJSX = '';
        //blogList = ["Intro", "Configure pg_hba.conf", "Installing on  Mac", "JSON Functions", "Setup Empty Password"]
        if (props.selectedTopic === "Intro") { renderedJSX = getIntroJSX(); }
        else if (props.selectedTopic === "Configure pg_hba.conf") { renderedJSX = getPgHbaJSX(); }
        else if (props.selectedTopic === "Installing on  Mac") { renderedJSX = getInstallMacJSX(); }
        else if (props.selectedTopic === "JSON Functions") { renderedJSX = getJsonFunctionsJSX(); }
        else if (props.selectedTopic === "Setup Empty Password") { renderedJSX = getEmptyPasswordSX(); }
        console.log("topicSelected renderedJSX = " + JSON.stringify(renderedJSX));
        //this.setState({ renderedJSX: jsxText });
        return renderedJSX;
    }

    function getIntroJSX() {
        return (
            <div>
                Postgres is an SQL programming database framework, similar to MySQL.
            </div>
        );
    }

    function getPgHbaJSX() {
        return (
            <div>
                Postgre's pg_hba.conf file is a configuration file.<br />
                Set pg_hba.conf METHOD to `trust` For all conections **Used to allow empty password for postgres
            </div>
        );
    }

    function getInstallMacJSX() {
        return (
            <div>
                Download Universal package from:<br />
                <a href="https://postgresapp.com/downloads.html">https://postgresapp.com/downloads.html</a><br />
                Move to Applications Folder, Open &amp; Run!<br /><br />
                Install PgAdmin4, a Postgres management tool to view and update your database(s):<br />
                <a href="https://www.pgadmin.org/download/">https://www.pgadmin.org/download/</a>
            </div>
        );
    }

    function getJsonFunctionsJSX() {
        return (
            <div>
                <strong>Useful JSON functions of Postgres are:</strong>
                <ul>                
                    <li><a href={'#json_agg'}>json_agg</a></li>
                    <li><a href={'#jsonb_build_object'}>jsonb_build_object</a></li>
                    <li><a href={'#row_to_json'}>row_to_json</a></li>
                    
                </ul>
                <p>
                    These JSON functions are useful for getting data from om your database(s) and returning the data to your app(s).
                </p>
                <div id="json_agg">
                    <h3>json_agg:</h3>
                    Creates json array.
                </div>
                <div id="jsonb_build_object">
                    <h3>jsonb_build_object:</h3>
                    Builds object using keys values.
                </div>
                <div id="row_to_json">
                    <h3>row_to_json:</h3>
                    creates json object from row of database table.
                </div>                
            </div>
        );
    }

    function getEmptyPasswordSX() {
        return (
            <div>
                To set up empty password, you need to create the postgres user with a null password:<br />
                <code>create user postgres with password null;</code>
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

export default PostgresPage;



