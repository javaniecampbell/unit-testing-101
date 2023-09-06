import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

type CheckoutButtonProps = {
  onClick: (e: React.SyntheticEvent) => void;
};
function CheckoutButton({ onClick }: CheckoutButtonProps) {
  useEffect(() => {}, []);

  return (
    <button
      type="button"
      onClick={async (e) => {
        e.preventDefault();
        onClick(e);
        // TODO: Stripe checkout here
        const stripe = await stripePromise;

        await stripe?.redirectToCheckout({
          mode: "payment",
          submitType: "pay",
          sessionId: ""
         
        });

        // if (error) {
        //   console.log(error);
        // }
      }}
      className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
    >
      Checkout
    </button>
  );
}

export default CheckoutButton;
