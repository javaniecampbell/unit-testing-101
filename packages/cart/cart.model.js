class Cart {
    constructor() {
        this.products = [];
        this.coupons = [];
        this.discounts = [];
    }


    addProduct(product) {
        if (product.quantity <= 0) return;
        this.products.push(product);
    }

    removeProduct(product) {
        // if (!this.products.includes(product)) return;
        //not remove a product from the cart if it is not in the cart
        const isProductInCart = this.products.some(p => p.id === product.id);
        if (!isProductInCart) return;
        //not remove a product from the cart if the quantity is greater than the quantity in the cart
        const isQuantityGreaterThanCart = this.products.some(p => p.quantity < product.quantity);
        if (isQuantityGreaterThanCart) return;
        this.products = this.products.filter(p => p.id !== product.id);
    }

    increaseQuantity(product) {
        this.products = this.products.map(p => {
            if (p.id === product.id) {
                p.quantity++;
            }
            return p;
        }
        );
    }

    decreaseQuantity(product) {
        return true;
    }

    updateQuantity(product, quantity) {
        if (quantity === 0) {
            this.removeProduct(product);
            return;
        }
        // not update the quantity of a product in the cart to a negative number
        // if (quantity < 0) return;
        // not update the quantity of a product in the cart to a non-integer
        if (!Number.isInteger(quantity)) return;
        this.products = this.products.map(p => {
            if (p.id === product.id) {
                const oldQuantity = p.quantity;
                p.quantity += quantity;
                // not update the quantity of a product in the cart to a negative number
                if (p.quantity < 0) {
                    p.quantity = oldQuantity;
                }
            }
            return p;
        }
        );
    }

    addCoupon(coupon) {
        return true;
    }

    clear() {
        this.products = [];
    }

    getProducts() {
        return [];
    }

    calculateTotalPrice() {
        const cartTotal = this.products.reduce((total, product) => {
            return total + this.calculateLineItemTotal(product);
        }, 0);
        return cartTotal;
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

    calculateDiscountedTotalPrice() {
        const discountTotal = this.discounts
        .map(discount => discount.amount)
        .reduce((total, discount) => {
            return total + discount;
        }, 0);
        return this.calculateTotalPrice() - discountTotal;
    }


    addDiscount(discount) {
        this.discounts.push(discount);
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
        return product.price * product.quantity;
    }

    checkOut() {
        this.clear();
    }
}


module.exports = { Cart };