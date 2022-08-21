import React, { Component, useEffect, useState } from 'react';
import '../index.css';
//import Images from '../images/index';
import { CopyBlock, dracula } from "react-code-blocks";
import { getTab } from '../helpers'


function AngularJsPage(props) {
    let [renderedJSX, setData] = useState([]);

    useEffect(() => {
        console.log("useEffect ")
        setData(topicSelected());
    }, [props]);


    function topicSelected() {
        console.log("topicSelected called, topic = " + props.selectedTopic);
        //Structure. Useful Directives

        if (props.selectedTopic === "HTML Not Updating") { renderedJSX = getHtmlNotUpdatingJSX(); }
        else if (props.selectedTopic === "Structure") { renderedJSX = getStructureJSX(); }
        else if (props.selectedTopic === "Useful Directives") { renderedJSX = getUsefulDirectivesJSX(); }
        console.log("topicSelected renderedJSX = " + JSON.stringify(renderedJSX));
        //this.setState({ renderedJSX: jsxText });
        return renderedJSX;
    }

    function getHtmlNotUpdatingJSX() {
        return (
            <div key="html_not_updating">
                <p>Use this code to update the $scope or $rootScope: <br />
                    <span style={{ marginLeft: '15px' }}>or</span><br /><br />
                    <CopyBlock
                        text={'$rootScope.$apply(function(){\n    //your code...\n  }\n});'}
                        language='javascript'
                        theme={dracula}
                    />                    
                </p>
            </div>
        );
    }

    function getStructureJSX() {
        return (
            <div key="structure">
                <strong>The main modules of AngularJS are:</strong>
                <ul>
                    <li><a href={'#controllers'}>Controllers</a></li>
                    <li><a href={'#directives'}>Directives</a></li>
                    <li><a href={'#factories'}>Factories</a></li>
                    <li><a href={'#filters'}>Filters</a></li>
                    <li><a href={'#providers'}>Providers</a></li>
                    <li><a href={'#services'}>Services</a></li>
                </ul>
                <p>
                    These modules can be placed into single files or folders depending on the size.<br />
                    Generally, you should break them up into folders, if the code reaches beyond 1000 lines.
                </p>
                <div id="controllers">
                    <h3>Controllers:</h3>
                    Used for the scope of a view you are using, so usually have one per view.
                </div>
                <div id="directives">
                    <h3>Directives:</h3>
                    Used to as attributes of HTML tags.
                </div>
                <div id="factories">
                    <h3>Factories:</h3>
                    Used to store data to pass between controllers(views)
                </div>
                <div id="filters">
                    <h3>Filters:</h3>
                    Used to 'prettify' HTML(UI) to present to users.
                </div>
                <div id="providers">
                    <h3>Providers:</h3>
                    Used for global storage of variables(like $rootScope).<br />
                    Can be used in HTML as '<code>MyProvider.myVariable</code>' after saving it to your $scope:<br />
                    <code>$scope.MyProvider = MyProvider;</code>
                </div>
                <div id="services">
                    <h3>Services:</h3>
                    Used for RestFul API calls or HTTP request, or to provide information.<br />
                    Usually returns a callback:
                    <code>MyService.doSomething(...params, callback)</code>
                    <div style={{ marginLeft: '50px' }}>or</div>
                    <code>MyService.doSomething(...params).then(function()&#123;&#125;)</code>
                </div>
            </div>
        );
    }

    function getUsefulDirectivesJSX() {
        return (
            <div key="useful_directives">
                <strong>Common directives:</strong>
                <ul>
                    <li><a href={'#ng-class'}>ng-class</a></li>
                    <li><a href={'#ng-click'}>ng-click</a></li>
                    <li><a href={'#ng-disabled'}>ng-disabled</a></li>
                    <li><a href={'#ng-if'}>ng-if(ng-show)</a></li>
                    <li><a href={'#ng-keypress'}>ng-keypress</a></li>
                    <li><a href={'#ng-repeat'}>ng-repeat</a></li>
                    <li><a href={'#ng-show'}>ng-show</a></li>
                    <li><a href={'#ng-style'}>ng-style</a></li>
                    <li><a href={'#ng-switch'}>ng-switch</a></li>
                    <li><a href={'#ng-switch'}>ng-switch-when</a></li>
                    <li><a href={'#ng-switch'}>ng-switch-default</a></li>
                </ul>
                <div id="ng-class">
                    <h3>ng-class:</h3>
                    Used to select class(es) based on scope variables:<br />
                    <CopyBlock
                        text={'<span ng-class="{myClass:isShow===true}">'}
                        language='html'
                        theme={dracula}
                    />
                </div>
                <div id="ng-click">
                    <h3>ng-click:</h3>
                    Is similar to javascript onclick, but calls your controller's $scope function:<br />
                    <CopyBlock
                        text={'<button ng-click="myScopeFunction()">'}
                        language='html'
                        theme={dracula}
                    />
                </div>
                <div id="ng-disabled">
                    <h3>ng-disabled:</h3>
                    Used to disable HTML elements like button, input, textarea, etc based on controller's $scope variable values:<br />
                    <CopyBlock
                        text={'<button ng-disabled="ready===false">'}
                        language='html'
                        theme={dracula}
                    />
                </div>
                <div id="ng-if">
                    <h3>ng-if/ng-show:</h3>
                    Used to show element based on conditions of controller's $scope variables:<br />
                    <CopyBlock
                        text={'<div ng-if(ng-show)="ready===true">'}
                        language='html'
                        theme={dracula}
                    />
                </div>
                <div id="ng-keypress">
                    <h3>ng-keypress:</h3>
                    Used on HTML input or textarea elements to call a $scope function when key(s) are pressed.<br />
                    Then, use event object to retrieve the key pressed:<br />
                    <CopyBlock
                        text={'<textarea ng-keypress="myKeyIsPressedFunction(event)">'}
                        language='html'
                        theme={dracula}
                    />
                </div>
                <div id="ng-repeat">
                    <h3>ng-repeat:</h3>
                    Used to show a number of elements based on the length of a javascript array:<br />
                    <CopyBlock
                        text={'<div ng-repeat="item in array">'}
                        language='html'
                        theme={dracula}
                    />
                </div>
                <div id="ng-style">
                    <h3>ng-style:</h3>
                    Similar to <code>ng-class</code>, but used for styles:<br />
                    <CopyBlock
                        text={'<div ng-style="{color:myColor}">'}
                        language='html'
                        theme={dracula}
                    />
                </div>
                <div id="ng-switch on">
                    <h3>ng-switch on:</h3>
                    Used as a condition using controller variables on outer HTML element to hide/show elements:<br />
                    <CopyBlock
                        text={'<div ng-switch on="scopeA===true && scopeB===true">'}
                        language='html'
                        theme={dracula}
                    />
                </div>
                <div id="ng-switch-when">
                    <h3>ng-switch-when:</h3>
                    Shows when 'condA' is true from the ng-switch on directive's condition:<br />
                    <CopyBlock
                        text={'<div ng-switch-when="condA">'}
                        language='html'
                        theme={dracula}
                    />
                </div>
                <div id="ng-switch-default">
                    <h3>ng-switch-default:</h3>
                    The default thing to show when non of the ng-switch-when conditions are true:<br />
                    <CopyBlock
                        text={'<div ng-switch-default>'}
                        language='html'
                        theme={dracula}
                    />
                </div>
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

const styles = {
}

export default AngularJsPage;



