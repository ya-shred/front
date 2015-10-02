import AppDispatcher from '../dispatchers/dispatcher';
import {INFO_FETCHED} from '../constants/user';
import SocketActions from './socket';

export default {
    infoFetched: function (data) {
        AppDispatcher.handleSocketAction({
            actionType: INFO_FETCHED,
            info: data
        });
    }
};