let request = require("request");

let apiRequest = (endpoint, httpmethod, body, success, failure) =>
request({
  url: `https://api.rebrandly.com/v1/${endpoint}`,
  method: httpmethod,
  body: body ? JSON.stringify(body) : null,
  headers: {
    'Content-Type': 'application/json',
    'apikey': '83c28e2953264c408005140b76ce2360'
  }
}, (err, response, body) => {
    if (err) failure(JSON.parse(err));
    else success(JSON.parse(body));
  })

let postRequest = (endpoint, body, success, failure) => {
  return apiRequest(endpoint, "POST", body, success, failure)
}

let createNewLink = (link, success, failure) => {
  return postRequest("links", link, success, failure);
}

exports.createNewLink = createNewLink;

