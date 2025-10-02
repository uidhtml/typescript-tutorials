import axios from "axios";

axios.get("https://jsonplaceholder.typicode.com/posts/1").then(function (resp) {
  console.log(resp.data);
});
