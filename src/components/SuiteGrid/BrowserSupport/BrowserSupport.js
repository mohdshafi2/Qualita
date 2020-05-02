import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './BrowserSupport.scss'
import IcomoonReact from "icomoon-react";
import iconSet from "../../../fonts/selection";

class BrowserSupport extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className="_bowser">
                <div className="_bowser-icons">
                    <IcomoonReact iconSet={iconSet} color="" size={20} icon="e-browser1"/>
                </div>
                <div className="_bowser-panel toast">
                    <div className="toast-header">Environment</div>
                    <div className="toast-body">
                        <strong>
                            <IcomoonReact iconSet={iconSet} color="" size={16} icon="e-monitor"/>
                            <span className="div-line">|</span>
                            <IcomoonReact iconSet={iconSet} color="" size={16} icon="e-windows"/>
                            <span className="div-line">|</span>
                            <IcomoonReact iconSet={iconSet} color="" size={16} icon="e-crome"/>
                            <IcomoonReact iconSet={iconSet} color="" size={18} icon="e-firefox"/>
                        </strong>
                        <strong>
                            <IcomoonReact iconSet={iconSet} color="#000" size={16} icon="e-phone"/>
                            <span className="div-line">|</span>
                            <IcomoonReact iconSet={iconSet} color="#c3c3c3" size={16} icon="e-apple"/>
                            <span className="div-line">|</span>
                            <IcomoonReact iconSet={iconSet} color="" size={16} icon="e-safari"/>
                            <IcomoonReact iconSet={iconSet} color="" size={18} icon="e-firefox"/>
                        </strong>
                        <strong>
                            <IcomoonReact iconSet={iconSet} color="#fff" size={16} icon="e-apple"/>
                            <span className="div-line">|</span>
                            <IcomoonReact iconSet={iconSet} color="#c3c3c3" size={16} icon="e-android-os"/>
                            <span className="div-line">|</span>
                            <IcomoonReact iconSet={iconSet} color="" size={16} icon="e-crome"/>
                            <IcomoonReact iconSet={iconSet} color="" size={18} icon="e-firefox"/>
                        </strong>
                    </div>
                </div>
            </div>
        );
    }
}

BrowserSupport.propTypes = {}

BrowserSupport.defaultProps = {}

export default BrowserSupport
