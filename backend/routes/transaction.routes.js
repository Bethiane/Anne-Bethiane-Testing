module.exports = (app) => {
    const transactions = require("../controllers/transaction.controller");

    var router = require("express").Router();

    router.post("/", transactions.create);

    router.get("/", transactions.findAll);

    router.get("/:id", transactions.findOne);

    
    app.use("/api/transactions", router);
};