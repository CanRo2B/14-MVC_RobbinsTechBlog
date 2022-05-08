const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
    // create a router to post comments to created posts
    try {
        const commentInfo = await Comment.create(req.body);
        req.session.save(() => {
            req.session.user_id = commentInfo.id;
            req.session.logged_in = true;
      
            res.status(200).json(commentInfo);
          });
        } catch (err) {
          res.status(400).json(err);
        }
});

module.exports = router;