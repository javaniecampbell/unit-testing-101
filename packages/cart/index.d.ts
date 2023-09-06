// FIX: This is the type definition for the cart. It is a class that has methods for adding and removing products, and calculating the total price. It also has methods for adding coupons and discounts, but those are not implemented in the example. You can add them if you want to.
export default class Cart {
    constructor();
    products: Shop.CartItem[];
    coupons: Shop.Coupon[];
    discounts: Shop.Discount[];
    addProduct(product: Shop.CartItem): void;
    removeProduct(product: Shop.CartItem): void;
    increaseQuantity(product: Shop.CartItem): void;
    decreaseQuantity(product: Shop.CartItem): void;
    updateQuantity(product: Shop.CartItem, quantity: number): void;
    addCoupon(coupon: Shop.Coupon): void;
    clear(): void;
    getProducts(): Shop.CartItem[];
    calculateTotalPrice(): number;
    calculateSubtotal(): number;
    calculateTax(): number;
    calculateShipping(): number;
    calculateTotalWithTax(): number;
    calculateDiscountedTotalPrice(): number;
    addDiscount(discount: Shop.Discount): void;
    calculateTotalItems(): number;
    calculateTotalUniqueItems(): number;
    calculateLineItemTotal(product: Shop.CartItem): number;
    checkOut(): void;
    // removeCoupon(coupon: Shop.Coupon): void;
    // removeDiscount(discount: Shop.Discount): void;
};


declare namespace Shop {
    export type CartItem = {
        id: number;
        name: string;
        // price: string; // REPLACE: This is a string in the example, but it should be a number
        price: number; // REPLACE: This is a string in the example, but it should be a number
        quantity: number;
        //REPLACE: Add any additional properties you need for your cart item
        inStock: boolean;
        size?: string;
        color?: string;
        leadTime?: string;
        imageSrc: string;
        imageAlt: string;
        href: string;
    };

    export type Coupon = {
        id: number;
        name: string;
        code: string;
        discount: number;
        type?: string;
        description?: string;
    };

    export type Discount = {
        id: number;
        name: string;
        code: string;
        amount: number;
        type?: string;
        description?: string;
    };


}


