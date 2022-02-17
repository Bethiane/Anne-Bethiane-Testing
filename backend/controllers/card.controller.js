const db = require("../models")
const {Card} = require('../models/card.model')

exports.createCard = (req, res) => {
console.log(req.body)
if (!req.body.uuid) {
    res.status(400).send({ message:"Can't be empty"});
    return;
}

const card = new Card({
    owner: req.body.owner,
    UUID: req.body.uuid,
    balance: req.body.balance,
    published: req.body.published ? req.body.published : false
});

card
  .save()
  .then(() => {
      res.status(201);
  })
  .catch(err =>{
      res.status(500).send({
          message:
          err.message || "Some error accured"
      });
  });

};

exports.findAll = (req,res) => {
const UUID = req.query.UUID;
var condition = UUID ? { UUID: { $regex: new RegExp(UUID), $options: "i"} } : {};

Card.find(condition)
  .then(data => {
      res.send(data);
  })
  .catch(err => {
      res.ststus(500).send({
          message:
             err.message || "Some error occured"
      });
  });

};

exports.findOne = (req,res) => {

    const id = req.params.id;

    Card.findById(id)
      .then(data => {
          if(!data)
           res.status(400).send({ message: "Not found with id " + id});
          else res.send(data);
      })
      .catch(err => {
          res
             .status(500)
             .send({ message: "Error retrieving with id=" +id});
      });
      

};

