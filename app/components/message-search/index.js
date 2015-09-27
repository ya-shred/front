import React from 'react';
import Actions from '../../actions/actions';
import './index.styl';
export default class MessageSearch extends React.Component {
    render() {
        return (
            <div className="message-search">
                <input type="search" className="message-search__input" placeholder="Поиск:" onChange={this.search} />
            </div>
        );


    }

    search = (e) => {
        var text = e.target.value;
        Actions.searchMessage(text);
    };
}