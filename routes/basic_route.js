module.exports = app => {
    const basic = require("../controllers/basic_controllers");
    const validation = require("../auth/validation");

    app.get('/users', basic.findAll);

    app.get('/users/:id', basic.findOne);

    app.post('/users', validation, basic.create);

    app.put('/users/:id', validation, basic.update);

    app.delete('/users/:id', basic.delete);
};