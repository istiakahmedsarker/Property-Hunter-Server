const jwt = require('jsonwebtoken');
const User = require('../schema/userModel');

exports.accessToken = async (req, res) => {
  const { email } = req.body;
  console.log(email);

  const user = await User.findOne({ email });

  const token = jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN, {
    expiresIn: '1h',
  });

  //   console.log(token);
  res
    .cookie('jwt', token, {
      expires: new Date(Date.now() + 3600000),
      sameSite: 'none',
      secure: true,
      httpOnly: true,
    })
    .status(200)
    .json({
      status: 'success',
      token,
      user,
    });
  //   res
  //     .cookie('token', token, {
  //       httpOnly: true,
  //       secure: true,
  //       sameSite: 'none',
  //     })
  //     .send({ success: true });
};

exports.verifyUser = async (req, res, next) => {
  // getting token and check of it's there

  const token = req.cookies.jwt;
  // let token;
  // if (
  //   req.headers.authorization &&
  //   req.headers.authorization.startsWith('Bearer')
  // ) {
  //   token = req.headers.authorization.split(' ')[1];
  // }

  if (!token) {
    return res.status(401).json({
      status: 'Fail',
      message: 'You are not logged in. Please log in to get access!',
    });
  }

  jwt.verify(token, process.env.ACCESS_TOKEN, async (err, decoded) => {
    if (err) {
      return res.status(500).json({
        status: 'Fail',
        message:
          (err.name === 'TokenExpiredError' &&
            'Your token has expired! Please log in again') ||
          (err.name === 'JsonWebTokenError' &&
            'Invalid token. Please log in again!'),
      });
    }

    const currentUser = await User.findById(decoded.id);
    req.user = currentUser;

    next();
  });
};

exports.restricTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        status: 'Fail',
        message: 'You do not have the permission to perform this action',
      });
    }
    next();
  };
};

exports.clearToken = (req, res) => {
  res.clearCookie('jwt', { maxAge: 0 }).send({ suceeess: true });
};
