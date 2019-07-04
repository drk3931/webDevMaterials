var passport = require('passport');
var localStrat = require('passport-local');


//err,usr,info in passport.authenticate refrences username, password,callback

function localAuthFunction(username, password, callBack) {
  //error,user object, optional message
  if(username==="test" && password === "password")
  {
    return callBack(null, {}, { message: "User authenticated!" });
  }
  else
    return callBack(null,false,{message:"Bad username/password"});
}


module.exports = (function () {

  //note that passport knows that username and password are inside the req object
  passport.use(new localStrat.Strategy(
    {usernameField:"username", passwordField:"password"},
    localAuthFunction
  ));

}());