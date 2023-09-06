const { Cart } = require('./cart.model');
const { Product } = require('./product.model');

//EXPLAIN: How to export a class in Node.js (CommonJS) and ES6 for use in other files in the same project (package)
Cart.Cart = Cart;
module.exports.default = { Cart };
//END EXPLAIN
module.exports = {
    Cart
}