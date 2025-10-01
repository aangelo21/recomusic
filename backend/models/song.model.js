module.exports = (sequelize, Sequelize) => {
  const Song = sequelize.define("song", {
    title: {
      type: Sequelize.STRING,
    },
    author: {
      type: Sequelize.STRING,
    },
  });

  return Song;
};