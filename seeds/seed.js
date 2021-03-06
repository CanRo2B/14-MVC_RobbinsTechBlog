const sequelize = require('../config/config');
const { User, Post } = require('../models');

const userInfo = require('./userinfo');
const postInfo = require('./postInfo');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const user = await User.bulkCreate(userInfo, {
    individualHooks: true,
    returning: true,
  });

  for (const post of postInfo) {
    await Post.create({
      ...post,
      user_id: user[Math.floor(Math.random() * user.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();