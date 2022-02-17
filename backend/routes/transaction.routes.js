module.exports = app => {
   
    const transaction = require("../controllers/transaction.controller");

    var router = require("express").Router();

    router.post("/", transaction.createTransaction);

    router.get("/", transaction.findAllTransaction);

    router.get("/:id",transaction.findOneTransaction);


    app.use('/api/transaction',router);
}