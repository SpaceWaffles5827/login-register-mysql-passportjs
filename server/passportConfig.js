const db = require('./db');
const bcrypt = require('bcrypt');
const localStrategy = require('passport-local').Strategy;

module.exports = function(passport) {
    passport.use(
        new localStrategy((username, password, done) => {
            db.getConnection((err, connection) => {
                if (err) {
                    console.log("Error connecting to Db");
                    return;
                }
                console.log("Connection established");
                const query = "SELECT * FROM trends.account where username = " + '"'+username+'"';
                connection.query(query, (err, rows) => {
                    if(err)throw err;  
                    if(rows.length === 0) {
                        return done(null, false);
                    }
                    bcrypt.compare(password, rows[0].password, (err, result) => {
                        if (err) throw err;
                        if (result === true) {
                            return done(null, rows[0]);
                        } 
                        else {
                            return done(null, false);
                        }
                    })
                })
            })
        }))


    passport.serializeUser((user, done) => {
        done(null, user.account_id);
    }
    )


    passport.deserializeUser((id, done) => {
        db.getConnection((err, connection) => {
            if (err) {
                console.log("Error connecting to Db");
                return;
            }
            console.log("Connection established");
            const query = "SELECT * FROM trends.account where account_id = ?";
            connection.query(query, [id] ,(err, rows) => {
                if(err)throw err;  
                const userInfo = {
                    id: rows[0].accound_id,
                    username: rows[0].username
                }
                done(null, userInfo);
            })
        })
    }) 
}