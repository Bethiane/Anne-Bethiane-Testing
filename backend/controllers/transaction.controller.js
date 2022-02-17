const db = require("../models")
const {Transaction} = require('../models/transaction.model')
const {Card} = require('../models/card.model')

exports.createTransaction = async (req,res) => {
   
    if(!req.body.UUID){
        res.status(400).send({ message:"No card Id"});
        return;
    }
    const card = await Card.findOne({UUID:req.body.UUID})

    if(!card)
    return res.status(401).json({error:"Card not found"})
    card.balance -= +(req.body.transport_fare)

    card.save()

   const transaction = new Transaction({
    UUID: req.body.UUID,
    balance: card.balance,
    transport_fare: req.body.transport_fare,
    published: req.body.published ? req.body.published : false});

        transaction
        .save(transaction)
        .then(data =>{
            res.send(data);
        })
        .catch(err =>{
            res.status(500).send({
                message:
                err.message || "Error occured"
            });
        });
    
    };
    
    
exports.findAllTransaction = (req,res) => {
    const UUID = req.query.UUID;
    var condition = UUID ? { UUID: { $regex: new RegExp(UUID), $options: "i"} } :{};

Transaction.find(condition)
   .then(data => {
       res.send(data);
   })
   .catch(err =>{
       res.status(500).send({
         message:
            err.message || "Some error occured"
       });
   });

};

exports.findOneTransaction = (req,res) => {

    const id = req.params.id;

    Transaction.findById(id)
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