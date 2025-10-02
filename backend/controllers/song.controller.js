const db = require("../models");
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
exports.findOne = (req, res) => {
  const id = req.params.id;
  Song.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Song with id=${id} was not found`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error retrieving Song with id=${id}`,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  Song.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Song was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Song with id=${id}. Maybe Song was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error updating Song with id=${id}`,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Song.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Song was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Song with id=${id}. Maybe Song was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Could not delete Song with id=${id}`,
      });
    });
};
