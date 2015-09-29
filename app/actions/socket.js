import AppDispatcher from '../dispatchers/dispatcher';
import Constants from '../constants/socket';
import cookie from 'react-cookie'
import UserStore from '../stores/user';
import UserActions from './user';
import MessageActions from './message';
import 'shri-socket';

var inited = false;

var init = function () {
    var session = cookie.load('connect.id');
    if (session) {
        socketClient.init(session)
            .then(function (data) {
                console.log('Успешно авторизовались');
                inited = true;
                UserActions.infoFetched(data);

                socketClient.listen(function(message) {
                    console.log('new message', message);
                   if (message.type === 'new_message') {
                       MessageActions.newMessage(message.data);
                   }
                });
            })
            .catch(function (error) {
               console.log(error); // TODO: добавить обработку ошибки авторизации
            });
    }
};

init();

export default {
    sendMessage: function (data) {
        if (inited) {
            data.type = 'send_message';
            socketClient.send(data);
        }
    }
};