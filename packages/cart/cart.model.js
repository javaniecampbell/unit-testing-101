class Cart {
    constructor() {
        this.products = [];
        this.coupons = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    removeProduct(product) {
        return true;
    }

    increaseQuantity(product) {
        return true;
    }

    decreaseQuantity(product) {
        return true;
    }

    updateQuantity(product, quantity) {
        return true;
    }

    addCoupon(coupon) {
        return true;
    }

    clear() {
        return true;
    }

    getProducts() {
        return [];
    }

    calculateTotal() {
        return 0;
    }

    calculateTotalWithTax() {
        return 0;
    }

    calculateTax() {
        return 0;
    }

    calculateShipping() {
        return 0;
    }

    calculateDiscount() {
        return 0;
    }

    calculateSubtotal() {
        return 0;
    }

    calculateTotalItems() {
        return 0;
    }

    calculateTotalUniqueItems() {
        return 0;
    }

    calculateLineItemTotal(product) {
        return 0;
    }

}


module.exports = { Cart };