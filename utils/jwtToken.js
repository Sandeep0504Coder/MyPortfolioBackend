export const generateToken = (user, message, statusCode, res) => {
  const token = user.generateJsonWebToken();
  console.log( token )
  console.log(process.env.COOKIE_EXPIRE )
  res.cookie("token", token, {
    expires: new Date(
      Date.now() + 25892000000
    ),
    httpOnly: true,
  });
  res.status(statusCode).json({
      success: true,
      message,
      user,
      token,
    });
};

