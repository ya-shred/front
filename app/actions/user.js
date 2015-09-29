import AppDispatcher from '../dispatchers/dispatcher';
import Constants from '../constants/user';
import SocketActions from './socket';

export default {
    infoFetched: function (data) {
        AppDispatcher.handleSocketAction({
            actionType: Constants.INFO_FETCHED,
            info: data
        });
    }
};