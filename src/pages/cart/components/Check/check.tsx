import {Fragment, MouseEventHandler} from "react";
import classes from "./Check.module.css";
import phone from "../../../../../public/image/phoneSIM.jpg";
import e from "../../../../../public/image/eSIM.jpg";
import Image from "next/image";

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>;
}
const Check = (props: Props) => {
  return (
    <Fragment>
      <div className={classes.total}>
        <span>Confirm SIM Type</span>
      </div>
      <div className={classes["grid-container1"]}>
        <div className={classes["card-contrainer1"]}>
          <div className={classes["radio-container1"]}>
            <input type="radio" value="SIM" name="simType" id="SIM" />
            <div className={classes.radioInput1}>Physical SIM</div>
          </div>
          <Image className={classes.phone} src={phone} alt="pSim" />
          <div className={classes.phoneSIM}>Insert to a phone</div>
        </div>
        <div className={classes["card-contrainer2"]}>
          <div className={classes["radio-container2"]}>
            <input type="radio" value="eSIM" name="simType" id="eSIM" />
            <div className={classes.radioInput2}>eSIM</div>
            <div className={classes.save}>save 10%</div>
          </div>
          <Image className={classes.e} src={e} alt="eSim" />
          <div className={classes.eSIM}>Pre-built in a phone</div>
        </div>
      </div>
      <div className={classes["grid-container2"]}>
        <div className={classes["card-contrainer3"]}>
          <div className={classes.phoneSIMContent}>
            A physical SIM will be sent with your order
          </div>
        </div>
        <div className={classes["card-contrainer4"]}>
          <div className={classes.eSIMContent1}>
            What&#39;s an eSIM
            <br />
            <div className={classes.eSIMContent2}>
              See compatible list of phones
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <div>
        <button id="btn" onClick={props.onClick} className={classes.addButton}>
          <div className={classes.addButtonText}>Confirm and add to cart</div>
        </button>
      </div>
    </Fragment>
  );
};

export default Check;
