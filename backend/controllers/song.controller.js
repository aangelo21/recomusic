const db = require("./models");
const Song = db.song;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "Song must have a title",
    });
    return;
  }
  const song = {
    title: req.body.title,
    artist: req.body.artist,
  };
  Song.create(song)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error ocurred while adding the song",
      });
    });
};
exports.findAll = (req, res) => {
  Song.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error ocurred while retrieving the songs",
      });
    });
};
exports.findOne = (req, res) => {};
exports.update = (req, res) => {};
exports.delete = (req, res) => {};
