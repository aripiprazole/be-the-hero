import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    authorization: localStorage.getItem("ongId") || "",
  },
});

export default Api;
