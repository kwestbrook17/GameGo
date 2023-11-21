import React from "react";
import { useStoreContext } from "../utils/GlobalState";
import CartItem from "../components/CartItem";
import Auth from "../utils/auth";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from "@apollo/client";
import { QUERY_CHECKOUT } from "../utils/queries";
import { idbPromise } from "../utils/helpers";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const FullPageCart = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  React.useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  const calculateTotal = () => {
    return state.cart
      .reduce((sum, item) => sum + item.price * item.purchaseQuantity, 0)
      .toFixed(2);
  };

  const submitCheckout = () => {
    getCheckout({
      variables: { products: state.cart },
    });
  };

  if (state.cart.length === 0) {
    return <h3>Your cart is empty!</h3>;
  }

  return (
    <div className="full-page-cart">
      <h2>Shopping Cart</h2>
      {state.cart.map((item) => (
        <CartItem key={item._id} item={item} />
      ))}
      <div className="total">
        <strong>Total: ${calculateTotal()}</strong>
      </div>
      {Auth.loggedIn() ? (
        <button onClick={submitCheckout}>Checkout</button>
      ) : (
        <span>(Log in to check out)</span>
      )}
    </div>
  );
};

export default FullPageCart;