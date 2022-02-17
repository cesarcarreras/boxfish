import axios from "axios";

export const _api = axios.create({
    timeout: 10000
})

