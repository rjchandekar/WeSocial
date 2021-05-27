const User = require('../models/user')

module.exports.profile = function(req,res){
    return res.render('user_profile',{
        title: 'User Profile'
    })
}

module.exports.signUp = function(req,res){
    return res.render('user_sign_up',{
        title: 'WeSocial | Sign Up'
    })
} 

module.exports.signIn = function(req,res){
    return res.render('user_sign_in',{
        title: 'WeSocial | Sign In'
    })
} 

//get the sign up data
module.exports.create = function(req, res){
    console.log(req.body);
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err, user){
        if(err){
            console.log('Error in finding the User in signing up');
            return;
        }
        if(!user){
            User.create(req.body, function(err,user){
                if(err){
                    console.log('Error in signing up the User');
                    return;
                }
            });
            return res.redirect('/users/sign-in');
        }else{
            return res.redirect('back');
        }
    })
}

//sign in and create a session for user
module.exports.createSession = function(req,res){
    //Todo later
} 