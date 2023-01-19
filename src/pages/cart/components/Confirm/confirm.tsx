import {Fragment, MouseEventHandler} from "react";
import classes from "./Confirm.module.css";

interface Props {
  onClose: MouseEventHandler<HTMLButtonElement>;
}

const Confirm = (props: Props) => {
  return (
    <Fragment>
      <div className={classes.summaryDiv}>
        <label className={classes.summaryLabel}> Cart Summary - 2 items</label>
        <div className={classes.itemDiv}>
          <label className={classes.item1Label}>
            {" "}
            New Lyca Mobile SIM- Physical SIM
          </label>
          <label className={classes.change}>change</label>
        </div>
        <div className={classes.itemDiv}>
          <label className={classes.item2Label}>
            {" "}
            National Plus 15GB SIM- only plan €9.00 per month
          </label>
        </div>
        <div className={classes.itemDiv}>
          <label className={classes.saveDiscount}> You save 10%</label>
        </div>
        <div className={classes.itemDiv}>
          <label className={classes.subTotal}>Sub-total</label>
          <label className={classes.amount}>€10.00</label>
        </div>
      </div>
      <div>
        <button className={classes.cartButton}>
          <div className={classes.cartButtonText}>Go to cart</div>
        </button>
      </div>
      <div className={classes.continueDiv}>
        <button onClick={props.onClose} className={classes.continueButton}>
          <div className={classes.continueButtonText}>Continue Shopping</div>
        </button>
      </div>
    </Fragment>
  );
};
export default Confirm;
