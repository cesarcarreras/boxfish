import { _api } from "./api";

export const getData = () =>
  _api
    .get(`https://api.ipregistry.co/?key=${process.env.REACT_APP_API_KEY}`)
    .then((data) => console.log(data)).catch(e=>console.log("Error:", e))

