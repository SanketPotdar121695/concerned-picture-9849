let passCheck = (req, res, next) => {
  let { password } = req.body;

  if (password.length < 8) {
    return res.status(400).send({
      error: 'Registration failed!',
      description: 'Password should be atleast 8 characters long.'
    });
  }

  let nums = false;
  let splChars = false;
  let upperChars = false;

  for (let i = 0; i < password.length; i++) {
    if (password.charCodeAt(i) >= 33 && password.charCodeAt(i) <= 64) {
      isNaN(password[i]) ? (splChars = true) : (nums = true);
    } else if (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) {
      upperChars = true;
    }
  }

  if (nums && splChars && upperChars) return next();

  return res.status(400).send({
    error: 'Registration failed!',
    description:
      'Password should contain atleast one uppercase character, one number & a special character.'
  });
};

module.exports = { passCheck };
