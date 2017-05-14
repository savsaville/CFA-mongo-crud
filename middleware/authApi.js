// var express = require('express');
//
// const authApi = (req, res, next) => {
//
//   console.log("authenticating api request")
//
//   const key = req.body.key ||
//     req.query.token ||
//     req.headers['x-access-token'];
//
//     if (key ==='showmethemoney') {
//       next();
//     } else {
//       res.json(401, {
//         success: false,
//         message: 'Get the fuck out',
//       });
//     }
// };
//
// module.exports = authApi;


var express = require('express');
var jwt = require('jsonwebtoken');

const authApi = (req, res, next) => {

  console.log("authenticating api request")


  const key = req.body.key || req.query.key || req.headers['x-access-token'];

  var decoded = jwt.verify(key, 'secretcode');
  console.log(decoded.email)
  let found = false;
  if (decoded.email === 'richardsaville@gmail.com') {
    found = true;
  }

  if (found) {
    next();
  } else {
    res.json(401, {
      success: false,
      message: 'Fuck off',
    });
  };
};

module.exports = authApi;
