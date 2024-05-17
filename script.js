// const axios = require("axios");
// import axios from "axios";
// const axios = require("axios/dist/browser/axios.cjs");

axios
  .get("https://api.github.com/users/loyeh ")
  .then((resp) => console.log(resp.data))
  .catch((err) => console.log(err));

axios
  .get("https://api.github.com/users/loyeh/repos ")
  .then((resp) => console.log(resp.data))
  .catch((err) => console.log(err));
