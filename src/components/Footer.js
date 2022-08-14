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

    render() {
        //this.setState({cheatListView:this.state.cheatListView});
        return (
            <div className="footerDiv">
                <p className='footerParagraph'>Copyright © 2022 by Keith Harryman. Please email me at
                    <span className="footerEmail">  keithharryman75@gmail.com  </span>
                    for your feedback. Thank You!
                </p>
            </div>
        );
    }
}

