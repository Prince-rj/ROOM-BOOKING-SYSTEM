var session = require("express-session");
var passport = require("passport"); // used for authentication
var Googlestrategy = require("passport-google-oauth").OAuth2Strategy;



var GOOGLE_CLIENT_ID =
  "925076668765-p3nm3201bifl6cl75abioectnn2vn1jt.apps.googleusercontent.com";

var GOOGLE_CLIENT_SECRET_KEY = "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";

var REDIRECT_URI = "http://localhost:2000/google/callback";

passport.use(
    new Googlestrategy(
      {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET_KEY,
        callbackURL: REDIRECT_URI,
      },
      function (accessToken, RefreshToken, profile, done) {
        userProfile = profile;
        return done(null, profile);
      }
    )
  );
  