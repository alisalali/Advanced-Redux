import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { cartAction } from "../../store/cart";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, total, price } = props.item;

  const handleIncrementQuantity = () => {
    dispatch(cartAction.increaseItem({ id: props.item.id }));
  };
  const handleDecrementQuantity = () => {
    dispatch(cartAction.decreaseItem({ id: props.item.id }));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleDecrementQuantity}>-</button>
          <button onClick={handleIncrementQuantity}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
