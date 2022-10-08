var bcrypt = require("bcrypt")

import LocalStrategy from "passport-local"


function intialize(passport, get_user_by_username){
 const authenticateuser = async (username, password, done) =>{
    const user = get_user_by_username(username);
    if (!user){
        return done(null, false, {message: "incorrect username or password"});
    }

    try{
        if(await bcrypt.compare(password, user.password)){
            return done(null, user)
        } else {
            return done(null, false, {message: "incorrect username or password"})
        }
    } catch (e){
        return done(e)
    }
 }   
}

// TO DO
passport.use(new LocalStrategy(authenticateUser))
passport.serializeUser((user, done) => {
    done(null, user.username)
})
passport.deserializeUser((id, done) => {
    done(null, get_user_by_username(id))
})

export { initialize }