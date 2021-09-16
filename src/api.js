import axios from 'axios';

const $axios = axios.create({
    baseURL: 'http://localhost:9090',
    headers: {
        'Authorization': '',
        'Content-Type': 'application/json'
    },
});


$axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
$axios.defaults.timeout = 5000;

export default $axios;