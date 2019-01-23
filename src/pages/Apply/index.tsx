
import React from 'react';
// import {Toast}  from '../../componets/index';
import './index.scss';

export interface IProps {
    name: string;
    show: boolean;
}

export interface IState {
    name: string;
    show: boolean;
}

export default class Apply extends React.Component<IProps, IState> {

    constructor(props: IProps, context: IState) {
        super(props, context);
    }

    render() {
        return (
            <div id="apply">
                <div className="apply-bg"></div>
                <div className="apply-content">
                </div>
            </div>
        )
    }
}