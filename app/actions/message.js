import AppDispatcher from '../dispatchers/dispatcher';
import { NEW_MESSAGE, SEND_MESSAGE, SEARCH_MESSAGE } from '../constants/message';
import SocketActions from './socket';

export default {
    sendMessage(data) {
        SocketActions.sendMessage(data);
        console.log(data);
        AppDispatcher.handleViewAction({
            actionType: SEND_MESSAGE,
            message: data
        });
    },

    newMessage(data) {
        AppDispatcher.handleSocketAction({
            actionType: NEW_MESSAGE,
            message: data
        });
    },

    searchMessage(text) {
        AppDispatcher.handleViewAction({
            actionType: SEARCH_MESSAGE,
            text: text
        });
    }
};