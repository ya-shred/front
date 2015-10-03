var backendURL = 'http://localhost:8011';
//var backendURL = 'https://shri-backend.herokuapp.com';

export default {
    logout: function () {
        window.location.replace(backendURL + '/logout');
    }

};