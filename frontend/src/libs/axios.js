import axios from 'axios';

export default axios.create({
    baseURL: process.env.VUE_APP_API_URL || "http://103.179.31.31",
});
