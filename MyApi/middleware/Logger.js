export const hideSensitiveInfo = (req, res, next) => {
  if (req.user) {
    const { email, password, ...userWithoutSensitive } = req.user;
    req.user = userWithoutSensitive;
  }
  next();
};
