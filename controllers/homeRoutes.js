const router = require("express").Router();
const { response } = require("express");
const { Post, Comment, User } = require("../models");

router.get("/", async (req, res) => {
    // get all posts for the homepage
    try {
        const allPosts = await Post.findAll({
            include: [{ model: User }],
        });
        const posts = allPosts.map((post) => this.post.get({plain: true}));
        res.render('posts', { 
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
   res.render("signup");

});

router.get("/post/:id", (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            "id",
            "content",
            "title"
        ],
        include: [{
            model: Comment,
            attributes: ["id", "comment", "post_id", "user_id"],
            include: {
                model: User,
                attributes: ["username"]
            }
        }, 
        {
            model: User,
            attributes: ["uersname"]
        }
    ]
    })
    .then(postInfo => {
        if(!postInfo) {
            res.status(404).json({ message: "No post found"});
            return;
        }
        const post = postInfo.get({ plain: true });
        console.log(post);
        res.render("single-post", {post, logged_in: req.session.logged_in});
    })

})

module.exports = router;