const db = require("../models");
const Transaction = db.transactions;


exports.create = (req, res) => {
    if (!req.body.money&& !req.body.meterNumber) {
        res.status(400).send({ message: "Cannot be empty!" });
        return;
    }

    Transaction.create({
        id: req.body.id,
        money: req.body.money,
        meter: req.body.meter })
        .then((data) => {
            res.status(201).send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    "Some error occurred",
            });
        });
};

exports.findAll = (req, res) => {

    Transaction.find()
        .then((data) => {
            if (data.length > 0) {
                res.status(200).send(data);
            } else {
                res.status(404).send("Not Found");
            }
        })
        .catch((err) => {
            res.status(500).json({
                message:
                    err.message ||
                    "Some error occurred",
            });
        });
};


exports.findOne = (req, res) => {
    const id = req.params.id;

    Transaction.findById(id)
        .then((data) => {
            if (!data)
                res.status(404).send({
                    message: "Not found",
                });
            else res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error retrieving transaction with id=" + id,
            });
        });
};