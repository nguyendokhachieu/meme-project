import { baseURL } from "../constants";
const axios = require('axios').default;

export const api = {
    call() {
        return axios.create(
            {
                baseURL,
            }
        );
    }
};