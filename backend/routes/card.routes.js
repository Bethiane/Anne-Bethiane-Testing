module.exports = app => {
    const card = require("../controllers/card.controller");

    var router = require("express").Router();

    router.post("/", card.createCard);

    router.get("/",card.findAll);

    router.get("/:id",card.findOne);

    app.use('/api/card', router);


}