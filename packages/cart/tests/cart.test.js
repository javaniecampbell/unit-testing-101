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
        // step1: create a new cart
        const cart = new Cart();
        // step2: add a product to the cart
        cart.addProduct({ id: 1, name: 'product1', price: 100, quantity: 0 });
        // step3: check if the product is in the cart
        expect(cart.products).to.have.lengthOf(0);

    })

    it('should not remove a product from the cart if it is not in the cart', () => {
        // step1: create a new cart
        const cart = new Cart();
        // step2: add a product to the cart
        cart.addProduct({ id: 1, name: 'product1', price: 100, quantity: 1 });
        // step3: remove the product from the cart
        cart.removeProduct({ id: 2, name: 'product2', price: 200, quantity: 2 });
        // step4: check if the product is in the cart
        expect(cart.products).to.have.lengthOf(1);
    })

    it('should not remove a product from the cart if the quantity is greater than the quantity in the cart', () => {
        // step1: create a new cart
        const cart = new Cart();
        // step2: add a product to the cart
        cart.addProduct({ id: 1, name: 'product1', price: 100, quantity: 1 });
        // step3: remove the product from the cart
        cart.removeProduct({ id: 1, name: 'product1', price: 100, quantity: 2 });
        // step4: check if the product is in the cart
        expect(cart.products).to.have.lengthOf(1);
    })

    it('should remove a product from the cart if the quantity is less than or equal to zero', () => {
        // step1: create a new cart
        const cart = new Cart();
        // step2: add a product to the cart
        cart.addProduct({ id: 1, name: 'product1', price: 100, quantity: 1 });
        // step3: remove the product from the cart
        cart.removeProduct({ id: 1, name: 'product1', price: 100, quantity: -2 });
        // step4: check if the product is in the cart
        expect(cart.products).to.have.lengthOf(0);

    })

    it('should update the quantity of a product in the cart', () => {
        // step1: create a new cart
        const cart = new Cart();
        // step2: add a product to the cart
        const product = { id: 1, name: 'product1', price: 100, quantity: 1 };
        cart.addProduct(product);
        // step3: update the quantity of the product in the cart
        cart.updateQuantity(product, 2);
        // step4: check if the quantity of the product in the cart is updated
        expect(cart.products[0].quantity).to.equal(3);
    })

    it('should update the quantity of a product in the cart to zero', () => {
        // step1: create a new cart
        const cart = new Cart();
        // step2: add a product to the cart
        const product = { id: 1, name: 'product1', price: 100, quantity: 1 };
        cart.addProduct(product);
        // step3: update the quantity of the product in the cart
        cart.updateQuantity(product, 0);
        // step4: check if the quantity of the product in the cart is updated
        expect(cart.products).to.have.lengthOf(0);
    })

    it('should not update the quantity of a product in the cart to a negative number', () => {
        // step1: create a new cart
        const cart = new Cart();
        // step2: add a product to the cart
        const product = { id: 1, name: 'product1', price: 100, quantity: 1 };
        cart.addProduct(product);
        // step3: update the quantity of the product in the cart
        cart.updateQuantity(product, -2);
        // step4: check if the quantity of the product in the cart is updated
        expect(cart.products[0].quantity).to.equal(1);
    })

    it('should not update the quantity of a product in the cart to a non-integer', () => {
        // step1: create a new cart
        const cart = new Cart();
        // step2: add a product to the cart
        const product = { id: 1, name: 'product1', price: 100, quantity: 1 };
        cart.addProduct(product);
        // step3: update the quantity of the product in the cart
        cart.updateQuantity(product, 2.5);
        // step4: check if the quantity of the product in the cart is updated
        expect(cart.products[0].quantity).to.equal(1);
    })

    it('should clear the cart', () => {
        // step1: create a new cart
        const cart = new Cart();
        // step2: add a product to the cart
        cart.addProduct({ id: 1, name: 'product1', price: 100, quantity: 1 });
        // step3: clear the cart
        cart.clear();
        // step4: check if the cart is empty
        expect(cart.products).to.have.lengthOf(0);
    })

    it('should calculate the line total of a product in the cart', () => {
        // step1: create a new cart
        const cart = new Cart();
        // step2: add a product to the cart
        const product = { id: 1, name: 'product1', price: 100, quantity: 1 };
        cart.addProduct(product);
        // step3: calculate the line total of the product in the cart
        const lineTotal = cart.calculateLineItemTotal(product);
        // step4: check if the line total of the product in the cart is correct
        expect(lineTotal).to.equal(100);
    })

    it('should calculate the total price of the cart', () => {
        // step1: create a new cart
        const cart = new Cart();
        // step2: add a product to the cart
        cart.addProduct({ id: 1, name: 'product1', price: 100, quantity: 1 });
        // step3: calculate the total price of the cart
        const totalPrice = cart.calculateTotalPrice();
        // step4: check if the total price of the cart is correct
        expect(totalPrice).to.equal(100);
    })

    it('should calculate the total price of the cart with a discount', () => {
        const cart = new Cart();

        cart.addProduct({ id: 1, name: 'product1', price: 100, quantity: 1 });

        cart.addDiscount({ id: 1, name: 'discount1', amount: 10 });

        const totalPrice = cart.calculateDiscountedTotalPrice();

        expect(totalPrice).to.equal(90);
    })

    it('should be able to add multiple discounts to the cart', () => {
        const cart = new Cart();

        cart.addDiscount({ id: 1, name: 'discount1', amount: 10 });
        cart.addDiscount({ id: 1, name: 'discount2', amount: 10 });
        
        expect(cart.discounts).to.have.lengthOf(2);
    })

    it('should calculate the total price of the cart with multiple discounts', () => {
        const cart = new Cart();

        cart.addProduct({ id: 1, name: 'product1', price: 100, quantity: 1 });

        cart.addDiscount({ id: 1, name: 'discount1', amount: 10 });
        cart.addDiscount({ id: 2, name: 'discount2', amount: 20 });

        const totalPrice = cart.calculateDiscountedTotalPrice();

        expect(totalPrice).to.equal(70);
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

    it('should be able to checkout the cart', () => {
        // step1: create a new cart
        const cart = new Cart();
        // step2: add a product to the cart
        cart.addProduct({ id: 1, name: 'product1', price: 100, quantity: 1 });
        // step3: checkout the cart
        cart.checkOut();
        // step4: check if the cart is empty
        expect(cart.products).to.have.lengthOf(0);
    })

})