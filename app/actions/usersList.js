import AppDispatcher from '../dispatchers/dispatcher';
import Constants from '../constants/usersList';
import SocketActions from './socket';

export default {
    newUsers: function (data) {
        AppDispatcher.handleSocketAction({
            actionType: Constants.NEW_USERS,
            data: data
        });
    }
};