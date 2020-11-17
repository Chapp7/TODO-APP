const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {check,validationResult} = require('express-validator');
const config=require('config');
const User = require('../models/USER');

// @ route auth
// @ post -- user authentication
router.post('/',[
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Enter password'
    ).not().isEmpty()
  ], async (req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {email,password} = req.body
    try {
        let user = await User.findOne({email});

    if(!user) return res.status(400).json({errors:[{msg:'User not found'}]});
    // decode the password and check if password is correct
      const isMatch= await bcrypt.compare(password, user.password);
      if(!isMatch) return res.status(400).json({errors:[{msg:'Password is incorrect'}]});
    // assign a token with the user id and send the token
    const payload={
        user:{
            id: user.id
        }
    };

   var token= jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: '5 days' },
      );
    return res.status(200).json({token});
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error!');
    }
    
  });

  module.exports = router;