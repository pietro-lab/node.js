module.exports = app => {
    //const controller = app.controllers.CustomerWallets;
    const controller = require('../controllers/customerWallets')();

    const newLocal = '/api/v1/customer-wallets';
    app.route(newLocal)
    .get(controller.listCustomerWallets)
    .post(controller.saveCustomerWallets);




}