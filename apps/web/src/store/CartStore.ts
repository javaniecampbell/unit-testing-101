
import { create } from "zustand";

//STEP 1: Create a type for the cart item for the view to bind to
type CartItem = {
    id: number;
    name: string;
    price: number;
    quantity: number;
    //REPLACE: Add any additional properties you need for your cart item
    // inStock: boolean;
    // size?: string;
    // color?: string;
    // leadTime?: string;
};

// SNMP

//STEP 2: Create a type for the store
type CartStore = {
    cart: CartItem[];
};

//STEP 3: Create the store actions the view will use to perform actions on the store from the view
type Actions = {
    actions: {
        addToCart: (item: CartItem) => void;
        removeFromCart: (item: CartItem) => void;
    }
};

//STEP 4: Create the store and export it
//REPLACE: Remember to replace the action logic with the class for Cart or CartService
const useCartStore = create<CartStore & Actions>((set) => ({
    cart: [],
    actions: {
        addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
        removeFromCart: (item) =>
            set((state) => ({
                cart: state.cart.filter((i) => i.id !== item.id),
            })),
    },
}));

export default useCartStore;