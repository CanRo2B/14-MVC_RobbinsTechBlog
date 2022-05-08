const router = require("express").Router();
const { Post, Comment, User } = require("../models");

router.get("/", async (req, res) => {
    // get all posts for the homepage
    try {
        const allPosts = await Post.findAll({
            include: [{ model: User }],
        });
        const posts = allPosts.map((post) => this.post.get({plain: true}));
        res.render('dashboard', { 
            posts, 
            logged_in: req.session.logged_in 
        });
        } catch (err) {
        res.status(500).json(err);
        }
});

router.get("/post/:id", async (req, res) => {
    // get a single post
    try {
        const allPosts = await User.findByPk(req.params.id, { 
          include: [{ model: User }],
        });
        const posts = allPosts.get({plain: true});
        res.render('post', { 
            posts, 
            logged_in: req.session.logged_in 
        });
        } catch (err) {
        res.status(500).json(err);
        }
    });

router.get("/login", (req, res) => {
    // login
    if (req.session.logged_in) {
        res.redirect('/post');
        return;
      }
    
      res.render('login');
    });

router.get("/signup", (req, res) => {
    // signup
})

module.exports = router;