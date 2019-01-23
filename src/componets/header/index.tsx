import React from 'react';

import './index.scss';

export interface IProps {
    title?: String;         //标题 
    name?: String;          //名称
    isOpen?: boolean;       //是否 点击打开APP  默认为true
    onOpen?(): void;        //点击注册
}

export default function Header(props: IProps) {
    const { isOpen, title, name } = props;
    return (
        <header id="header">
            <div className="header-bg"></div>
            <div className="header-context">
                <div className="logo"></div>
                <div className="logo-text">
                    <div className="app-name">{name ? name : '十方舟'}</div>
                    <div className="app-summary"> {title ? title : ' 注册即得 20元 知识红包'}</div>
                </div>
                {
                    <div className="register" onClick={props.onOpen}> {isOpen ? '打开APP' : '立即注册'} </div>
                }
            </div>
        </header>
    )
}
