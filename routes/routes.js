module.exports = app => {
    const controller = require("../controllers/controllers.js");

    app.get("/", controller.helloWorld)
}