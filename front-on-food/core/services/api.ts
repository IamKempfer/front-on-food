import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.imersaofx.danieldcs.com/",
  headers: {
    Authorization: "Bearer [dmljdG9yLmtlbXBmZXI3N0BnbWFpbC5jb20=]",
  },
});
