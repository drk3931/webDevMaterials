var passport = require('passport');
var localStrat = require('passport-local');


function localAuthFunction(username, password, cb) {
  //error,user object, optional message
  if(username==="test" && password === "password")
  {
    return cb(null, {}, { message: "User authenticated!" });
  }
  else
    return cb(null,false,{message:"Bad username/password"});
}


module.exports = (function () {

  passport.use(new localStrat.Strategy(
    {usernameField:"username", passwordField:"password"},
    localAuthFunction
  ));

}());