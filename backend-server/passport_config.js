var bcrypt = require("bcrypt");
// const { initialize } = require("passport");

const LocalStrategy = require('passport-local').Strategy
// import LocalStrategy from "passport-local" TODO: remove this line


function initialize(passport, get_user_by_username){
    const authenticate_user = async (username, password, done) =>{
        let user
        try{
            user = get_user_by_username(username)
        } catch (e) {
            return done(null, false, {message: "incorrect username or password"}); //incorrect username
        }

        try{
            if(await bcrypt.compare(password, user.password)){
                return done(null, user)
            } else {
                return done(null, false, {message: "incorrect username or password"}) // incorrect password
            }
        } catch (e){
            return done(e)
        }
    }  
    passport.use(new LocalStrategy(authenticate_user))
    passport.serializeUser((user, done) => {
        done(null, user.username)
    })
    passport.deserializeUser((id, done) => {
        done(null, get_user_by_username(id))
    })
}



exports.initialize = initialize