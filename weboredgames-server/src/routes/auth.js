const express = require('express');
const passport = require('passport');

const router = express.Router();

router.post('/registerLogin', (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return res.status(400).json({ errors: err });
    if (!user) return res.status(400).json({ erros: "No user found" });

    req.logIn(user, (err) => {
      if (err) return res.status(400).json({ errors: err });
      return res.status(200).json({ success: `logged in ${user.id}`});
    });
  })(req, res, next);
});

module.exports = router;
