import useCartStore, { CartItem } from "@/store/CartStore";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);
type Items = Pick<CartItem, "id" | "name" | "price" | "quantity">[];
type CheckoutButtonProps = {
  onClick?: (e: React.SyntheticEvent) => void;
  items: CartItem[];
};
function CheckoutButton({ onClick, items: cartItems }: CheckoutButtonProps) {
  const [state, setState] = useState({
    session: {
      id: "",
      url: "",
    },
  });

  return (
    <button
      type="button"
      onClick={async (e) => {
        e.preventDefault();
        //cart.actions.checkout();
        // TODO: Stripe checkout here
        const stripe = await stripePromise;

        console.log(cartItems);

        const res = await fetch("/api/checkout/session", {
          method: "POST",
          body: JSON.stringify({
            items: cartItems.map((item) => ({
              id: item.id,
              name: item.name,
              price: item.price * 100,
              quantity: item.quantity,
            })),
          }),
        });
        const result = await res.json();
        //console.log("SESSION____MAYBE", result);

        await stripe?.redirectToCheckout({
          sessionId: result?.session?.id,
        });

        // if (error) {
        //   console.log(error);
        // }
        // onClick?.(e);
      }}
      className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
    >
      Checkout
    </button>
  );
}

export default CheckoutButton;
