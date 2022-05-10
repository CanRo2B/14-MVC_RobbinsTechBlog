const router = require("express").Router();
const { Post } = require("../models");
const { beforeFindAfterExpandIncludeAll } = require("../models/User");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
    // we want to go ahead and finishing the routing to get all the posts
    try {
        const newPost = await Post.findAll(req.body);
    
        res.status(200).json(newPost);
      } catch (err) {
        res.status(400).json(err);
      }

});

router.get("/new", withAuth, (req, res) => {
// for showing new posts to the user
  res.render("new-post");
});

router.get("/edit/:id", withAuth, async (res, req) => {
    // To be able to find posts by primary key and render the edit post on the dashboard
    
})

module.exports = router;