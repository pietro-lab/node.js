module.exports = () => {
//const customerWalletsBD = app.data.customerWallets;
const customerWalletsBD = require('../data/customerWallets.json')
const controller = {};

controller.listCustomerWallets = (req, res) => res.status(200).json(customerWalletsBD);

return controller;

}