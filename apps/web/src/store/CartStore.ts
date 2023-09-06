
import { useEffect } from "react";
import { create } from "zustand";

import Cart from "cart";
//STEP 1: Create a type for the cart item for the view to bind to
type CartItem = {
    id: number;
    name: string;
    price: number; // REPLACE: This is a string in the example, but it should be a number
    // price: string;
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

// SNMP

//STEP 2: Create a type for the store
type CartStore = {
    items: CartItem[];
    total: number;
    subTotal: number;
    orderTotal: number;
    taxEstimate?: number;
    shippingEstimate?: number;
};

//STEP 3: Create the store actions the view will use to perform actions on the store from the view
type Actions = {
    actions: {
        addToCart: (item: CartItem) => void;
        removeFromCart: (item: CartItem) => void;
        checkout: () => void;
    }
};
const products: CartItem[] = [
    {
        id: 1,
        name: "Basic Tee",
        href: "#",
        //price: "$32.00", // REPLACE price with number value
        price: 32.00, // REPLACE price with number value
        color: "Sienna",
        quantity: 1,
        inStock: true,
        size: "Large",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg",
        imageAlt: "Front of men's Basic Tee in sienna.",
    },
    {
        id: 2,
        name: "Basic Tee",
        href: "#",
        //price: "$32.00", // REPLACE price with number value
        price: 32.00, // REPLACE price with number value
        color: "Black",
        quantity: 1,
        inStock: false,
        leadTime: "3–4 weeks",
        size: "Large",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-02.jpg",
        imageAlt: "Front of men's Basic Tee in black.",
    },
    {
        id: 3,
        name: "Nomad Tumbler",
        href: "#",
        //price: "$35.00", // REPLACE price with number value
        price: 35.00, // REPLACE price with number value
        color: "White",
        quantity: 1,
        inStock: true,
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-03.jpg",
        imageAlt: "Insulated bottle with white base and black snap lid.",
    },
];

//STEP 4: Create the store and export it
//REPLACE: Remember to replace the action logic with the class for Cart or CartService
/* @ts-ignore */
const shoppingCart = new Cart.Cart();
products?.forEach((product) => {
    shoppingCart.addProduct(product);
});
const useCartStore = create<CartStore & Actions>((set) => ({
    // items: products as CartItem[], //REPLACE: Replace this with the logic to get the cart items from the cart service
    items: shoppingCart.getProducts() satisfies CartItem[], //REPLACE: Replace this with the logic to get the cart items from the cart service
    // items: shoppingCart.products satisfies CartItem[], 
    total:
        // 0, // REPLACE: Replace this with the logic to get the total number of items in the cart
        shoppingCart.calculateTotalItems(),
    subTotal:
        // shoppingCart.calculateSubtotal(),
        // 0, // REPLACE: Replace this with the logic to get the subtotal of the cart
        shoppingCart.calculateTotalPrice(),
    orderTotal:
        // 0, // REPLACE: Replace this with the logic to get the total price of the cart
        shoppingCart.calculateTotalPrice(),
    taxEstimate: 0,
    shippingEstimate: 0,
    actions: {
        addToCart: (item) => set((state) => ({ items: [...state.items, item] })),
        removeFromCart: (item) =>{
            shoppingCart.removeProduct(item);
            set((state) => ({
                items: state.items.filter((i) => i.id !== item.id),
            }));
        },
        checkout: () => {
            // 2.9% + 1.5% + 0.4% + 30¢ = 4.8% + 30¢
            // 4242424242424242 - Success 
            // 4000000000000002 - Failure
            // 4000000000003220 - Authentication required
            shoppingCart.checkOut();
            console.log(shoppingCart, shoppingCart.calculateTotalPrice());

            set((state) => ({
                items: shoppingCart.getProducts(), 
                total: shoppingCart.calculateTotalItems(), 
                subTotal: shoppingCart.calculateTotalItems(), 
                orderTotal: shoppingCart.calculateTotalPrice()
            }))
        },

    },
}));

export default useCartStore;