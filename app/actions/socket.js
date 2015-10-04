import SocketAPI from '../utils/socket'

export default {
    sendMessage(data) {
        SocketAPI.sendMessage(data);
    }
};