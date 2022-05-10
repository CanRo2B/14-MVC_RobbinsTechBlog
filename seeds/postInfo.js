const { Post } = require("../models");

const posts = [ 
    
];

const postInfo = () => Post.bulkCreate(posts);

module.exports = postInfo;