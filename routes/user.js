const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {check,validationResult} = require('express-validator');
const User = require('../models/USER');

// @ route post--create a user
router.post('/',[
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
  ], async (req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {name,email,password} = req.body;
    try {
        let user = await User.findOne({email});
        if(user){  //if user already exists
            return res.status(400).send('User already exists!');
        }
        user = new User({name,email,password});

        const salt = await bcrypt.genSalt(10); // hashing password 
        user.password = await bcrypt.hash(password, salt);
        await user.save();
        return res.status(200).json({user});

    } catch (err) {
        res.status(500).send('Server Error');
        console.error(err.message);
    }
  });

module.exports = router;
