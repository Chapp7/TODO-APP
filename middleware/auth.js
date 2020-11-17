const jwt = require('jsonwebtoken');
const config = require('config');

const Auth = (req,res,next)=>{
    const token = req.header('auth-token');

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Verify token
  try {
    jwt.verify(token, config.get('jwtSecret'), (error, decoded) => {
      if (error) {
        return res.status(401).json({ msg: 'Token is not valid' });
      } else {
        req.user = decoded.user;  // payloading the user id with in the req body
        next();  // for opearting the next middlewares in the go
      }
    });
  } catch (err) {
    console.error('something wrong with auth middleware');
    res.status(500).json({ msg: 'Server Error' });
  }
}

module.exports=Auth;