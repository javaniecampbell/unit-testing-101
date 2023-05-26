const assert = require('assert');

const { expect } = require('chai');

const { Cart } = require('../index.js')
describe('cart', () => {

    it('should add a product to the cart', () => {
        // step1: create a new cart
        const cart = new Cart();
        // step2: add a product to the cart
        cart.addProduct({ id: 1, name: 'product1', price: 100, quantity: 1 });
        // step3: check if the product is in the cart
        expect(cart.products).to.have.lengthOf(1);
        expect(cart.products[0].id).to.equal(1);
        expect(cart.products[0].name).to.equal('product1');
        expect(cart.products[0].price).to.equal(100);
        expect(cart.products[0].quantity).to.equal(1);
    })

    it('should remove a product from the cart', () => {
         // step1: create a new cart
         const cart = new Cart();
         // step2: add a product to the cart
         cart.addProduct({ id: 1, name: 'product1', price: 100, quantity: 1 });
         // step3: remove the product from the cart
         cart.removeProduct({ id: 1, name: 'product1', price: 100, quantity: 1 });
         // step4: check if the product is in the cart
         expect(cart.products).to.have.lengthOf(0);

    })

    it('should increase the quantity of a product in the cart', () => {
        // step1: create a new cart
        const cart = new Cart();
        // step2: add a product to the cart
        cart.addProduct({ id: 1, name: 'product1', price: 100, quantity: 1 });
        // step3: increase the quantity of the product in the cart
        cart.increaseQuantity({ id: 1, name: 'product1', price: 100, quantity: 1 });
        // step4: check if the quantity of the product in the cart is increased
        expect(cart.products[0].quantity).to.equal(2);
    })

    it('should not add a product to the cart if the quantity is less than or equal to zero', () => {
        expect(false).to.be.true;

    })

    it('should not remove a product from the cart if it is not in the cart', () => {
        expect(false).to.be.true;

    })

    it('should not remove a product from the cart if the quantity is greater than the quantity in the cart', () => {
        expect(false).to.be.true;
    })

    it('should remove a product from the cart if the quantity is less than or equal to zero', () => {
        expect(false).to.be.true;

    })

    it('should update the quantity of a product in the cart', () => {
        expect(false).to.be.true;

    })

    it('should update the quantity of a product in the cart to zero', () => {
        expect(false).to.be.true;

    })

    it('should not update the quantity of a product in the cart to a negative number', () => {
        expect(false).to.be.true;

    })

    it('should not update the quantity of a product in the cart to a non-integer', () => {
        expect(false).to.be.true;

    })

    it('should clear the cart', () => {
        expect(false).to.be.true;

    })

    it('should calculate the line total of a product in the cart', () => {
        expect(false).to.be.true;
    })

    it('should calculate the total price of the cart', () => {
        expect(false).to.be.true;

    })

    it('should calculate the total price of the cart with a discount', () => {
        expect(false).to.be.true;

    })

    it('should calculate the total price of the cart with a discount and shipping', () => {
        expect(false).to.be.true;
    })

    it('should calculate the total price of the cart with a discount and shipping and taxes', () => {
        expect(false).to.be.true;

    })

    it('should calculate the total price of the cart with a discount and shipping and taxes and a coupon', () => {
        expect(false).to.be.true;

    })

})