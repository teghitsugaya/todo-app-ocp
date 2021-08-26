import axios from 'axios';

export default axios.create({
    baseURL: process.env.VUE_APP_API_URL || "http://api-todo.apps.cluster-jkt03.ocp-dcb-s.datacomm.co.id",
});
