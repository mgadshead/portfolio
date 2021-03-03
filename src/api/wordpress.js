import Axios from 'axios';

const wordpress = Axios.create({
    baseURL: 'http://api.matthewadshead.com'
});

export default wordpress;
