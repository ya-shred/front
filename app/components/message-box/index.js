import React from 'react';
import './index.styl';

export default class MessageBox extends React.Component {


    render() {
        return (
            <div className="messagebox">
                <form className="messagebox__form" >
                    <textarea className="messagebox__input" type="text" ref="text"></textarea>
                    <button type="submit" className="messagebox__button" >Send</button>
                </form>
            </div>
        );
    }
}