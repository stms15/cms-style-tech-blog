const router = require("express").Router();
const { Post } = require("../models");

// GET all user's posts for dashboard
router.get("/", async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      where: {
        user_id: req.body.user_id,
      },
      include: [
        {
          model: Post,
          attributes: ["title", "contents"],
        },
      ],
    });

    const posts = dbPostData.map((post) => post.get({ plain: true }));
    res.render("dashboard", {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// CREATE new post
router.post("/post", async (req, res) => {
  try {
    const dbPostData = await Post.create(req.body);

    const post = dbPostData.get({ plain: true });
    res.render("post", { post, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
