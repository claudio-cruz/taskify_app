import axios from "axios";

axios.defaults.baseURL = 'https://taskify-2023.herokuapp.com'
// axios.defaults.baseURL = 'https://taskify-app.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true