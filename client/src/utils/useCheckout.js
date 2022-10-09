import axios from "axios";
import toast from "react-hot-toast";
import { useShoppingCart } from "use-shopping-cart";

export default function useCheckout() {
  const { redirectToCheckout, cartDetails } = useShoppingCart();

  async function handleCheckout() {
    const session = await axios
      .post("/api/checkout-sessions", cartDetails)
      .then((res) => res.data)
      .catch((err) => {
        toast.error("Checkout Failed :(");
        console.log("error during checkout: ", err);
      });

    if (session) {
      redirectToCheckout({ sessionId: session.id });
    }
  }

  return handleCheckout;
}