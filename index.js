const request = require("request");
const path = require("path");
const fs = require("fs");

const id = (~~(Math.random() * 100000)).toString();
const url = `https://robohash.org/${id}`;
const dirPath = path.resolve(__dirname, "pictures");

const dateArr = new Date().toLocaleDateString().split("/");
dateArr.unshift(dateArr.pop());
const date = dateArr.join("-");
request(url).pipe(fs.createWriteStream(`${dirPath}/${date}.png`)); 