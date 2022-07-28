import React, { Component } from 'react';
import '../index.css';

//import Images from '../images/index';

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRendered: false
        };
    }

    componentDidMount() {
        //BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    componentWillUnmount() {
        //BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }


    render() {
        //this.setState({cheatListView:this.state.cheatListView});
        return (
            <div className="footerDiv">
                <p className='footerParagraph'>Copyright © 2021 by Keith Harryman. Please email me at
                    <span className="footerEmail">  keithharryman75@gmail.com  </span>
                    for your feedback. Thank You!
                </p>
            </div>
        );
    }
}

