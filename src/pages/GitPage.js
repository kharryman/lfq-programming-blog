import React, { Component, useEffect, useState } from 'react';
import '../index.css';
//import Images from '../images/index';
import { CopyBlock, dracula } from "react-code-blocks";


function GitPage(props) {
    let [renderedJSX, setData] = useState([]);

    useEffect(() => {
        console.log("useEffect ")
        setData(topicSelected());
    }, [props]);


    function topicSelected() {
        console.log("topicSelected called, topic = " + props.selectedTopic);
        renderedJSX = '';
        if (props.selectedTopic === "Intro") { renderedJSX = getIntroJSX(); }
        else if (props.selectedTopic === "Git Ignore File") { renderedJSX = getGitIgnoreJSX(); }
        else if (props.selectedTopic === "Revert to Old Commit") { renderedJSX = getRevertOldJSX(); }
        else if (props.selectedTopic === "Hard Merge to Master") { renderedJSX = getHardMergeMasterJSX(); }
        else if (props.selectedTopic === "Use Old Commit as New Branch") { renderedJSX = getOldCOmmitNewBranchJSX(); }


        console.log("topicSelected renderedJSX = " + JSON.stringify(renderedJSX));
        //this.setState({ renderedJSX: jsxText });
        return renderedJSX;
    }

    function getIntroJSX() {
        return (
            <div>
                Git is a version controll system to manage coding projects or repositories.
            </div>
        );
    }

    function getGitIgnoreJSX() {
        let code1 = 'git rm -rf --cached .\ngit add .\ngit commit -m ".gitignore is now working"';
        return (
            <div>
                The Git Ignore File, or .gitignore file fo a project specifies which files or folders to ignore when making commits to github.<br />
                Here are some things to note:<br />
                <ul>
                    <li>
                        The file can't have spaces, indentations or tabs.
                    </li>
                    <li>
                        To reset a .gitignore file, run these commands:<br />
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

    function getRevertOldJSX() {
        let code1 = 'git reset --hard <commit-hash>\ngit push -f origin master';
        return (
            <div>
                To revert to an old commit, or need to go back to a commit that works:<br />
                <CopyBlock
                    text={code1}
                    language='shell'
                    theme={dracula}
                />
            </div>
        );
    }

    function getHardMergeMasterJSX() {
        let code1 = 'git checkout <branch>\ngit merge -s ours master(s means `strategy`)\ngit checkout master\ngit merge <branch>';
        return (
            <div>
                Steps to hard merge a branch into master:<br />
                <CopyBlock
                    text={code1}
                    language='shell'
                    theme={dracula}
                />
            </div>
        );
    }

    function getOldCOmmitNewBranchJSX() {
        let code1 = 'git -b <NEW-BRANCH-NAME> <COMMIT-HASH>';
        return (
            <div>
                Steps to hard merge a branch into master:<br />
                **Important to create branch immediately after checking out old commit BEFORE doing any work/changes on it:.<br />
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

export default GitPage;



