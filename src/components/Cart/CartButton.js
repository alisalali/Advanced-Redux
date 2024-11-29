import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { cartAction } from "../../store/cart";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const handleToggleCart = () => {
    dispatch(cartAction.toggleCart());
  };

  const totalItems = useSelector((state) => state.cart.items).length;

  return (
    <button className={classes.button} onClick={handleToggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems > 0 ? totalItems : 0}</span>
    </button>
  );
};

export default CartButton;
