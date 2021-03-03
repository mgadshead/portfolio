import Axios from 'axios';

const wordpress = Axios.create({
    baseURL: 'http://localhost:8888/portfolio-api/'
});

export default wordpress;
