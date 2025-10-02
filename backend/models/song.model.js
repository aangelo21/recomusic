module.exports = (sequelize, Sequelize) => {
  const Song = sequelize.define("song", {
    title: {
      type: Sequelize.STRING,
    },
    artist: {
      type: Sequelize.STRING,
    },
  });

  return Song;
};