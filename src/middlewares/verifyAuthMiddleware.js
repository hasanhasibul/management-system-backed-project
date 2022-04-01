const  jwt = require('jsonwebtoken');

exports.verifyAuthToken = (req,res,next)=>{
    const token = req.headers['token-key']
    jwt.verify(token, 'secret123', function(error, decoded) {
        if (error) {
            res.status(401).json({status:"unauthorized",data:error})
        } else {
            next()
        }
      });
}