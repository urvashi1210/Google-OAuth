var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser((user, done) => {
    done(null, user.id);
})

passport.deserializeUser((user, done) => {
    done(null, user);
})

passport.use(new GoogleStrategy({
    clientID: '1080128904407-e28i2gbp7taumvpkqfrh34siu7a4kcpj.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: "http://localhost:3000/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    // Register user here.
    console.log(profile);
    cb(null, profile);
    
  }
));