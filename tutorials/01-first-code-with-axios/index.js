"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
axios_1.default.get("https://jsonplaceholder.typicode.com/posts/1").then(function (resp) {
    console.log(resp.data);
});
