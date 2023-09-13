import React from "react";

export const ShoppingCartContext = React.createContext({} as any);
type Props = {
  children: React.ReactNode;
};

export function ShoppingCartProvider({ children }: Props) {
  const [cartItems, setCartItems] = React.useState([] as any);
//   const cart = new Cart();
  return (
    <ShoppingCartContext.Provider
      value={{ cartItems, setCartItems, apple: {}, 
    //   cart
     }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

function Page1() {
  return (
    <>
      <ShoppingCartProvider>
        <Component />
      </ShoppingCartProvider>
      <h3>Hellp</h3>
    </>
  );
}

function Component() {
  const { cartItems, setCartItems, apple } =
    React.useContext(ShoppingCartContext);
  return <></>;
}
