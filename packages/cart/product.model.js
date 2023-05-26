class Product {
    constructor({ id, name, price, quantity, taxable, shippable, discountable, couponable, tax, shipping, discount, coupon }) {
        this.id = id || 0;
        this.name = name || '';
        this.price = price || 0;
        this.quantity =    quantity || 0;
        this.taxable = taxable || false;
        this.shippable =    shippable || false;
        this.discountable =     discountable || false;
        this.couponable = couponable || false;
        this.tax =  tax || 0;
        this.shipping = shipping || 0;
        this.discount = discount || 0;
        this.coupon = coupon || 0;
        this.lineTotal = 0;
    }

    calculateLineTotal() {
        return 0;
    }
}

module.exports = { Product };