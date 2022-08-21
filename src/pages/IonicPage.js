import React, { Component, useEffect, useState } from 'react';
import '../index.css';
import { CopyBlock, dracula } from "react-code-blocks";
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
        else if (props.selectedTopic === "Useful Commands") { renderedJSX = getUsefulCommandsJSX(); }
        //this.setState({ renderedJSX: jsxText });
        return renderedJSX;
    }

    function getBuildingJSX() {
        return (
            <div key="ionic_building">
                <strong>For building an Ionic app, Here are some steps you can do:</strong><br />
                <ol>
                    <li>Download NodeJS:<br />
                        On Windows: <a href="https://nodejs.org/en/download/">https://nodejs.org/en/download/</a><br />
                        Then, download Node LTS version and use installer to install.
                    </li>
                    <li>Install Ionic and Cordova:<br /><br />
                        <CopyBlock
                            text={'npm install -g ionic cordova'}
                            language='shell'
                            theme={dracula}
                        />
                        <br />
                    </li>
                    <li>
                        To create a new app using ionic version 1:<br /><br />
                        <CopyBlock
                            text={'ionic start myapp blank --type=ionic1'}
                            language='shell'
                            theme={dracula}
                        />
                        <br />
                    </li>
                    <li>
                        For a project you already have, all you should have to do is<br />
                        Start a terminal and go to the directory your project is and run:<br /><br />
                        <CopyBlock
                            text={'npm install'}
                            language='shell'
                            theme={dracula}
                        />
                        <br />
                        If you have issues your Python verion may be incorrect.<br />
                        Try installing Python 2.7.18:
                        <ul>
                            <li>Install homebrew</li>
                            <li>Run: brew install pyenv (To manage python versions)</li>
                            <li>Run pyenv install 2.7.18</li>
                            <li>Run pyenv global 2.7.18</li>
                            <li>Add eval "$(pyenv init --path)" to ~/.bash_profile</li>
                            <li>Check python version: Run python --version(Restart terminal)</li>
                        </ul>
                        For other issues, you can try:<br />
                        <CopyBlock
                            text={'npm install --unsafe-perm=true'}
                            language='shell'
                            theme={dracula}
                        />
                        <br />
                    </li>
                    <li>
                        Add platform to build to Android or iOS devices:<br /><br />
                        <CopyBlock
                            text={'cordova add platform android'}
                            language='shell'
                            theme={dracula}
                        />
                        <CopyBlock
                            text={'cordova add platform ios'}
                            language='shell'
                            theme={dracula}
                        />
                        <br />
                    </li>
                    <li>
                        To build and package the app for upload to Android Play Store:<br />
                        <ol>
                            <li>cordova build android --release -- --packageType=apk</li>
                            <li>zipalign -v 4 \platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk app-release.apk</li>
                            <li>apksigner sign --ks ionic.keystore --ks-pass file:password_app.txt --v1-signing-enabled true --v2-signing-enabled true app-release.apk</li>
                            <li>**For last command above, you will need to create a signed keystore, and a file that only has the password used for it.</li>
                            <li>At this point the app should be able to drag and drop into play store.</li>
                        </ol>
                    </li>
                    <li>
                        To build and package the app for upload to Apple Store:<br />
                        <ol>
                            <li>cordova build --device --release --buildFlag='-UseModernBuildSystem=0'</li>
                        </ol>
                    </li>
                    <li>
                        To run the app on a device:<br /><br />
                        <CopyBlock
                            text={'cordova run android'}
                            language='shell'
                            theme={dracula}
                        />
                        <CopyBlock
                            text={'cordova run ios'}
                            language='shell'
                            theme={dracula}
                        />
                        <br />
                        On Android, to install apk onto your device, use adb(*need to add it to your path):<br /><br />
                        <CopyBlock
                            text={'adb install -r platforms/android/build/outputs/apk/android-debug.apk'}
                            language='shell'
                            theme={dracula}
                        />
                        <br />
                        The 'android-debug-apk' should be available after successful call to:<br /><br />
                        <CopyBlock
                            text={'cordova build android'}
                            language='shell'
                            theme={dracula}
                        />
                    </li>
                </ol>
            </div>
        );
    }

    function getCorsIssuesJSX() {
        var code1 = `{"proxies": [{"path": "/LOCALHOST", "proxyUrl": "https://localhost:3449"}]}`;
        return (
            <div key="cors issues">
                <p>
                    Using an ionic proxy contingency http call does indeed eliminate the need to use Chrome CORS add on.<br />
                    You can add a proxy into your project root folder's ionic.config.json file in the array of the proxies property:<br /><br />
                    <CopyBlock
                        text={code1}
                        language='javascript'
                        theme={dracula}
                    />
                </p>
            </div>
        );
    }

    function getUsefulHtmlJSX() {
        const ionScrollTxt = "<ion-scroll></ion-scroll>";
        const checkboxTxt = "<input type=\"checkbox\" />";
        const ionCheckboxTxt = "<ion-checkbox></ion-checkbox>";
        const radioboxTxt = "<input type=\"radio\" />";
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
                    This is like the normal HTML tage:<br /><br />
                    <CopyBlock
                        text={checkboxTxt}
                        language='html'
                        theme={dracula}
                    />
                    <br />
                    However, the UI on it is much improved.
                </div>
                <div id="ion-item">
                    <h3>ion-item:</h3>
                    This is used to create a '<code>div</code>' element with improved UI, <br />
                    in which you can include one ionic element like a checkbox:<br /><br />
                    <CopyBlock
                        text={ionCheckboxTxt}
                        language='html'
                        theme={dracula}
                    />
                </div>
                <div id="ion-radio">
                    <h3>ion-radio:</h3>
                    This is like the normal HTML tage:<br /><br />
                    <CopyBlock
                        text={radioboxTxt}
                        language='html'
                        theme={dracula}
                    />
                    <br />
                    However, the UI on it is much improved.
                </div>
                <div id="ion-scroll">
                    <h3>ion-scroll:</h3>
                    Used to create a scroll view element, which can scroll horizontally, vertically.<br /><br />
                    <CopyBlock
                        text={ionScrollTxt}
                        language='html'
                        theme={dracula}
                    />
                    <br />
                    These elements can also be zoomed in or zoomed out, which is useful to embed images/photos/pdfs etc.
                </div>
            </div>
        );
    }

    function getUsefulCommandsJSX() {
        let buildAndroidLink = 'cordova build android@<version>';
        let buildiOSLink = 'cordova build ios@<version>';
        return (
            <div key="useful_commands">
                <strong>Useful ionic cordova commands are:</strong><br />
                <ul>
                    <li><a href={'#cordova-plugin-save'}>Save plugins</a></li>
                    <li><a href={'#cordova-plugin-list'}>List plugins</a></li>
                    <li><a href={'#cordova-platform-save'}>Save platforms</a></li>
                    <li><a href={'#cordova-build-android'}>Create Android app</a></li>
                    <li><a href={'#cordova-build-ios'}>Create iOS app</a></li>
                    <li><a href={'#cordova-run-ios'}>Run iOS app on device</a></li>
                    <li><a href={'#cordova-plugin-add'}>Add plugin</a></li>
                    <li><a href={'#cordova-plugin-remove'}>Remove plugin</a></li>
                    <li><a href={'#cordova-prepare'}>Update changes to a build</a></li>

                </ul>
                <p>
                    These commands help building Ionic apps.
                </p>
                <div id="cordova-plugin-save">
                    <h3>Save plugins:</h3>
                    This will save all your installed plugins into the package.json file, so that all someone needs to do to install the app on different PC is clone the repository from github and enter <code>npm install</code>.
                    <CopyBlock
                        text={'cordova plugin save'}
                        language='shell'
                        theme={dracula}
                    />
                </div>
                <div id="cordova-plugin-list">
                    <h3>List plugins:</h3>
                    This lists all the plugins your app has.<br />
                    <CopyBlock
                        text={'cordova plugin list'}
                        language='shell'
                        theme={dracula}
                    />
                    <br />
                    You can also save them to a file:<br />
                    <CopyBlock
                        text={'cordova plugin list > myfile.txt'}
                        language='shell'
                        theme={dracula}
                    />
                </div>
                <div id="cordova-platform-save">
                    <h3>Save all added platforms:</h3>
                    <CopyBlock
                        text={'cordova platform save'}
                        language='shell'
                        theme={dracula}
                    />
                </div>
                <div id="cordova-build-android">
                    <h3>Create Android app:</h3>
                    Builds the app using Android and cordova-android version, {'<version>'}.<br />
                    <CopyBlock
                        text={'cordova build android@<version>'}
                        language='shell'
                        theme={dracula}
                    />
                </div>
                <div id="cordova-build-ios">
                    <h3>Create iOS app:</h3>
                    Builds the app using iOS and cordova-ios version, {'<version>'}.<br />
                    <CopyBlock
                        text={'cordova build ios@<version>'}
                        language='shell'
                        theme={dracula}
                    />
                    <br />
                    Build iOS app in production mode:<br />
                    <CopyBlock
                        text={'ionic cordova build ios --prod'}
                        language='shell'
                        theme={dracula}
                    />
                </div>
                <div id="cordova-run-ios">
                    <h3>Run iOS app on device:</h3>
                    <CopyBlock
                        text={'ionic cordova run ios --device'}
                        language='shell'
                        theme={dracula}
                    />
                </div>
                <div id="cordova-plugin-add">
                    <h3>Add plugin to app {'<version>'} is the version of the plugin:</h3>
                    <CopyBlock
                        text={'cordova plugin add <plugin>@<version> --save'}
                        language='shell'
                        theme={dracula}
                    />
                </div>
                <div id="cordova-plugin-remove">
                    <h3>Remove plugin from app:</h3>
                    <CopyBlock
                        text={'cordova plugin remove <plugin> --save'}
                        language='shell'
                        theme={dracula}
                    />
                </div>
                <div id="cordova-prepare">
                    <h3>Update changes to a build:</h3>
                    <CopyBlock
                        text={'cordova prepare android'}
                        language='shell'
                        theme={dracula}
                    />
                    <CopyBlock
                        text={'cordova prepare ios'}
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

export default IonicPage;

const styles = {
    callback_header: {
        height: '50px'
    }
}



