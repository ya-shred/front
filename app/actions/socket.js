import AppDispatcher from '../dispatchers/dispatcher';
import Constants from '../constants/socket';
import cookie from 'react-cookie'
import UserStore from '../stores/user';
import UserActions from './user';
import UsersListActions from './usersList';
import MessageActions from './message';
import 'shri-socket';

var MESSAGES_HANDLERS = {
    new_message: 'onNewMessage',
    users_info: 'onNewUsers'
};

var model = {
    inited: false,
    init: function () {
        var session = cookie.load('connect.id');
        if (session) {
            socketClient.init(session)
                .then(function (data) {
                    console.log('Успешно авторизовались');
                    model.inited = true;
                    UserActions.infoFetched(data);

                    socketClient.listen(function(message) {
                        console.log('new message', message);
                        var handler = MESSAGES_HANDLERS[message.type];
                        if (!handler) {
                            console.log('Неизвестное сообщение');
                        } else {
                            model.handlers[handler](message);
                        }
                    });
                })
                .catch(function (error) {
                    console.log(error); // TODO: добавить обработку ошибки авторизации
                });
        }
    },
    handlers: {
        onNewMessage: function (message) {
            MessageActions.newMessage(message.data);
        },
        onNewUsers: function(message) {
            UsersListActions.newUsers(message.data);
        }
    }
};

model.init();

export default {
    sendMessage: function (data) {
        if (model.inited) {
            data.type = 'send_message';
            socketClient.send(data);
        }
    }
};