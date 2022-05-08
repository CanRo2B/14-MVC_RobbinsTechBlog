const router = require("express").Router();
const { User } = require("../../models");

router.post("/", async (req, res) => {
    // Creating a new instance of user
    try {
        const userInfo = await User.create(req.body);
    
        req.session.save(() => {
          req.session.user_id = userInfo.id;
          req.session.logged_in = true;
    
          res.status(200).json(userInfo);
        });
      } catch (err) {
        res.status(400).json(err);
      }
});

router.post("/login", async (req, res) => {
    // User login
    try {
        const userInfo = await User.findOne({ where: { username: req.body.username } });
    
        if (!userInfo) {
          res
            .status(400)
            .json({ message: 'Incorrect username or password, please try again' });
          return;
        }
    
        const validPassword = await userInfo.checkPassword(req.body.password);
    
        if (!validPassword) {
          res
            .status(400)
            .json({ message: 'Incorrect username or password, please try again' });
          return;
        }
    
        req.session.save(() => {
          req.session.user_id = userInfo.id;
          req.session.logged_in = true;
          
          res.json({ user: userInfo, message: 'You are logged in' });
        });
    
      } catch (err) {
        res.status(400).json(err);
      }
});

router.post("/logout", async (req, res) => {
    // User logout
    if (req.session.logged_in) {
        req.session.destroy(() => {
          res.status(204).end();
        });
      } else {
        res.status(404).end();
      }
});

module.exports = router;