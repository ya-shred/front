import React from 'react';
import AsideLeft from '../asideLeft';
import AsideRight from '../asideRight';
import ChatWindowMessage from '../chatWindowMessage';
import './index.styl';

export default class ContainerChat extends React.Component {

    render() {
        return <section className="chat-container">
            <AsideLeft/>
            <ChatWindowMessage/>
            <AsideRight/>
        </section>

    }
};
